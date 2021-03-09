import React from "react"
import './GroupSearch.css'
import 'antd/dist/antd.css';
import { Row, Col, Tabs, Typography, Divider, Button } from 'antd';
import { Link } from 'react-router-dom';

import NavBar from "../components/NavBar/NavBar";
import GroupCard from "../components/GroupSearch/GroupCard";
import SearchBar from "../components/GroupSearch/SearchBar";
import SiteBanner from "../components/GroupSearch/SiteBanner";
import ClubCard from "../components/GroupSearch/ClubCard";

const { TabPane } = Tabs;
const { Paragraph } = Typography;

class GroupSearch extends React.Component{

    state = {
        signedIn: this.props.signedIn,
        clubsData: this.props.clubs
    }


	render() {


        const { signedIn } = this.state.signedIn;


        const eachClubCard = this.state.clubsData.map(club =>
                <ClubCard eachClub={club} />
            )

        return(
            <div id="pageBG">
                {signedIn? <NavBar userType="user"/>: <SiteBanner/>}
                <div id="searchBody">
                    <SearchBar/>
                    <div className="category">
                        <Divider orientation="left">Category 1</Divider>
                        <Row gutter={5} >
                        {eachClubCard}
                        </Row>
                    </div>
                </div>
            </div>
        )
    }

}

export default GroupSearch;
