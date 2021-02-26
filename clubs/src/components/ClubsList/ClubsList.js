import React from "react";
import {
    Typography,
    Card,
    Row,
    Col
} from "antd";

//import './SuperAdminComponents.css'

const { Meta } = Card;
const { Text } = Typography;


const generateCard = (club) => {
    return (
        <Card
            hoverable
            //onClick={}
            //cover={}
        >
        
        <Text> {club} </Text>

        </Card>
    );
};

const generateGrid = (clubs) => {
    return (
        <Row gutter={[32,48]}>
            {clubs.map((club) => {
                return <Col span={6}>{generateCard(club)} </Col>;
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