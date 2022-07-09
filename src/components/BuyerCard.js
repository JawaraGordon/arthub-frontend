import React from 'react';

function BuyerCard({ buyers }) {
  const { id, name, avatar, location, email } = buyers;

  const deleteBuyer = (buyerId) => {
    fetch(`http://localhost:9292/buyers/${buyerId}`, {
      method: 'DELETE',
      headers: { Accept: 'application/json' },
    });
  };

  function confirmAction() {
    let confirmAction = window.confirm('Are you sure?');
    if (confirmAction) {
      alert('Good-Bye');
      deleteBuyer(id);
      window.location.reload();
    } else {
      alert('Welcome Back');
    }
  }

  return (
    <>
      <div>
        <div className="card" key={id}>
          <div className="title">
            <h2>{name}</h2>
          </div>
          <img src={avatar} alt={name} className="image" />
          <br></br>
          <h4>Location: {location}</h4>
          <h4>Email: {email}</h4>
          <button onClick={() => confirmAction()}>DELETE</button>
        </div>
      </div>
    </>
  );
}

export default BuyerCard;
