import React from 'react';

function Buyers() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="court-form">
      <form onSubmit={handleSubmit} className="court-form">
        {/* <img src=""></img> */}
        <br></br>
        <input
          type="text"
          name="name"
          placeholder="First Name"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Last Name"
          className="input-text"
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-text"
        />
        <br />
        <select name="level" className="select">
          <option value="">Choose Your Plan</option>
          <option value="1">Free</option>
          <option value="2">Paid $4.99 Monthly</option>
          <option value="3">Artist</option>
        </select>
        <br />

        <input
          type="submit"
          name="submit"
          value="Submit"
          className="submit-btn"
        />
      </form>
    </div>
  );
}

export default Buyers;
