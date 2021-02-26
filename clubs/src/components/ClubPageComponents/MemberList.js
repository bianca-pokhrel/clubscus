import React from "react";
import 'antd/dist/antd.css';
import './MemberList.css'

var members;
class MemberLinks extends React.Component {
	members = [{id: 0, first_name: "Chuck", last_name: "Berry"}, {id: 1, first_name: "Louis", last_name: "Armstrong"}]

	render() {
    		return (
      			<div id="member_box">
      				{this.members.map(member => (		
					<p class="member_text">{member.first_name} {member.last_name}</p>
      				))}

      			</div>
      		);
  	}
}

export default MemberLinks;
