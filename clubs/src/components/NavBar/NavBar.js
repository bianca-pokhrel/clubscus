import React from "react";
import './NavBar.css'
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const userData = {
    username: "DoeBoy99",
    name: "John Doe",
    instagram: "@john_doe",
    facebook: "John Doe",
    curGroups: [
        {	
            groupName: "CSC309 Project Group", 
            description: "This is a group for the project",
            banner: "banner.jpg", 
            founder: "Some guy",
            started: "2020/09/25",
            url: "/csc309projectgroup", 
    
            members: [
                {id: 0, first_name: "Suguru", last_name: "Jones"}, 
                {id: 1, first_name: "JJ", last_name: "Freleng"}
            ],
            links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}],
            posts: [],
            club: false
        },
        {
            groupName: "UofT Puppies Club", 
            description: "The puppies of UofT!",
            banner: "banner.jpg", 
            founder: "Some guy",
            started: "2020/09/26",
            url: "/uoftpuppiesclub", 
    
            members: [
                {id: 0, first_name: "Milo", last_name: "Jones"}, 
                {id: 1, first_name: "Rocky", last_name: "Freleng"}
            ],
            links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}],
            posts: [],
            club: true
        },
        {
            groupName: "Attack On Titan Fanclub", 
            description: "Talk about some weeb stuff",
            banner: "banner.jpg", 
            founder: "Some guy",
            started: "2020/09/28",
            url: "/attackontitanfanclub", 
    
            members: [
                {id: 0, first_name: "Eren", last_name: "Jones"}, 
                {id: 1, first_name: "Mikasa", last_name: "Freleng"}
            ],
            links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}],
            posts: [],
            club: false
        },
    ]
}

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
                <Menu.Item key="signOut" id="signOutColor"><Link to="/"/>Sign Out</Menu.Item>
            )
        }

        const getUserGroups = () => {
            let temp = userData.curGroups.map((group) => {
                return (<Menu.Item>{group.groupName}<Link to={`/clubs${group.url}`}/></Menu.Item>)
            })
            return temp;
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
                            <Menu.Item key="memberships">Account Info<Link to="/user/profile"/></Menu.Item>      
                            {signOutButton()}
                        </SubMenu>
                        <SubMenu className="navBarOption" key="clubSubMenu" title="My Groups">
                            {getUserGroups()}
                            <Menu.Item key="findGroup" id="findGroupColor"><Link to="/user"/>+ Find a Group</Menu.Item>
                        </SubMenu>
                    </Menu>
                )
            } else if (userType == "admin") {
                return(
                    // Admin
                    <Menu className="menu" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                        <SubMenu className="navBarOption" key="groupSubMenu" title="Group Account">
                            {signOutButton()}
                        </SubMenu>
                        {/* <SubMenu className="navBarOption" key="createSubMenu" title="Create"> */}
                        {/*   <Menu.Item key="createPosts">Create a Post<Link to="/admin"/></Menu.Item> */}
                        {/* </SubMenu>  */}
                    </Menu>
                )
            } else if (userType == "superadmin") {
                return (
                    // Super admin
                    <Menu className="menu" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                        <SubMenu className="navBarOption" key="accountSubMenu" title="Admin Account">
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
                        {/* Only make logo a link if user  */}
                        <h2 className ="header">{userType=="user" || userType=="none"? <Link className ="header" to={userType=="user"? "/user/feed": "/"}>Clubcus</Link>:"Clubcus"}</h2>
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
