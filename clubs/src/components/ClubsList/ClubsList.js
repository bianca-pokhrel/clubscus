import React, { useEffect } from "react";
import {
    Typography,
    Card,
    Row,
    Col
} from "antd";

import './ClubsList.css'

const { Meta } = Card;
const { Text } = Typography;

const generateCard = (club) => {
    return (
        <Card
            hoverable
            //onClick={}
            cover={
                <img 
                    id="cardImage"
                    alt="example"
                    src={club["image"]}/>
            }
        >
        
            <Meta>description={club["description"]}</Meta>
            <Text > {club["title"]} </Text>

        </Card>
    );
};

const generateGrid = (clubs) => {
    return (
        <Row gutter={[32,48]}>
            {clubs.map((club, i) => {
                return <Col span={6} key={i}>{generateCard(club)} </Col>;
            })}
        </Row>    
    );
};


class ClubsList extends React.Component {
    
    render() {
        //console.log(this.props.clubs);
        return <div>{generateGrid(this.props.clubs)}</div>;
    }
}

export default ClubsList;