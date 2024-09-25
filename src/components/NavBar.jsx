import React from "react";
import "../style/navbar.css";
import CartWidget from "./cartWidget";

const NavBar = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        Logo
      </a>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/">New</a>
        <a href="/">Contact</a>
        <a href="/">About</a>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
