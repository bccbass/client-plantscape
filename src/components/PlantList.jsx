import React, { useState, useEffect } from "react";
import Plant from "./Plant.jsx";
import {upperCaser} from './helperfuncs.js'


const style = {
  maxWidth: '750px',
  display: 'flex',
  justifyContent: 'space-between',

};

const PlantList = ({ plants, setActive }) => {
  const [plantSelect, setPlantSelect] = useState();
  useEffect(() => { plantSelect && setActive(< Plant plant={plantSelect}/>)}, [plantSelect]);
  // useEffect(() => setActive(<><h1>I'm active</h1></>), [plantSelect]);

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
      </div>

    </>
  );
};

export default PlantList;
