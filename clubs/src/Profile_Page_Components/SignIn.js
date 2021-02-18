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

    render (){
        return(
            <div className="signInContainer">
                <div className="headerContainer">
                    <h3>Sign-In</h3>
                </div>
                <div className="inputContainer">
                    <Form
                        name="basic"
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

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

export default SignIn;