import React from "react"
import './RegisterPage.css'
import 'antd/dist/antd.css'
import Register from "../components/Login/Register";


class RegisterPage extends React.Component{
	state = {
		current: 'mail',
        	signedIn: true,
        	userType: "user"
	};
    
	render() {
		return(
		    <div id="page_container">
				<div id="title">
					<h1>Clubcus</h1>
					<h3>Meet Like-Minded Students. Make Some New Friends.</h3>
				</div>
		        <Register/>
		    </div>
        	)
    	}

}

export default RegisterPage;
