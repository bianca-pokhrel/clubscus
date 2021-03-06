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
import {Button} from "antd";


class ClubPage extends React.Component{
	state = {
		current: 'mail',
        	signedIn: true,
        	userType: this.props.userType,
		isOfficial: false
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
		    if (this.props.about == true) {
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
							<AdminLinks links={club.links}/>
						</div>
						<div id="club_feed">
							<AdminFeed posts={club.posts} main_feed={0} focus={-1}/>
						</div>
						<div class="member_bars">
							<AdminMemberList members={club.members}/>
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

		const officiateButton = () => {
			if (userType=="admin"){
				return(
					<div id="officiateButton">
							<Button shape="round" size="medium" onClick={this.acceptMember}>Officiate</Button>
					</div>
				)
			}
		}
		
		return(<div id="club_bg">
			<div>
				<NavBar userType={userType=="user"? "user": "admin"}/>
				<img class="club_banner" src={club.banner}/>
		 		<div id="club_name_header">
		 			<span id="club_name_text">{club.groupName}</span>
					{officiateButton()}
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
