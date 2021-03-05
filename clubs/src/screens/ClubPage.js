import React from "react"
import './ClubPage.css'
import 'antd/dist/antd.css';
import NavBar from '../components/NavBar/NavBar'
import Links from '../components/ClubPageComponents/ClubLinks'
import MemberList from '../components/ClubPageComponents/MemberList'
import Feed from '../components/ClubPageComponents/Feed'
import About from '../components/ClubPageComponents/About'
import AdminLinks from "../components/AdminPage/AdminLinks";
import AdminMemberList from "../components/AdminPage/AdminMemberList";
import AdminFeed from '../components/AdminPage/AdminFeed';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

var club = {
	name: "Test Club",
	banner: "banner.jpg",
	founder: "Some guy",
	started: "2020/09/27",
	members: [{id: 0, first_name: "Chuck", last_name: "Jones"}, {id: 1, first_name: "Friz", last_name: "Freleng"}],
	links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}],
	posts: [{club: "A fun club", id: 0, title: "A Post", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '2003-11-01', image: "/post.jpg", comments: [{id: 0, msg: "hello this is a comment", date: "2020-01-12"}], likes: ["Tom","Dick", "Larry"]},{club: "Another fun club", id: 1, title: "Test Post", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '2020-11-01', image: "", comments: [], likes: []},{club: "A third club", id: 2, title: "Test Post", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '2012-11-01', image: "/post.jpg", comments: [], likes: []}],
	about: "This is the about page"
}
class ClubPage extends React.Component{
	state = {
		current: 'mail',
        	signedIn: true,
        	userType: "user"
	};
    
	render() {
		const { current, signedIn, userType } = this.state;
        
        	const about_us = () => {
        		return (
		            <div class="club_container">
		            	<About about={club.about}/>
		            </div>
		        ) 
        	}
        
		const clubPageView = () => {
		    if (!signedIn || window.location.pathname == "/about") {
		        return about_us();
		    } else if (userType == "user") {
		        return(
				<div>
					<div class="side_bars">
						<Links links={club.links}/>
					</div>
					<div id="club_feed">
						<Feed posts={club.posts} main_feed={1}/>
					</div>
					<div class="side_bars">
						<MemberList members={club.members}/>
		        		</div>
		        	</div>
		        );
		    } else if (userType == "admin") {
				return(
					<div>
						<div class="side_bars">
							<AdminLinks/>
						</div>
						<div id="club_feed">
							<AdminFeed/>
						</div>
						<div class="side_bars">
							<AdminMemberList/>
						</div>
					</div>
				);
			} else if (userType == "superadmin") {
		    	return (
		    		<div>
					</div>
				)
			}
		}
		
		return(<div id="club_bg">
			<div>
				<NavBar/>
		 		<img class="club_banner" src={club.banner}/>
		 		<div id="club_name_header">
		 			<span id="club_name_text">{club.name}</span>
		 			<div id="club_name_right">
		 				<p><span id="club_name_metadata_text">Founded by: </span>{club.founder}</p>
		 				<p><span id="club_name_metadata_text">Started: </span>{club.started}</p>
		 			</div>
		 		</div>

			</div>
			<div id="club_container">
				{clubPageView()}
			</div>
		    </div>
		)
    	}

}

export default ClubPage;
