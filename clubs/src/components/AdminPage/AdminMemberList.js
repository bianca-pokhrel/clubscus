import React from "react";
import 'antd/dist/antd.css';
import './AdminMemberList.css'
import {Button} from "antd";

let requested_members = [
    {id: 3 , first_name: "Harry", last_name: "Musk"},
    {id: 4, first_name: "Alex", last_name: "Ramirez"}
]

var members;
class AdminMemberList extends React.Component {
    acceptMember = (member) => {
        this.props.members.push({id: member.id, first_name: member.first_name, last_name: member.last_name})
        requested_members = requested_members.filter(item => item !== member)
        console.log(this.props.members)
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
                        <a id="member_text">{member.first_name} {member.last_name}</a>

                    </div>

                ))}
                </div>
                <div id="requested_member_box">
                    <h2>Requested Member</h2>
                    {requested_members.map(requested_member => (
                        <div id="requested_member_container">
                            <img id="requested_member_pic" src="/profile-pic.png"/>
                            <h2 id="requested_member_text">{requested_member.first_name} {requested_member.last_name}</h2>
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
