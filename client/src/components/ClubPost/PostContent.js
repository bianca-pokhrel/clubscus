import React from "react"
import './PostContent.css'
import 'antd/dist/antd.css';
import { Button } from 'antd'
import CommentSection from './CommentSection'

class PostContent extends React.Component{
	constructor(props) {
		super(props)

		this.state = {
			post: props.post,
			expand: props.expand,
			changeFocus: props.changeFocus,
			main_feed: props.main_feed,
			user: props.user,
			post_group: null
		}

		const url = `/data/groups/${this.state.post.group}`;

		// Since this is a GET request, simply call fetch on the URL
		fetch(url)
			.then(res => {
				if (res.status === 200) {
					// return a promise that resolves with the JSON body
					return res.json();
				} else {
					console.log("Could not get group");
				}
			}).then(json => {
				let groups = json
				this.setState({post_group: json})
			})
	}

	update_likes = (new_likes) => {
		const url = `/data/posts/${this.state.post._id}`;

		const request = new Request(url, {
			method: "put",
			body: JSON.stringify({"likes" : new_likes}),
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
				this.setState({post: post})
			})
			.catch(error => {
				console.log(error);
			});
	}

	likesClick = e => {
		let user = this.state.user

		const index = this.state.post.likes.indexOf(user._id);
		if (index > -1) {
			this.state.post.likes.splice(index, 1)
		}else{
			this.state.post.likes.push(user._id)
		}
	
		this.update_likes(this.state.post.likes)
	};
	commentsClick = e => {		
		this.state.changeFocus(this.state.post._id)
   	};

	render() {
		if (this.state.post_group == null) return ("")
		const { post, expand, post_group} = this.state
		
		const expand_comments = (expand) => {
			if (expand) return (<CommentSection post = {post} user={this.state.user}/>)
			else return (<div>
		    			&nbsp;
			    		<Button className="post_button" onClick={this.commentsClick}>
			    			<p className="post_button_text"><span className="grey">{post.comments.length} Comment{post.comments.length == 1 ? "" : "s"}</span></p>
			    			<img className="post_button_img" src="/comment.png"/>
			    		</Button>
		    			</div>
		    	)
		}
		
		const get_liked = () => {
			let user = this.state.user
			if (post.likes.includes(user._id)) {
				return ("/heart_filled.png")
			}else{
				return ("/heart.png")
			}
		}
		
		const get_image = () => {
			if (post.image == null) return ("")
		
			return (
				<img src={post.image} id="post_image"/>
			)
		}
		
		const get_club_name = () => {
			if (this.state.main_feed == 0) return ("")
			
			return (<div id="post_top">
					<img id="post_banner" src={post_group.banner == null ? "https://undark.org/wp-content/uploads/2020/01/GettyImages-154932300.jpg" : post_group.banner}/>
					<p id="post_club_color">
						<a href={`/clubs/${post_group._id}`}>
							{post_group.name}
						</a>
					</p>
				</div>
			)
		}
		
		return(
		    <div id="post_container">
		    	{get_club_name()}
		    	<Button className="post_button" onClick={this.likesClick}>
		    		<p className="post_button_text"><span className="red">{post.likes.length}</span></p>
		    		<img className="post_button_img" src={get_liked()}/>
		    	</Button>
		    	<div>
			    	<div className="post_date">
			    		<p>{post.date}</p>
			    	</div>
			    	<h1 className="post_title">{post.title}</h1>
			    	<p className="post_text">{post.content}</p>
			       {get_image()}
			    	{expand_comments(expand)}
		    	</div>
		    </div>
        	)
    	}

}

export default PostContent;
