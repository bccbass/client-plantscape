import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchPlants from "../Search/SearchPlants.jsx";
import { upperCaser, updateUser } from "../helperfuncs.js";
import "./AddPlants.css";

const AddPlants = ({ user, setUser, area }) => {
  const navigate = useNavigate();
  const [querySelection, setQuerySelection] = useState();
  const [thisArea, setThisArea] = useState();
  const [newPlants, setNewPlants] = useState([]);
  const [searchResults, setSearchResults] = useState();
  // const [active, setActive] = useState()

  // add to "new plants array" which is a holding area of selected plants
  // before committing them to an area and the global user.plants list
  useEffect(() => {
    if (querySelection && !newPlants.includes(querySelection)) {
      setNewPlants([...newPlants, querySelection]);
    }
  }, [querySelection]);

  // Locates users areas and spaces from user object using passed in area object
  // These components should probably be refactored to use useContext/useReducer as the prop passing is unwieldly

  // useEffect(() => {
  //   // checks if user spaces exists and locates corresponding space from user object
  //   // sets to variable spaceFromUser
  //   let spaceFromUser =
  //     user?.spaces && user.spaces.filter((el) => el.name == area.space)[0];
  //   // checks if user areas exists and locates corresponding area from user object
  //   // sets to variable areFromUser
  //   let areaFromUser =
  //     spaceFromUser?.areas &&
  //     spaceFromUser.areas.filter((el) => el.name == area.name)[0];
  //   // stores located user area in stateful object thisArea
  //   setThisArea(areaFromUser);
  // }, [user]);

  // Adds selected plants to appropriate area and to user plants. U
  // Updates the User in the database
  const handleAddPlantsClick = () => {
    // create array of plant ids to store in user.plants and user.spaces.areas.plants
    let newPlantsIdArray = newPlants.map((el) => el.id);
    // checks if user spaces exists and locates corresponding space from user object
    // sets to variable spaceFromUser
    let spaceFromUser =
      user?.spaces && user.spaces.filter((el) => el.name == area.space)[0];
    // checks if user areas exists and locates corresponding area from user object
    let areaFromUser =
      spaceFromUser?.areas &&
      spaceFromUser.areas.filter((el) => el.name == area.name)[0];
    // sets to variable areFromUser
    setThisArea(areaFromUser);
    // Assigns area plants to array of ID
    areaFromUser.plants = newPlantsIdArray;
    // Set updated user object
    // create set of unique ids in user.plants global plants array
    setUser(
      (user.plants = [...new Set([...user.plants, ...newPlantsIdArray])])
    );
    // setUser to updated obj
    setUser(user);
    // update user in the database
    updateUser(user);
    // navigate to home page
    navigate("/");
  };

  // Removes plant from New Plants array with click
  const handleDeletePlant = (e) => {
    const removeTargetPlant = newPlants.filter(
      (el) => el.common_name != e.target.value
    );
    setNewPlants(removeTargetPlant);
  };

  return (
    <>
      <div className="container w-75">
        <div className="card ">
          <h2 className="card-title">Add Plants to {area.name} </h2>

          <div className="card-body">
            <SearchPlants
              user={user}
              setUser={setUser}
              setQuerySelection={setQuerySelection}
              orientation="list-group-horizontal"
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />

            {newPlants.length > 0 && (
              <div>
                <div className="card-title mt-3">
                  <h5 className="mb-0 text-secondary">
                    New plants for {area.name}!
                  </h5>
                  <p className="mt-0 text-secondary">click to remove a plant</p>
                  {newPlants.map((el) => (
                    <button
                      key={el.id}
                      onClick={handleDeletePlant}
                      className="badge me-1 opacity-75"
                      value={el.common_name}
                    >
                      {upperCaser(el.common_name)}{" "}
                    </button>
                  ))}
                </div>
                <h3 className="card-title"> </h3>
                <button
                  className="btn btn-primary mt-3"
                  onClick={handleAddPlantsClick}
                >
                  Add Plants
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPlants;
