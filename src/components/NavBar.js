import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {



  return (
    <div className="navbar">
      <NavLink exact to="/accounts">
        <button className="nav-btn">
          <h3>Account</h3>
        </button>
      </NavLink>
      <NavLink exact to="/artists">
        <button className="nav-btn">
          <h3>Artists</h3>
        </button>
      </NavLink>
      <NavLink exact to="/buyers">
        <button className="nav-btn">
          <h3>Buyers</h3>
        </button>
      </NavLink>
      <NavLink exact to="/art">
        <button className="nav-btn">
          <h3>Gallery</h3>
        </button>
      </NavLink>
    </div>
  );
}

export default NavBar;
