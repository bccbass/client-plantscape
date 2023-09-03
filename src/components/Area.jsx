import React, { useState } from "react";
import PlantList from "./PlantList.jsx";
import { useNavigate } from 'react-router-dom'
import { updateUser } from './helperfuncs.js'

const styles = { maxWidth: "540px", color: "grey" };

const Area = ({ user, area, plants }) => {
  // could also do a use effect where the filtering will take place (i.e. wrapping the filter in a useEffect )
  // set the result of the filter to state
  // pass the state into plantlist
  const [showComponent, setShowComponent] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    setShowComponent(true);
  };

  const deleteArea = () => {
    const indexOf = user.spaces.findIndex((space) => space._id)
    const indexOfArea = user.spaces[indexOf].areas.findIndex((areas) => area._id)
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
          {/* <div className="col-md-4">
      <img src={area.imgUrl} className="img-fluid rounded-start" alt="image of selected area goes here"/>
    </div> */}
            <div className="card-body">
              <h3 className="card-title">{area.name}</h3>
              {/* <p className="card-text"><small className="text-body-secondary">{plant.scientific_name}</small></p> */}

              <p className="card-text">{area.notes}</p>
            </div>
            <div>
            <PlantList plants={areaPlants} setActive={setActive} />
            </div>
            {/* <div className="form-group">
              <input type="submit" onClick={handleClick} value={`Edit ${area.name}`} className="btn btn-primary" />
              {showComponent && <EditSpace space={space} user={user} setUser={setUser} />}
            </div> */}
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