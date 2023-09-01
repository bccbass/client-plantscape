import React from "react";
import { updateUser } from "../helperfuncs.js";
import apiURL from "../getAPI";

const styles = { maxWidth: "340px", color: "grey" };



const PlantPreview = ({ plant, user, setUser }) => {
  const handleOnClick = (e) => {
    e.preventDefault()
    if (!user.plants.includes(plant.id)) {
    let userCopy = { ...user }
    userCopy.plants.push(plant.id);
    setUser(userCopy)
  }
  updateUser(user)
  }
  return (
  <>
      <div className="card mb-3" style={styles}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={plant.default_image.original_url}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{plant.common_name}</h5>
              <p className="card-text">
                <small className="text-body-secondary">
                  {plant.scientific_name}
                </small>
              </p>

              <p className="card-text">Sunlight: {plant.sunlight.join(", ")}</p>
              <button
                className="btn btn-success"
                onClick={handleOnClick}
              >
                Add Plant
              </button>
            </div>
            
          </div>
        </div>
        <span className="mt-3"><em> Search Preview </em></span>
      </div>
    </>)

};

export default PlantPreview;
