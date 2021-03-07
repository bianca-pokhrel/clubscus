import React from 'react';
import './App.css';
import ClubPage from './screens/ClubPage.js';
import SignInPage from './screens/SignInPage.js'
import ProfilePage from './screens/ProfilePage';
import GroupSearch from './screens/GroupSearch';
import SuperAdminScreen from './screens/SuperAdminScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterPage from './screens/RegisterPage';
import AdminFeed from "./components/AdminPage/AdminFeed";


//Club Data
const clubsData = [
    {
		//General Group Info
        groupName: "Math",
        description: "A club for math enthusiasts",
        banner: "/math-club.png",
		founder: "Some guy",
		started: "2020/08/27",
		url: "/math", 
		
		members: [
			{
				id: 0, 
				name: "Matt Jones",
				instagram: "@matt_jones",
				facebook: "Matt Jones",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}, 
			{
				id: 1, 
				name: "Math Freleng",
				instagram: "@math_freleng",
				facebook: "Math Freleng",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}
		],
		links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}],
		posts: [{id: 0, title: "A Post", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '2003-11-01', image: "/post.jpg", comments: [{id: 0, msg: "hello this is a comment", date: "2020-01-12"}], likes: ["Tom","Dick", "Larry"]},{id: 1, title: "Test Post", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '2020-11-01', image: "", comments: [], likes: []},{id: 2, title: "Test Post", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '2012-11-01', image: "/post.jpg", comments: [], likes: []}],
		club: false
    },
    {
        groupName: "English",
        description: "A club for lit nerds",
        banner: "/english-club.png",
		founder: "Some guy",
		started: "2020/09/23",
		url: "/english", 

		members: [
			{
				id: 0, 
				name: "Pompadour Jones",
				instagram: "@pompadourj",
				facebook: "Pompadour Jones",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}, 
			{
				id: 1, 
				name: "Benedict Freleng",
				instagram: "@bfrel",
				facebook: "Benedict Fre.",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}
		],
		links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}],
		posts: [],
		club: false
    },
    {
        groupName: "French",
        description: "A club for those who want to dip their toes in the French language",
        banner: "/french-club.png",
		founder: "Some guy",
		started: "2020/09/24",
		url: "/french",

		members: [
			{
				id: 0, 
				name: "Pierre Jones",
				instagram: "@yopierre",
				facebook: "Pierre J",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}, 
			{
				id: 1, 
				name: "Hans Freleng",
				instagram: "@MANSFrel",
				facebook: "Maaaaans",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}
		],
		links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}],
		posts: [],
		club: false
    },
	//Where JJ Starts
	{	
		groupName: "CSC309 Project Group", 
		description: "This is a group for the project",
		banner: "banner.jpg", 
		founder: "Some guy",
		started: "2020/09/25",
		url: "/csc309projectgroup", 

		members: [
			{
				id: 0, 
				name: "Suguru Jones",
				instagram: "@SugureS",
				facebook: "SUguru Jones",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}, 
			{
				id: 1, 
				name: "JJ Freleng",
				instagram: "@jj_free",
				facebook: "JJ Freleng",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}
		],
		links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}],
		posts: [],
		club: false
	},
    {
		groupName: "UofT Puppies Club", 
		description: "The puppies of UofT!",
		banner: "banner.jpg", 
		founder: "Some guy",
		started: "2020/09/26",
		url: "/uoftpuppiesclub", 

		members: [
			{
				id: 0, 
				name: "Milo Jones",
				instagram: "@milo_jones",
				facebook: "Milo J",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}, 
			{
				id: 1, 
				name: "Rocky Freleng",
				instagram: "@rocky_frel",
				facebook: "Rocky Freleng",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}
		],
		links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}],
		posts: [],
		club: true
	},
    {
		groupName: "Attack On Titan Fanclub", 
		description: "Talk about some weeb stuff",
		banner: "banner.jpg", 
		founder: "Some guy",
		started: "2020/09/28",
		url: "/attackontitanfanclub", 

		members: [
			{
				id: 0, 
				name: "Eren Jones",
				instagram: "@eren_titan",
				facebook: "Eren Jones",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}, 
			{
				id: 1, 
				name: "Mikasa Freleng",
				instagram: "@mikasaaa",
				facebook: "Mikasa Freleng",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}
		],
		links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}],
		posts: [],
		club: false
	},
	{
		groupName: "UofT Full Grown Dogs Club", 
		description: "For when your puppy stuff grows up",
		banner: "banner.jpg", 
		founder: "Some guy",
		started: "2020/10/27",
		url: "/uoftfullgrowndogsclubs", 

		members: [
			{
				id: 0, 
				name: "Eren Jones",
				instagram: "@eren_titan",
				facebook: "Eren Jones",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}, 
			{
				id: 1, 
				name: "Mikasa Freleng",
				instagram: "@mikasaaa",
				facebook: "Mikasa Freleng",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}
		],
		links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}],
		posts: [],
		club: true
	},
    {
		groupName: "CSC309 Project Group 10", 
		description: "This is a cooler group for the project",
		banner: "banner.jpg", 
		founder: "Some guy",
		started: "2020/07/27",
		url: "/csc309projectgroup10", 

		members: [
			{
				id: 0, 
				name: "Eren Jones",
				instagram: "@eren_titan",
				facebook: "Eren Jones",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}, 
			{
				id: 1, 
				name: "Mikasa Freleng",
				instagram: "@mikasaaa",
				facebook: "Mikasa Freleng",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}
		],
		links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}],
		posts: [],
		club: false
	},
    {
		groupName: "Anime Club", 
		description: "The official anime club of UofT",
		banner: "banner.jpg", 
		founder: "Some guy",
		started: "2020/06/27",
		url: "/animeclub", 

		members: [
			{
				id: 0, 
				name: "Eren Jones",
				instagram: "@eren_titan",
				facebook: "Eren Jones",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}, 
			{
				id: 1, 
				name: "Mikasa Freleng",
				instagram: "@mikasaaa",
				facebook: "Mikasa Freleng",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}
		],
		links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}], 
		posts: [],
		club: true
	},
    {
		groupName: "FML300 Winter 2021 Study Group", 
		description: "Study group for LEC001",
		banner: "banner.jpg", 
		founder: "Some guy",
		started: "2021/01/27",
		url: "/fml300winter2021studygroup", 

		members: [
			{
				id: 0, 
				name: "Eren Jones",
				instagram: "@eren_titan",
				facebook: "Eren Jones",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}, 
			{
				id: 1, 
				name: "Mikasa Freleng",
				instagram: "@mikasaaa",
				facebook: "Mikasa Freleng",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}
		],
		links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}], 
		posts: [],
		club: false
	},
	//Where Nic's starts
	{
		groupName: "Test Club",
		about: "This is the about page",
		banner: "/banner.jpg",
		founder: "Some guy",
		started: "2020/09/21",
		url: "/testclub", 
		
		members: [
			{
				id: 0, 
				name: "Chuck Jones",
				instagram: "@Chuck-jones",
				facebook: "Chuck Jones",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}, 
			{
				id: 1, 
				name: "Friz Freleng",
				instagram: "@whatsfriz",
				facebook: "Friz Freleng",
				profilePicture: "https://hungarytoday.hu/wp-content/uploads/2018/02/18ps27.jpg"
			}
		],
		links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}],
		posts: [{id: 0, title: "A Post", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '2003-11-01', image: "/post.jpg", comments: [{id: 0, msg: "hello this is a comment", date: "2020-1-12"}], likes: ["Tom","Dick", "Larry"]},{id: 1, title: "Test Post", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '2020-11-01', image: "", comments: [], likes: []},{id: 2, title: "Test Post", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '2012-11-01', image: "/post.jpg", comments: [], likes: []}],
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

	    	return (
				<div>
					<Router>
						<Switch>
							<Route exact path="/">
								<GroupSearch signedIn={false}/>
							</Route>
							<Route exact path="/user">
								<GroupSearch signedIn={true}/>
							</Route>
							<Route exact path="/signin" component={SignInPage}/>
							<Route exact path="/register" component={RegisterPage}/>
							<Route exact path="/user/profile" component={ProfilePage}/>
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
