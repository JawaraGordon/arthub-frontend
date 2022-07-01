import React from 'react';
import ArtistsContainer from './ArtistsContainer';


function Hero({ courts, handleUpdateLike}) {
 
  return (
    <div>
      <ArtistsContainer
        key={courts.id}
        courts={courts}
        handleUpdateLike={handleUpdateLike}
      />
    </div>
  );
}

export default Hero;
