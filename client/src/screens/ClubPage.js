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
import {message, Button} from "antd";


class ClubPage extends React.Component{
	constructor(props) {
		super(props) 
		
		this.state = {
			signedIn: true,
			founder: null,
			user: props.user,
		};
		
		let url = `/data/user/users/${props.club.founder}`;

		fetch(url)
			.then(res => {
				if (res.status === 200) {
					return res.json()
				} else {
					alert("Could not get founder");
				}
			}).then(user => {
				this.setState({founder: user.name})
			})
	}
	

	success = () => {
		message.success('Officiate Request Has Been Sent');
		this.setState({officiateRequestSent: true})
	};

	reverse = () => {
		message.success('Officiate Request Has Been Canceled');
		this.setState({officiateRequestSent: false})
	};
    
	render() {
		const club = this.props.club
		const { user } = this.state;
		const signedIn = user != null
        
		const get_navbar = () => {
			return (<NavBar user={user}/>)
		}

		const clubPageView = () => {
			let member = false
			if (signedIn) {
				for (let i = 0; i < user.userGroups.length; i++) {
					if (user.userGroups[i] == club._id) member = true
				}
			}

		    if (this.props.about == true || !member) {
		        return (
					<div class="club_container">
						<About club={club} user={user}/>
					</div>
				) 
		    } else if (user.userType == "user") {
		        return(
				<div>
					<div class="side_bars">
						<Links links={club.links}/>
					</div>
					<div id="club_feed">
						<Feed posts={club.posts} main_feed={0} focus={-1} user={user}/>
					</div>
					<div class="side_bars">
						<MemberList members={club.members}/>
		        		</div>
		        	</div>
		        );
		    } else if (user.userType == "admin") {
				return(
					<div>
						<div class="side_bars">
							<AdminLinks links={club.links} club={club}/>
						</div>
						<div id="club_feed">
							<AdminFeed posts={club.posts} main_feed={0} focus={-1} club={club}/>
						</div>
						<div class="member_bars">
							<AdminMemberList members={club.members} club={club}/>
						</div>
					</div>
				);
			} else if (user.userType == "superadmin") {
		    	return (
		    		<div>
					</div>
				)
			}
		}

		const officiateButton = () => {
			let userType = user.userType
			if (userType=="admin" && !(this.state.officiateRequestSent)){
				return(
					<div id="officiateButton">
							<Button shape="round" size="medium" onClick={this.success}>Officiate Request</Button>
					</div>
				)
			} else if (userType=="admin") {
				return (
					<div id="officiateButton">
						<Button shape="round" size="medium" onClick={this.reverse}>Officiate Request Has Been Sent</Button>
					</div>
				)
			}
		}
		
		return(<div id="club_bg">
			<div>
				{get_navbar()}
				<img class="club_banner" src={club.banner == null ? "https://undark.org/wp-content/uploads/2020/01/GettyImages-154932300.jpg" : club.banner}/>
		 		<div id="club_name_header">
		 			<span id="club_name_text">{club.name}</span>
		 			<div id="club_name_right">
		 				<p><span id="club_name_metadata_text">Founded by: </span>{this.state.founder}</p>
		 				<p><span id="club_name_metadata_text">Started: </span>{club.created_on}</p>
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
