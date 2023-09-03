import React from "react";
import SearchResultList from "./SearchResultList.jsx";

import { updateUser } from "../helperfuncs.js";

const styles = { width: "300px", color: "grey" };

const PlantPreview = ({
  plant,
  user,
  setUser,
  setActive,
  searchResults,
  setQuerySelection,
}) => {

  const handleOnClick = (e) => {
    e.preventDefault();
  // Check if plant to add is already in users plants array.
    if (!user.plants.includes(plant.id)) {
  // If not, add plant, update local user object
      let userCopy = { ...user };
      userCopy.plants.push(plant.id);
      setUser(userCopy);
    }
    // call updateUser function to make POST request to backend with new user object to be updated in the database
    updateUser(user);
  };

  // handle exiting plant preview and rendering search results list
  const handleBackToSearch = (e) => {
    // set active component to mount searchResults component
    setActive(
      <SearchResultList
        searchResults={searchResults}
        user={user}
        setUser={setUser}
        setQuerySelection={setQuerySelection}
        setActive={setActive}
      />
    );
  };
  return (
    <>
      <div className="card mb-3" style={styles}>
        <div className="row g-0">
          <img
            src={plant.default_image.original_url}
            className="img-fluid rounded-start"
            alt="..."
          />
          <span className="">
            <em> Search Preview </em>
          </span>
          <div className="card-body">
            <h5 className="card-title">{plant.common_name}</h5>
            <p className="card-text">
              <small className="text-body-secondary">
                {plant.scientific_name}
              </small>
            </p>

            <p className="card-text">Sunlight: {plant.sunlight.join(", ")}</p>
            <button className="btn btn-success py-1" onClick={handleOnClick}>
              Add Plant
            </button>
          </div>
        </div>

        <button
          className="btn btn-success mt-3 py-1"
          onClick={handleBackToSearch}
        >
          Back to Search Results
        </button>
      </div>
    </>
  );
};

export default PlantPreview;
