import React, { useState } from "react";
import PlantList from "./PlantList.jsx";
import { useNavigate } from 'react-router-dom'
import { updateUser } from './helperfuncs.js'

const styles = { maxWidth: "540px", color: "grey" };

// Passes in the user, area and space objects and plants array to render the Space component
// Plants array is passed in to render the nested PlantList component
const Area = ({ user, area, plants, space }) => {

  const [showComponent, setShowComponent] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    setShowComponent(true);
  };

  const deleteArea = () => {
    const indexOf = user.spaces.findIndex((spaces) => spaces._id === space._id)
    const indexOfArea = user.spaces[indexOf].areas.findIndex((areas) => areas._id === area._id)
    user.spaces[indexOf].areas.splice(indexOfArea, 1)
    updateUser(user);
    navigate("/");
  };

  const areaPlants = plants.filter((plant) => area.plants.includes(plant.id));
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="card m-3" style={styles}>
        <div className="row g-0">
            <div className="card-body">
              <h3 className="card-title">{area.name}</h3>


              <p className="card-text">{area.notes}</p>
            </div>
            <div>
            <PlantList plants={areaPlants} setActive={setActive} />
            </div>
            <div className="form-group">
              <input type="submit" onClick={deleteArea} value={`Delete ${area.name}`} className="m-2 btn btn-danger" />
            </div>
          {active}
        </div>
      </div>
    </>
  );
};

export default Area;