import React from "react"
import './ClubPage.css'
import 'antd/dist/antd.css';
import banner from "./static/banner.jpg"
import NavBar from '../NavBar'
import Links from './ClubLinks'
import MemberList from './MemberList'
import Feed from '../Feed'
import About from './About'

class ClubPage extends React.Component{
	state = {
		current: 'mail',
        	signedIn: true,
        	userType: ""
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
		    }else {
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
