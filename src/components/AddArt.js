import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddArt({ setArt, artists, setArtists }) {
  
  const [formState, setFormState] = useState({
    name: '',
    image_url: '',
    genre: '',
    link: '',
    artist_id: '',
  });
  const history = useHistory();

  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newArt = {
      ...formState,
    };

    fetch('http://localhost:9292/art', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newArt),
    })
      .then((r) => r.json())
      .then((newArt) => {
        setArt((preState) => [...preState, newArt]);
        history.push('/art');
        
      });
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form">
        <div className="form"></div>

        <br></br>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formState.name}
          placeholder="Art Name"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="location"
          onChange={handleChange}
          value={formState.location}
          placeholder="Location"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image_url"
          onChange={handleChange}
          value={formState.image_url}
          placeholder="Image URL"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="genre"
          onChange={handleChange}
          value={formState.genre}
          placeholder="Genre / Medium"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="link"
          onChange={handleChange}
          value={formState.image}
          placeholder="Gallery Link"
          className="input-text"
        />
        <br />
        <select className="select">
          {artists.map(({ name, artist_id }) => (
            <option key={artist_id} value={artist_id}>
              {name}
            </option>
          ))}
        </select>
        <br />
        <input
          type="submit"
          name="submit"
          value="Add Art"
          className="submit-btn"
        />
      </form>
    </div>
  );
}
export default AddArt;
