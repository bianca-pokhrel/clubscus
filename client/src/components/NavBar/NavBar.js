import React from "react";
import './NavBar.css'
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Row, Col, message } from 'antd';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/user'

const { SubMenu } = Menu;

class NavBar extends React.Component{
    constructor(props) {
		super(props)

		this.state = {
			user: this.props.user,
            userGroups: []
		}
		
		if (this.state.user != null) {
            this.state.user.userGroups.map((group) => {
			const url = `/data/groups/${group}`;
                fetch(url)
                    .then(res => {
                        if (res.status === 200) {
                            return res.json()
                        } else {
                            alert("Could not get group");
                        }
                    }).then(p => {
                        this.setState({userGroups: this.state.userGroups.concat(p)})
                    })
            })
        }
	}

    
    // state = {
    //     current: 'mail',
    //     userType: this.props.userType,
    //     userGroups: []
    //   };
    
    handleClick = e => {
        // console.log('click ', e);
        this.setState({ current: e.key });
    };

    handleLogOut = () => {

        message.success("Logged Out!")
        logout(this.props.app)
        window.location.href = "/"
    }

    render (){
        const { current } = this.state;
        let userType = this.state.user == null ? "none" : this.state.user.userType
        const signOutButton = () => {
            return (
                <Menu.Item key="signOut" id="signOutColor" onClick={this.handleLogOut}><Link to="/"/>Sign Out</Menu.Item>
            )
        }

        const getUserGroups = () => {
            console.log(this.state.userGroups)
            let temp = this.state.userGroups.map((group) => {
                return (<Menu.Item>{group.name}<Link to={`/clubs/${group._id}`}/></Menu.Item>)
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
                            <Menu.Item key="findGroup" id="findGroupColor"><Link to="/user/groupsearch"/>+ Find a Group</Menu.Item>
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
