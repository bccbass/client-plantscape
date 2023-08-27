import react, { useEffect, useContext, createContext } from "react";
import Login from './Login.jsx';
import { useNavigate } from 'react-router-dom';
import { getUser } from './loginfunctions.js'



const Auth = ({user, setUser, children}) => {
    const navigate = useNavigate()
    useEffect(() => {
    if (!localStorage.getItem('user')) {
        return navigate('/login')
    }
    if (!user) {
        getUser(setUser)
    }
    
}, [])

return <> { children  } </>
}

export default Auth