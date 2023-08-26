import './App.css'
import Home from './Home.jsx'
import NavBar from './NavBar.jsx'
import Login from './Login.jsx'
import AltNavBar from './AltNavBar.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<><NavBar /><Home /></>}/>
        <Route path="/login" element={<><AltNavBar /><Login /></>} />
      </Routes>
    </>
  )
}

export default App