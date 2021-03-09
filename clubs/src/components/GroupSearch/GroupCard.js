import React from "react";
import './GroupCard.css'
import 'antd/dist/antd.css';
import { Card } from 'antd';

const { Meta } = Card;

class GroupCard extends React.Component{

    state = {
        club : this.props.eachClub
    }

    render (){
        return(
            <div>
                <Card
                    hoverable
                    className="card"
                >
                    <a href={"clubs" + this.state.club.url}>{this.props.img}</a>
                    <Meta title={this.state.club.groupName} description={this.state.club.description} />
                </Card>
            </div>
        )
    }
}

export default GroupCard;
