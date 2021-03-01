import React from 'react';
import './App.css';
import ClubPage from './screens/ClubPage.js';
import SignInPage from './screens/SignInPage.js'
import ProfilePage from './screens/ProfilePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterPage from './screens/RegisterPage';

class App extends React.Component {
	render() {
	    	return (
				<div>
					<Router>
						<Switch>
							{/* <ClubPage/>
							<ProfilePage/> */}
							<Route exact path="/" component={ClubPage} />
							<Route path="/SignIn" component={SignInPage}/>
							<Route path="/Register" component={RegisterPage}/>
						</Switch>
					</Router>
				</div>
	    	);  
    }
}

export default App;
