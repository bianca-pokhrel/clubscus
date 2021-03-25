import React from "react";
import 'antd/dist/antd.css';
import './MemberModal.css';

import { Modal, Divider, Typography } from "antd";

const { Paragraph } = Typography;

class MemberModal extends React.Component {

	render() {

        return (
            <div id="modalBody">
                 <div id="imageContainer">
                        <img width="300px" height="300px" src={this.props.profilePicture} alt="profilePic"/>
                    </div>
                <Divider />
                    <span className="infoHeader">Instagram:</span> <Paragraph><a href={`https://www.instagram.com/${this.props.instagram.substring(1)}`} target="_blank">{this.props.instagram}</a></Paragraph>
                    <span className="infoHeader">FaceBook:</span> <Paragraph><a href={`https://www.facebook.com/${this.props.facebook.replace(/\s/g, '')}`} target="_blank">{this.props.facebook}</a></Paragraph>
            </div>
        )
  	}
}

export default MemberModal;
