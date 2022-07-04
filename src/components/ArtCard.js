import React, { useHistory } from 'react';
// import ArtEditPage from './ArtEditPage'

function ArtCard({ art, setArt }) {
  console.log(art);

  const { id, name, image_url, genre, location, link } = art;


  const deleteArt = (artId) => {
    {
      fetch(`http://localhost:9292/art/${artId}`, {
        method: 'DELETE',
        headers: { Accept: 'application/json' }
      })
        // .then(res => res.json())
        // .then(deletedArt => setArt(deletedArt)
        // );
    }
  }

  return (
    <>
    <div>
      <div className="card" key={ id }>
        <div className="title">
          <h2>{name}</h2>
        </div>
        <img src={image_url} alt={name} className="image" />
        <br></br>
        <h4>Genre: {genre}</h4>
        <h4>Location: {location}</h4>
        <h4>View: {link}</h4>
        <button onClick={() => deleteArt(id)}>DELETE</button>
      </div>
    </div>
    </>
  );
}

export default ArtCard;
