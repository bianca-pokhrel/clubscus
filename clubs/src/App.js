import React from 'react';
import './App.css';
import ClubPage from './screens/ClubPage.js';
import SignInPage from './screens/SignInPage.js'
import ProfilePage from './screens/ProfilePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterPage from './screens/RegisterPage';

class App extends React.Component {
	render() {
		let path = "/clubs"
	    	return (
				<div>
					<Router>
						<Switch>
							<Route path={"/clubs/club0"}>
								<ClubPage club="0"/>
							</Route>
							<Route path="/SignIn" component={SignInPage}/>
							<Route path="/Register" component={RegisterPage}/>
							<Route path="/UserProfile" component={ProfilePage}/>
						</Switch>
					</Router>
				</div>
	    	);  
    }
}

export default App;
