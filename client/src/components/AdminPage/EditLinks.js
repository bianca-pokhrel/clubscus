import React from "react";
import 'antd/dist/antd.css';
import './EditLinks.css'
import { message, Form, Input, Button, Select } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

class EditLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            club: this.props.club,
            links: this.props.links
        }
    }


    editLinks = () => {
        this.props.changeStatusToFalse()
    }

    addLink = (values) => {
        //this.props.links.push({name: values.name, url: values.url})
        const updated_links = this.state.links.concat([{name: values.name, url: values.url}])
        this.setState({links: updated_links})
        const url = `/data/groups/${this.state.club._id}`;
        const request = new Request(url, {
            method: "put",
            body: JSON.stringify({"links" : updated_links}),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });

        fetch(request)
            .then(function (res) {
                if (res.status === 200) {
                    this.props.changeStatusToFalse()
                    message.success('New Link Added');
                    return res.json()
                } else {
                    alert("Could not add a new link");
                }
            })
            .catch(error => {
                console.log(error);
            });
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
