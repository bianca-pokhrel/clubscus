import React from "react";
import 'antd/dist/antd.css';
import './AdminMemberList.css'
import {message, Button} from "antd";

let requested_members = [
    {id: 3 , name: "Harry Musk"},
    {id: 4, name: "Alex Ramirez"}
]


class AdminMemberList extends React.Component {
    acceptMember = (member) => {
        this.props.members.push({id: member.id, name: member.name})
        requested_members = requested_members.filter(item => item !== member)
        message.success('New Member Accepted');
        this.forceUpdate()
    }
    render() {
        const members = this.props.members
        return (
            <div >
                <div id="member_box">
                <span id="members_title">Members</span>
                {members.map(member => (
                    <div id="ind_member_container">
                        <img id="member_pic" src="/profile-pic.png"/>
                        <a id="member_text">{member.name}</a>
                    </div>

                ))}
                </div>
                <div id="requested_member_box">
                    <h2>Member Requests</h2>
                    {requested_members.map(requested_member => (
                        <div id="requested_member_container">
                            <img id="requested_member_pic" src="/profile-pic.png"/>
                            <h2 id="requested_member_text">{requested_member.name}</h2>
                            <div id="accept_button">
                                <Button shape="round" size="medium" onClick={(e) => this.acceptMember(requested_member, e)}>Accept</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default AdminMemberList;
