/* server.js for react-express-authentication */
"use strict";

/* Server environment setup */
// To run in development mode, run normally: node server.js
// To run in development with the test user logged in the backend, run: TEST_USER_ON=true node server.js
// To run in production mode, run in terminal: NODE_ENV=production node server.js
const env = process.env.NODE_ENV // read the environment variable (will be 'production' in production mode)

//////

const log = console.log;
const path = require('path')

const express = require("express");
// starting the express server
const app = express();

// enable CORS if in development, for React local development server to connect to the web server.
const cors = require('cors')
if (env !== 'production') { app.use(cors()) }

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
mongoose.set('useFindAndModify', false); // for some deprecation issues

// import the mongoose models
const { User, SuperAdmin } = require("./models/user");
const { Group } = require("./models/groups");
const { Post, Comment } = require("./models/posts");

// to validate object IDs
const { ObjectID } = require("mongodb");

// body-parser: middleware for parsing parts of the request into a usable object (onto req.body)
const bodyParser = require('body-parser') 
app.use(bodyParser.json({ limit: '50mb' })) // parsing JSON body
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false, })); // parsing URL-encoded form data (from form POST requests)


// express-session for managing user sessions
const session = require("express-session");
const MongoStore = require('connect-mongo'); // to store session information on the database in production
const { group } = require('console');


function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
    return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}

// middleware for mongo connection error for routes that need it
const mongoChecker = (req, res, next) => {
    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    } else {
        next()  
    }   
}

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
    if (env !== 'production' && USE_TEST_USER)
        req.session.user = TEST_USER_ID // test user on development. (remember to run `TEST_USER_ON=true node server.js` if you want to use this user.)

    if (req.session.user) {
        User.findById(req.session.user).then((user) => {
            if (!user) {
                return Promise.reject()
            } else {
                req.user = user
                next()
            }
        }).catch((error) => {
            res.status(401).send("Unauthorized from here 1")
        })
    } else {
        res.status(401).send("Unauthorized from here 2")
    }
}


/*** Session handling **************************************/
// Create a session and session cookie
app.use(
    session({
        secret: process.env.SESSION_SECRET || "our hardcoded secret", // make a SESSION_SECRET environment variable when deploying (for example, on heroku)
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60000,
            httpOnly: true
        },
        // store the sessions on the database in production
        store: env === 'production' ? MongoStore.create({
                                                mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/StudentAPI'
                                 }) : null
    })
);

// A route to login and create a session
app.post("/data/user/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // log(email, password);
    // Use the static method on the User model to find a user
    User.findUserByUsernamePassword(username, password)
        .then(user => {
            // Add the user's id to the session.
            // We can check later if this exists to ensure we are logged in.
            req.session.user = user;
			// req.session.user.save()
            res.send({ currentUser: user });
        })
        .catch(error => {
            res.status(400).send("User does not exist")
        });
});

// A route to logout a user
app.get("/data/user/logout", (req, res) => {
    // Remove the session
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send()
        }
    });
});

// A route to check if a user is logged in on the session
app.get("/data/user/check-session", (req, res) => {
    if (req.session.user) {
		// res.status(200).send("Ran check session");
        res.send({ currentUser: req.session.user});
    } else {
        res.status(401).send("Unauthorized: No session");
    }
});

/*********************************************************/

/*** API Routes below ************************************/


//--------------------------Users API Route------------------------------

// Get all Users
app.get('/data/user/users/', (req, res) => {
	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	} 

	User.find().then((user) => {
		res.send(user)
	}).catch((error) => {
		log(error)
		res.status(500).send("Internal Server Error")
	}) 

})

// Get one user
app.get('/data/user/users/:id', (req, res) => {
	const id = req.params.id

	if (!ObjectID.isValid(id)) {
		res.status(404).send()
		return;
	}

	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}

	User.findById(id).then((user) => {
		if (!user) {
			res.status(404).send('Resource not found') 
		} else {
			res.send(user)
		}
	}).catch((error) => {
		log(error)
		res.status(500).send('Internal Server Error')  
	}) 

})

app.post('/data/user/users/', (req, res) => {

    let newUser = new User({
        username: req.body.username,
        name: req.body.name,
        password: req.body.password,
        userType: req.body.userType,
        userGroups: [],
		reqUserGroups: [],
     })
    
    newUser.save().then((user) => {
		return user
	}).then(user => {
		// Add the user's id to the session.
		// We can check later if this exists to ensure we are logged in.
		req.session.user = user._id;
		res.send({ currentUser: user });
	}).catch((error) => {
		log(error) 
		if (isMongoError(error)) { 
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request') 
		}
	})

})

