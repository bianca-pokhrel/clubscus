import React from "react";
import './CurGroups.css'

import { List, Tooltip } from 'antd';
import { CheckCircleTwoTone, UserAddOutlined } from '@ant-design/icons';

const groupData = [
    {	
		groupName: "CSC309 Project Group", 
		description: "This is a group for the project",
		banner: "banner.jpg", 
		founder: "Some guy",
		started: "2020/09/25",
		url: "/csc309projectgroup", 

		members: [
			{id: 0, first_name: "Suguru", last_name: "Jones"}, 
			{id: 1, first_name: "JJ", last_name: "Freleng"}
		],
		links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}],
		posts: [],
		club: false
	},
    {
		groupName: "UofT Puppies Club", 
		description: "The puppies of UofT!",
		banner: "banner.jpg", 
		founder: "Some guy",
		started: "2020/09/26",
		url: "/uoftpuppiesclub", 

		members: [
			{id: 0, first_name: "Milo", last_name: "Jones"}, 
			{id: 1, first_name: "Rocky", last_name: "Freleng"}
		],
		links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}],
		posts: [],
		club: true
	},
    {
		groupName: "Attack On Titan Fanclub", 
		description: "Talk about some weeb stuff",
		banner: "banner.jpg", 
		founder: "Some guy",
		started: "2020/09/28",
		url: "/attackontitanfanclub", 

		members: [
			{id: 0, first_name: "Eren", last_name: "Jones"}, 
			{id: 1, first_name: "Mikasa", last_name: "Freleng"}
		],
		links: [{name: "Test", url: "test"}, {name: "About Us", url: "about"}],
		posts: [],
		club: false
	},
];

const groupRequestData = [
    {groupName: "UofT Full Grown Dogs Club", description: "For when your puppy stuff grows up", url: "/uoftfullgrowndogsclubs", club: true},
    {groupName: "CSC309 Project Group 10", description: "This is a cooler group for the project", url: "/csc309projectgroup10", club: false},
    {groupName: "Anime Club", description: "The official anime club of UofT", url: "/animeclub", club: true},
    {groupName: "FML300 Winter 2021 Study Group", description: "Study group for LEC001", url: "/fml300winter2021studygroup", club: false},
];

class CurGroups extends React.Component{
    
    state = {
        myGroups: this.props.myGroups
    }

    render (){

        const { myGroups } = this.state;

        return(
        <List
            bordered
            dataSource={myGroups ? groupData: groupRequestData}
            renderItem={group => (
            <List.Item>
                <List.Item.Meta
                avatar={group.club ? <Tooltip title="Official Club"><CheckCircleTwoTone /></Tooltip>: <Tooltip title="Student Group"><UserAddOutlined /></Tooltip>}
                title={<a href={`/clubs${group.url}`}>{group.groupName}</a>}
                description={group.description}
                />
            </List.Item>
            )}
        />
        )
    }
}

export default CurGroups;