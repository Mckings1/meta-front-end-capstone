import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos ipsam
          repellat eum molestias asperiores quia reprehenderit repudiandae,
          fugit, dolor deserunt fugiat totam culpa beatae aspernatur, ad
          expedita eaque quasi error!
        </p>
        <button className="reserve-button">Reserve a table</button>
      </div>
      <div className="header-image">
        <img src="/images/logo-image.jpg" alt="Chef cooking at Little Lemon" />
      </div>
    </header>
  );
}

export default Header;
