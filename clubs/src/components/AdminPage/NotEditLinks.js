import React from "react";
import 'antd/dist/antd.css';
import './NotEditLinks.css'
import {Button} from "antd";

class NotEditLinks extends React.Component {
    editLinks = () => {
        this.props.changeStatusToTrue()
    }
    render(){
        return(
            <div id="link_box">
                <div id="addLinksButtonCoinainer">
                    <Button shape="round" size="medium" onClick={this.editLinks}>Add</Button>
                </div>
                {this.props.links.map(link => (
                    <div id="link_container">
                        <img id="links_image" src="/link.jpg"/>
                        <p><a href={link.url} id="link_text">{link.name}</a></p>
                    </div>
                ))}
            </div>
        );
    }
}

export default NotEditLinks
