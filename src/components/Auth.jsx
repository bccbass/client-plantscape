import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { getUser, getPlants } from './loginfunctions.js'

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
        getPlants(setPlants, user, plants)
    }, [user])



return <>{ children }</>
}

export default Auth