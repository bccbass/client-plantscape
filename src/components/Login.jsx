import './Login.css'
import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Loading from './Loading.jsx'
import {  retrieveToken, storeToken, getUser} from './loginfunctions.js'
import { redirect, useNavigate } from 'react-router-dom'

function Login({setUser}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState({})
  let [clicked, setClicked] = useState (false)
  const navigate = useNavigate()
  let message = ''


  function validateForm() {
    return email.length > 0 && password.length > 0
  }

  function handleSubmit(event) {
    event.preventDefault()
    setClicked(true)
    retrieveToken(setToken, {email, password })
  }

  useEffect(() => {
      storeToken(token)
      if (localStorage.getItem('user')){
      navigate('/')}
  }, [token])

  return (<>
    <div className="Login">
      <Form onSubmit={handleSubmit} className='mb-3'>
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
        <p>{message}</p>
        <Button className="Button" block="true" size="lg" type="submit" >
          Login
        </Button>
      </Form>
      {clicked && < Loading />}
    </div>
    </>
  );
}

export default Login