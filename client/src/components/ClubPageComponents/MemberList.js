import React from "react";
import 'antd/dist/antd.css';
import './MemberList.css';

import MemberModal from './MemberModal.js';
import { Modal } from "antd";

class MemberLinks extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			modalVis: false,
			modalName: "",
			modalInsta: "",
			modalFacebook: "",
			modalProfilePic: "",
			members: []
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
	

	render() {

		const { modalVis, modalName, modalInsta, modalFacebook, modalProfilePic } = this.state;

		let modalView;


		//THiS WORKS, JUST NEED TO FIGURE OUT HOW TO GET IT TO RENDER
		const passMemberInfo = (member) => {
			console.log(`it works ${member.name}`)
			this.setState({modalVis:true});
			this.setState({modalName:member.name});
			this.setState({modalInsta:member.instagram});
			this.setState({modalFacebook:member.facebook});
			this.setState({modalProfilePic:member.pic});
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

		const members = this.state.members
    		return (
    			<div id="member_box">
    				<span id="members_title">Members</span>
      				{members.map(member => (
      					<div id="ind_member_container">
						<img id="member_pic" src={member.pic} onClick={(e) => passMemberInfo(member, e)}/>
						<a id="member_text" onClick={(e) => passMemberInfo(member, e)}>{member.name}</a>
						{modalView}
					</div>
				))}
				
				</div>
      		);
  	}
}

export default MemberLinks;
