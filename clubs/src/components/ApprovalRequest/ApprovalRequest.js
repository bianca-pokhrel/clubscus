
import React from "react";
import { List, 
    message, 
    Avatar, 
    Spin,
    Button
    } from 'antd';

import InfiniteScroll from 'react-infinite-scroller';


const generateList = (requests) => {

    return (
        <List
              dataSource={requests.data}
              renderItem={item  => (
                <List.Item key={item.id}>
                  <List.Item.Meta
                    //avatar={
                      //<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    //}
                    title={<a href="https://ant.design" target="_blank">{item.title}</a>}
                    description={item.description}
                  />
                  <div className="refresh">
                      <Button >
                          APPROVE
                      </Button>
                  </div>
                </List.Item>
              )}
            >
              {requests.loading && requests.hasMore && (
                <div className="demo-loading-container">
                  <Spin />
                </div>
              )}
            </List>
    )
}

class ApprovalRequest extends React.Component {
    state = {
      data: this.props.data,
      loading: false,
      hasMore: true,
      
    };
  
    handleInfiniteOnLoad = () => {
      let { data } = this.state;
      this.setState({
        loading: true,
      });
      if (data.length > 14) {
        message.warning('Infinite List loaded all');
        this.setState({
          hasMore: false,
          loading: false,
        });
        return;
      }
    };

  
    render() {
      return (
        <div className="demo-infinite-container">
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={this.handleInfiniteOnLoad}
            hasMore={!this.state.loading && this.state.hasMore}                 
            useWindow={false}
          >
           {generateList(this.state)}
          </InfiniteScroll>
        </div>
      );
    }
  }

  export default ApprovalRequest;
  