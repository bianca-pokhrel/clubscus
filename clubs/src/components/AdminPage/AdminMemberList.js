import React from "react";
import 'antd/dist/antd.css';
import './AdminMemberList.css'

var members;
class AdminMemberList extends React.Component {
    render() {
        const members = this.props.members
        return (
            <div id="member_box">
                <span id="members_title">Members</span>
                {members.map(member => (
                    <div id="ind_member_container">
                        <img id="member_pic" src="/profile-pic.png"/>
                        <a id="member_text">{member.first_name} {member.last_name}</a>

                    </div>

                ))}
            </div>

        );
    }
}

export default AdminMemberList;
