import React from "react"
import './MainFeed.css'
import 'antd/dist/antd.css';
import { Affix } from 'antd';

import NavBar from "../components/NavBar/NavBar";
import CurGroups from "../components/ProfilePage/CurGroups";


class MainFeed extends React.Component{

	render() {

        return(
            <div id="pageBG">
                <NavBar userType="user"/>
                <div id="feedBody">
                    <div id="postSide">
                        {/* FEED COMPONENT GOES HERE */}
                        <div style={{border:"1px solid black", height:"1200px"}}>Feed goes here</div>
                    </div>
                    <Affix offsetTop={120}>
                        <div id="groupContainer">
                            <CurGroups myGroups={true}/>
                        </div>
                    </Affix>
                </div>
            </div>
        )
    }

}

export default MainFeed;