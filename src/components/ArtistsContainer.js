import React from 'react';
import Artists from './Artists';

function ArtistsContainer({ courts, handleUpdateLike }) {
  function displayedCourts() {
    return courts.map((court) => (
      <Artists
        key={court.id}
        courts={court}
        handleUpdateLike={handleUpdateLike}
      />
    ));
  }

  return <div className="list">{displayedCourts()}</div>;
}

export default ArtistsContainer;
