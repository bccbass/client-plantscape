import React from "react";
import Plant from "./Plant.jsx";
import PlantList from "./PlantList.jsx"
import NavBar from "./NavBar.jsx"


const style = {
    display: 'flex',
    margin: '2rem',
    maxWidth: '900px'
}


const MyPlants = ({ plants }) => {
  return (
    <>
    < NavBar />
      <h1>My Plants</h1>
    {plants.length === 0 ?
         <p>Sorry, no plants to display</p>
    :
    <div style={style} className="container">
        <PlantList plants={plants} />
        </div>}
    </>
  );
};

export default MyPlants;
