import React from "react";



const SearchBar = () => (
    <form action='/superadmin/' method="get">
        <label htmlFor="header-search">
            <span className="search-title">Search Groups </span>
        </label>

        <input 
                type="text"
                id="header-search"
                placeholder={"Search UofT groups..."}
                name="s"
                
            />
        <button type="submit">Search</button>

    </form>
)

export default SearchBar;