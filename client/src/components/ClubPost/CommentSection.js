import React from "react"
import './CommentSection.css'
import 'antd/dist/antd.css';
import { Input, Button, Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import { parseDate } from "../../actions/DateParser";

var ascending = -1;
var num_to_view = 5;
var key = 0
class CommentSection extends React.Component{
	constructor(props) {
		super(props)

		this.state = {
			user: props.user,
			post: props.post,
			comments: props.post.comments,
		}

		this.state.comments.map((comment) => {
			const url = `/data/user/users/${comment.user}`;
			fetch(url)
				.then(res => {
					if (res.status === 200) {
						return res.json()
					} else {
						alert("Could not get students");
					}
				}).then(p => {
					comment.loaded_user = p
					this.setState({comments: this.state.comments})
				})
		})

	} 

	dropdown_click = e => {
		ascending = e.domEvent.target.innerHTML == "Ascending" ? 1 : -1			
		this.forceUpdate();
	};
	post_button = e => {
		let input = document.getElementById("comment_bar");
		if (input.value != "") {
			let time = new Date()

			let comment = {
				user: this.state.user._id,
				content: input.value,
				date: time.getFullYear() + "-" + (time.getMonth() < 10 ? "0" : "") + (time.getMonth() + 1) + "-" + (time.getDate() < 10 ? "0" : "") + (time.getDate())
					+ " " +  (time.getHours() < 10 ? "0" : "") + (time.getHours()) + ":" +  (time.getMinutes() < 10 ? "0" : "") + time.getMinutes()
		
			}

			this.state.comments.push(comment)

			const url = `/data/posts/${this.state.post._id}`;

			const request = new Request(url, {
				method: "put",
				body: JSON.stringify({"comments" : this.state.comments}),
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json"
				}
			});

			fetch(request)
				.then(function (res) {
					if (res.status === 200) {
						return res.json()
					} else {
						alert("Could not like post");
					}
				}).then(post => {
					console.log(input)
					comment.loaded_user = this.state.user
					this.forceUpdate()
				})
				.catch(error => {
					console.log(error);
				});

				console.log(input)				
				window.scrollTo(0,document.body.scrollHeight);
		}
	};
	show_more = () => {
		num_to_view += 5
		this.forceUpdate();
	};
	render() {
		const post = this.state.post
		const comments = this.state.comments		
		
		const show_more_comments_text = () => {
			if (num_to_view >= comments.length) {
				return ("")
			}
			return (
				<a id="show_more_comments" onClick={this.show_more}>
					View {comments.length - num_to_view} more comment{comments.length - num_to_view == 1 ? "" : "s"}
				</a>
			)
		}
		
		const gen_comments = () => {
			comments.sort((a,b) => (parseDate(a.date) < parseDate(b.date) ? -ascending : (parseDate(a.date) > parseDate(b.date) ? ascending : 0)))
			
			
			let list = []
			for (let i = 0; i < (num_to_view < comments.length ? num_to_view : comments.length); i++) {
				let c = comments[i]
				let c_u = c.loaded_user

				if (c_u == null) continue

				list.push(<div id="individual_comment_container">
						<div>
							<img id="comment_profile_pic" src={c_u.pic}/>
						</div>
						<div id="comment_content">
							<p> 
								<span id="comment_profile_name">{c_u.name} </span>
								<span>{c.content}</span>
							</p>
							<p id="comment_date">{c.date}</p>
						</div>
					</div>
				)
			}
			return list
		}
		
		const get_menu = () => {
			return(
				<Menu>
				    <Menu.Item onClick={this.dropdown_click}>
				      Ascending
				    </Menu.Item>
				    <Menu.Item onClick={this.dropdown_click}>
				      Descending
				    </Menu.Item>
				</Menu>
			);
		}
		
		return(
			<div id="comment_container">
				<div>
					<Dropdown id="comment_order_dropdown" overlay={get_menu()}>
					    <a>
					      {ascending == 1 ? "Ascending" : "Descending"} <DownOutlined />
					    </a>
					</Dropdown>
				</div>
				<div id="comments_list">
					{gen_comments()}
				</div>
				<div>
					{show_more_comments_text()}
				</div>
				<div>

					<Input id="comment_bar" key = {key++} placeholder="Enter comment here"/>
					<Button id="comment_input" onClick={this.post_button}>
						<p>Post</p>
					</Button>
				</div>
				&nbsp;
		    	</div>
        	)
    	}

}

export default CommentSection;
