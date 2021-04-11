import React from "react";
import './GroupCard.css'
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { Tooltip } from 'antd';
import { CheckCircleTwoTone, UserAddOutlined } from '@ant-design/icons';

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
                <Link to={(this.state.signedIn && this.state.clubsOfUser.includes(this.state.club._id))? "/clubs/" + this.state.club._id: "/clubs/" + this.state.club._id + "/about"}>
                    <Card
                        hoverable
                        className="card"
                    >
                        <div id="imgContainer">{this.props.img}</div>
                        <Meta 
                            avatar={this.state.club.officiated ? <Tooltip title="Official Club"><CheckCircleTwoTone /></Tooltip>: <Tooltip title="Student Group"><UserAddOutlined /></Tooltip>}
                            title={this.state.club.name} 
                            description={this.state.club.description} 
                        />
                    </Card>
                </Link>
            </div>
        )
    }
}

export default GroupCard;
