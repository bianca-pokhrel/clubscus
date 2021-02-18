import React from "react";
import './NavBar.css'
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Row, Col } from 'antd';

const { SubMenu } = Menu;

class NavBar extends React.Component{
    state = {
        current: 'mail',
      };
    
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render (){
        const { current } = this.state;
        return(
            <div className="navBarContainer">
                <Row>
                    <Col span={6}>
                            <h2 className ="header">Lorem Impsum</h2>
                    </Col>
                    <Col span={18}>
                        <Menu className="menu" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                                {/* <SubMenu className="subMenu" key="SubMenu2" title="My Account">
                                    <Menu.Item className="signOut" key="setting:3">Log In / Register</Menu.Item>
                                </SubMenu> */}
                                <SubMenu className="subMenu" key="SubMenu2" title="My Account">
                                    <Menu.Item key="setting:1">Group Memberships</Menu.Item>      
                                    <Menu.Item key="setting:2">Pending Group Requests</Menu.Item>
                                    <Menu.Item className="signOut" key="setting:3">Sign Out</Menu.Item>
                                </SubMenu>
                                <SubMenu className="subMenu" key="SubMenu1" title="My Groups">
                                    <Menu.Item key="setting:1">Temp Group</Menu.Item>      
                                    <Menu.Item key="setting:2">Temp Club</Menu.Item>
                                </SubMenu>
                        </Menu>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default NavBar;