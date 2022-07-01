import React from 'react';
import Search from './Search';

function Art({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="about"></div>
    </div>
  );
}

export default Art;
