import React from "react";
import 'antd/dist/antd.css';
import './MemberList.css'

var members;
class MemberLinks extends React.Component {
	members = [{id: 0, first_name: "Chuck", last_name: "Berry"}, {id: 1, first_name: "Louis", last_name: "Armstrong"}]

	render() {
    		return (
    			<div id="member_box">
    				<span id="members_title">Members</span>
      				{this.members.map(member => (
      					<div id="ind_member_container">
						<img id="member_pic" src="profile-pic.png"/>
						<a id="member_text">{member.first_name} {member.last_name}</a>

					</div>

				))}
			</div>

      		);
  	}
}

export default MemberLinks;
