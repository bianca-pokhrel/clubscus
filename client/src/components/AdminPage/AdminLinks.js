import React from "react";
import 'antd/dist/antd.css';
import './AdminLinks.css'
import {Button} from "antd";
import NotEditLinks from "./NotEditLinks";
import EditLinks from "./EditLinks";

class AdminLinks extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            openEditLink: false,
            club: this.props.club
        }
    }

    editStatusToTrue = () => {
        this.setState((state) => {
            return {openEditLink: true}
    });
    }

    editStatusToFalse = () => {
        this.setState((state) => {
            return {openEditLink: false}
        });
    }

    render() {
        let link_cover;
        if ( !this.state.openEditLink) {
            link_cover = <NotEditLinks links={this.props.links} changeStatusToTrue={() => {this.editStatusToTrue()}}/>
        } else {
            link_cover = <EditLinks links={this.props.links} club={this.props.club} changeStatusToFalse={() => {this.editStatusToFalse()}}/>
            console.log("here go")
        }
        return (
            <div id="link_box">
                {link_cover}
            </div>
        );
    }
}

export default AdminLinks;
