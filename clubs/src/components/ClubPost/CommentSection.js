import React from "react"
import './CommentSection.css'
import 'antd/dist/antd.css';
import { Input } from 'antd'
import { AudioOutlined } from '@ant-design/icons';


class CommentSection extends React.Component{
	render() {
		const post = this.props.post
		const comments = this.props.comments
		
		const f = () => {
			return ( <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />)
		}
		
		return(
		    <div id="comment_container">
		    	<Input
				placeholder="input search text"
				enterButton="Search"
			 	size="large"
			 	suffix={f()}
			/>
		    </div>
        	)
    	}

}

export default CommentSection;
