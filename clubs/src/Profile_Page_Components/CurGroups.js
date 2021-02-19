import React from "react";
import './CurGroups.css'

// let myGroups = {
//     "CSC309 Project Group": "This is a group for the project",
//     "UofT Cooking Club": "'Official' club for cooking on campus"
// }


class CurGroups extends React.Component{

    // constructor(props){
    //     myGroups = {}
    // }

    // test = (e) => {
    //     console.log(this.myGroups)
    // }

    render (){
        return(
           <div id="curGroupsContainer">
               <div id="headerContainer">
                    <h3>Joined Groups</h3>
               </div>
               <div id="groupListContainer">
                    <ul>
                        <li className="listedGroup">CSC309 Project Group</li>
                        <li className="listedClub">Uoft Cooking Club</li>
                    </ul>
               </div>
           </div>
        )
    }
}

export default CurGroups;