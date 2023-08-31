import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/anotherLogo.svg'

const AltNavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body mb-5">
      <div class="container-fluid">
        <Link class="navbar-brand" href="#" to="/login">
          <img src={logo} alt="Plantscape Logo" width="30" height="24" class="d-inline-block align-text-top"/>
          Plantscape
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link" href="#" to="/login">Login</Link>
            <Link class="nav-link" href="#" to="/register">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default AltNavBar