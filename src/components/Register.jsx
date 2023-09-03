import './Login.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import apiURL from './getAPI.js'
import Button from 'react-bootstrap/Button'

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

    // When a post request is sent to the register url, we'll add a new record to the database
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

    // Reset the state of the form
    setForm({ firstName: "", lastName: "", email: "", password: "" })
    // Employ useNavigate() to simulate going to /login page
    navigate("/login")
  }

  // The following section will display the form that takes the input from the user
  return (<>
    <div>
      <h3 class="welcome">Welcome to Plantscape</h3>
      <p>Your plants are going to love you 🍀</p>
      <form onSubmit={onSubmit} >
        <div className="form-group">
          <label hidden htmlFor="firstName">First Name</label>
          <input
            placeholder="First Name"
            type="text"
            className="form-control"
            id="firstName"
            value={form.firstName}
            onChange={(e) => updateForm({ firstName: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label hidden htmlFor="lastName">Last Name</label>
          <input
            placeholder="Last Name"
            type="text"
            className="form-control"
            id="lastName"
            value={form.lastName}
            onChange={(e) => updateForm({ lastName: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label hidden htmlFor="email">Email</label>
          <input
            placeholder="Email"
            type="email"
            className="form-control"
            id="email"
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label hidden htmlFor="password">Password</label>
          <input
            placeholder="Create Password"
            type="password"
            className="form-control"
            id="password"
            value={form.password}
            onChange={(e) => updateForm({ password: e.target.value })}
            minLength={8}
            required
          />
        </div>
        <div className="form-group" >
          <Button className="btn btn-success" block="true" size="lg" type="submit" >
            Register
          </Button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Register