import React from "react";
import { Form, Input, Button, message } from 'antd';
import './SignIn.css';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class SignIn extends React.Component{

    state = {
        signedIn: false,
        userType: ""
    }

    onFinish = (values) => {
        console.log('Success:', values);
        this.checkInfo(values)
    };
    
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    checkInfo = (values) => {
        this.setState({signedIn:true})
        if (values.username == "superadmin" && values.password == "superadmin") {
            console.log('superadmin signed in')
            this.setState({userType:"superAdmin"})
            message.success("Super Admin Logged In")
        } else if (values.username == "admin" && values.password == "admin") {
            console.log('admin signed in')
            this.setState({userType:"admin"})
            message.success("Group Admin Logged In")
        } else if (values.username == "user" && values.password == "user") {
            console.log('user signed in')
            this.setState({userType:"user"})
            message.success("Logged In!")
        } else {
            console.log('non-valid user')
            this.setState({signedIn:false})
            message.error("Non Valid Information")
        }
    }

    render (){

        let {signedIn, userType} = this.state;

        // REDIRECT FOR ACCOUNT TYPES
        if (signedIn) {
            if (userType == "user"){
                return <Redirect to="/user" push={true} />
            } else if (userType == "admin"){
                return <Redirect to="/" push={true} />
            } else if (userType == "superAdmin"){
                return <Redirect to="/superadmin" push={true} />
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