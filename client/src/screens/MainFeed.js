import React from "react"
import './MainFeed.css'
import 'antd/dist/antd.css';
import { Affix } from 'antd';

import Feed from "../components/ClubPageComponents/Feed"
import NavBar from "../components/NavBar/NavBar";
import CurGroups from "../components/ProfilePage/CurGroups";

var user_posts = [
    {clubName: "UofT Puppies Club", clubBanner: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/various-dogs-horizontal-web-banner-susan-schmitz.jpg", id: 0, title: "Puppy Post Friday", text: "Puppy Appreciation Post", image:"https://static.stacker.com/s3fs-public/styles/properly_sized_image/s3/2020-03/English%20Lab%20Puppy%20%281%29_0.png", date: '2021-03-06', comments: [{clubName: "UofT Puppies Club", clubBanner: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/various-dogs-horizontal-web-banner-susan-schmitz.jpg", id: 0, msg: "Wow! Great Post!", date: "2020-01-12"}], likes: ["Tom","Dick", "Larry"]},
    {clubName: "UofT Puppies Club", clubBanner: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/various-dogs-horizontal-web-banner-susan-schmitz.jpg", id: 1, title: "Puppy Post Saturday", text: "Everyday is puppy appreciation lol.", image:"https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg", date: '2021-03-07', comments: [], likes: ["Tom"]},
    {clubName: "CSC309 Project Group", clubBanner: "https://coursework.vschool.io/content/images/2017/09/JavaScriptBanner.png",id: 0, title: "Progress Update", text: "Hey Guys! Just letting you know I just added some arbitrary post to the temp database. I still need to put it in another file though.", image:"", date: '2021-03-06', comments: [{clubName: "CSC309 Project Group", clubBanner: "https://coursework.vschool.io/content/images/2017/09/JavaScriptBanner.png",id: 0, msg: "Wow! Great Post!", date: "2020-01-12"}], likes: ["Tom","Dick", "Larry"]},
	{clubName: "CSC309 Project Group", clubBanner: "https://coursework.vschool.io/content/images/2017/09/JavaScriptBanner.png", id: 1, title: "Progress Update 2", text: "Also changed up a few things to User Info component so make sure to pull!", image:"", date: '2021-03-07', comments: [], likes: ["Tom"]},
    {clubName: "Attack on Titans club", clubBanner: "https://i.pinimg.com/originals/87/71/7a/87717a0d118ae40f75467b8fbb452e04.jpg", id: 0, title: "This Weeks Episode", text: "I'm not even gonna put actual spoilers here, GO WATCH THE SHOW, IT'S AMAZING!", image:"", date: '2021-03-07', comments: [{clubName: "Attack on Titans club", clubBanner: "https://i.pinimg.com/originals/87/71/7a/87717a0d118ae40f75467b8fbb452e04.jpg", id: 0, msg: "Wow! Great Post!", date: "2020-01-12"}], likes: ["Tom","Dick", "Larry"]},
	{clubName: "Attack on Titans club", clubBanner: "https://i.pinimg.com/originals/87/71/7a/87717a0d118ae40f75467b8fbb452e04.jpg", id: 1, title: "This Weeks Episode", text: "Crazy! Really great VA from Gabi and Kaya. What are your thoughts for next week's ep?", image:"https://otakukart.com/wp-content/uploads/2021/02/Attack-on-Titan-Season-4-Episode-12-Cover-1.jpg", date: '2021-02-28', comments: [], likes: ["Tom"]},
]

class MainFeed extends React.Component{

	render() {

        console.log(this.props.app)

        return(
            <div id="pageBG">
                <NavBar app={this.props.app} userType="user"/>
                <div id="feedBody">
                    <div id="postSide">
                        <Feed posts={user_posts} main_feed={1} focus={-1}/>
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