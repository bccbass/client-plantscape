import react, { useState } from 'react'
import './App.css'
import Home from './Home.jsx'
import NavBar from './NavBar.jsx'
import Login from './Login.jsx'
import AltNavBar from './AltNavBar.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
const [user, setUser] = useState({})
  return (
    <>
      <Routes>
        <Route path="/" element={<><NavBar /><Home user={user}/></>}/>
        <Route path="/login" element={<><AltNavBar /><Login setUser={setUser}/></>} />
      </Routes>
    </>
  )
}

export default App