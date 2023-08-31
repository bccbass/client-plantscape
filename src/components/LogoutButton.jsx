import React from 'react'
import { Link } from 'react-router-dom' 

const style = { right: '1rem', textDecoration: 'none', color: 'green'}
const handleLogout = () => {
    localStorage.clear()
    return redirect('/login')
}

const LogoutButton = () => {
    return <Link className='nav-link ms-2'style={style} onClick={handleLogout} to='/login'>Logout</Link>
}

export default LogoutButton