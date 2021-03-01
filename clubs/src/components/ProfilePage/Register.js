import React from "react";
import { Form, Input, Button, Select, message } from 'antd';
import './Register.css';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

const { Option } = Select;

class Register extends React.Component{

    state = {
        isAdmin: false,
        passwordMatch: false,
        redirectFor: ""
    }

    onFinish = (values) => {
        console.log('Success:', values);
        this.checkPasswordMatch(values)
        if (this.state.passwordMatch){
            if(this.state.isAdmin){
                //GO TO ADMIN PAGE
                this.setState({redirectFor:"Admin"});
            } else {
                //Go TO USER MAIN PAGE
                this.setState({redirectFor:"User"});
            }
        } else {
            message.error('Your Passwords Do Not Match');
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
            this.setState({passwordMatch:true})
        } else {
            console.log('Passwords do not match')
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
            return <Redirect to="/" push={true} />
        }
        if (this.state.redirectFor == "Admin") {
            return <Redirect to="/" push={true} />
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
                            <Input placeholder="Username"/>
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
                        Already Have An Account?  <Link to="/SignIn">Sign In!</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;