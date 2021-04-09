import React from "react"
import './ProfilePage.css'
import 'antd/dist/antd.css';
import { Row, Col, Tabs, Typography, Divider, Button } from 'antd';
import { UnorderedListOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import NavBar from "../components/NavBar/NavBar";
import UserInfo from "../components/ProfilePage/UserInfo";
import CurGroups from "../components/ProfilePage/CurGroups";

const { TabPane } = Tabs;
const { Paragraph } = Typography;

class ProfilePage extends React.Component{

	render() {

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
                        <CurGroups app={this.props.app} myGroups={true}/>
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
                        <CurGroups app={this.props.app} myGroups={false}/>
                    </TabPane>
                </Tabs>
            )
        }

        return(
            <div id="pageBG">
                <NavBar app={this.props.app} userType="user"/>
                <div id="profileBody">
                    <Row>
                        <Col span={6}>
                            <UserInfo app={this.props.app}/>
                        </Col>
                        <Col span={18}>
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