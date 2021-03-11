import React from "react";
import './UserInfo.css'
import { Link } from 'react-router-dom';
import { Typography, Divider, Button } from 'antd';

const { Paragraph } = Typography;

// Temp User Info, Would be called from server
let userData = {
    username: "SirCartier",
    name: "JJ Kanu",
    instagram: "@jj_kanu",
    facebook: "JJ Kanu",
    profilePicture: "https://avatars.githubusercontent.com/u/62584273?s=460&u=8279555aeefd86b8fba6398f02f1dfa8fa51c5cf&v=4"
}


class UserInfo extends React.Component{

    state = {
        username: userData.username,
		name: userData.name,
        instagram: userData.instagram,
        facebook: userData.facebook,
        profilePicture: userData.profilePicture
    };

    handleNameChange = (changeName) => {
        this.setState({name:changeName})
    }
    handleInstaChange = (changeInsta) => {
        this.setState({instagram:changeInsta})
    }
    handleFaceBookChange = (changeFB) => {
        this.setState({facebook:changeFB})
    }

    render (){

        const { username, name, instagram, facebook, profilePicture } = this.state;

        return(
            <div id="profileInfoContainer">
                    <div id="imageContainer">
                        <input type="file" name="image" id="image" accept="image/*" />
                        <img width="300px" height="300px" src={profilePicture} alt="Harold"/>
                    </div>
                <Divider />
                    <span className="infoHeader">Username:</span> <Paragraph className="infoLine">{username}</Paragraph>
                    <span className="infoHeader">Display Name:</span> <Paragraph className="infoLine" editable={{ onChange: this.handleNameChange }}>{name}</Paragraph>
                    <span className="infoHeader">Instagram:</span> 
                    <Paragraph className="infoLine" editable={{ onChange: this.handleInstaChange }}>
                        <a href={`https://www.instagram.com/${instagram.substring(1)}`} target="_blank">{instagram}</a>
                    </Paragraph>
                    <span className="infoHeader">FaceBook:</span> 
                    <Paragraph className="infoLine" editable={{ onChange: this.handleFaceBookChange }}>
                        <a href={`https://www.facebook.com/${facebook.replace(/\s/g, '')}`} target="_blank">{facebook}</a>
                    </Paragraph>
                <Divider />
                    <div id="logOutContainer">
                        <Link to="/">
                            <Button id="LogOut">
                                Log Out
                            </Button>
                        </Link>
                    </div>
            </div>
        )
    }
}

export default UserInfo;