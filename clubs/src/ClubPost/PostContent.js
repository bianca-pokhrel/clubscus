import React from "react"
import './PostContent.css'
import 'antd/dist/antd.css';
import { Button } from 'antd'
import CommentSection from './CommentSection'

class PostContent extends React.Component{
	likesClick = e => {
       	this.props.post.likes++
       	this.forceUpdate()
   	};
	commentsClick = e => {		
		window.location.href = "/post" + this.props.post.id;
   	};

	render() {
		const post = this.props.post
		const expand = this.props.expand
		
		const expand_comments = (expand) => {
			if (expand) return (<CommentSection post = {this.props.post}/>)
			else return (<div>
		    			&nbsp;
			    		<Button id="post_button" onClick={this.commentsClick}>
			    			<p id="post_button_text"><span class="grey">{post.comments.length} Comments</span></p>
			    			<img id="post_button_img" src="/comment.png"/>
			    		</Button>
		    			</div>
		    	)
		}
		
		const get_image = () => {
			if (post.image == "") return ("")
		
			return (
				<img src={post.image} id="post_image"/>
			)
		}
		
		return(
		    <div id="post_container">
		    	<Button id="post_button" onClick={this.likesClick}>
		    		<p id="post_button_text"><span class="red">{post.likes}</span></p>
		    		<img id="post_button_img" src="/heart.png"/>
		    	</Button>
		    	<div class="post_date">
		    		<p>{post.date}</p>
		    	</div>
		    	<h1 class="post_title">{post.title}</h1>
		    	<p class="post_text">{post.text}</p>
		       {get_image()}
		    	{expand_comments(expand)}
		    </div>
        	)
    	}

}

export default PostContent;
