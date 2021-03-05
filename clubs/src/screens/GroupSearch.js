import React from "react"
import './GroupSearch.css'
import 'antd/dist/antd.css';
import { Row, Col, Tabs, Typography, Divider, Button } from 'antd';
import { Link } from 'react-router-dom';

import NavBar from "../components/NavBar/NavBar";
import GroupCard from "../components/GroupSearch/GroupCard";
import SearchBar from "../components/GroupSearch/SearchBar";

const { TabPane } = Tabs;
const { Paragraph } = Typography;

class GroupSearch extends React.Component{

    state = {
        signedIn: this.props.signedIn,
    }

	render() {

        const { signedIn } = this.state;

        return(
            <div id="pageBG">
                <NavBar userType={signedIn ? "user": "none"}/>
                <div id="searchBody">
                    <SearchBar/>
                    <div className="category">
                        <Divider orientation="left">Category 1</Divider>
                        <Row gutter={10}>
                            <Col span={5}>
                                <GroupCard img={
                                    <img src="https://sneakernews.com/wp-content/uploads/2020/06/jordan-1-wmns-satin-snakeskin-CD0461-601-4.jpg" height="150px"/>} 
                                    title="Temp" description="Description Description Description "
                                />
                            </Col>
                            <Col span={5}>
                                <GroupCard img={
                                    <img src="https://sneakernews.com/wp-content/uploads/2020/06/jordan-1-wmns-satin-snakeskin-CD0461-601-4.jpg" height="150px"/>} 
                                    title="Temp" description="Description Description Description "
                                />
                            </Col>
                            <Col span={5}>
                                <GroupCard img={
                                    <img src="https://sneakernews.com/wp-content/uploads/2020/06/jordan-1-wmns-satin-snakeskin-CD0461-601-4.jpg" height="150px"/>} 
                                    title="Temp" description="Description Description Description "
                                />
                            </Col>
                            <Col span={5}>
                                <GroupCard img={
                                    <img src="https://sneakernews.com/wp-content/uploads/2020/06/jordan-1-wmns-satin-snakeskin-CD0461-601-4.jpg" height="150px"/>} 
                                    title="Temp" description="Description Description Description "
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }

}

export default GroupSearch;