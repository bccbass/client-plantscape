import React, { useState } from "react"
import Space from './Space.jsx'
import {upperCaser} from './helperfuncs.js'


const style = {
  maxWidth: '750px',
  display: 'flex',
  width: "90vw",
  justifyContent: 'space-between'
}

// Pass in the user's spaces and plants arrays to render a list of buttons for the user's spaces
// Passes a selected space and the plants array to the nested Space component
const SpaceList = ({spaces, plants}) => {
    const [spaceSelect, setSpaceSelect] = useState();
    return (
    <>
        <div style={style} className="container">

      {spaces.length === 0 ? (
        
        <p>Sorry, no spaces to display!</p>
      ) : (
          <div className="list-group">
            {spaces.map((space) => {
              return (
                <a
                  // href=""
                  key={space.name}
                  className="list-group-item list-group-item-action"
                  aria-current="true"
                  onClick={(e) => {
                    e.preventDefault();
                    setSpaceSelect(space);
                  }}
                >
                  {upperCaser(space.name)}
                </a>
              );
            })}
          </div>
      )}
      </div>
      {spaceSelect && < Space space={spaceSelect} plants={plants}/>}
    </>
  )
}

export default SpaceList