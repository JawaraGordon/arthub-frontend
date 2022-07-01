import React from 'react';

function Artists({ courts, handleUpdateLike }) {
  const {
    id,
    name,
    image,
    likes,
    address,
    google,
    avatar,
    email,
    phone,
    genre,
  } = courts;

  function handleLikeClick() {
    const updateObj = {
      likes: likes + 1,
    };

    fetch(`http://localhost:9292/artists/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then(handleUpdateLike);
  }

  return (
    <div>
      <div className="card">
        <div className="title">
          <h2>{name}</h2>
        </div>
        <h3>{avatar}</h3>
        {/* <div className="address" onClick={() => window.open(google)}>
          <h3>{address}</h3>
        </div> */}
        {/* <img src={image} alt={name} className="court-image" /> */}
        <h4>Email: {email}</h4>
        <h4>Phone: {phone}</h4>
        <h4>Genre / Medium: {genre}</h4>
        {/* <p>{likes} Likes </p> */}
        {/* <button onClick={handleLikeClick} className="like-btn">
          Like {'🏀'}
        </button> */}
      </div>
    </div>
  );
}

export default Artists;
