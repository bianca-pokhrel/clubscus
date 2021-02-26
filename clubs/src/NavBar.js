import React from "react";
import './NavBar.css'
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Row, Col } from 'antd';

const { SubMenu } = Menu;

class NavBar extends React.Component{
    state = {
        current: 'mail',
        signedIn: false,
        userType: ""
      };
    
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render (){
        const { current, signedIn, userType } = this.state;
        
        const navBarView = () => {
            if (!signedIn) {
                return (
                    // Not Signed In
                    <Menu className="menu" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                        <Menu.Item className="navBarOption" key="createAcc">Create an Account</Menu.Item>
                        <Menu.Item className="navBarOption" key="signIn">Sign In</Menu.Item>
                    </Menu>
                )
            } else {
                if (userType == "user") {
                    return(
                        // User
                        <Menu className="menu" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                            <SubMenu className="navBarOption" key="accountSubMenu" title="My Account">
                                <Menu.Item key="memberships">Group Memberships</Menu.Item>      
                                <Menu.Item key="pendingGroups">Pending Group Requests</Menu.Item>
                                <Menu.Item className="signOut" key="signOut">Sign Out</Menu.Item>
                            </SubMenu>
                            <SubMenu className="navBarOption" key="clubSubMenu" title="My Groups">
                                <Menu.Item key="temp1">Temp Group</Menu.Item>      
                                <Menu.Item key="temp2">Temp Club</Menu.Item>
                            </SubMenu>
                        </Menu>
                    )
                } else if (userType == "admin" || userType == "superadmin") {
                    return(
                        // Admin
                        <Menu className="menu" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">  
                            <Menu.Item className="navBarOption" key="signOut">Sign Out</Menu.Item>
                        </Menu>
                    )
                }
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
