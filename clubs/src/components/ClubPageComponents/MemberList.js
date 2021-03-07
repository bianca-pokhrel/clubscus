import React from "react";
import 'antd/dist/antd.css';
import './MemberList.css'

var members;
class MemberLinks extends React.Component {
	render() {
		const members = this.props.members
    		return (
    			<div id="member_box">
    				<span id="members_title">Members</span>
      				{members.map(member => (
      					<div id="ind_member_container">
						<img id="member_pic" src="/profile-pic.png"/>
						<a id="member_text">{member.name}</a>
					</div>
				))}
			</div>

      		);
  	}
}

export default MemberLinks;
