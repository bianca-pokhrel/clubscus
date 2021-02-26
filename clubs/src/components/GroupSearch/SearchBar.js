import React from "react";
import TextField from '@material-ui/core/TextField';
import {StylesProvider } from '@material-ui/core/styles';

class SearchBar extends React.Component{
    render (){
        return(
           <div className="container">
               <TextField 
                    id="searchBar" 
                    label="Search For Groups" 
                    variant="outlined"/>
           </div>
        )
    }
}

export default SearchBar;