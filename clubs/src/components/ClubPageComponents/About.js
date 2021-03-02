import React from "react";
import 'antd/dist/antd.css';

var text;
class About extends React.Component {
	text = "This text is what users see when they click about us on the page"

	render() {
    		return (
      			<div>
      				<h1>About Us</h1>
      				<p>{this.text}</p>

      			</div>
      		);
  	}
}

export default About;
