import React from 'react'
import Title from './Title.jsx'

// Site description/overview component
function About() {
  return (
    <>
    <Title />
    <p className="about">🍁🌳🌺</p>
    <p className="about">We designed Plantscape to help you take better care of your garden.</p>
    <p className="about">Imagine... you’ve just spent a weekend and a small fortune to landscape your front yard and now you can’t remember the names of any of your new plants, let alone their care needs and schedules. Sure you could save the small plastic information tags for every plant in a ziplock bag, toss it in a drawer in your garage and hope to find it before your new babies have withered away… Or you could start using Plantscape!</p>
    <p className="about">Start by adding a new Space, then assign an Area as well as plants. The app provides detailed information about your plants to help you take care of them. The plant data is powered by the Perenual API.</p>
    </>
  )
}

export default About