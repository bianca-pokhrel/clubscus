import React from "react"
import './MainFeed.css'
import 'antd/dist/antd.css';
import { Affix } from 'antd';

import Feed from "../components/ClubPageComponents/Feed"
import NavBar from "../components/NavBar/NavBar";
import CurGroups from "../components/ProfilePage/CurGroups";

class MainFeed extends React.Component{
    constructor(props) {
        super(props) 


        this.state = {
            user: props.user,
            posts: [],
            loaded: 0
        }

        this.state.user.userGroups.map(group => {
            const url = `/data/groups/${group}`;
			fetch(url)
				.then(res => {
					if (res.status === 200) {
						return res.json()
					} else {
						alert("Could not get groups");
					}
				}).then(g => {
					this.setState({posts: this.state.posts.concat(g.posts), loaded: this.state.loaded + 1})
				})  
        })

    }
	render() {
        if (this.state.loaded != this.state.user.userGroups.length) return ("")
        return(
            <div id="pageBG">
                <NavBar user={this.state.user}/>
                <div id="feedBody">
                    <div id="postSide">
                        <Feed posts={this.state.posts} main_feed={1} focus={-1} user={this.state.user}/>
                    </div>
                    {<Affix offsetTop={120}>
                        <div id="groupContainer">
                            <CurGroups app={this.props.app} myGroups={true}/>
                        </div>
                    </Affix>}
                </div>
            </div>
        )
    }

}

export default MainFeed;