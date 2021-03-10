import React from 'react';
import './App.css';
import ClubPage from './screens/ClubPage.js';
import SignInPage from './screens/SignInPage.js'
import ProfilePage from './screens/ProfilePage';
import GroupSearch from './screens/GroupSearch';
import MainFeed from './screens/MainFeed';
import SuperAdminScreen from './screens/SuperAdminScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterPage from './screens/RegisterPage';
import AdminFeed from "./components/AdminPage/AdminFeed";


//Club Data
const clubsData = require('./clubsData.js');

class App extends React.Component {

	render() {


		const clubsOfUser = () => {
			let clubs = []
			for (const club in clubsData) {
				let thisClub = clubsData[club]
				for (const member in thisClub.members) {
					if (thisClub.members[member].name == "JJ Kanu") {
						clubs.push(thisClub)
					}
				}
			}
			return clubs
		}


		const getUrls = () => {
			let g = clubsData.map((group) => {
				return (<Route exact path={`/clubs${group.url}/about`}>
					<ClubPage club={group} about={true} userType="user"/>
					</Route>)
			})
			
			g = g.concat(clubsData.map((group) => {
				return (<Route exact path={`/clubs${group.url}`}>
					<ClubPage club={group} userType="user"/>
					</Route>)
			}))
			return (g)
		}

		{console.log(clubsOfUser())}

	    	return (
				<div>
					<Router>
						<Switch>
							<Route exact path="/">
								<GroupSearch signedIn={false} clubs={clubsData}/>
							</Route>
							{/* Log In/Register */}
							<Route exact path="/signin" component={SignInPage}/>
							<Route exact path="/register" component={RegisterPage}/>

							{/* User Views */}
							<Route exact path="/user">
								<GroupSearch signedIn={true} clubs={clubsData} clubsOfUser={clubsOfUser()}/>
							</Route>
							<Route exact path="/user/profile" component={ProfilePage}/>
							<Route exact path="/user/feed" component={MainFeed}/>

							{/* Admin Views */}
							<Route exact path="/superadmin" component={SuperAdminScreen}/>
							<Route exact path="/admin">
								<ClubPage club={clubsData[0]} userType="admin"/>
							</Route>
							{/*<Route exact path="/admin" component={AdminFeed}>*/}
							{/*}</Route>*/}
							{getUrls()}
						</Switch>
					</Router>
				</div>
	    	);  
    }
}

export default App;
