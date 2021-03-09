import React from "react"
import 'antd/dist/antd.css';
import { Col } from 'antd';
import GroupCard from "./GroupCard";

class ClubCard extends React.Component {

    state = {
        oneClub: this.props.eachClub,
        signedIn: this.props.signedIn,
        clubsOfUser: this.props.clubsOfUser
    }
    render() {

        return (
            <div>
                <Col span={5}>
                    <GroupCard img={
                        <img
                            src={this.state.oneClub.banner}
                            height="150px" width="266.66px"/>} eachClub={this.state.oneClub}
                               signedIn={this.state.signedIn}
                               clubsOfUser={this.state.clubsOfUser}
                    />
                </Col>
            </div>
        )
    }
}

export default ClubCard;
