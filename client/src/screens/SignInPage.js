import React from "react"
import './SignInPage.css'
import 'antd/dist/antd.css'
import SignIn from "../components/Login/SignIn";


class SignInPage extends React.Component{
	state = {
		current: 'mail',
        	signedIn: true,
        	userType: "user"
	};
    
	render() {

		const { app } = this.props

		return(
		    <div id="page_container">
				<div id="title">
					<h1>Clubcus</h1>
					<h3>Meet Like-Minded Students. Make Some New Friends.</h3>
				</div>
		        <SignIn app={app} />
		    </div>
        	)
    	}

}

export default SignInPage;
