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
                return json.currentUser
            }else {
                return null
            }
        }).then(user_id => {
            if (user_id == null) {
                app.setState({ currentUser: null });
            }else{
                fetch(`/data/user/users/${user_id}`)
                .then(res => {
                    if (res.status === 200) {
                        return res.json()
                    } else {
                        alert("Could not get user");
                    }
                }).then(user => {
                    app.setState({currentUser: user})
                })
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
            username: username,
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
export const register = (username, password, userType, name, app) => {
    // Create our request constructor with all the parameters we need
    const request = new Request(`${API_HOST}/data/user/users/`, {
        method: "post",
        body: JSON.stringify({
            username: username,
            name: name,
            password: password,
            userType: userType
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

// A function to send a PUT request to edit user info
export const editUser = (body, app) => {
    // Create our request constructor with all the parameters we need
    const request = new Request(`${API_HOST}/data/user/users/${app.state.currentUser.currentUser._id}`, {
        method: "put",
        body: JSON.stringify(body),
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