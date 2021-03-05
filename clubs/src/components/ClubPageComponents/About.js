import React from "react";
import 'antd/dist/antd.css';

var text;
class About extends React.Component {
	render() {
		const about = this.props.about
    		return (
      			<div>
      				<h1>About Us</h1>
      				<p>{about}</p>

      			</div>
      		);
  	}
}

export default About;
