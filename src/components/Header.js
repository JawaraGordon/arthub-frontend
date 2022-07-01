import React from 'react';
import NavBar from './NavBar';

function Header() {
  return (
    <div className="header">
      <div id="header-img">
        <img src="https://i.imgur.com/rqodSqh.png" alt="logo" />
        <h1>75 Degree Studios</h1>
      </div>
      <div>
        <NavBar />
        <br></br>
      </div>
    </div>
  );
}

export default Header;
