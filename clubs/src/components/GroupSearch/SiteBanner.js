import React from "react";
import './SiteBanner.css'
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { UserOutlined, UserAddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class SiteBanner extends React.Component{

    render (){
        return(
            <div id="siteBanner">
                <div id="titleInfo">
					<h1>Clubcus</h1>
					<h3>Meet Like-Minded Students. Make Some New Friends.</h3>
                    <div id="buttonsContainer">
                        <Link to="/signin"><Button className="bannerButtons" type="primary" size="large" icon={<UserOutlined/>}>Sign In</Button></Link>
                        <Link to="/register"><Button className="bannerButtons" type="primary" size="large" icon={<UserAddOutlined/>}>New User</Button></Link>
                    </div>
				</div>
            </div>
        )
    }
}

export default SiteBanner;