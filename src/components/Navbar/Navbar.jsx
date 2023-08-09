import "./Navbar.css";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";


const Navbar = () => {
  const {currentUser} = useAuth() ;
  return (
    <>
    <nav className="navbar navbar-default bg-primary text-secondary">
      <div className="container-fluid px-4">
        <div className="navbar-brand text-light text-lg">DB Bonds Connect</div>
        <div className="about navbar-nav navbar-right text-light">{currentUser? currentUser.email.substring(0, currentUser.email.lastIndexOf("@")) : '' }</div>
      </div>
    </nav>
    <Outlet/>
    </>
  );
};

export default Navbar;
