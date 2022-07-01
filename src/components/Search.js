import React from 'react';

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">
      <h2>Search</h2>
      <div className="search"></div>
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeholder="Find An Artist..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
