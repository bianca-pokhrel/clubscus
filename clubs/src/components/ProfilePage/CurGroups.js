import React from "react";
import './CurGroups.css'

import { List, Typography } from 'antd';

const groupData = [
    {groupName: "CSC309 Project Group", description: "This is a group for the project", url: "/", club: false},
    {groupName: "UofT Puppies Club", description: "Puppy stuff", url: "/", club: true},
];

class CurGroups extends React.Component{

    render (){
        return(
        //    <div id="curGroupsContainer">
        //        <div id="headerContainer">
        //             <h3>Joined Groups</h3>
        //        </div>
        //        <div id="groupListContainer">
        //             <ul>
        //                 <li className="listedGroup">CSC309 Project Group</li>
        //                 <li className="listedClub">Uoft Cooking Club</li>
        //             </ul>
        //        </div>
        //    </div>
        <List
            bordered
            dataSource={groupData}
            renderItem={group => (
            <List.Item>
                <List.Item.Meta
                // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
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