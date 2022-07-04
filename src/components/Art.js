import React, { useState, useEffect } from 'react';
import ArtCard from './ArtCard';
import AddArt from './AddArt'

function Art({ art }) {
  function displayedArt() {
    return art.map((art) => <ArtCard key={art.id} art={art} />);
  }

  return (
    <div>
      <div className="card">
        <h2>Join the Gallery</h2>
        <a href="/addart">
          <img src="https://i.imgur.com/l62vvAz.png" alt="add your art"></img>
        </a>
      </div>
      <div className="list">{displayedArt()}</div>
    </div>
  );
}

export default Art;
