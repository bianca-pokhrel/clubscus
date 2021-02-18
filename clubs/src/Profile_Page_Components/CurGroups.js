import React from "react";
import './CurGroups.css'

class CurGroups extends React.Component{
    render (){
        return(
           <div className="container">
               <div className="headerContainer">
                    <h3>Joined Groups</h3>
               </div>
               <div className="groupListContainer">
                    <ul>
                        <li className="listedGroup">CSC309 Project Group</li>
                        <li className="listedClub">Uoft Anime Club</li>
                    </ul>
               </div>
           </div>
        )
    }
}

export default CurGroups;