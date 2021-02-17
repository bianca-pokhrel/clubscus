// import React from "react";
// import './GroupCard.css'
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// // import {StylesProvider } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/styles'
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//     box: {
//         maxWidth: 345
//     },
//     picture: {
//         height: 140
//     }
// }));


// class GroupCard extends React.Component{

//     useStyles = makeStyles((theme) => ({
//         box: {
//             maxWidth: 345
//         },
//         picture: {
//             height: 140
//         }
//     }));

//     render (){
//         return(
//             <div>
//                 {/* // <Card className={useStyles.box}>
//                 //     <CardActionArea>
//                 //         <CardMedia>
//                 //             className="cardPicture"
//                 //             image="./bookImage.jpg"
//                 //             title="Group Image"
//                 //         />
//                 //         <CardContent>
//                 //             <Typography gutterBottom variant="h5" component="h2">
//                 //             {this.props.groupName}
//                 //             </Typography>
//                 //             <Typography variant="body2" color="textSecondary" component="p">
//                 //             {this.props.groupDescription}Temporary group made for the purpose of a demo.
//                 //             </Typography>
//                 //         </CardContent>
//                 //     </CardActionArea>
//                 // </Card> */}
//             </div>
//         )
//     }
// }

// export default GroupCard;

import React from "react";
import './GroupCard.css'
import 'antd/dist/antd.css';
import { Card } from 'antd';

const { Meta } = Card;

class GroupCard extends React.Component{

    render (){
        return(
            <div>
                <Card
                    hoverable
                    className="card"
                    // style={{ width: 300 }}
                    // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    cover={this.props.img}
                >
                    <Meta title={this.props.title} description={this.props.description} />
                </Card>
            </div>
        )
    }
}

export default GroupCard;