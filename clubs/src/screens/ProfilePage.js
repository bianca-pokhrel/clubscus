import React from "react"
import './ProfilePage.css'
import 'antd/dist/antd.css';
import "../components/ProfilePage/CurGroups"
import "../components/ProfilePage/SignIn"
import NavBar from "../components/NavBar/NavBar";
import SignIn from "../components/ProfilePage/SignIn";
import CurGroups from "../components/ProfilePage/CurGroups";

class ProfilePage extends React.Component{
	state = {
		current: 'mail',
        	signedIn: true,
        	userType: "user"
	};
    
	render() {
		let { signedIn, userType } = this.state;

        const checkSignedIn = () => {
            if (!signedIn) {
                return (
                    <div class="container">
                        <SignIn/>
                    </div>
                )
            } else {
                return (
                    <div class="container">
                        <SignIn/>
                        <CurGroups/>
                    </div>
                )
            }
        }

        return(
            <div>
                <NavBar/>
                <div id="body">
                    {checkSignedIn()}
                </div>
            </div>
        )
    }

}

export default ProfilePage;