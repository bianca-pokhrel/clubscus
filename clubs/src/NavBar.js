// import React from "react";
// import './NavBar.css'
// import AppBar from "@material-ui/core/AppBar";
// import {StylesProvider } from '@material-ui/core/styles';
// import { Button, Toolbar } from "@material-ui/core";
// import IconButton from '@material-ui/core/IconButton';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import GroupIcon from '@material-ui/icons/Group';
// // import { Link } from 'react-router-dom';

// // const theme = createMuiTheme({
// //     palette: {
// //         primary: {
// //             main: '#00204E'
// //         }
// //     }
// // });

// class NavBar extends React.Component{
// // function NavBar(){
    


//     handleMenu = (event) => {
//         console.log(event)
//         // setAnchorEl(event.currentTarget);
//     };

//     render (){
//         return(
//             <StylesProvider injectFirst>
//                 {/* // <div className="navBarContainer">
//                 //     <p className="logo">Lorem Ipsum</p>
//                 //     <div className="navBarRight">
//                 //         <Button>My Groups</Button>
//                 //         <Button>My Account</Button>
//                 //     </div>
//                 // </div> */}
                
//                 <AppBar position="static" color="primary">
//                     <Toolbar variant="dense">
//                         <h2 className="header">Lorem Ipsum</h2>
//                         <div className="navBarRight">
//                             <IconButton
//                                 aria-label="account of current user"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 onClick={this.handleMenu}
//                                 color="inherit"
//                             >
//                                 <GroupIcon />
//                             </IconButton>
//                             <IconButton
//                                 aria-label="account of current user"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 onClick={this.handleMenu}
//                                 color="inherit"
//                             >
//                                 <AccountCircle />
//                             </IconButton>
//                             {/* <Menu
//                                 id="menu-appbar"
//                                 anchorEl={anchorEl}
//                                 anchorOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                                 }}
//                                 keepMounted
//                                 transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                                 }}
//                                 open={open}
//                                 onClose={handleClose}
//                             >
//                                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                                 <MenuItem onClick={handleClose}>My account</MenuItem>
//                             </Menu> */}
//                         </div>
//                     </Toolbar>
//                 </AppBar>
//             </StylesProvider>
//         )
//     }

// }

// export default NavBar;

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
                        <Menu className="menu" inlineIndent={0} onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
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