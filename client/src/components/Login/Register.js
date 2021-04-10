import React from "react";
import { Form, Input, Button, Select, message } from 'antd';
import './Register.css';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { register } from "../../actions/user";

import ENV from '../../config'
const API_HOST = ENV.api_host

const { Option } = Select;

class Register extends React.Component{

    state = {
        isAdmin: false,
        passwordMatch: false,
        redirectFor: "",
        username: "",
        password: "",
        name: "",
    }

    onFinish = (values) => {
        console.log('Fields Filled');
        this.checkPasswordMatch(values)
        if (this.state.passwordMatch){
            register(this.state.username, this.state.password, this.state.isAdmin? "admin":"user", this.state.name, this.props.app)
            setTimeout(()=>{
                if(this.state.isAdmin){
                    //MAKE NEW GROUP && GO TO ADMIN PAGE
                    // API HOST AND ENV Stuff here to call localhost:5000
                    const url = new Request(`${API_HOST}/data/groups/`, {
                        method: "post",
                        body: JSON.stringify({
                            name: values.groupName,
                            aboutUs: `This is the group known as ${values.groupName}`,
                            founder: this.props.app.state.currentUser.name,
                            admin: this.props.app.state.currentUser._id
                        }),
                        headers: {
                            Accept: "application/json, text/plain, */*",
                            "Content-Type": "application/json"
                        }
                    });
                    fetch(url)
                        .then(res => {
                            if (res.status === 200) {
                                return res.json()
                            } else {
                                alert("Could not get group");
                            }
                        })
                        // .then(p => {
                        //     this.setState({userGroups: this.state.userGroups.concat(p)})
                        // })

                    message.success("New Group Created!");
                    this.setState({redirectFor:"Admin"});
                } else {
                    //Go TO USER MAIN PAGE
                    message.success("Account Created!");
                    this.setState({redirectFor:"User"});
                }
            }, 700)
        }
    };
    
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    changeAccountType = (value) => {
        if (value == "Admin") {
            this.setState({isAdmin:true});
        }
        else {
            this.setState({isAdmin:false});
        }
    }

    checkPasswordMatch = (values) => {
        if (values.password1 == values.password2) {
            console.log('Passwords match')
            if (values.password1.length < 4){
                console.log('Password too short')
                message.error('Passwords Should Be At Least 4 Characters');
            } else {
                this.setState({passwordMatch:true})
                this.setState({username: values.username})
                this.setState({name: values.name})
                this.setState({password: values.password1})
            }
        } else {
            console.log('Passwords do not match')
            message.error('Your Passwords Do Not Match');
            this.setState({passwordMatch:false})
        }
    }

    render (){

        const groupName = () =>{
            if(this.state.isAdmin){
                return (
                    <Form.Item
                                name="groupname"
                                rules={[{ required: true, message: 'Please input the Group Name' }]}
                            >
                        <Input placeholder="Group Name"/>
                    </Form.Item>
                )
            }
        }

        // Redirect Filled Form To Next Page. ADD URLS HERE WHEN MADE
        if (this.state.redirectFor == "User") {
            window.location.href = "/user/feed"
        }
        if (this.state.redirectFor == "Admin") {
            window.location.href = "/admin"
        }

        return(
            <div id="RegisterContainer">
                <div id="headerContainerR">
                    <h1>Register</h1>
                </div>
                <div id="inputContainer">
                    <Form
                        name="Register"
                        className="RegisterForm"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        >
                        <Form.Item
                            name="account_type"
                            rules={[{ required: true, message: 'Please Pick A Type Of Account' }]}
                        >
                            <Select defaultValue="Choose A Type Of Account" onChange={this.changeAccountType}>
                                <Option value="User">User Account</Option>
                                <Option value="Admin">Group Admin</Option>
                            </Select>
                        </Form.Item>
                        {groupName()}
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder="Username (What You Use to Sign In)"/>
                        </Form.Item>
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Please input your display name!' }]}
                        >
                            <Input placeholder="Display Name (What Other See)"/>
                        </Form.Item>
                        <Form.Item
                            name="password1"
                            place
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder="Password"/>
                        </Form.Item>
                        <Form.Item
                            name="password2"
                            place
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder="Re-Enter Password"/>
                        </Form.Item>
                        <Form.Item>
                            <Button id="LogIn" type="primary" htmlType="submit">
                                Create Account
                            </Button>
                        </Form.Item>
                    </Form>
                    <div id="signIn">
                        <Link to="/signin">Already Have An Account? Sign In!</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;