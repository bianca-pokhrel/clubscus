import React from "react"
import './GroupSearch.css'
import 'antd/dist/antd.css';
import { Row, Col, Tabs, Typography, Divider, Button } from 'antd';

import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/GroupSearch/SearchBar";
import SiteBanner from "../components/GroupSearch/SiteBanner";
import ClubCard from "../components/GroupSearch/ClubCard";


class GroupSearch extends React.Component{

    state = {
        signedIn: this.props.signedIn,
        clubsData: this.props.clubs,
        clubsOfUser: this.props.clubsOfUser
    }


	render() {


        const eachClubCard = this.state.clubsData.map(club =>
                <ClubCard eachClub={club} signedIn={this.state.signedIn} clubsOfUser={this.state.clubsOfUser}/>
            )


        return(
            <div id="pageBG">
                {this.state.signedIn? <NavBar userType="user"/>: <SiteBanner/>}
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
