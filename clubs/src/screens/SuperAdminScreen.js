import React from "react";
import {
    Menu,
    Layout,
    Row,
    Col,
    Typography,
    Button
} from "antd";

import "./SuperAdminComponents.css";

import ClubsList from "../components/ClubsList/ClubsList.js";

//import { Link } from "react-router-dom";
const { Text } = Typography;
const { Content, Sider } = Layout;
const { SubMenu } = Menu;


const generateRequestsMenu = (title, children) => {
    return (
        <SubMenu 
            key={title}
            title={<span>{title.toUpperCase()}</span>}
            children={children}
            className="submenu"/>
        
    );
};

class SuperAdminScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    isempty(obj) {
        for (var key in obj){
            return false;
        }
        return true;
    }

    render() {
        //const resultQuery = this.props.location.state.query;
        //const amountOfResults = this.props.location.state.data.length;

        const amountOfResults = 3;
        //let clubsResults = this.props.location.state.data;
    

    return (
        <div>
            <Layout>
                {amountOfResults !=0 && (

                    <Layout class="background">
                    <Row className="row" justify="space-between" align="middle">
                        <Col>
                            {amountOfResults == 1 ? (
                                <Text>
                                    Showing {amountOfResults} clubs 
                                </Text>
                            ) : (
                                <Text>
                                    Showing {amountOfResults} clubs
                                </Text>
                            )}
                        </Col>
                    </Row>
                </Layout>

                )}
                
            </Layout>
            
            <Layout class="background">
                <Sider>
                    <Row justify="center" className="refresh">
                        <Button>REFRESH REQUESTS</Button>
                    </Row>
                    <Menu onClick={this.handleClick} 
                          defaultSelectedKeys={["1"]} 
                          mode="inline" 
                          className="submenu">
                        
                    </Menu>
                </Sider>
                <Content className="clubscontainer background">
                    <ClubsList clubs={["math", "english", "french"]}></ClubsList>
                </Content>
            </Layout>
        </div>
        )
    }
}

export default SuperAdminScreen;