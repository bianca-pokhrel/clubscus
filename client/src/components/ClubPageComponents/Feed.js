import React from "react"
import './Feed.css'
import 'antd/dist/antd.css';
import PostContent from '../ClubPost/PostContent'
import { Button, Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons';

class Feed extends React.Component{
	constructor(props) {
		super(props)

		this.state = {
			ascending: -1,
			focus: -1,
			main_feed: 0,
			posts: []
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
	

	parseDate = date => {
		let t = date
		date = date.replace(" ", "T") + ":00"
		return Date.parse(date)
	}

	handleClick = e => {
		if (e.domEvent.target.innerHTML == "Ascending") {
			this.setState({ascending: 1})
		}else{
			this.setState({ascending: -1})
		}
   	};
   	
   	changeFocus = (id) => {
   		this.setState({focus: id})
   	}
   	
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
			return <PostContent post = {post} expand = {true} main_feed={this.state.main_feed} changeFocus={this.changeFocus}/>
		}
				
		const gen_all = () => {
			this.state.posts.sort((a,b) => (this.parseDate(a.date) < this.parseDate(b.date) ? -this.state.ascending : (this.parseDate(a.date) > this.parseDate(b.date) ? this.state.ascending : 0)))
			
			console.log("after sort", this.state.posts)

			return this.state.posts.map(p => {
				return <PostContent post = {p} expand = {false} main_feed={this.state.main_feed} changeFocus={this.changeFocus}/>
			})
		}
		const check_url = () => {
			if (this.state.focus != -1) {
				let id = this.state.focus
				
				for (let i = 0; i < this.state.posts.length; i++) {
					let post = this.state.posts[i]
					if (post._id == id) 
						return(
							<>
								<img src="/back-arrow.png" id = "back_button" onClick={() => {this.changeFocus(-1)}}/>
								<div id="feed_container">
									{gen(post)}
			    				</div>
							</>
						)
				}
			}
			return (<div>
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

export default Feed
