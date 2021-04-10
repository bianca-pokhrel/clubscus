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


var INVALID_USER = -1
//Club Data
const clubsData = require('./clubsData.js');

class App extends React.Component {

	constructor() {
		super()

		this.state = {
			currentUser: INVALID_USER,
			signedIn: false,
			userType: null,
			group_urls: null,
			admin_data: null,
		}
	
		let url = `/data/groups`;

		// Since this is a GET request, simply call fetch on the URL
		fetch(url)
			.then(res => {
				if (res.status === 200) {
					// return a promise that resolves with the JSON body
					return res.json();
				} else {
					alert("Could not get groups");
				}
			}).then(json => {
				let groups = json
				this.setState({group_urls: groups})
			})

		url = '/data/groups/admin'
		fetch(url)
			.then(res => {
				if (res.status === 200) {
					// return a promise that resolves with the JSON body
					return res.json();
				} else {
					alert("Could not get groups");
				}
			}).then(json => {
			let data = json
			this.setState({admin_data: data})
		})
	}

	assemble_routes = () => {
		if (this.state.currentUser == INVALID_USER || this.state.group_urls == null) return ("")

		let g = this.state.group_urls.map((group) => {
			return (<Route exact path={`/clubs/${group._id}/about`}>
				<ClubPage club={group} about={true} user={this.state.currentUser} app={this}/>
				</Route>)
		})

		g = g.concat(this.state.group_urls.map((group) => {
			return (<Route exact path={`/clubs/${group._id}`}>
				<ClubPage club={group} user={this.state.currentUser} app={this} />
				</Route>)
		}))

		return g
	}
	//Makes User signed in routes
	assemble_user_admin_routes = () => {

		if (this.state.currentUser == INVALID_USER) return ("")

		return(
			[<Route exact path="/user/groupsearch">
				<GroupSearch app={this} user={this.state.currentUser} signedIn={true} clubs={clubsData}/>
			</Route>,
			<Route exact path="/user/profile">
				<ProfilePage app={this} user={this.state.currentUser}/>
			</Route>,
			<Route exact path="/user/feed">
				<MainFeed app={this} user={this.state.currentUser}/>
			</Route>,
			<Route exact path="/superadmin" component={SuperAdminScreen}>
				<SuperAdminScreen clubsData={clubsData}></SuperAdminScreen>
			</Route>,
			<Route exact path="/admin">
				<ClubPage club={this.state.admin_data} userType="admin" />
			</Route>
			]
		)
	}

	componentDidMount() {
        checkSession(this); // sees if a user is logged in
    }

	render() {
		const { currentUser } = this.state;

		console.log(currentUser)

		return (
			<div>
				<Router>
					<Switch>
						<Route exact path="/">
							{currentUser == INVALID_USER ? <GroupSearch signedIn={false} clubs={clubsData}/>: <GroupSearch signedIn={true} user={this.state.currentUser} clubs={clubsData}/>}
						</Route>
						{/* Log In/Register */}
						<Route exact path="/signin">
							<SignInPage app={this} />
						</Route>
						<Route exact path="/register">
							<RegisterPage app={this} />
						</Route>

						{this.assemble_user_admin_routes()}
						{this.assemble_routes()}

						{ /* 404 if URL isn't expected. */}
                    	<Route render={() => <div>404 Not found</div>} />
					</Switch>
				</Router>
			</div>
		);  
    }
}

export default App;
