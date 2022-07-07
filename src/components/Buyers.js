import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

function Buyers(buyers, setBuyers) {

  const [formState, setFormState] = useState({
    name: '',
    avatar: '',
    location: '',
    email: '',
    account_type: '',
  });

  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();

    const newBuyer = {
      ...formState,
    };

    fetch('http://localhost:9292/buyers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBuyer),
    })
      .then((r) => r.json())
      .then((newArt) => {
        setBuyers((preState) => [...preState, newArt]);
        history.push('/buyers');
      });
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form">
        <br></br>
        <input
          type="text"
          name="name"
          placeholder="First and Last Name"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Image URL"
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
        <input
          type="location"
          name="location"
          placeholder="Location"
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
