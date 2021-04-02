// Functions to help with user actions.

// environment configutations
import ENV from '../config'
const API_HOST = ENV.api_host
// console.log('Current environment:', ENV.env)

// Send a request to check if a user is logged in through the session cookie
export const checkSession = (app) => {
    const url = `${API_HOST}/data/user/check-session`;

    if (!ENV.use_frontend_test_user) {
        fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUser) {
                app.setState({ currentUser: json.currentUser });
            }
        })
        .catch(error => {
            console.log(error);
        });
    } else {
        app.setState({ currentUser: ENV.user });
    }
    
};

// A function to send a POST request with the user to be logged in
export const login = (username, password, app) => {
    // Create our request constructor with all the parameters we need
    const request = new Request(`${API_HOST}/data/user/login`, {
        method: "post",
        body: JSON.stringify({
            id: username,
            password: password,
        }),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json.currentUser !== undefined) {
                app.setState({ currentUser: json });
            }
        })
        .catch(error => {
            console.log(error);
        });
};

// A function to send a POST request with the user to be registered
export const register = (username, password, app) => {
    // Create our request constructor with all the parameters we need
    const request = new Request(`${API_HOST}/data/user/login`, {
        method: "post",
        body: {
            "id": username,
            "password": password,
        },
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json.currentUser !== undefined) {
                app.setState({ currentUser: json.currentUser });
            }
        })
        .catch(error => {
            console.log(error);
        });
};

// A function to send a GET request to logout the current user
export const logout = (app) => {
    const url = `${API_HOST}/data/user/logout`;

    fetch(url)
        .then(res => {
            app.setState({
                currentUser: null,
            });
        })
        .catch(error => {
            console.log(error);
        });
};