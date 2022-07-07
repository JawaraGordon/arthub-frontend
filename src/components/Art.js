import React  from 'react';
import ArtCard from './ArtCard';


function Art({ art, setArt, onDelete, editMode, artists}) {
  
  function displayedArt() {
    return art.map((art) => <ArtCard key={art.id} art={art} setArt={setArt} artists={artists} editMode={editMode} onDelete={onDelete}/>);
  }

  return (
    <div>
      <div className="card">
        <h2>Join the Gallery</h2>
        <a href="/art/new">
          <img src="https://i.imgur.com/l62vvAz.png" alt="add your art"></img>
        </a>
      </div>
      <div className="list">{displayedArt()}</div>
    </div>
  );
}

export default Art;
