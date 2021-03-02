import React from "react"
import './CommentSection.css'
import 'antd/dist/antd.css';
import { Input, Button } from 'antd'

//Input id="comment_bar" placeholder="Enter comment here" size="large"
class CommentSection extends React.Component{
	render() {
		const post = this.props.post
		const comments = this.props.comments
		
		return(
			<div id="comment_container">
				<div id="comment_msg_container">
				    	<div id="comment_bar">
						<Input placeholder="Enter comment here" size="large"/>
				    	</div>
					<Button id="comment_input">
						<p>Post</p>
					</Button>
				</div>
				&nbsp;
		    	</div>
        	)
    	}

}

export default CommentSection;
