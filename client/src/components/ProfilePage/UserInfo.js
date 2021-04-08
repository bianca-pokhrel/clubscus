import React from "react";
import './UserInfo.css'
import { Link } from 'react-router-dom';
import { Typography, Divider, Button } from 'antd';
import { editUser, logout } from '../../actions/user'

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
		name: this.props.app.state.currentUser.currentUser.name,
        instagram: this.props.app.state.currentUser.currentUser.instagram,
        facebook: this.props.app.state.currentUser.currentUser.facebook,
        linkedin: this.props.app.state.currentUser.currentUser.linkedin,
        profilePicture: userData.profilePicture
    };

    handlePictureChange = (changePic) => {
        editUser({pic: changePic}, this.props.app)
    }
    handleNameChange = (changeName) => {
        this.setState({name: changeName})
        editUser({name: changeName}, this.props.app)
        console.log(this.props.app.state.currentUser.currentUser.name)
    }
    handleInstaChange = (changeInsta) => {
        this.setState({instagram: changeInsta})
        editUser({instagram: changeInsta}, this.props.app)
    }
    handleFaceBookChange = (changeFB) => {
        this.setState({facebook: changeFB})
        editUser({facebook: changeFB}, this.props.app)
    }
    handleLinkedInChange = (changeLinked) => {
        this.setState({linkedin: changeLinked})
        editUser({linkedin: changeLinked}, this.props.app)
    }

    render (){

        console.log(this.props.app)

        const { name, instagram, facebook, linkedin, profilePicture } = this.state;
        const { username } = this.props.app.state.currentUser.currentUser;

        return(
            <div id="profileInfoContainer">
                    <div id="imageContainer">
                        <input type="file" name="image" id="image" accept="image/*" />
                        <img width="300px" height="300px" src={this.state.profilePicture} alt="Harold"/>
                    </div>
                <Divider />
                    <span className="infoHeader">Username:</span> <Paragraph className="infoLine">{username}</Paragraph>
                    <span className="infoHeader">Display Name:</span> <Paragraph className="infoLine" editable={{ onChange: this.handleNameChange }}>{name}</Paragraph>
                    <span className="infoHeader">Instagram:</span> 
                    
                    <Paragraph className="infoLine" editable={{ onChange: this.handleInstaChange }}>
                        {instagram ? 
                            <a href={instagram.charAt(0) == "@"? `https://www.instagram.com/${instagram.substring(1)}`: `https://www.instagram.com/${instagram}`} target="_blank">{instagram}</a> 
                            : <span>@</span> 
                        }
                    </Paragraph>
                    <span className="infoHeader">FaceBook:</span> 
                    <Paragraph className="infoLine" editable={{ onChange: this.handleFaceBookChange }}>
                        {facebook ? 
                            <a href={`https://www.facebook.com/${facebook.replace(/\s/g, '')}`} target="_blank">{facebook}</a>
                            : <span> </span> 
                        }
                    </Paragraph>
                    <span className="infoHeader">LinkedIn:</span> 
                    <Paragraph className="infoLine" editable={{ onChange: this.handleLinkedInChange }}>
                        {linkedin ? 
                            <a href={`https://www.linkedin.com/in/${linkedin.replace(/\s/g, '')}`} target="_blank">{linkedin}</a>
                            : <span> </span> 
                        }
                    </Paragraph>
                <Divider />
                    <div id="logOutContainer">
                        <Link to="/">
                            <Button id="LogOut" onClick={() => logout(this.props.app)}>
                                Log Out
                            </Button>
                        </Link>
                    </div>
            </div>
        )
    }
}

export default UserInfo;