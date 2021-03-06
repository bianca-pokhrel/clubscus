import React from "react";
import 'antd/dist/antd.css';
import './AdminLinks.css'
import {Button} from "antd";
import {Link} from "react-router-dom";

var links;
class AdminLinks extends React.Component {
    render() {
        const links = this.props.links
        return (
            <div id="link_box">
                {links.map(link => (
                    <div id="link_container">
                        <img id="links_image" src="/link.jpg"/>
                        <p><a href={link.url} id="link_text">{link.name}</a></p>
                        <div id="linkEditButton">
                            <Button shape="round" size="medium" href="/">Edit</Button>
                        </div>
                    </div>
                ))}

            </div>
        );
    }
}

export default AdminLinks;
