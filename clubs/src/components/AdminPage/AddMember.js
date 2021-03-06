import React from "react";
import 'antd/dist/antd.css';
import './AddMember.css'
import { Button } from 'antd';

const requested_members = [
    {id: 3 , first_name: "Harry", last_name: "Musk"},
    {id: 4, first_name: "Alex", last_name: "Ramirez"}
]

class AddMember extends React.Component {
    render() {

        const acceptMember = (member) => {
            console.log("Ran")
            this.props.members.push({id: member.id, first_name: member.first_name, last_name: member.last_name})
            // this.forceUpdate()
        };

        return (
            <div id="requested_member_box">
                <h2>Requested Member</h2>
                {requested_members.map(requested_member => (
                    <div id="requested_member_container">
                        <img id="requested_member_pic" src="/profile-pic.png"/>
                        <h2 id="requested_member_text">{requested_member.first_name} {requested_member.last_name}</h2>
                        <div id="accept_button">
                        <Button shape="round" size="medium" onClick={acceptMember(requested_member)}>Accept</Button>
                            {console.log(requested_member)}
                        </div>
                    </div>

                ))}
            </div>
        )
    }

}

export default AddMember;
