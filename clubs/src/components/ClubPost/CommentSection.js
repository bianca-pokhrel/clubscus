import React from "react"
import './CommentSection.css'
import 'antd/dist/antd.css';
import { Input, Button, Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons';

var ascending = 1;
var num_to_view = 5;
class CommentSection extends React.Component{
	dropdown_click = e => {
			ascending = e.domEvent.target.innerHTML == "Ascending" ? 1 : -1			
			this.forceUpdate();
	};
	post_button = e => {
			let input = document.getElementById("comment_bar");
			if (input.value != "") {
				this.props.post.comments.push({id: 0, msg: input.value, date: "2020-01-12"})
				console.log(input)
				this.forceUpdate();
				
				window.scrollTo(0,document.body.scrollHeight);
			}
	};
	show_more = () => {
		num_to_view += 5
		this.forceUpdate();
	};
	render() {
		const post = this.props.post
		const comments = post.comments		
		
		
		
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
			comments.sort((a,b) => (Date.parse(a.date) < Date.parse(b.date) ? -ascending : 				(Date.parse(a.date) > Date.parse(b.date) ? ascending : 0)))
			
			let list = []
			for (let i = 0; i < (num_to_view < comments.length ? num_to_view : comments.length); i++) {
				let c = comments[i]
				list.push(<div id="individual_comment_container">
						<div>
							<img id="comment_profile_pic" src="profile-pic.png"/>
						</div>
						<div id="comment_content">
							<p> 
								<span id="comment_profile_name">Clark Gable </span>
								<span>{c.msg}</span>
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

					<Input id="comment_bar" placeholder="Enter comment here"/>
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
