import React from "react";
import { Form, Input, Button, message } from 'antd';
import './SignIn.css';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { login } from "../../actions/user"

class SignIn extends React.Component{

    state = {
        signedIn: false,
        userType: "",
        username: null,
        password: null,
    }

    onFinish = (values) => {
        console.log('Fields Filled');
        this.setState({ username: values.username})
        this.setState({ password: values.password})
        login(this.state.username, this.state.password, this.props.app)
        setTimeout(() => {
            if(this.props.app.state.currentUser) {
                this.checkUserType(this.props.app.state.currentUser.currentUser.userType)
            } else {
                console.log('Non-valid user')
                this.setState({signedIn:false})
                message.error("User Does Not Exist")
            }}, 300)
    };
    
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    checkUserType = (userType) => {
        this.setState({signedIn:true})
        if (userType == "superadmin") {
            console.log('superadmin signed in')
            this.setState({userType:"superAdmin"})
            message.success("Super Admin Logged In")
        } else if (userType == "admin") {
            console.log('admin signed in')
            this.setState({userType:"admin"})
            message.success("Group Admin Logged In")
        } else if (userType == "user") {
            console.log('user signed in')
            this.setState({userType:"user"})
            message.success("Logged In!")
        }
    }

    render (){

        let {signedIn, userType} = this.state;

        // REDIRECT FOR ACCOUNT TYPES
        if (signedIn) {
            if (userType == "user"){
                window.location.href = "/user/feed"
            } else if (userType == "admin"){
                window.location.href = "/admin"
            } else if (userType == "superAdmin"){
                window.location.href = "/superadmin"
            } 
        }

        const signInPrompt = () => {
            return (
                <div>
                    <div id="inputContainer">
                        <Form
                            name="signIn"
                            className="signInForm"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                            >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input placeholder="Username"/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                place
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password placeholder="Password"/>
                            </Form.Item>
                            <Form.Item>
                                <Button id="LogIn" type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                        <div id="register">
                            <Link to="/register">Don't Have An Account? Register for One!</Link>
                        </div>
                    </div>
                </div>
            )
        }

        return(
            <div id="signInContainer">
                <div id="headerContainerS">
                    <h1>Log In To Your Account</h1>
                </div>
                {signInPrompt()}
            </div>
        )
    }
}

export default SignIn;