import React from "react"
import './GroupSearch.css'
import 'antd/dist/antd.css';
import { Row, Col, Tabs, Typography, Divider, Button } from 'antd';

import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/GroupSearch/SearchBar";
import SiteBanner from "../components/GroupSearch/SiteBanner";
import ClubCard from "../components/GroupSearch/ClubCard";
import clubsData from "../clubsData";


class GroupSearch extends React.Component{

    constructor(props) {
		super(props)

		this.state = {
            signedIn: this.props.signedIn,
            clubsData: [],
            user: props.user,
		}
		
        const url = `/data/groups`;
            fetch(url)
                .then(res => {
                    if (res.status === 200) {
                        return res.json()
                    } else {
                        alert("Could not get groups");
                    }
                }).then(p => {
                    this.setState({clubsData: this.state.clubsData.concat(p)})
                    console.log(this.state.clubsData)
                })
	}


	render() {

        const { user } = this.state;

        const eachClubCard1 = this.state.clubsData.slice(0,6).map(club =>
                <ClubCard eachClub={club} signedIn={this.state.signedIn} clubsOfUser={this.props.app ? this.props.app.state.currentUser.userGroups: null}/>
            )
        const eachClubCard2 = this.state.clubsData.slice(6,11).map(club =>
            <ClubCard eachClub={club} signedIn={this.state.signedIn} clubsOfUser={this.props.app ? this.props.app.state.currentUser.userGroups: null}/>
        )


        return(
            <div id="pageBG">
                {this.state.signedIn? <NavBar user={user}/>: <SiteBanner/>}
                <div id="searchBody">
                    {/* <SearchBar/> */}
                    <div className="category">
                        <Divider orientation="left">Popular Groups</Divider>
                        <Row gutter={5} >
                        {eachClubCard1}
                        </Row>
                    </div>
                    <div className="category">
                        <Divider orientation="left">New Groups</Divider>
                        <Row gutter={5} >
                        {eachClubCard2}
                        </Row>
                    </div>
                </div>
            </div>
        )
    }

}

export default GroupSearch;
