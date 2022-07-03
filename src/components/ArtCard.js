import React from 'react';

function ArtCard({ art }) {
  console.log(art);

  const { name, image_url, genre, location, link } = art;

  return (
    <div>
      <div className="card">
        <div className="title">
          <h2>{name}</h2>
        </div>
        <img src={image_url} alt={name} className="court-image" />
        <br></br>
        <h4>Genre: {genre}</h4>
        <h4>Location: {location}</h4>
        <h4>View: {link}</h4>
      </div>
    </div>
  );
}

export default ArtCard;
