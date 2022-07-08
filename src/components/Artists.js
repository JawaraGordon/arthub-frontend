import React, { useState } from 'react';
import ArtistsCard from './ArtistsCard';
import Search from './Search';

function Artists({ artists }) {
  const [searchTerm, setSearchTerm] = useState('');

  function displayedArtists() {
    return filteredArtists.map((artist) => (
      <ArtistsCard key={artists.id} artists={artist} />
    ));
  }

  const filteredArtists = artists.filter((artist) => {
    return artist.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="list">{displayedArtists()}</div>;
    </>
  );
}

export default Artists;
