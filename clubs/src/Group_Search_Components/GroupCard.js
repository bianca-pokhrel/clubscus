import React from "react";
import './GroupCard.css'
import 'antd/dist/antd.css';
import { Card } from 'antd';

const { Meta } = Card;

class GroupCard extends React.Component{

    render (){
        return(
            <div>
                <Card
                    hoverable
                    className="card"
                    cover={this.props.img}
                >
                    <Meta title={this.props.title} description={this.props.description} />
                </Card>
            </div>
        )
    }
}

export default GroupCard;