import React from "react"
import './PostContent.css'
import 'antd/dist/antd.css';
import { Button } from 'antd'
import CommentSection from './CommentSection'

class PostContent extends React.Component{
	likesClick = e => {
		if (this.props.post.likes.includes("user")) {
			this.props.post.likes = this.props.post.likes.filter(function(item) {
    				return item !== "user"
			})
		}else{
			this.props.post.likes.push("user")
		}
       	
       	this.forceUpdate()
   	};
	commentsClick = e => {		
		this.props.changeFocus(this.props.post.id)
   	};

	render() {
		const post = this.props.post
		const expand = this.props.expand
		
		const expand_comments = (expand) => {
			if (expand) return (<CommentSection post = {this.props.post}/>)
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
			if (this.props.post.likes.includes("user")) {
				return ("/heart_filled.png")
			}else{
				return ("/heart.png")
			}
		}
		
		const get_image = () => {
			if (post.image == "") return ("")
		
			return (
				<img src={post.image} id="post_image"/>
			)
		}
		
		const get_club_name = () => {
			if (this.props.main_feed == 0) return ("")
			
			return (<div id="post_top">
					<img id="post_banner" src={post.clubBanner}/>
					<p id="post_club_color">
						<a href="/clubs/club0">
							{post.clubName}
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
			    	<p className="post_text">{post.text}</p>
			       {get_image()}
			    	{expand_comments(expand)}
		    	</div>
		    </div>
        	)
    	}

}

export default PostContent;
