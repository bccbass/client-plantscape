import './Register.css'
import './Login.css'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Register() {
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)

  const handleInputChange = (e) => {
    const {id, value} = e.target;
    if (id === "firstName"){
        setFirstName(value);
    }
    if (id === "lastName"){
        setLastName(value);
    }
    if (id === "email"){
        setEmail(value);
    }
    if (id === "password"){
        setPassword(value);
    }
    if (id === "confirmPassword"){
        setConfirmPassword(value);
    }
  }

  const handleSubmit = () => {
    console.log(firstName, lastName, email, password, confirmPassword);
  }

  return (
    <Form className="form">
      <div className="form-body">
        <div className="username">
          <label className="form_label" for="firstName">First Name </label>
          <input className="form_input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
        </div>
        <div className="lastname">
          <label className="form_label" for="lastName">Last Name </label>
          <input  type="text" name="" id="lastName" value={lastName} className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="Last Name"/>
        </div>
        <div className="email">
          <label className="form_label" for="email">Email </label>
          <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
        </div>
        <div className="password">
          <label className="form_label" for="password">Password </label>
          <input className="form_input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
        </div>
        <div className="confirm-password">
          <label className="form_label" for="confirmPassword">Confirm Password </label>
          <input className="form_input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
        </div>
      </div>
      <div class="footer">
        <Button type="submit" class="btn" block="true" size="lg">Register</Button>
      </div>
    </ Form>
  )
}

export default Register