import React, { useState } from "react";
import Plant from "./Plant.jsx";
import {upperCaser} from './helperfuncs.js'


const style = {
  maxWidth: '750px',
  display: 'flex',
  width: "90vw",
  justifyContent: 'space-between',

};

const PlantList = ({ plants }) => {
  const [plantSelect, setPlantSelect] = useState();
  return (
    <>
        <div style={style} className="container">

      {plants.length === 0 ? (
        
        <p>Sorry, no plants to display!</p>
      ) : (
          <div className="list-group">
            {plants.map((plant) => {
              return (
                <a
                  // href=""
                  key={plant.id}
                  className="list-group-item list-group-item-action"
                  aria-current="true"
                  onClick={(e) => {
                    e.preventDefault();
                    setPlantSelect(plant);
                  }}
                >
                  {upperCaser(plant.common_name)}
                </a>
              );
            })}
          </div>
      )}
      {plantSelect && < Plant plant={plantSelect}/>}
      </div>

    </>
  );
};

export default PlantList;