app.put('/data/user/users/:id', (req, res) => {
	const id = req.params.id

	if (!ObjectID.isValid(id)) {
		res.status(404).send()
		return;
	}

	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}

	User.findById(id).then((user) => {
		if (!user) {
			res.status(404).send('Resource not found') 
		} else {
            if (req.body.username != null) user.username = req.body.username
            if (req.body.name != null) user.name = req.body.name
            if (req.body.password != null) user.password = req.body.password
            if (req.body.userType != null) user.userType = req.body.userType
            if (req.body.userGroups != null) user.userGroups = req.body.userGroups
			if (req.body.reqUserGroups != null) user.reqUserGroups = req.body.reqUserGroups
            if (req.body.pic != null) user.pic = req.body.pic
			if (req.body.facebook != null) user.facebook = req.body.facebook
			if (req.body.instagram != null) user.instagram = req.body.instagram
			if (req.body.linkedin != null) user.linkedin = req.body.linkedin

            user.save().then((result) => {
                res.send(result)
            })
		}
	}).catch((error) => {
		log(error)
		res.status(500).send('Internal Server Error')  
	})
})

//-----------------------------------------------------------------------

//--------------------------SuperAdmin API Route------------------------------

app.get('/data/user/superadmins/', (req, res) => {

    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	} 

	SuperAdmin.find().then((superadmin) => {
		res.send(superadmin)
	}).catch((error) => {
		log(error)
		res.status(500).send("Internal Server Error")
	}) 

})

app.get('/data/user/superadmins/:id', (req, res) => {
	const id = req.params.id

	if (!ObjectID.isValid(id)) {
		res.status(404).send()
		return;
	}

	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}

	SuperAdmin.findById(id).then((superadmin) => {
		if (!superadmin) {
			res.status(404).send('Resource not found') 
		} else {
			res.send(superadmin)
		}
	}).catch((error) => {
		log(error)
		res.status(500).send('Internal Server Error')  
	}) 

})

app.post('/data/user/superadmins/', (req, res) => {

    let superadmin = new SuperAdmin({
        username: req.body.username,
        password: req.body.password,
     })
    
     superadmin.save().then((result) => {
		res.send(result)
	}).catch((error) => {
		log(error) 
		if (isMongoError(error)) { 
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request') 
		}
	})

})

app.put('/data/user/superadmins/:id', (req, res) => {
	const id = req.params.id

	if (!ObjectID.isValid(id)) {
		res.status(404).send()
		return;
	}

	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}

	SuperAdmin.findById(id).then((superadmin) => {
		if (!superadmin) {
			res.status(404).send('Resource not found') 
		} else {
            if (req.body.username != null) superadmin.username = req.body.username
            if (req.body.password != null) superadmin.password = req.body.password

            superadmin.save().then((result) => {
                res.send(result)
            })
		}
	}).catch((error) => {
		log(error)
		res.status(500).send('Internal Server Error')  
	})
})

//-----------------------------------------------------------------------

//--------------------------Groups API Route------------------------------

app.get('/data/groups/', (req, res) => {

    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	} 

	Group.find().then((group) => {
		res.send(group)
	}).catch((error) => {
		log(error)
		res.status(500).send("Internal Server Error")
	}) 

})


app.get('/data/groups/:id', (req, res) => {
	const id = req.params.id

	if (!ObjectID.isValid(id)) {
		res.status(404).send()
		return;
	}

	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}

	Group.findById(id).then((group) => {
		if (!group) {
			res.status(404).send('Resource not found') 
		} else {
			res.send(group)
		}
	}).catch((error) => {
		log(error)
		res.status(500).send('Internal Server Error')  
	}) 

})

app.post('/data/groups/', (req, res) => {

    let group = new Group({
        name: req.body.name,
        description: req.body.description,
        founder: req.body.founder,
        aboutUs: req.body.aboutUs,
		created_on: req.body.created_on,
        officiated: false,
        admin: req.body.admin,
        links: [],
        members: [],
        reqMembers: [],
        posts: []
     })
    
    group.save().then((result) => {
		res.send(result)
	}).catch((error) => {
		log(error) 
		if (isMongoError(error)) { 
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request') 
		}
	})

})

