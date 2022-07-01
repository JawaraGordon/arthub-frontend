import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Add({ setCourts }) {
  const [formState, setFormState] = useState({
    name: '',
    address: '',
    indoor: '',
    outdoor: '',
    cost: '',
    image: '',
    court_rating: '',
    nets: '',
    backboard: '',
    shade: '',
    restroom: '',
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

    const newCourt = {
      ...formState,
      likes: 0,
    };

    fetch('http://localhost:4004/courts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCourt),
    })
      .then((r) => r.json())
      .then((newCourt) => {
        setCourts((preState) => [...preState, newCourt]);
        history.push('/');
      });
  }

  return (
    <>
    </>
    // <div className="court-form">
    //   <form onSubmit={handleSubmit} className="court-form">
    //     <div className="court-form">
    //       <img src=""></img>
    //     </div>

    //     <br></br>
    //     <input
    //       type="text"
    //       name="name"
    //       onChange={handleChange}
    //       value={formState.name}
    //       placeholder="Court Name"
    //       className="input-text"
    //     />
    //     <br />
    //     <input
    //       type="text"
    //       name="address"
    //       onChange={handleChange}
    //       value={formState.address}
    //       placeholder="Address"
    //       className="input-text"
    //     />
    //     <br />
    //     <input
    //       type="text"
    //       name="google"
    //       onChange={handleChange}
    //       value={formState.google}
    //       placeholder="Google Maps URL"
    //       className="input-text"
    //     />
    //     <br />
    //     <select
    //       name="indoor"
    //       className="select"
    //       onChange={handleChange}
    //       value={formState.indoor}
    //     >
    //       <option value="">Indoor</option>
    //       <option value={true}>Yes</option>
    //       <option value={false}>No</option>
    //     </select>
    //     <br />
    //     <select
    //       name="outdoor"
    //       className="select"
    //       onChange={handleChange}
    //       value={formState.outdoor}
    //     >
    //       <option value="">Outdoor</option>
    //       <option value={true}>Yes</option>
    //       <option value={false}>No</option>
    //     </select>
    //     <br />

    //     <input
    //       type="text"
    //       name="cost"
    //       onChange={handleChange}
    //       value={formState.cost}
    //       placeholder="Cost"
    //       className="input-text"
    //     />
    //     <br />
    //     <input
    //       type="text"
    //       name="image"
    //       onChange={handleChange}
    //       value={formState.image}
    //       placeholder="Image URL"
    //       className="input-text"
    //     />
    //     <br />

    //     <input
    //       type="number"
    //       name="court_rating"
    //       min="0"
    //       max="10"
    //       onChange={handleChange}
    //       value={formState.court_rating}
    //       placeholder="Court Rating 1-10"
    //       className="input-text"
    //     />
    //     <br />
    //     <select
    //       name="backboard"
    //       className="select"
    //       onChange={handleChange}
    //       value={formState.backboard}
    //     >
    //       <option value="">Backboard Type</option>
    //       <option value="glass">Glass</option>
    //       <option value="plastic">Plastic</option>
    //       <option value="wood">Wood</option>
    //       <option value="other">Other</option>
    //     </select>
    //     <br />
    //     <select
    //       name="nets"
    //       className="select"
    //       onChange={handleChange}
    //       value={formState.nets}
    //     >
    //       <option value="">Nets</option>
    //       <option value="yes">Yes</option>
    //       <option value="no">No</option>
    //     </select>
    //     <br />
    //     <select
    //       name="shade"
    //       className="select"
    //       onChange={handleChange}
    //       value={formState.shade}
    //     >
    //       <option value="">Shade</option>
    //       <option value="yes">Yes</option>
    //       <option value="no">No</option>
    //       <option value="some">Some</option>
    //       <option value="n/a">N/A</option>
    //     </select>
    //     <br />
    //     <select
    //       name="restroom"
    //       className="select"
    //       onChange={handleChange}
    //       value={formState.restroom}
    //     >
    //       <option value="">Restroom</option>
    //       <option value="yes">Yes</option>
    //       <option value="no">No</option>
    //       <option value="nearby">Nearby</option>
    //     </select>
    //     <br />
    //     <input
    //       type="submit"
    //       name="submit"
    //       value="Add Court"
    //       className="submit-btn"
    //     />
    //   </form>
    // </div>
  );
}
export default Add;
