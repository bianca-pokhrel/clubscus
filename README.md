# Clubcus: Meet Like-Minded Students. Make Some New Friends.


Clubscus is an app that allows users to create groups for others to join, make announcements to members, and manage member listing. Official clubs recognized by the University of Toronto are also able to create their own pages, with added verification to distinguish their registered status. This will provide any university student the ease to find like-minded friends.

On the main page, all users are able to see the main homescreen. There are options to sign in, make an account, and peruse existing groups to learn more information about them.

INCLUDE SCREENSHOT OF MAIN SCREEN

## Registration Page

If you are not a user but would like to become one, you have the option of creating either a Student account or a Group Admin account depending on your need. Simply click on the "New User" button to be redirected to the Registration Page. From there, you can choose what account you would like to create and register as a new user.


## Users

There are three types of users that can have accounts on Clubscus: Students, Admin, and Super Admin. See below for more detail on each of the 3 users.

### Students

### Group Admin

### Super Admin


# React Express Auth

This example demonstrates how to:

-   connect your React frontend to Express backend and MongoDB
-   create user sessions and send session cookies
-   check the authentication status of the client

## Setup
Start your local Mongo database.  For example, in a separate terminal window:

```
# create and run local Mongo database in the root directory of the repo
mkdir mongo-data
mongod --dbpath mongo-data
```

Then, in the root directory of the repo, run:
```
# install server dependencies in the root directory
npm install

# install frontend dependencies in the client directory
cd client
npm install
```

Alternatively, you can run `npm run setup` in the root directory which runs a script to execute all the above commands (not including starting the mongo database, since it should be run in a separate window). This is a shortcut command defined in [package.json](package.json).

## Development

During development, run the following commands to build your React app and start the Express server.  You should re-run these commands for your app to reflect any changes in the code. Make sure mongo is still running on a separate terminal.

```
# build the React app
cd client
npm run build

# go back to the root directory
cd ..

# run the server
node server.js
```

Alternatively, you can run `npm run build-run` in the root directory which runs a script to execute all the above commands. This is a shortcut command defined in [package.json](package.json).

## Creating a User

There is no frontend form to create a user on the app, so before you login send a `POST` request to `/api/users` with something like:
```
{
    "email": "bob@gmail.com",
    "password": "123456"
}
```
Then proceed to `http://localhost:5000` in your browser and login with your credentials.

## Directory Structure

```
react-express-auth
├── db
│   └── mongoose.js
├── models
│   ├── user.js
│   └── student.js
├── package.json
├── server.js
└── client
    ├── public
    │   ├── index.html
    │   └── ...
    ├── tests
    │   └── ...
    └── src
        ├── actions
        │   ├── student.js
        │   └── user.js
        ├── react-components
        │   ├── Dashboard
        │   │   └── index.js
        │   ├── StudentForm
        │   │   ├── index.js
        │   │   └── styles.css
        │   ├── Student
        │   │   ├── index.js
        │   │   └── styles.css
        │   └── ...
        ├── index.js
        ├── index.css
        ├── App.js
        ├── App.css
        ├── package.json
        └── serviceWorker.js
```

## React Components

Each React component lives in a separate directory with its own `index.js` and `styles.css`. Import them from parent components as needed.

### Styles

Unique styles associated with each React component are kept separate. If the same styles are shared between multiple React components, keep them in a top-level, shared CSS file (i.e. App.css) to avoid repeated styles.

### Material UI

The following Material UI components are used in this app:

-   Button
-   TextField
-   Grid
-   Table
-   Table Body
-   Table Row
-   Table Cell

You can find more components [here](https://material-ui.com/).

Note that you can override the default styles of these components by increasing CSS selector specificity.

### Actions

To keep your `index.js` files clean and simple, import required methods from an associated action file. Following this structure can help organize your code and keep it manageable.

## Deployment

The `start` and `heroku-postbuild` scripts included in [package.json](package.json) will tell Heroku how to run your app.  You can deploy to Heroku easily:

```
# create a new empty Heroku app in the root directory (only need to be done once)
heroku create

# deploy the latest committed version of your code to Heroku
git push heroku master
```

Don't forget to set the `MONGODB_URI` environmental variable to use a cloud Mongo database (like Atlas).




