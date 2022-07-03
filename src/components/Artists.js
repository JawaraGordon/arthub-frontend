import React, { useState, useEffect } from 'react';
import ArtistsCard from './ArtistsCard';

function Artists({ handleUpdateLike }) {
  const [artists, setArtists] = useState([]);
  // console.log(artists);

  useEffect(() => {
    fetch('http://localhost:9292/artists')
      .then((r) => r.json())
      .then((artistsArr) => {
        setArtists(artistsArr);
        // console.log(artistsArr);
      });
  }, []);

  function displayedArtists() {
    return artists.map((artist) => (
      <ArtistsCard
        key={artists.id}
        artists={artist}
        // handleUpdateLike={handleUpdateLike}
      />
    ));
  }

  return <div className="list">{displayedArtists()}</div>;
}

export default Artists;