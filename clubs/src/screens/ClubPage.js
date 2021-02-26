import React from "react"
import './ClubPage.css'
import 'antd/dist/antd.css';
import banner from "../components/ClubPageComponents/static/banner.jpg"
import NavBar from '../components/NavBar/NavBar'
import Links from '../components/ClubPageComponents/ClubLinks'
import MemberList from '../components/ClubPageComponents/MemberList'
import Feed from '../components/ClubPageComponents/Feed'
import About from '../components/ClubPageComponents/About'
import AdminLinks from "../components/AdminPage/AdminLinks";
import AdminMemberList from "../components/AdminPage/AdminMemberList";
import AdminFeed from '../components/AdminPage/AdminFeed';

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
		            	<About/>
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
						<Links/>
					</div>
					<div id="club_feed">
						<Feed/>
					</div>
					<div class="side_bars">
						<MemberList/>
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
		return(
		    <div id="club_bg">
		        <div>
		        	<NavBar/>
		 		<img class="club_banner" src={banner}/>
		        </div>
		        <div id="club_container">
		        	{clubPageView()}
		        </div>
		    </div>
        	)
    	}

}

export default ClubPage;
