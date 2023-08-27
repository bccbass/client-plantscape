import react, { useState, createContext } from 'react'
import './App.css'
import Home from './Home.jsx'
import NavBar from './NavBar.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import AltNavBar from './AltNavBar.jsx'
import Auth from './Auth.jsx'
import { Routes, Route } from 'react-router-dom'


function App() {
const [user, setUser] = useState({})
  return (
    <>
      <Routes>
        <Route path="/" element={<><NavBar /><Home user={user}/></>}/>
        <Route path="/login" element={<><AltNavBar /><Login setUser={setUser}/></>} />
        <Route path="/register" element={<><AltNavBar /><Register/></>} />
    
        <Route path="/testingauth" element={< Auth user={user} setUser ={setUser}><Home user={user}/></Auth>} />
      </Routes>
    </>
  )
}

export default App