import React, { useState, useEffect } from 'react';
import Search from './Search';
import ArtCard from './ArtCard';

function Art() {

  const [art, setArt] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:9292/art')
      .then((r) => r.json())
      .then((artArr) => {
        setArt(artArr);
      });
  }, []);

  // const displayedArt = art.filter((art) => {
  //   return art.name.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  function displayedArt() {
    return art.map((art) => (
      <ArtCard
        key={art.id}
        art={art}
        // handleUpdateLike={handleUpdateLike}
      />
    ));
  }

  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="about"></div>
      <div className="list">{displayedArt()}</div>
    </div>
  );
}

export default Art;
