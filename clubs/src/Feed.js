import React from "react"
import './Feed.css'
import 'antd/dist/antd.css';
import PostContent from './ClubPost/PostContent'

var posts;
class Feed extends React.Component{
	posts = [{title: "Test Post", text: "This is a test post", image: "/post.jpg"}]
	
	render() {
		return(
		    <div>
		        {this.posts[0].title}
		    </div>
        	)
    	}

}

export default Feed;
