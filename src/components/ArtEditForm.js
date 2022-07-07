import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
function ArtEditForm({ artId, onUpdate }) {
  const [formData, setFormData] = useState({
    id: ' ',
    name: '',
    image_url: '',
    genre: '',
    link: '',
    art_id: ' ',
  });
  const history = useHistory();
  console.log(formData);

  useEffect(() => {
    fetch(`http://localhost:9292/art/${artId}`)
      .then((resp) => resp.json())
      .then((art) => setFormData(art));
  }, [artId]);

  function handleChange(e) {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleEdit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/art/${artId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json',
      },

      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((updatedArt) => {
        onUpdate(updatedArt);
      });
    history.push('/art');
  }

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleEdit}>
        <h3>Edit Your Art</h3>
        <label  htmlFor="name">Name</label>
        <input className="input-text"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="image_url">Image Url</label>
        <input className="input-text"
          id="about"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
        />
        <label htmlFor="genre">Genre</label>
        <select
          className="input"
          name="genre"
          id="genre"
          value={formData.genre}
          onChange={handleChange}
        >
          <option value="1">Choose Your Medium</option>
          <option value="Music NFT">Music NFT</option>
          <option value="1/1 Art NFT">1/1 Art NFT</option>
          <option value="1/1 Photography NFT">1/1 Photography NFT </option>
        </select>
        <label htmlFor="link">Link</label>
        <input className="input-text"
          type="text"
          id="link"
          name="link"
          value={formData.link}
          onChange={handleChange}
        />

        <button onSubmit={handleEdit} type="submit">
          Update Project
        </button>
      </form>
    </section>
  );
}

export default ArtEditForm;
