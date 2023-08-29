import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton.jsx'
import logo from '../assets/anotherLogo.svg'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#" to="/">
          <img src={logo} alt="Plantscape Logo" width="30" height="24" className="d-inline-block align-text-top"/>
          Plantscape
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" href="#" to="/">Home</Link>
            <Link className="nav-link" href="#" to="My Garden">My Garden</Link>
            <Link className="nav-link" href="#" to="myplants">My Plants</Link>
          </div>
          <div>
            < LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar