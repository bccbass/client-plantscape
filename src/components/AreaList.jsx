import React, { useState } from "react"
import {upperCaser} from './helperfuncs.js'
import Area from "./Area.jsx";


const style = {
  maxWidth: '750px',
  display: 'flex',
  width: "90vw",
  justifyContent: 'space-between'
}

const AreaList = ({areas, plants}) => {
    const [areaSelect, setAreaSelect] = useState();

    return (
    <>
        <div>AreaList.jsx</div>
        <div style={style} className="container">

      {areas.length === 0 ? (
        
        <p>Sorry, no areas registered yet to this space. Nothing to display!</p>
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
                  {upperCaser(area.name)}
                </a>
              )
            })}
            {areaSelect && < Area area={areaSelect} plants={plants}/>}
          </div>
          
      )}
      </div>

    </>
  )
}

export default AreaList