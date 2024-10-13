import React from "react";
import { Link } from "react-router-dom";
// import image from "images";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        {/* <button className="reserve-button">Reserve a table</button> */}
        <Link to="/reservations" className="reserve-button">
          Reserve a table
        </Link>
      </div>
      <div className="header-img">
        <img
          className="main-image"
          src="image6.jpg"
          alt="fish meal"
          width={250}
          height={354.1}
        ></img>
        <img
          className="overlay-image"
          src="image5.jpg"
          alt="waiter"
          width={200}
          height={304.1}
        ></img>
      </div>
    </header>
  );
}

export default Header;
