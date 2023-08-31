import react, { useState, createContext } from 'react'
import './App.css'
import Home from './Home.jsx'
import MyPlants from './MyPlants.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import NewSpace from './NewSpace.jsx'
import NavBar from './NavBar'
import AltNavBar from './AltNavBar.jsx'
import Auth from './Auth.jsx'
import { Routes, Route, useParams } from 'react-router-dom'
import SpaceSelection from './SpaceSelection'
import SpaceView from './SpaceView'
import NotFound from './NotFound.jsx'




function App() {
const [user, setUser] = useState({})
const [plants, setPlants] = useState([])

function SpaceViewWrapper() {
  const { spaceIndex } = useParams()
  return <SpaceView space={user.spaces[spaceIndex]} />
}

  return (
    <> 
    {user && user.firstName ? < NavBar /> : <AltNavBar />}
      <Routes>
        <Route path="/login" element={<><Login setUser={setUser}/></>} />
        <Route path="/register" element={<><Register/></>} />
        <Route path="/myplants" element={< Auth user={user} setUser ={setUser} plants={plants} setPlants={setPlants}><MyPlants  user={user} setUser ={setUser} plants={plants}/></Auth>} />
    
        <Route path="/" element={< Auth user={user} setUser ={setUser} plants={plants} setPlants={setPlants}><Home user={user} plants={plants}/></Auth>} />
        <Route path="/space/" user={user} setUser ={setUser} plants={plants} setPlants={setPlants}>
          <Route path="all" element={<Auth user={user} setUser ={setUser} plants={plants} setPlants={setPlants}><SpaceSelection user={user}/></ Auth>} />
          <Route path=':spaceIndex' element={<Auth user={user} setUser ={setUser} plants={plants} setPlants={setPlants}><SpaceViewWrapper /></ Auth>} />
        </Route>
        <Route path="/newspace" element={< Auth user={user} setUser ={setUser} plants={plants} setPlants={setPlants}><NewSpace user={user} setUser={setUser}/></Auth>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App