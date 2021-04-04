import React from "react";
import 'antd/dist/antd.css';
import './AdminMemberList.css'
import {message, Button} from "antd";

import MemberModal from '../ClubPageComponents/MemberModal.js';
import { Modal } from "antd";


class AdminMemberList extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			modalVis: false,
			modalName: "",
			modalInsta: "",
			modalFacebook: "",
			modalProfilePic: "",
			members: this.props.club.members,
			requested_members: this.props.club.reqMembers,
			club: this.props.club,
		}

		props.members.map((member) => {
			const url = `/data/user/users/${member}`;
			fetch(url)
				.then(res => {
					if (res.status === 200) {
						return res.json()
					} else {
						alert("Could not get students");
					}
				}).then(m => {
				this.setState({members: this.state.members.concat(m)})
			})
		})

	}

    acceptMember = (member) => {
		const url = `/data/groups/${this.state.club._id}`;
		this.setState({requested_members: this.state.requested_members.filter(item => item !== member)})
		this.setState({members: this.state.member.concat([{id: member.id, name: member.name, profilePicture: member.profilePicture}])})
		const request = new Request(url, {
			method: "put",
			body: JSON.stringify({"members" : this.state.members,
				"reqMembers": this.state.requested_members}),
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json"
			}
		});

		fetch(request)
			.then(function (res) {
				if (res.status === 200) {
					message.success('New Member Accepted');
					return res.json()
				} else {
					alert("Could not accept requested members");
				}
			})
			.catch(error => {
				console.log(error);
			});
        //this.forceUpdate()
    }

    render() {
		const members = this.state.members

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
