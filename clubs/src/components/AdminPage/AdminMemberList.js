import React from "react";
import 'antd/dist/antd.css';
import './AdminMemberList.css'
import {message, Button} from "antd";

import MemberModal from '../ClubPageComponents/MemberModal.js';
import { Modal } from "antd";

let requested_members = [
    {id: 3 , name: "Harry Musk"},
    {id: 4, name: "Alex Ramirez"}
]


class AdminMemberList extends React.Component {

    state = {
		modalVis: false,
		modalName: "",
		modalInsta: "",
		modalFacebook: "",
		modalProfilePic: "",
	}

    acceptMember = (member) => {
        this.props.members.push({id: member.id, first_name: member .name, last_name: member.last_name})
        requested_members = requested_members.filter(item => item !== member)
        message.success('New Member Accepted');
        this.forceUpdate()
    }
    render() {
        const members = this.props.members

        const { modalVis, modalName, modalInsta, modalFacebook, modalProfilePic } = this.state;
        let modalView;

		const passMemberInfo = (member) => {
			console.log(`it works ${member.name}`)
			this.setState({modalVis:true});
			this.setState({modalName:member.name});
			this.setState({modalInsta:member.instagram});
			this.setState({modalFacebook:member.facebook});
			this.setState({modalProfilePic:member.profilePicture});
		}

		const handleCancel = () => {
			this.setState({modalVis:false})
		}

		if (modalVis) {
			modalView = (
				<Modal 
					title={modalName} 
					visible={modalVis}  
					onCancel={handleCancel} 
					footer={null}
				>
					<MemberModal profilePicture={modalProfilePic} instagram={modalInsta} facebook={modalFacebook}/>
				</Modal>
			)
		}

        return (
            <div >
                <div id="admin_member_box">
                <span id="members_title">Members</span>
                {members.map(member => (
                    <div id="ind_member_container">
                        <img id="member_pic" src={member.profilePicture} onClick={(e) => passMemberInfo(member, e)}/>
                        <a id="member_text" onClick={(e) => passMemberInfo(member, e)}>{member.name}</a>
                        {modalView}
                    </div>

                ))}
                </div>
                <div id="requested_member_box">
                    <h2>Member Requests</h2>
                    {requested_members.map(requested_member => (
                        <div id="requested_member_container">
                            <img id="requested_member_pic"  onClick={(e) => passMemberInfo(requested_member, e)} src={requested_member.profilePicture}/>
                            <h2 id="requested_member_text"onClick={(e) => passMemberInfo(requested_member, e)}>{requested_member.name}</h2>
                            <div id="accept_button">
                                <Button shape="round" size="medium" onClick={(e) => this.acceptMember(requested_member, e)}>Accept</Button>
                            </div>
                            {modalView}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default AdminMemberList;
