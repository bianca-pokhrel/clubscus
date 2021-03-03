import React from "react";
import 'antd/dist/antd.css';
import './ClubLinks.css'

var links;
class ClubLinks extends React.Component {
	links = [{name: "Test", url: "test"}, {name: "About Us", url: "about"}]

	render() {
    		return (
      			<div id="link_box">
      				{this.links.map(link => (
      					<div id="link_container">		
      						<img id="links_image" src="link.jpg"/>
						<p><a href={link.url} id="link_text">{link.name}</a></p>
					</div>
      				))}

      			</div>
      		);
  	}
}

export default ClubLinks;
