import React from "react"
import './AdminFeed.css'
import 'antd/dist/antd.css';
import PostContent from '../ClubPost/PostContent'
import { message, Form, Input, Button, Menu, Dropdown, Col } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import { Skeleton, Switch, List, Avatar } from 'antd';


const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 24 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
};


class AdminFeed extends React.Component{
    state = {
        ascending: -1,
        focus: -1,
        main_feed: 0
    }
    handleClick = e => {
        if (e.domEvent.target.innerHTML == "Ascending") {
            this.setState({ascending: 1})
        }else{
            this.setState({ascending: -1})
        }
        console.log(this.state)
    };

    changeFocus = (id) => {
        this.setState({focus: id})
    }

    addPost = (values) => {
        let time = new Date()
        this.props.posts.push({id: this.props.posts.length, title: values.user.title, text: values.user.post, likes: [], date: time.getFullYear() + '-' + ("0" + (time.getMonth() + 1)).slice(-2) + '-' + ( "0" + time.getDate()).slice(-2), comments: [], image: ""})
        console.log(this.props.posts)
        message.success('New Post Has Been Made');
        this.forceUpdate()
    };


    render() {
        this.state.posts = this.props.posts
        this.state.main_feed = this.props.main_feed


        const get_menu = () => {
            return(
                <Menu>
                    <Menu.Item onClick={this.handleClick}>
                        Ascending
                    </Menu.Item>
                    <Menu.Item onClick={this.handleClick}>
                        Descending
                    </Menu.Item>
                </Menu>
            );
        }

        const gen = (post) => {
            return <PostContent data post = {post} expand = {true} main_feed={this.state.main_feed} changeFocus={this.changeFocus}/>
        }

        const gen_all = () => {
            this.state.posts.sort((a,b) => (Date.parse(a.date) < Date.parse(b.date) ? -this.state.ascending : 				(Date.parse(a.date) > Date.parse(b.date) ? this.state.ascending : 0)))

            return this.state.posts.map(p => {
                return <PostContent post = {p} expand = {false} main_feed={this.state.main_feed} changeFocus={this.changeFocus}/>
            })
        }
        const check_url = () => {
            if (this.state.focus != -1) {
                let id = this.state.focus

                for (let i = 0; i < this.state.posts.length; i++) {
                    let post = this.state.posts[i]
                    if (post.id == id)
                        return(
                            <div id="feed_container">
                                {gen(post)}
                            </div>
                        )
                }
            }
            return (
                <div>
                    <div id="new_post_container">
                        <Form {...layout} name="nest-messages" onFinish={this.addPost} validateMessages={validateMessages}>
                            <Form.Item  name={['user', 'title']} label="Title" rules={[{ required: true }]} >
                                <Input  />
                            </Form.Item>
                            <Form.Item name={['user', 'post']} label="Post">
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
                            <Button type="primary" shape="round"  htmlType="submit">Post</Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <div id="feed_sorting_container">
                        <Dropdown overlay={get_menu()}>
                            <a id="feed_sorting_color">
                                {this.state.ascending == 1 ? "Ascending" : "Descending"} <DownOutlined/>
                            </a>
                        </Dropdown>
                    </div>
                    <div id="feed_container">
                        {gen_all()}
                    </div>
                </div>
            )
        }

        return(
            <div>
                {check_url()}
            </div>
        )
    }

}

export default AdminFeed

