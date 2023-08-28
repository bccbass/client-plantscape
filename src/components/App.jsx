import react, { useState, createContext } from 'react'
import './App.css'
import Home from './Home.jsx'

import Login from './Login.jsx'
import Register from './Register.jsx'
import AltNavBar from './AltNavBar.jsx'
import Auth from './Auth.jsx'
import { Routes, Route, useParams } from 'react-router-dom'
import SpaceSelection from './SpaceSelection'



function App() {
const [user, setUser] = useState({})

// function SpaceSelectionWrapper() {
//   const { user } = useParams()
//   return <SpaceSelection user={user} />
// }

  return (
    <>
      <Routes>
        <Route path="/login" element={<><Login setUser={setUser}/></>} />
        <Route path="/register" element={<><Register/></>} />
    
        <Route path="/" element={< Auth user={user} setUser ={setUser}><Home user={user}/></ Auth>} />
        <Route path="/space/">
          <Route path="all" element={<Auth user={user} setUser ={setUser}><SpaceSelection user={user}/></ Auth>} />
          {/* // <Route path=':/id' element={<SpaceWrapper />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App