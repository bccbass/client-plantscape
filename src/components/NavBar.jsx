import React from "react"
import { Link } from "react-router-dom"
import LogoutButton from "./LogoutButton.jsx"
import logo from "../assets/anotherLogo.svg"

// NavBar component using Bootstrap styling - Link is used for site navigation
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body ">
      <div className="container-fluid ">
        <Link className="navbar-brand" href="#" to="/">
          <img
            src={logo}
            alt="Plantscape Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Plantscape
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className="nav-link active mx-2"
              aria-current="page"
              href="#"
              to="/"
            >
              Home
            </Link>
            <Link className="nav-link mx-2" href="#" to="/space">
              My Spaces
            </Link>
            <Link className="nav-link mx-2" href="#" to="/myplants">
              My Plants
            </Link>
            <Link className="nav-link mx-2" href="#" to="/about">
              About
            </Link>
            <Link className="nav-link mx-2" href="#" to="/usersettings">
              Account
            </Link>
            <div>
          <LogoutButton  />
        </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;