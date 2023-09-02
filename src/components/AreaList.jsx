import React, { useState } from "react"
import {upperCaser} from './helperfuncs.js'
import Area from "./Area.jsx"


const style = {
  maxWidth: '750px',
  display: 'flex',
  width: "90vw",
  justifyContent: 'space-between'
}

const AreaList = ({ user, areas, plants}) => {
    const [areaSelect, setAreaSelect] = useState();

    return (
    <>
        <div>AreaList.jsx</div>
        <div style={style} className="container">

      {areas.length === 0 ? (
        
        <p>Sorry, no areas registered yet to this space. Nothing to display!</p>
        // add link to the NewArea component here
      ) : (
          <div className="list-group">
            {areas.map((area) => {
              return (
                <a
                  // href=""
                  key={area.name}
                  className="list-group-item list-group-item-action"
                  aria-current="true"
                  onClick={(e) => {
                    e.preventDefault();
                    setAreaSelect(area);
                  }}
                >
                  {area.name}
                </a>
              )
            })}
            {/* {areaSelect && < Area area={areaSelect} plants={plants}/>} */}
          </div>
          
      )}
      </div>
      {areaSelect && < area={areaSelect} plants={plants} />}
    </>
  )
}

export default AreaList