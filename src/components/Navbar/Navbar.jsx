import "./Navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-default bg-primary text-secondary">
      <div className="container-fluid px-4 py-1">
        <div className="navbar-brand text-light">Bond33</div>
        <div className="about navbar-nav navbar-right text-light">About</div>
      </div>
    </nav>
  );
};

export default Navbar;
