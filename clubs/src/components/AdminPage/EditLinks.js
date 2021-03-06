import React from "react";
import 'antd/dist/antd.css';
import './EditLinks.css'
import { message, Form, Input, Button, Select } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

class EditLinks extends React.Component {
    editLinks = () => {
        this.props.changeStatusToFalse()
    }
    addLink = (values: any) => {
        this.props.links.push({name: values.name, url: values.url})
        this.props.changeStatusToFalse()
        message.success('New Link Added');
    }
    render() {
        return(
            <div id="link_box">
                <div id="addLinksButtonCoinainer">
                    <Button shape="round" size="medium" onClick={this.editLinks}>Back</Button>
                </div>
                <Form {...layout}  name="control-hooks" onFinish={this.addLink}>
                    <Form.Item name="url" label="URL" rules={[{ required: true }]} initialValue="URL">
                        <Input />
                    </Form.Item>
                    <Form.Item name="name" label="Name" rules={[{ required: true }]} initialValue="name">
                        <Input />
                    </Form.Item>
                    <Form.Item >
                        <Button shape="round" type="primary" htmlType="submit" >
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default EditLinks
