import React from "react";
import 'antd/dist/antd.css';
import './About.css'
import { Button } from 'antd'

var text;

class About extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			user: props.user,
			club: props.club,
		}
	}

	render() {
		const about = this.state.club.aboutUs
		const club = this.state.club
		const user = this.state.user

		let signedIn = user != null
		let member = false
		if (signedIn) {
			for (let i = 0; i < user.userGroups.length; i++) {
				if (user.userGroups[i] == club._id) member = true
			}
		}

		let requested = false
		if (signedIn && !member) {
			for (let i = 0; i < user.reqUserGroups.length; i++) {
				if (user.reqUserGroups[i] == club._id) requested = true
			}
		}

		let join_click = (e) => {
			user.reqUserGroups.push(club._id)
			club.reqMembers.push(user._id)

			let request = new Request(`/data/user/users/${user._id}`, {
				method: "put",
				body: JSON.stringify({"reqUserGroups" : user.reqUserGroups}),
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json"
				}
			});
	
			fetch(request)
				.then(function (res) {
					if (res.status === 200) {
						return res.json()
					} else {
						alert("Could not request to join group");
					}
				}).then(post => {
					this.forceUpdate()
				})
				.catch(error => {
					console.log(error);
				});

			request = new Request(`/data/groups/${club._id}`, {
				method: "put",
				body: JSON.stringify({"reqMembers" : club.reqMembers}),
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json"
				}
			});
	
			fetch(request)
				.then(function (res) {
					if (res.status === 200) {
						return res.json()
					} else {
						alert("Could not request to join group");
					}
				}).then(post => {
					this.forceUpdate()
				})
				.catch(error => {
					console.log(error);
				});
			
		}

		const get_join_button = () => {
			if (signedIn && !member) {
				if (requested) {
					return (<div id="join_button_container">
							<div id="join_button">
								<p id="request_sent_text"> Request Sent!</p>
							</div>
						</div>
					)
				}else{
					return (<div id="join_button_container">
							<div id="join_button">
								<Button onClick={join_click} size="large">
									<p>Request To Join</p>
								</Button>
							</div>
						</div>
					)
				}
			}
			return ("")
		}
		
		return (
			<>
				{get_join_button()}
			<div id="about_us_text_container">
				<h1>About Us</h1>
				<p>{about}</p>

			</div>
			</>
		);
  	}
}

export default About;
