import React from "react"
import './AdminFeed.css'
import 'antd/dist/antd.css';
import PostContent from '../ClubPost/PostContent'
import { message, Form, Input, Button, Menu, Dropdown, Col } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import { Skeleton, Switch, List, Avatar } from 'antd';
import { parseDate } from "../../actions/DateParser";


const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 24 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
};

var key = 0
class AdminFeed extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            ascending: -1,
            focus: -1,
            main_feed: 0,
            posts: [],
            club: this.props.club
        }

        props.posts.map((post) => {
            const url = `/data/posts/${post}`;
            fetch(url)
                .then(res => {
                    if (res.status === 200) {
                        return res.json()
                    } else {
                        alert("Could not get students");
                    }
                }).then(p => {
                this.setState({posts: this.state.posts.concat(p)})
            })
        })
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
        console.log(this.props.club)
        let time = new Date()
        let newPostId
        const formatted_date = time.getFullYear() + '-' + ("0" + (time.getMonth() + 1)).slice(-2) + '-' + ( "0" + time.getDate()).slice(-2)
        this.setState({posts: this.state.posts.concat([{id: this.props.posts.length, title: values.user.title, text: values.user.post,
            likes: [], date: formatted_date, comments: [], image: ""}])})
        const url = `/data/posts`;
        const request = new Request(url, {
            method: "post",
            body: JSON.stringify({
                "group": this.props.club._id,
                "title" : values.user.title,
                "content": values.user.post,
                "date": formatted_date,
            }),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });

        fetch(request)
            .then(function (res) {
                if (res.status === 200) {
                    message.success('New Post Has Been Made');
                    return res.json()
                } else {
                    alert("Post was not madeS");
                }
            })
            .then(json => {
                console.log(json)
                newPostId = json._id
            })
            .catch(error => {
                console.log(error);
            });
        
        setTimeout(() => {
            console.log(newPostId)
            let newArrayOfPostIds = []
            newArrayOfPostIds = this.state.posts.map(post=>post._id)
            newArrayOfPostIds.pop()
            console.log(newArrayOfPostIds)
            newArrayOfPostIds.push(newPostId)
            console.log(newArrayOfPostIds)
            const request2 = new Request(`/data/groups/${this.props.club._id}`, {
                method: "put",
                body: JSON.stringify({
                    "posts" : newArrayOfPostIds
                }),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            });
            fetch(request2)
                .then(function (res) {
                    if (res.status === 200) {
                        console.log('New Post Has Been Added to Group');
                    }
                })
                .catch(error => {
                    console.log(error);
                });
            this.forceUpdate()
        }, 1300)
    };


    render() {
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
            return <PostContent post = {post} expand = {true} main_feed={this.state.main_feed} changeFocus={this.changeFocus} user={this.props.user}/>
        }

        const gen_all = () => {
			let sorted = this.state.posts.sort((a,b) => (parseDate(a.date) < parseDate(b.date) ? -this.state.ascending : (parseDate(a.date) > parseDate(b.date) ? this.state.ascending : 0)))
			
			return sorted.map(p => {
				return <PostContent key = {key++} post = {p} expand = {false} main_feed={this.state.main_feed} changeFocus={this.changeFocus} user={this.props.user}/>
			})
		}
        const check_url = () => {
            if (this.state.focus != -1) {
                let id = this.state.focus

                for (let i = 0; i < this.state.posts.length; i++) {
                    let post = this.state.posts[i]
                    if (post._id == id)
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

