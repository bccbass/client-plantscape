import React from 'react'

const SpaceView = ({space}) => {
  return space ? <>
    <div>SpaceView</div>
    <p>This is the view for the space with {space.name}</p>
  </>
  :
  <h1>Loading...</h1>
}

export default SpaceView