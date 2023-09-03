import React from 'react'
import logo from "../assets/anotherLogo.svg";

// Returns a "page not found" message if the user visits a URL not specified in the App Routes
const NotFound = () => {
  return (
    <>
    <div className='mt-8'>
        <img className='' style={{maxWidth: '180px'}} src={logo} alt="" />
        <h3 className='text-success mt-5'>Hmmmmm... We can't find that page!</h3>
    </div>
    </>
  )
}

export default NotFound