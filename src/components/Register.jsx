import './Register.css'
import './Login.css'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Register() {
  return (
    <Form className="form">
      <div className="form-body">
        <div className="username">
          <label className="form_label" for="firstName">First Name </label>
          <input className="form_input" type="text" id="firstName" placeholder="First Name"/>
        </div>
        <div className="lastname">
          <label className="form_label" for="lastName">Last Name </label>
          <input  type="text" name="" id="lastName"  className="form__input"placeholder="Last Name"/>
        </div>
        <div className="email">
          <label className="form_label" for="email">Email </label>
          <input  type="email" id="email" className="form__input" placeholder="Email"/>
        </div>
        <div className="password">
          <label className="form_label" for="password">Password </label>
          <input className="form_input" type="password"  id="password" placeholder="Password"/>
        </div>
        <div className="confirm-password">
          <label className="form_label" for="confirmPassword">Confirm Password </label>
          <input className="form_input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
        </div>
      </div>
      <div class="footer">
        <Button type="submit" class="btn" block="true" size="lg">Register</Button>
      </div>
    </ Form>      
  )       
}

export default Register