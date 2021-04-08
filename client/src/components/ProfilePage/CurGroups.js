import React from "react";
import './CurGroups.css'
import { Link } from 'react-router-dom';
import { List, Tooltip, Empty, Button } from 'antd';
import { CheckCircleTwoTone, UserAddOutlined } from '@ant-design/icons';

// Image from https://static.thenounproject.com/png/1298324-200.png

import ENV from '../../config'
const API_HOST = ENV.api_host

class CurGroups extends React.Component{
	constructor(props) {
		super(props)

		this.state = {
			myGroups: this.props.myGroups,
			userGroups: [],
			reqUserGroups: []
		}
		
		this.props.app.state.currentUser.currentUser.userGroups.map((group) => {
            // API HOST AND ENV Stuff here to call localhost:5000
			const url = `${API_HOST}/data/groups/${group}`;
			fetch(url)
				.then(res => {
					if (res.status === 200) {
						return res.json()
					} else {
						alert("Could not get group");
					}
				}).then(p => {
					this.setState({userGroups: this.state.userGroups.concat(p)})
				})
		})
		this.props.app.state.currentUser.currentUser.reqUserGroups.map((group) => {
            // API HOST AND ENV Stuff here to call localhost:5000
			const url = `${API_HOST}/data/groups/${group}`;
			fetch(url)
				.then(res => {
					if (res.status === 200) {
						return res.json()
					} else {
						alert("Could not get group");
					}
				}).then(p => {
					this.setState({reqUserGroups: this.state.reqUserGroups.concat(p)})
				})
		})
	}

    render (){

        const { myGroups, userGroups, reqUserGroups } = this.state;

		const noGroups = () =>{
				console.log("fucntion ran")
				return(
					<Empty
						image="https://static.thenounproject.com/png/1298324-200.png"
						imageStyle={{
						height: 60,
						}}
						description={
						<span>
							{myGroups? "Oh No! You're not in any Groups!": "You do not have any pending requests."}
						</span>
						}
					>
						<Link to="/user/groupsearch">
                            <Button>
                                Search For a Group!
                            </Button>
                        </Link>
					</Empty>
				)
		}

		const groupList = (myGroups) => {
			return(
				<List
					bordered
					dataSource={myGroups ? userGroups: reqUserGroups}
					renderItem={group => (
					<List.Item>
						<List.Item.Meta
						avatar={group.officiated ? <Tooltip title="Official Club"><CheckCircleTwoTone /></Tooltip>: <Tooltip title="Student Group"><UserAddOutlined /></Tooltip>}
						title={<a href={`/clubs/${group._id}`}>{group.name}</a>}
						description={group.description}
						/>
					</List.Item>
					)}
				/>
			)
		}

        return(
			<div id="curGroupsContainer">
				{((myGroups && userGroups.length == 0) || (!myGroups && reqUserGroups.length == 0))? noGroups(): groupList(myGroups)}
			</div>
        )
    }
}

export default CurGroups;