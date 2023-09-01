import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/anotherLogo.svg'

const AltNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#" to="/login">
          <img src={logo} alt="Plantscape Logo" width="30" height="24" className="d-inline-block align-text-top"/>
          Plantscape
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" href="#" to="/login">Login</Link>
            <Link className="nav-link" href="#" to="/register">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default AltNavBar