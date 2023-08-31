import './Login.css'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import AltNavBar from './AltNavBar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import apiURL from './getAPI.js'


function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  // These methods will update the state properties
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value }
    })
  }

  // This function will handle the registration submission
  async function onSubmit(e) {
    e.preventDefault()

    const newUser = { ...form }

    await fetch(`${apiURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
    .catch(error => {
      window.alert(error)
      return
    })

    setForm({ firstName: "", lastName: "", email: "", password: "" })
    navigate("/login")
  }

  return (<>
    <div>
      <h3>New User Registration</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={form.firstName}
            onChange={(e) => updateForm({ firstName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={form.lastName}
            onChange={(e) => updateForm({ lastName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={form.password}
            onChange={(e) => updateForm({ password: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Register"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
    </>
  )
}

export default Register