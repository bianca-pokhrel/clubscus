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
		banner: "https://coursework.vschool.io/content/images/2017/09/JavaScriptBanner.png", 
		founder: "Suguru Seo",
		started: "2021/01/25",
		url: "/csc309projectgroup", 

		members: [
			{
				id: 0, 
				name: "Suguru Seo",
				instagram: "@Sug_Seo",
				facebook: "Suguru Seo",
				profilePicture: "https://avatars.githubusercontent.com/u/26561677?s=460&u=0e76846367b28095f4225089da95fe734561eded&v=4"
			}, 
			{
				id: 1, 
				name: "JJ Kanu",
				instagram: "@jj_kanu",
				facebook: "JJ Kanu",
				profilePicture: "https://avatars.githubusercontent.com/u/62584273?s=460&u=8279555aeefd86b8fba6398f02f1dfa8fa51c5cf&v=4"
			},
			{
				id: 2, 
				name: "Bianca Pokhrel",
				instagram: "@biancapokhrel",
				facebook: "Bianca Pokhrel",
				profilePicture: "https://avatars.githubusercontent.com/u/45080709?s=460&u=33064b15b5b579af2b9029b72779a4a5321b0e19&v=4"
			},
			{
				id: 3, 
				name: "Nicolas Ruiz",
				instagram: "@nic_ruiz",
				facebook: "Nicolas Ruiz",
				profilePicture: "https://avatars.githubusercontent.com/u/24924293?s=460&v=4"
			}
		],
		links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}],
		posts: [
			{id: 0, title: "Progress Update", text: "Hey Guys! Just letting you know I just added some arbitrary post to the temp database. I still need to put it in another file though.", image:"", date: '2021-03-06', comments: [{id: 0, msg: "hello this is a comment", date: "2020-01-12"}], likes: ["Tom","Dick", "Larry"]},
			{id: 1, title: "Progress Update 2", text: "Also changed up a few things to User Info component so make sure to pull!", image:"", date: '2021-03-07', comments: [{id: 0, msg: "hello this is a comment", date: "2020-01-12"}], likes: ["Tom"]},
		],
		club: false
	},
    {
		groupName: "UofT Puppies Club", 
		description: "The puppies of UofT!",
		banner: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/various-dogs-horizontal-web-banner-susan-schmitz.jpg", 
		founder: "Air Bud",
		started: "2020/09/26",
		url: "/uoftpuppiesclub", 

		members: [
			{
				id: 0, 
				name: "Milo Jones",
				instagram: "@milo_jones",
				facebook: "Milo J",
				profilePicture: "https://i.pinimg.com/originals/0d/8a/22/0d8a22def593c688f7d32dff3e65b74f.jpg"
			}, 
			{
				id: 1, 
				name: "Rocky Freleng",
				instagram: "@rocky_frel",
				facebook: "Rocky Freleng",
				profilePicture: "https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
			},
			{
				id: 2, 
				name: "JJ Kanu",
				instagram: "@jj_kanu",
				facebook: "JJ Kanu",
				profilePicture: "https://avatars.githubusercontent.com/u/62584273?s=460&u=8279555aeefd86b8fba6398f02f1dfa8fa51c5cf&v=4"
			},
		],
		links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}],
		posts: [
			{id: 0, title: "Puppy Post Friday", text: "Puppy Appreciation Post", image:"https://static.stacker.com/s3fs-public/styles/properly_sized_image/s3/2020-03/English%20Lab%20Puppy%20%281%29_0.png", date: '2021-03-06', comments: [{id: 0, msg: "hello this is a comment", date: "2020-01-12"}], likes: ["Tom","Dick", "Larry"]},
			{id: 1, title: "Puppy Post Saturday", text: "Everyday is puppy appreciation lol.", image:"https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg", date: '2021-03-07', comments: [{id: 0, msg: "hello this is a comment", date: "2020-01-12"}], likes: ["Tom"]},
		],
		club: true
	},
    {
		groupName: "Attack On Titan Fanclub", 
		description: "Talk about some weeb stuff",
		banner: "https://i.pinimg.com/originals/87/71/7a/87717a0d118ae40f75467b8fbb452e04.jpg", 
		founder: "Isayama",
		started: "2020/09/28",
		url: "/attackontitanfanclub", 

		members: [
			{
				id: 0, 
				name: "Eren Yeager",
				instagram: "@eren_titan",
				facebook: "Eren Yeager",
				profilePicture: "https://64.media.tumblr.com/77a21e91593418fbbba5897efd60d410/a7737d816595f58d-d8/s250x400/0072d174042906a318b36c24a7d246d24268e447.jpg"
			}, 
			{
				id: 1, 
				name: "Mikasa Ackermann",
				instagram: "@mikasaaa",
				facebook: "Mikasa Ackermann",
				profilePicture: "https://pm1.narvii.com/6728/2cfefac17df8aa295e4a3088f41863d781122a82v2_hq.jpg"
			},
			{
				id: 2, 
				name: "JJ Kanu",
				instagram: "@jj_kanu",
				facebook: "JJ Kanu",
				profilePicture: "https://avatars.githubusercontent.com/u/62584273?s=460&u=8279555aeefd86b8fba6398f02f1dfa8fa51c5cf&v=4"
			},
		],
		links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}],
		posts: [
			{id: 0, title: "This Weeks Episode", text: "I'm not even gonna put actual spoilers here, GO WATCH THE SHOW, IT'S AMAZING!", image:"", date: '2021-03-07', comments: [{id: 0, msg: "hello this is a comment", date: "2020-01-12"}], likes: ["Tom","Dick", "Larry"]},
			{id: 1, title: "This Weeks Episode", text: "Crazy! Really great VA from Gabi and Kaya. What are your thoughts for next week's ep?", image:"https://otakukart.com/wp-content/uploads/2021/02/Attack-on-Titan-Season-4-Episode-12-Cover-1.jpg", date: '2021-02-28', comments: [{id: 0, msg: "hello this is a comment", date: "2020-01-12"}], likes: ["Tom"]},
		],
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
							{/* Log In/Register */}
							<Route exact path="/signin" component={SignInPage}/>
							<Route exact path="/register" component={RegisterPage}/>

							{/* User Views */}
							<Route exact path="/user">
								<GroupSearch signedIn={true}/>
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
