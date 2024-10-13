import React from "react";

function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <img
          className="logo-img"
          src="logo-image.jpg"
          alt="cooking at little lemon"
        ></img>
      </div>
      <ul className="nav-links">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="">Table Reservations</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
