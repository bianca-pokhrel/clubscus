import React from "react";
import 'antd/dist/antd.css';
import './MemberModal.css';

import { Modal, Divider, Typography } from "antd";

const { Paragraph } = Typography;

class MemberModal extends React.Component {


	render() {

        console.log(this.props.instagram)

        const getInstagram = () =>{
            if (this.props.instagram){
                return( 
                    <div>
                        <span className="infoHeader">Instagram:</span> <Paragraph><a href={`https://www.instagram.com/${this.props.instagram.substring(1)}`} target="_blank">{this.props.instagram}</a></Paragraph> 
                    </div>
                )
            }
        }
        const getFacebook = () => {
            if (this.props.facebook){
                return( 
                    <div>
                        <span className="infoHeader">FaceBook:</span> <Paragraph><a href={`https://www.facebook.com/${this.props.facebook.replace(/\s/g, '')}`} target="_blank">{this.props.facebook}</a></Paragraph>
                    </div>
                )
            }
        }
        const getLinkedin = () => {
            if (this.props.linkedin){
                return( 
                    <div>
                        <span className="infoHeader">LinkedIn:</span> <Paragraph><a href={`https://www.linkedin.com/in/${this.props.linkedin.replace(/\s/g, '')}`} target="_blank">{this.props.linkedin}</a></Paragraph>
                    </div>
                )
            }
        }

        return (
            <div id="modalBody">
                 <div id="imageContainer">
                        <img width="300px" height="300px" src={this.props.profilePicture} alt="profilePic"/>
                    </div>
                <Divider />
                    {getInstagram()}
                    {getFacebook()}
                    {getLinkedin()}
            </div>
        )
  	}
}

export default MemberModal;
