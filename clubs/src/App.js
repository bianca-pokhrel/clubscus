import React from 'react';
import './App.css';
import ClubPage from './screens/ClubPage.js';
import SignInPage from './screens/SignInPage.js'
import ProfilePage from './screens/ProfilePage';
import GroupSearch from './screens/GroupSearch';
import SuperAdminScreen from './screens/SuperAdminScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterPage from './screens/RegisterPage';


//Club Data
const clubsData = [
    {
		//General Group Info
        groupName: "Math",
        description: "A club for math enthusiasts",
        banner: "/math-club.png",
		founder: "Some guy",
		started: "2020/09/27",
		url: "/math", 
		
		members: [
			{id: 0, first_name: "Chuck", last_name: "Jones"}, 
			{id: 1, first_name: "Friz", last_name: "Freleng"}
		],
		club: false
    },
    {
        groupName: "English",
        description: "A club for lit nerds",
        banner: "/english-club.png",
		founder: "Some guy",
		started: "2020/09/27",
		url: "/CSC309ProjectGroup", 

		members: [
			{id: 0, first_name: "Chuck", last_name: "Jones"}, 
			{id: 1, first_name: "Friz", last_name: "Freleng"}
		],
		club: false
    },
    {
        groupName: "French",
        description: "A club for those who want to dip their toes in the French language",
        banner: "/french-club.png",
		founder: "Some guy",
		started: "2020/09/27",
		url: "/CSC309ProjectGroup", 

		members: [
			{id: 0, first_name: "Chuck", last_name: "Jones"}, 
			{id: 1, first_name: "Friz", last_name: "Freleng"}
		],
		club: false
    },
	//Where JJ Starts
	{	
		groupName: "CSC309 Project Group", 
		description: "This is a group for the project",
		banner: "banner.jpg", 
		founder: "Some guy",
		started: "2020/09/27",
		url: "/CSC309ProjectGroup", 

		members: [
			{id: 0, first_name: "Chuck", last_name: "Jones"}, 
			{id: 1, first_name: "Friz", last_name: "Freleng"}
		],
		url: "/CSC309ProjectGroup", 
		club: false
	},
    {
		groupName: "UofT Puppies Club", 
		description: "The puppies of UofT!",
		banner: "banner.jpg", 
		founder: "Some guy",
		started: "2020/09/27",
		url: "/CSC309ProjectGroup", 

		members: [
			{id: 0, first_name: "Chuck", last_name: "Jones"}, 
			{id: 1, first_name: "Friz", last_name: "Freleng"}
		],
		url: "/", 
		club: true
	},
    {
		groupName: "Attack On Titan Fanclub", 
		description: "Talk about some weeb stuff",
		banner: "banner.jpg", 
		founder: "Some guy",
		started: "2020/09/27",
		url: "/CSC309ProjectGroup", 

		members: [
			{id: 0, first_name: "Chuck", last_name: "Jones"}, 
			{id: 1, first_name: "Friz", last_name: "Freleng"}
		],
		url: "/", 
		club: false
	},
	{
		groupName: "UofT Full Grown Dogs Club", 
		description: "For when your puppy stuff grows up",
		banner: "banner.jpg", 
		founder: "Some guy",
		started: "2020/09/27",
		url: "/CSC309ProjectGroup", 

		members: [
			{id: 0, first_name: "Chuck", last_name: "Jones"}, 
			{id: 1, first_name: "Friz", last_name: "Freleng"}
		],
		url: "/", 
		club: true
	},
    {
		groupName: "CSC309 Project Group 10", 
		description: "This is a cooler group for the project",
		banner: "banner.jpg", 
		founder: "Some guy",
		started: "2020/09/27",
		url: "/CSC309ProjectGroup", 

		members: [
			{id: 0, first_name: "Chuck", last_name: "Jones"}, 
			{id: 1, first_name: "Friz", last_name: "Freleng"}
		],
		url: "/", 
		club: false
	},
    {
		groupName: "Anime Club", 
		description: "The official anime club of UofT",
		banner: "banner.jpg", 
		founder: "Some guy",
		started: "2020/09/27",
		url: "/CSC309ProjectGroup", 

		members: [
			{id: 0, first_name: "Chuck", last_name: "Jones"}, 
			{id: 1, first_name: "Friz", last_name: "Freleng"}
		],
		url: "/", 
		club: true
	},
    {
		groupName: "FML300 Winter 2021 Study Group", 
		description: "Study group for LEC001",
		banner: "banner.jpg", 
		founder: "Some guy",
		started: "2020/09/27",
		url: "/CSC309ProjectGroup", 

		members: [
			{id: 0, first_name: "Chuck", last_name: "Jones"}, 
			{id: 1, first_name: "Friz", last_name: "Freleng"}
		],
		url: "/", 
		club: false
	},
	//Where Nic's starts
	{
		groupName: "Test Club",
		about: "This is the about page",
		banner: "banner.jpg",
		founder: "Some guy",
		started: "2020/09/27",
		url: "/CSC309ProjectGroup", 
		
		members: [
			{id: 0, first_name: "Chuck", last_name: "Jones"}, 
			{id: 1, first_name: "Friz", last_name: "Freleng"}
		],
		links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}],
		posts: [{id: 0, title: "A Post", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '2003-11-01', image: "/post.jpg", comments: [{id: 0, msg: "hello this is a comment", date: "2020-01-12"}], likes: ["Tom","Dick", "Larry"]},{id: 1, title: "Test Post", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '2020-11-01', image: "", comments: [], likes: []},{id: 2, title: "Test Post", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '2012-11-01', image: "/post.jpg", comments: [], likes: []}],
	},
]

let clubsRequests = [
    {
        "id": "a",
        groupName: "Astronomy Club",
        description: "A club for those who are interested in what is out there in our universe",
        "approved": false
    },
    {
        "id": "b",
        groupName: "Computer Science Club",
        description: "A club for those who love to code",
        "approved": false
    },
    {
        "id": "c",
        groupName: "Chess Club",
        description: "A club for those who want to be like Beth Harmon",
        "approved": false
    }
]


class App extends React.Component {

	render() {

		const getUrls = () => {
			console.log("Worked")
			{clubsData.map((group) => {
				return <Route exact path={`/clubs${group.url}`}><ClubPage club={group}/></Route>
					}
				)
			}
		}

	    	return (
				<div>
					<Router>
						<Switch>
							{/* <ClubPage/>
							<ProfilePage/> */}
							<Route exact path="/" component={GroupSearch}/>
							<Route exact path="/SignIn" component={SignInPage}/>
							<Route exact path="/Register" component={RegisterPage}/>
							<Route exact path="/UserProfile" component={ProfilePage}/>
							<Route exact path="/superadmin" component={SuperAdminScreen}/>
							{getUrls()}
							{/* // <Route exact path={clubsData[0].url} component={ClubPage} /> */}
						</Switch>
					</Router>
				</div>
	    	);  
    }
}

export default App;
