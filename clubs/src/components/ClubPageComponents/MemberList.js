import React from "react";
import 'antd/dist/antd.css';
import './MemberList.css';

import MemberModal from './MemberModal.js';
import { Modal } from "antd";

var members;
class MemberLinks extends React.Component {

	state = {
		modalVis: false,
		modalName: "",
		modalInsta: "",
		modalFacebook: "",
		modalProfilePic: "",
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
			this.setState({modalProfilePic:member.profilePicture});
			console.log(modalInsta)
			console.log(modalVis)
		}

		const handleCancel = () => {
			this.setState({modalVis:false})
		}

		if (modalVis) {
			console.log("it turned true")
			modalView = (
				<Modal 
					title={modalName} 
					visible={modalVis}  
					onCancel={handleCancel} 
					footer={null}
				>
					<p>{modalInsta}</p>
					<p>{modalName}</p>
					<p>Some contents...</p>
				</Modal>
			)
		}

		const members = this.props.members
    		return (
    			<div id="member_box">
    				<span id="members_title">Members</span>
      				{members.map(member => (
      					<div id="ind_member_container">
						<img id="member_pic" src={member.profilePicture}/>
						<a id="member_text" onClick={(e) => passMemberInfo(member, e)}>{member.name}</a>
						{modalView}
					</div>
				))}
				
				</div>
      		);
  	}
}

export default MemberLinks;
