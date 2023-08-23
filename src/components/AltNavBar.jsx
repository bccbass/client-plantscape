import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" href="#" to="/">
          <img src="/src/assets/anotherLogo.svg" alt="Plantscape Logo" width="30" height="24" class="d-inline-block align-text-top"/>
          Plantscape
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link" href="#">Login</Link>
            <Link class="nav-link" href="#">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar