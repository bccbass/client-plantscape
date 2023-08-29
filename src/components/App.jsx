import react, { useState, createContext } from 'react'
import './App.css'
import Home from './Home.jsx'
import MyPlants from './MyPlants.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import AltNavBar from './AltNavBar.jsx'
import Auth from './Auth.jsx'
import { Routes, Route } from 'react-router-dom'



function App() {
const [user, setUser] = useState({})
const [plants, setPlants] = useState([])
// setPlants(samplePlants)
return (
    <>
      <Routes>
        <Route path="/login" element={<><Login setUser={setUser}/></>} />
        <Route path="/register" element={<><Register/></>} />
        <Route path="/myplants" element={< Auth user={user} setUser ={setUser} plants={plants} setPlants={setPlants}><MyPlants plants={plants}/></Auth>} />
    
        <Route path="/" element={< Auth user={user} setUser ={setUser} plants={plants} setPlants={setPlants}><Home user={user} plants={plants}/></Auth>} />
      </Routes>
    </>
  )
}

export default App