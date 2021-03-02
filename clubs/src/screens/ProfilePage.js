// How to Upload Image: https://dev.to/bugs_bunny/upload-user-avatar-with-a-custom-upload-button-j6l

import React from "react"
import './ProfilePage.css'
import 'antd/dist/antd.css';
import { Row, Col, Tabs, Typography, Divider, Button } from 'antd';
import { UnorderedListOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import NavBar from "../components/NavBar/NavBar";
import CurGroups from "../components/ProfilePage/CurGroups";

const { TabPane } = Tabs;
const { Paragraph } = Typography;

class ProfilePage extends React.Component{
	state = {
		name: "John Doe",
        instagram: "@john_doe",
        facebook: "John Doe",
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
    
	render() {
		const { name, instagram, facebook } = this.state;

        const checkSignedIn = () => {
            return (
                <div class="container">
                    <CurGroups/>
                </div>
            )
        }

        // Group Tabs Section
        const groupTabs = () => {
            return(
                <Tabs defaultActiveKey="1">
                    <TabPane
                        tab={
                            <span>
                                <UsergroupAddOutlined />
                                My Groups
                            </span>
                        }
                        key="1"
                    >
                        {checkSignedIn()}
                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <UnorderedListOutlined />
                                Pending Group Requests
                            </span>
                        }
                        key="2"
                    >
                        Tab 2
                    </TabPane>
                </Tabs>
            )
        }

        return(
            <div>
                <NavBar/>
                <div id="profileBody">
                    <Row>
                        <Col span={8}>
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
                                    <p>Username: user</p>
                                    Name: <Paragraph className="infoLine" editable={{ onChange: this.handleNameChange }}>{name}</Paragraph>
                                    Instagram: <Paragraph className="infoLine" editable={{ onChange: this.handleInstaChange }}>{instagram}</Paragraph>
                                    FaceBook: <Paragraph className="infoLine" editable={{ onChange: this.handleFaceBookChange }}>{facebook}</Paragraph>
                                <Divider />
                                    <Link to="/">
                                        <Button id="LogOut">
                                            Log Out
                                        </Button>
                                    </Link>
                            </div>
                        </Col>
                        <Col span={16}>
                            <div id="groupTabsContainer">
                                {groupTabs()}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }

}

export default ProfilePage;