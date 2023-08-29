import React from "react";
import Plant from "./Plant.jsx";
import PlantList from "./PlantList.jsx"

const style = {
    display: 'flex',
    margin: '2rem',
    maxWidth: '900px'
}


const MyPlants = ({ plants }) => {
  return (
    <>
      <h1>My Plants</h1>
    {plants.length === 0 ?
         <p>Sorry, no plants to display</p>
    :
    <div style={style} className="container">
        <PlantList plants={plants} />
      
        <Plant plant={plants[0]} />
        </div>}
    </>
  );
};

export default MyPlants;
