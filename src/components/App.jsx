import react, { useState, createContext } from 'react'
import './App.css'
import Home from './Home.jsx'
import MyPlants from './MyPlants.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import AltNavBar from './AltNavBar.jsx'
import Auth from './Auth.jsx'
import { Routes, Route, useParams } from 'react-router-dom'
import SpaceSelection from './SpaceSelection'
import SpaceView from './SpaceView'




function App() {
const [user, setUser] = useState({})
const [plants, setPlants] = useState([])

function SpaceViewWrapper() {
  const { spaceIndex } = useParams()
  return <SpaceView space={user.spaces[spaceIndex]} />
}

  return (
    <>
      <Routes>
        <Route path="/login" element={<><Login setUser={setUser}/></>} />
        <Route path="/register" element={<><Register/></>} />
        <Route path="/myplants" element={< Auth user={user} setUser ={setUser} plants={plants} setPlants={setPlants}><MyPlants  user={user} setUser ={setUser} plants={plants}/></Auth>} />
    
        <Route path="/" element={< Auth user={user} setUser ={setUser} plants={plants} setPlants={setPlants}><Home user={user} plants={plants}/></Auth>} />
        <Route path="/space/" user={user} setUser ={setUser} plants={plants} setPlants={setPlants}>
          <Route path="all" element={<Auth user={user} setUser ={setUser} plants={plants} setPlants={setPlants}><SpaceSelection user={user}/></ Auth>} />
          <Route path=':spaceIndex' element={<Auth user={user} setUser ={setUser} plants={plants} setPlants={setPlants}><SpaceViewWrapper /></ Auth>} />
        </Route>
      </Routes>
    </>
  )
}

export default App