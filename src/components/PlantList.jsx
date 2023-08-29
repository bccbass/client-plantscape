import React from "react";
import Plant from "./Plant.jsx";

const style = {
    maxWidth: '250px'
}

const PlantList = ({plants}) => {
 return  <>

<div style={style} className="container">
        <div class="list-group">
            {plants.map(plant => {
         return <a
            href="#"
            class="list-group-item list-group-item-action active"
            aria-current="true"
          >
            {plant.common_name}
          </a>
          })}
    </div>
    </div>
 </>
}

export default PlantList