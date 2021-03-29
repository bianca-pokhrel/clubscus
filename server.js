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
app.use(bodyParser.json()) // parsing JSON body
app.use(bodyParser.urlencoded({ extended: true })); // parsing URL-encoded form data (from form POST requests)


// express-session for managing user sessions
const session = require("express-session");
const MongoStore = require('connect-mongo') // to store session information on the database in production


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
            res.status(401).send("Unauthorized")
        })
    } else {
        res.status(401).send("Unauthorized")
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
    const id = req.body.id;
    const password = req.body.password;

    // log(email, password);
    // Use the static method on the User model to find a user
    // by their email and password
    User.findUser(id, password)
        .then(user => {
            // Add the user's id to the session.
            // We can check later if this exists to ensure we are logged in.
            req.session.user = user._id;
            res.send({ currentUser: user.username });
        })
        .catch(error => {
            res.status(400).send()
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
        res.send({ currentUser: req.session.id });
    } else {
        res.status(401).send();
    }
});

/*********************************************************/

/*** API Routes below ************************************/
// User API Route

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
	// Create a new user

    let user = new User({
        username: req.body.username,
        name: req.body.name,
        password: req.body.password,
        userType: req.body.userType,
        userGroups: []
     })
    
    user.save().then((result) => {
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
            user.username = req.body.username,
            user.name = req.body.name,
            user.password = req.body.password,
            user.userType = req.body.userType,
            user.userGroups = req.body.userGroups
            user.pic = req.body.pic

            user.save().then((result) => {
                res.send(result)
            })
		}
	}).catch((error) => {
		log(error)
		res.status(500).send('Internal Server Error')  
	})
})

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
