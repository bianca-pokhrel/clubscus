import React from "react"
import './SignInPage.css'
import 'antd/dist/antd.css'
import SignIn from "../components/ProfilePage/SignIn";


class SignInPage extends React.Component{
	state = {
		current: 'mail',
        	signedIn: true,
        	userType: "user"
	};
    
	render() {
		return(
		    <div id="page_container">
				<h1>Clubcus</h1>
		        <SignIn/>
		    </div>
        	)
    	}

}

export default SignInPage;
