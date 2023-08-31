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
    getUser(setUser)
    
    if (!user){
         navigate('/login')
    }
    // COMMENT THIS WHEN USING LIVE DATA FROM PERENUAL
    // setPlants(samplePlants)
}, [])

// UNCOMMENT THIS TO GET LIVE DATA FROM PERENUAL
    useEffect(() => {
        console.log("pla", plants)
        getPlants(setPlants, user, plants)
    }, [user])



return <>{ children }</>
}

export default Auth