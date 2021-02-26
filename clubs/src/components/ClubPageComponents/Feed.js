import React from "react"
import './Feed.css'
import 'antd/dist/antd.css';
import PostContent from '../ClubPost/PostContent'
import { Button } from 'antd'

class Feed extends React.Component{
	state = {
		ascending: -1,
		focus: -1,
		posts: [{id: 0, title: "Test Post", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '2003-11-01', image: "/post.jpg", comments: [], likes: 0},{id: 1, title: "Test Post", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '2020-11-01', image: "", comments: [], likes: 0},{id: 2, title: "Test Post", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", date: '2012-11-01', image: "/post.jpg", comments: [], likes: 0}]
	}
	handleClick = e => {
		if (e.target.innerText == "Ascending") {
			this.setState({ascending: 1})
		}else{
			this.setState({ascending: -1})
		}
   	};
   	
	render() {
		const gen = (post) => {
			return <PostContent data post = {post} expand = {true}/>
		}
				
		const gen_all = () => {
			this.state.posts.sort((a,b) => (Date.parse(a.date) < Date.parse(b.date) ? -this.state.ascending : 				(Date.parse(a.date) > Date.parse(b.date) ? this.state.ascending : 0)))
			
			return this.state.posts.map(p => {
				return <PostContent post = {p} expand = {false}/>
			})
		}
		const check_url = () => {
			if (window.location.pathname.startsWith("/post")) {
				let id = parseInt(window.location.pathname.substring(5,window.location.pathname.length))
				
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
			return (<div>
				<div class="feed_sorting_container">
		    			<Button id="feed_sort_button" onClick={this.handleClick}>
		    				Descending
		    			</Button>
		    			<Button id="feed_sort_button" onClick={this.handleClick}>
		    				Ascending
		    			</Button>
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

export default Feed
