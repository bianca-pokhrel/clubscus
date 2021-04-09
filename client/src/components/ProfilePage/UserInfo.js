import React from "react";
import './UserInfo.css'
import { Link } from 'react-router-dom';
import { Typography, Divider, Button, message } from 'antd';
import { editUser, logout } from '../../actions/user'

// User Image from https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png

const { Paragraph } = Typography;

class UserInfo extends React.Component{

    state = {
		name: this.props.app.state.currentUser.currentUser.name,
        instagram: this.props.app.state.currentUser.currentUser.instagram,
        facebook: this.props.app.state.currentUser.currentUser.facebook,
        linkedin: this.props.app.state.currentUser.currentUser.linkedin,
        profilePicture: this.props.app.state.currentUser.currentUser.pic
    };

    // From https://ant.design/components/upload/
    beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
          return isJpgOrPng
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
          return isLt2M
        }
        return true
      }

    // Upload Image code source: https://medium.com/@blturner3527/storing-images-in-your-database-with-base64-react-682f5f3921c2
    handlePictureChange = (evt) => {
        // editUser({pic: changePic}, this.props.app)
        console.log("Uploading");
        var reader = new FileReader();
        var file = evt.target.files[0];

        if (file == []){
            return
        }

        if(!this.beforeUpload(file)){
            return console.log("Could not accept image.")
        }

        reader.onload = (upload) => {
            this.setState({
                profilePicture: upload.target.result
            });
            console.log(this.state.profilePicture);
            editUser({pic: this.state.profilePicture}, this.props.app)
            message.success('Profile Picture Changed!');
        };
        reader.readAsDataURL(file);
        console.log("Uploaded");
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
    handleLogout = (app) => {
        message.success("Logged Out!")
        logout(app)
    }

    render (){

        console.log(this.props.app)

        const { name, instagram, facebook, linkedin, profilePicture } = this.state;
        const { username } = this.props.app.state.currentUser.currentUser;

        return(
            <div id="profileInfoContainer">
                    <div id="imageContainer">
                            <input type="file" name="image" id="image" accept=".jpeg, .png, .jpg" onChange = {this.handlePictureChange}/>
                            <label htmlFor="image">
                                <img id="pic" width="300px" height="300px" src={this.state.profilePicture} alt="Harold"/>
                            </label>
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
                            <Button id="LogOut" onClick={() => this.handleLogout(this.props.app)}>
                                Log Out
                            </Button>
                        </Link>
                    </div>
            </div>
        )
    }
}

export default UserInfo;