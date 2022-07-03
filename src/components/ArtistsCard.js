import React from 'react';

function ArtistsCard({ artists }) {
  console.log(artists);

  const { name, avatar, email, phone, genre } = artists;

  return (
    <div>
      <div className="card">
        <div className="title">
          <h2>{name}</h2>
        </div>
        <h3>{avatar}</h3>
        <h4>Email: {email}</h4>
        <h4>Phone: {phone}</h4>
        <h4>Genre / Medium: {genre}</h4>
      </div>
    </div>
  );
}

export default ArtistsCard;