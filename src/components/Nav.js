import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <img
          className="logo-img"
          src="logo-image.jpg"
          alt="cooking at little lemon"
        ></img>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Menu">Menu</Link>
        </li>
        <li>
          <Link path="/booking">Reservations</Link>
        </li>
        <li>
          <Link to="/Order">Order online</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
