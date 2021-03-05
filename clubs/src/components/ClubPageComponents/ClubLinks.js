import React from "react";
import 'antd/dist/antd.css';
import './ClubLinks.css'

var links;
class ClubLinks extends React.Component {
	render() {
		const links = this.props.links
    		return (
      			<div id="link_box">
      				{links.map(link => (
      					<div id="link_container">		
      						<img id="links_image" src="/link.jpg"/>
						<p><a href={link.url} id="link_text">{link.name}</a></p>
					</div>
      				))}

      			</div>
      		);
  	}
}

export default ClubLinks;
