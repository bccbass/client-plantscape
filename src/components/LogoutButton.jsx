import React from 'react'
import { Link } from 'react-router-dom' 

const style = { right: '1rem', textDecoration: 'none', color: 'green'}

// Passes a user click event to clear the local storage of the user Bearer token and redirects the client to the login page
const handleLogout = () => {
    localStorage.clear()
    return redirect('/login')
}

const LogoutButton = () => {
    return <Link className='nav-link ms-2'style={style} onClick={handleLogout} to='/login'>Logout</Link>
}

export default LogoutButton