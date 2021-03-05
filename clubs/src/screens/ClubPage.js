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
import { BrowserRouter as Router, Switch, Route, useRouteMatch} from 'react-router-dom';

class ClubPage extends React.Component{
	state = {
		current: 'mail',
        	signedIn: true,
        	userType: "user"
	};
    
	render() {
		const club = this.props.club
		const { current, signedIn, userType } = this.state;
        
        	const about_us = () => {
        		return (
		            <div class="club_container">
		            	<About about={club.description}/>
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
						<Feed posts={club.posts} main_feed={0} focus={-1}/>
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
		 			<span id="club_name_text">{club.groupName}</span>
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
