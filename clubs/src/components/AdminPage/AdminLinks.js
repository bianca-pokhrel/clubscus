import React from "react";
import 'antd/dist/antd.css';
import './AdminLinks.css'
import {Avatar, List} from "antd";

var links;
links = [{name: "Instagram", url: "test"}, {name: "Facebook", url: "test"}, {name: "About Us", url: "about"}]

class ClubLinks extends React.Component {

    render() {
        return (
            <div id="admin_link_box">
                <List
                    itemLayout="horizontal"
                    dataSource={links}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<a href={item.url}>{item.name}</a>}
                            />
                        </List.Item>
                    )}
                />

            </div>
        );
    }
}

export default ClubLinks;
