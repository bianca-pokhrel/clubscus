import React from "react";
import { Form, Input, Button } from 'antd';
import './SignIn.css';

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
        } else if (values.username == "admin" && values.password == "admin") {
            console.log('admin signed in')
            this.setState({userType:"admin"})
        } else if (values.username == "user" && values.password == "user") {
            console.log('user signed in')
            this.setState({userType:"user"})
        } else {
            console.log('non-valid user')
            this.setState({signedIn:false})
            this.onFinishFailed("Not a valid userName")
        }
    }

    handleSignOut = (e) => {
        this.setState({signedIn:false});
        this.setState({userType:""});
        console.log('signed out')
    }

    render (){

        let {signedIn} = this.state;

        const signedInStatus = () => {
            if (!signedIn) {
                return (
                    <div>
                        <div id="headerContainer">
                            <h3>Sign-In</h3>
                        </div>
                        <div id="inputContainer">
                            <Form
                                name="signIn"
                                className="signInForm"
                                initialValues={{ remember: true }}
                                onFinish={this.onFinish}
                                onFinishFailed={this.onFinishFailed}
                                >
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item className="formBottom">
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                            <a href="url">Don't Have An Account? Register for One!</a>
                        </div>
                    </div>
                )
              } else {
                return (
                    <div id="signedIn">
                        <h1 className="message">
                            Signed In!
                        </h1>
                        <Button className="signOutButton" onClick={this.handleSignOut}>Sign Out</Button>
                    </div>
                )
              }
        }

        return(
            <div id="signInContainer">
                {signedInStatus()}
            </div>
        )
    }
}

export default SignIn;