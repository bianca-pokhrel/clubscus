import React from "react";
import './NavBar.css'
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

class NavBar extends React.Component{
    
    state = {
        current: 'mail',
        userType: this.props.userType
      };
    
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render (){
        const { current, userType } = this.state;

        const signOutButton = () => {
            return (
                <Menu.Item key="signOut" id="signOutColor"><Link to="/" />Sign Out</Menu.Item>
            )
        }

        const navBarView = () => {
            if (userType == "none"){
                return (
                    // Not Signed In
                    <Menu className="menu" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                        <Menu.Item className="navBarOption" key="createAcc">Create an Account<Link to="/Register"/></Menu.Item>
                        <Menu.Item className="navBarOption" key="signIn">Sign In<Link to="/SignIn"/></Menu.Item>
                    </Menu>
                )
            } else if (userType == "user") {
                return(
                    // User
                    <Menu className="menu" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                        <SubMenu className="navBarOption" key="accountSubMenu" title="My Account">
                            <Menu.Item key="memberships">Account Info<Link to="/UserProfile"/></Menu.Item>      
                            {signOutButton()}
                        </SubMenu>
                        <SubMenu className="navBarOption" key="clubSubMenu" title="My Groups">
                            <Menu.Item key="temp1">Temp Group</Menu.Item>      
                            <Menu.Item key="temp2">Temp Club</Menu.Item>
                        </SubMenu>
                    </Menu>
                )
            } else if (userType == "admin") {
                return(
                    // Admin
                    <Menu className="menu" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                        <SubMenu className="navBarOption" key="groupSubMenu" title="Group Account">
                            <Menu.Item key="pendingGroups">Pending Group Requests</Menu.Item>
                            {signOutButton()}
                        </SubMenu>
                        <SubMenu className="navBarOption" key="createSubMenu" title="Create">
                            <Menu.Item key="createPosts">Create a Post</Menu.Item>
                            <Menu.Item key="createLinks">Add a Link</Menu.Item>
                            <Menu.Item key="pendingOfficiates">Send an Officiate Request</Menu.Item>
                        </SubMenu>
                    </Menu>
                )
            } else if (userType == "superadmin") {
                return (
                    // Super admin
                    <Menu className="menu" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                        <SubMenu className="navBarOption" key="accountSubMenu" title="Admin Account">
                            <Menu.Item key="pendingOfficiates">Pending Officiate Requests</Menu.Item>
                            {signOutButton()}
                        </SubMenu>
                    </Menu>
                )
            }
        }

        return(
            <div className="navBarContainer">
                <Row>
                    <Col span={6}>
                        <h2 className ="header">Lorem Impsum</h2>
                    </Col>
                    <Col span={18}>
                        {navBarView()}     
                    </Col>
                </Row>
            </div>
        )
    }

}

export default NavBar;
