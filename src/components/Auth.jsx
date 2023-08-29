import react, { useEffect, useContext, createContext } from "react";
import Login from './Login.jsx';
import Home from './Home.jsx'
import { useNavigate } from 'react-router-dom';
import { getUser, getPlants, fetchUserData } from './loginfunctions.js'



// const Auth = ({user, setUser, plants, setPlants, children}) => {
//     const navigate = useNavigate()
//     let userLength = 0
//     useEffect(() => {
//     if (!localStorage.getItem('user')) {
//         return navigate('/login')
//     }
//     if (!user.firstName) {
//         getUser(setUser)
//     }
//     userLength = user.plants.length
    
//     if ( userLength > 0 && plants.length === 0){
//         getPlants(setPlants, user.plants )
//         console.log("from auth, plants:", plants)
//     }
    
// }, [])
const Auth = ({user, setUser, plants, setPlants, children}) => {
    const navigate = useNavigate()
    useEffect(() => {
    if (!localStorage.getItem('user')) {
        return navigate('/login')
    }
    fetchUserData(user, setUser, plants, setPlants )
    // if (!user){
    //      navigate('/login')
    // }
}, [])


return <>{ children }</>
}

export default Auth