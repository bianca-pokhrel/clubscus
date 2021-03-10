import React from "react";
import './GroupCard.css'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

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
                <Link to={(this.state.signedIn && this.state.clubsOfUser.includes(this.state.club))? "clubs" + this.state.club.url: "clubs" + this.state.club.url + "/about"}>
                    <Card
                        hoverable
                        className="card"
                    >
                        {this.props.img}
                        <Meta title={this.state.club.groupName} description={this.state.club.description} />
                    </Card>
                </Link>
            </div>
        )
    }
}

export default GroupCard;
