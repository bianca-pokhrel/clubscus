import React from "react"
import './MainFeed.css'
import 'antd/dist/antd.css';
import { Affix } from 'antd';

import Feed from "../components/ClubPageComponents/Feed"
import NavBar from "../components/NavBar/NavBar";
import CurGroups from "../components/ProfilePage/CurGroups";


class MainFeed extends React.Component{

	render() {

        return(
            <div id="pageBG">
                <NavBar userType="user"/>
                <div id="feedBody">
                    <div id="postSide">
                        <Feed posts={[]} main_feed={1} focus={-1}/>
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