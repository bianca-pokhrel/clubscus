import React from "react";
import 'antd/dist/antd.css';
import './AdminMemberList.css'
import { List, Avatar } from 'antd';


const members = [{id: 0, first_name: "Chuck", last_name: "Berry"}, {id: 1, first_name: "Louis", last_name: "Armstrong"}]

class MemberLinks extends React.Component {

    render(
    ) {
        return (
            <div id="admin_member_box">
                <List
                    itemLayout="horizontal"
                    dataSource={members}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="" />}
                                title={<h3>{item.first_name + " " + item.last_name}</h3>}
                                description="Group Member"
                            />
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}



export default MemberLinks;
