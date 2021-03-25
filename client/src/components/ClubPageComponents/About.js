import React from "react";
import 'antd/dist/antd.css';
import './About.css'
import { Button } from 'antd'

var text;

var request_sent = false
class About extends React.Component {
	
	join_click = (e) => {
		request_sent = true
		this.forceUpdate()
	}

	render() {
		const about = this.props.about
    		const member = this.props.member
    		
    		const get_join_button = () => {
    			if (!member) {
    				if (request_sent) {
	    				return (<div id="join_button_container">
	    						<div id="join_button">
		    						<p id="request_sent_text"> Request Sent!</p>
	    						</div>
	    					</div>
	    				)
    				}else{
    					return (<div id="join_button_container">
	    						<div id="join_button">
		    						<Button onClick={this.join_click} size="large">
		    							<p>Request To Join</p>
		    						</Button>
	    						</div>
	    					</div>
	    				)
    				}
    			}
    			return ("")
    		}
    		
    		return (
    			<>
    		      	{get_join_button()}
      			<div id="about_us_text_container">
      				<h1>About Us</h1>
      				<p>{about}</p>

      			</div>
      			</>
      		);
  	}
}

export default About;
