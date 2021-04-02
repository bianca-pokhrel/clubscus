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
import { json } from 'body-parser';
import { checkSession } from "./actions/user";


//Club Data
const clubsData = require('./clubsData.js');

class App extends React.Component {

	constructor() {
		super()

		this.state = {
			currentUser: null,
			signedIn: false,
			userType: null,
			group_urls: []
		}
	
		const url = `/data/groups`;

		// Since this is a GET request, simply call fetch on the URL
		fetch(url)
			.then(res => {
				if (res.status === 200) {
					// return a promise that resolves with the JSON body
					return res.json();
				} else {
					alert("Could not get students");
				}
			}).then(json => {
				let groups = json
				let g = groups.map((group) => {
					return (<Route exact path={`/clubs/${group._id}/about`}>
						<ClubPage club={group} about={true} userType="user"/>
						</Route>)
				})

				g = g.concat(groups.map((group) => {
					return (<Route exact path={`/clubs/${group._id}`}>
						<ClubPage club={group} userType="user"/>
						</Route>)
				}))

				this.setState({group_urls: g})
			})
	}

	componentDidMount() {
        checkSession(this); // sees if a user is logged in
    }

	render() {

		const { currentUser } = this.state;

		return (
			<div>
				<Router>
					<Switch>
						<Route exact path="/">
							<GroupSearch signedIn={false} clubs={clubsData}/>
						</Route>
						{/* Log In/Register */}
						<Route exact path="/signin">
							<SignInPage app={this} />
						</Route>
						<Route exact path="/register" component={RegisterPage}/>

						{/* User Views */}
						<Route exact path="/user">
							<GroupSearch signedIn={true} clubs={clubsData}/>
						</Route>
						<Route exact path="/user/profile" component={ProfilePage}/>
						<Route exact path="/user/feed" component={MainFeed}/>

						{/* Admin Views */}
						<Route exact path="/superadmin" component={SuperAdminScreen}>
							<SuperAdminScreen clubsData={clubsData}></SuperAdminScreen>
						</Route>
						<Route exact path="/admin">
							<ClubPage club={clubsData[0]} userType="admin"/>
						</Route>
						{/*<Route exact path="/admin" component={AdminFeed}>*/}
						{/*}</Route>*/}
						{this.state.group_urls}
					</Switch>
				</Router>
			</div>
		);  
    }
}

export default App;
