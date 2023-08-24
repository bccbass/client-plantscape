import './Login.css'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function validateForm() {
    return email.length > 0 && password.length > 0
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label className="Label">Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="Label">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="Button" block="true" size="lg" type="submit" onClick={async e => {
            try {const loginObj = {email, password}
            await fetch('https://plantscapeapi.onrender.com/users/login', {
                method: 'POST',
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(loginObj),
            }).then(res => res.json())
              .then(data => console.log(data))
              // This should then redirect to users home page and maybe store id/token in session or a cookie
            } catch (e) {
              // This should flash an error message and redirect to Login page
            }
        }}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login