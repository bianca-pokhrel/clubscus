import React from "react";
import './CurGroups.css'

import { List, Tooltip } from 'antd';
import { CheckCircleTwoTone, UserAddOutlined } from '@ant-design/icons';

const groupData = [
    {groupName: "CSC309 Project Group", description: "This is a group for the project", url: "/", club: false},
    {groupName: "UofT Puppies Club", description: "Puppy stuff", url: "/", club: true},
];

class CurGroups extends React.Component{

    render (){
        return(
        <List
            bordered
            dataSource={groupData}
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