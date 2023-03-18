import React from "react";
import { Link } from "react-router-dom";
import Food from "../assets/Food.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        <h1 className="header-title">Little Lemon</h1>
        <h2 className="header-subtitle">Chicago</h2>
        <p className="header-description">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/booking" className="header-button">Reserve a table</Link>
      </div>
      <div className="header-right">
        <img
          src={Food}
          alt="our cook holding a tablet with delicoues baguettes"
          className="header-image"
        />
      </div>
    </header>
  );
};

export default Header;
