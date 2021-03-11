import React from "react";
import "../GroupSearch/SearchBar.css"


const SearchBar = () => (
    <div className="search-bar-container"> 
        <form className="search-bar-form" action='/superadmin/' method="get">
            <label htmlFor="header-search">
            </label>

            <input 
                    type="text"
                    id="header-search"
                    placeholder={"Search UofT groups..."}
                    name="s"
                    
                />
            <button type="submit">Search</button>

        </form>
    </div>
)

export default SearchBar;