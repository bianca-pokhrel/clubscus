import React from "react";
import './CurGroups.css'

import { List, Tooltip } from 'antd';
import { CheckCircleTwoTone, UserAddOutlined } from '@ant-design/icons';

const groupData = [
    {groupName: "CSC309 Project Group", description: "This is a group for the project", url: "/", club: false},
    {groupName: "UofT Puppies Club", description: "The puppies of UofT!", url: "/", club: true},
    {groupName: "Attack On Titan Fanclub", description: "Talk about some weeb stuff", url: "/", club: false},
];

const groupRequestData = [
    {groupName: "UofT Full Grown Dogs Club", description: "For when your puppy stuff grows up", url: "/", club: true},
    {groupName: "CSC309 Project Group 10", description: "This is a cooler group for the project", url: "/", club: false},
    {groupName: "Anime Club", description: "The official anime club of UofT", url: "/", club: true},
    {groupName: "FML300 Winter 2021 Study Group", description: "Study group for LEC001", url: "/", club: false},
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
                title={<a href={group.url}>{group.groupName}</a>}
                description={group.description}
                />
            </List.Item>
            )}
        />
        )
    }
}

export default CurGroups;