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
                        <Feed posts={[
                                {id: 0, title: "Puppy Post Friday", text: "Puppy Appreciation Post", image:"https://static.stacker.com/s3fs-public/styles/properly_sized_image/s3/2020-03/English%20Lab%20Puppy%20%281%29_0.png", date: '2021-03-06', comments: [{id: 0, msg: "Wow! Great Post!", date: "2020-01-12"}], likes: ["Tom","Dick", "Larry"]},
                                {id: 1, title: "Puppy Post Saturday", text: "Everyday is puppy appreciation lol.", image:"https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg", date: '2021-03-07', comments: [], likes: ["Tom"]},
                            ]} main_feed={1} focus={-1}/>
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