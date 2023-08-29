import react, { useEffect, useContext, createContext } from "react";
import Login from './Login.jsx';
import Home from './Home.jsx'
import { useNavigate } from 'react-router-dom';
import { getUser, getPlants, fetchUserData } from './loginfunctions.js'
import samplePlants from './samplePlants.jsx'



    
const Auth = ({user, setUser, plants, setPlants, children}) => {
    const navigate = useNavigate()
    useEffect(() => {
    if (!localStorage.getItem('user')) {
        return navigate('/login')
    }
    fetchUserData(user, setUser, plants, setPlants )
    if (!user){
         navigate('/login')
    }
    setPlants(samplePlants)
}, [])


return <>{ children }</>
}

export default Auth