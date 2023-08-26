import './App.css'
import Home from './Home.jsx'
import NavBar from './NavBar.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import AltNavBar from './AltNavBar.jsx'
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom'

function App() {
  const nav = useNavigate()

  return (
    <>
      <Routes>
        <Route path="/login" element={<><AltNavBar /><Login /></>} />
        <Route path="/register" element={<><AltNavBar /><Register /></>} />
        <Route path="/" element={<><NavBar /><Home /></>}/>
      </Routes>
    </>
  )
}

export default App