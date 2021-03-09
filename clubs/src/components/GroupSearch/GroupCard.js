import React from "react";
import './GroupCard.css'
import 'antd/dist/antd.css';
import { Card } from 'antd';

const { Meta } = Card;

class GroupCard extends React.Component{

    state = {
        club : this.props.eachClub,
        signedIn : this.props.signedIn,
        clubsOfUser: this.props.clubsOfUser
    }

    render (){
        return(
            <div>
                <Card
                    hoverable
                    className="card"
                >
                    <a href={(this.state.signedIn && this.state.clubsOfUser.includes(this.state.club))? "clubs" + this.state.club.url: "clubs" + this.state.club.url + "/about"}>{this.props.img}</a>
                    <Meta title={this.state.club.groupName} description={this.state.club.description} />
                </Card>
            </div>
        )
    }
}

export default GroupCard;
