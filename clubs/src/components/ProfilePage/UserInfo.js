import React from "react";
import './UserInfo.css'

import { Link } from 'react-router-dom';
import { Typography, Divider, Button } from 'antd';

const { Paragraph } = Typography;

// Temp User Info, Would be called from server
let userData = {
    username: "DoeBoy99",
    name: "John Doe",
    instagram: "@john_doe",
    facebook: "John Doe",
}


class UserInfo extends React.Component{

    state = {
        username: userData.username,
		name: userData.name,
        instagram: userData.instagram,
        facebook: userData.facebook,
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

        const { username, name, instagram, facebook } = this.state;

        return(
            <div id="profileInfoContainer">
                <input type="file" name="image" id="image" accept="image/*" />
                    <div id="preview-wrapper">
                        <div id="preview"></div>
                        <button
                            id="upload-button"
                            aria-label="upload image"
                            aria-describedby="image"
                        >
                            🙂
                        </button>
                    </div>
                <Divider />
                    <span className="infoHeader">Username:</span> <Paragraph className="infoLine">{username}</Paragraph>
                    <span className="infoHeader">Display Name:</span> <Paragraph className="infoLine" editable={{ onChange: this.handleNameChange }}>{name}</Paragraph>
                    <span className="infoHeader">Instagram:</span> <Paragraph className="infoLine" editable={{ onChange: this.handleInstaChange }}>{instagram}</Paragraph>
                    <span className="infoHeader">FaceBook:</span> <Paragraph className="infoLine" editable={{ onChange: this.handleFaceBookChange }}>{facebook}</Paragraph>
                <Divider />
                    <Link to="/">
                        <Button id="LogOut">
                            Log Out
                        </Button>
                    </Link>
            </div>
        )
    }
}

export default UserInfo;