app.put('/data/groups/:id', (req, res) => {
	const id = req.params.id

	if (!ObjectID.isValid(id)) {
		res.status(404).send()
		return;
	}

	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}

	Group.findByID(id).then((group) => {
		if (!group) {
			res.status(404).send('Resource not found') 
		} else {
            if (req.body.name != null) group.name = req.body.name
            if (req.body.description != null) group.description = req.body.description
            if (req.body.founder != null) group.founder = req.body.founder
			if (req.body.created_on != null) group.created_on = req.body.created_on
            if (req.body.about != null) group.aboutUs = req.body.about
            if (req.body.officiated != null) group.officiated = req.body.officiated
            if (req.body.admin != null) group.admin = req.body.admin
            if (req.body.links != null) group.links = req.body.links
            if (req.body.members != null) group.members = req.body.members
            if (req.body.reqMembers != null) group.reqMembers = req.body.reqMembers
            if (req.body.posts != null) group.posts = req.body.posts

            group.save().then((result) => {
                res.send(result)
            })
		}
	}).catch((error) => {
		log(error)
		res.status(500).send('Internal Server Error')  
	})
})

//-----------------------------------------------------------------------

//--------------------------Posts API Route------------------------------

app.get('/data/posts', (req, res) => {

    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	} 

	Post.find().then((post) => {
		res.send(post)
	}).catch((error) => {
		log(error)
		res.status(500).send("Internal Server Error")
	}) 

})

app.get('/data/posts/:id', (req, res) => {
	const id = req.params.id

	if (!ObjectID.isValid(id)) {
		res.status(404).send()
		return;
	}

	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}

	Post.findById(id).then((post) => {
		if (!post) {
			res.status(404).send('Resource not found') 
		} else {
			res.send(post)
		}
	}).catch((error) => {
		log(error)
		res.status(500).send('Internal Server Error')  
	}) 

})

app.post('/data/posts/', (req, res) => {

    let post = new Post({
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
		image: null,
        likes: [],
        comments: []
     })
    
    post.save().then((result) => {
		res.send(result)
	}).catch((error) => {
		log(error) 
		if (isMongoError(error)) { 
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request') 
		}
	})

})

app.put('/data/posts/:id', (req, res) => {
	const id = req.params.id

	if (!ObjectID.isValid(id)) {
		res.status(404).send()
		return;
	}

	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}

	Post.findById(id).then((post) => {
		if (!post) {
			res.status(404).send('Resource not found') 
		} else {
            if (req.body.title != null) post.title = req.body.title
            if (req.body.content != null) post.content  = req.body.content
            if (req.body.date != null) post.date = req.body.date
			if (req.body.image != null) post.image = req.body.image
            if (req.body.likes != null) post.likes = req.body.likes
            if (req.body.comments != null) post.comments = req.body.comments

            post.save().then((result) => {
                res.send(result)
            })
		}
	}).catch((error) => {
		log(error)
		res.status(500).send('Internal Server Error')  
	})
})

//-----------------------------------------------------------------------

//--------------------------Comments API Route------------------------------

app.get('/data/comments', (req, res) => {

    if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	} 

	Comment.find().then((comment) => {
		res.send(comment)
	}).catch((error) => {
		log(error)
		res.status(500).send("Internal Server Error")
	}) 

})

app.get('/data/comments/:id', (req, res) => {
	const id = req.params.id

	if (!ObjectID.isValid(id)) {
		res.status(404).send()
		return;
	}

	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}

	Comment.findById(id).then((comment) => {
		if (!comment) {
			res.status(404).send('Resource not found') 
		} else {
			res.send(comment)
		}
	}).catch((error) => {
		log(error)
		res.status(500).send('Internal Server Error')  
	}) 

})

app.post('/data/comments/', (req, res) => {

    let comment = new Comment({
        user: req.body.user,
        content: req.body.content,
        date: req.body.date,
    })
    
    comment.save().then((result) => {
		res.send(result)
	}).catch((error) => {
		log(error) 
		if (isMongoError(error)) { 
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request') 
		}
	})

})

app.put('/data/comments/:id', (req, res) => {
	const id = req.params.id

	if (!ObjectID.isValid(id)) {
		res.status(404).send()
		return;
	}

	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}

	Comment.findById(id).then((comment) => {
		if (!comment) {
			res.status(404).send('Resource not found') 
		} else {
            if (req.body.user != null) comment.user = req.body.user
            if (req.body.content != null) comment.content  = req.body.content
            if (req.body.date != null) comment.date = req.body.date

            comment.save().then((result) => {
                res.send(result)
            })
		}
	}).catch((error) => {
		log(error)
		res.status(500).send('Internal Server Error')  
	})
})

//-----------------------------------------------------------------------

/*********************************************************/

/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(path.join(__dirname, "/client/build")));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }

    // send index.html
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
    log(`Listening on port ${port}...`);
});
