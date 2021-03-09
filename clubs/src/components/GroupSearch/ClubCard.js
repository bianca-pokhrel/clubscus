import React from "react"
import 'antd/dist/antd.css';
import { Row, Col, Tabs, Typography, Divider, Button } from 'antd';
import GroupCard from "./GroupCard";

class ClubCard extends React.Component {

    state = {
        oneClub: this.props.eachClub
    }
    render() {

        return (
            <div>
                <Col span={5}>
                    <GroupCard img={
                        <img
                            src={this.state.oneClub.banner}
                            height="150px"/>} eachClub={this.state.oneClub}
                    />
                </Col>
            </div>
        )
    }
}

export default ClubCard;
