import React from 'react';

function Search ({search, updateSearch}) {

    return (
        <div className="searchbar">
        <label htmlFor="search">Search Movies or TV shows:</label>
        <input 
        type="text"
        id="search"
        value={search}
        placeholder="Search"
        onChange={(e) => updateSearch(e.target.value)}
        />

        </div>
    )
}
export default Search;