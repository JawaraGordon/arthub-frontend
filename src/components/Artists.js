import React, { useState, useEffect } from 'react';
import ArtistsCard from './ArtistsCard';
import Search from './Search';

function Artists({ handleUpdateLike }) {
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:9292/artists')
      .then((r) => r.json())
      .then((artistsArr) => {
        setArtists(artistsArr);
        // console.log(artistsArr);
      });
  }, []);

  function displayedArtists() {
    return filteredArtists.map((artist) => (
      <ArtistsCard
        key={artists.id}
        artists={artist}
        // handleUpdateLike={handleUpdateLike}
      />
    ));
  }

  const filteredArtists = artists.filter((artist) => {
    return artist.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return <>
  <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  <div className="list">{displayedArtists()}</div>;
  </>
  
}

export default Artists;