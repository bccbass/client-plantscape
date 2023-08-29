import react, { useState, createContext } from 'react'
import './App.css'
import Home from './Home.jsx'

import Login from './Login.jsx'
import Register from './Register.jsx'
import AltNavBar from './AltNavBar.jsx'
import Auth from './Auth.jsx'
import { Routes, Route } from 'react-router-dom'


function App() {
const [user, setUser] = useState({})
const [plants, setPlants] = useState([])
  return (
    <>
      <Routes>
        <Route path="/login" element={<><Login setUser={setUser}/></>} />
        <Route path="/register" element={<><Register/></>} />
    
        <Route path="/" element={< Auth user={user} setUser ={setUser} plants={plants} setPlants={setPlants}><Home user={user} plants={plants}/></Auth>} />
      </Routes>
    </>
  )
}

export default App