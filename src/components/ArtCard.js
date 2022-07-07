import React from 'react';
import { useHistory } from 'react-router-dom';

function ArtCard({ art, onDelete, editMode, artists }) {
  const { id, name, image_url, genre, location, link, artist_id } = art;
  console.log(artists);
  const history = useHistory()

  const deleteArt = (artId) => {
    fetch(`http://localhost:9292/art/${artId}`, {
      method: 'DELETE',
      headers: { Accept: 'application/json' },
    });

    onDelete(artId);
  };

  function handleEdit() {
    editMode(id);
    history.push(`/arteditform/${id}`)
  }

  return (
    <>
      <div>
        <div className="card" key={id}>
          <div className="title">
            <h2>{name}</h2>
          </div>
          <img src={image_url} alt={name} className="image" />
          <br></br>
          <h4>Genre: {genre}</h4>
          <h4>Location: {location}</h4>
          <h4>View: {link}</h4>
          {/* <h4>Artist: {}</h4> */}
          <button onClick={handleEdit}>Edit</button>
          {/* <div className="edit-img"><a href={`/arteditform/${id}`}>
          <img src="https://i.imgur.com/UmOSHPa.png" alt="edit your art"></img>
        </a></div> */}
          <button onClick={() => deleteArt(id)}>DELETE</button>
        </div>
      </div>
    </>
  );
}

export default ArtCard;
