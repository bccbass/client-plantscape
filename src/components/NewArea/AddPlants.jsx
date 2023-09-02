import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import SearchPlants from "../Search/SearchPlants.jsx"
import { upperCaser, updateUser } from "../helperfuncs.js"
import "./AddPlants.css"

const AddPlants = ({ user, setUser, area, space }) => {
  const navigate = useNavigate()
  const [querySelection, setQuerySelection] = useState()
  const [thisArea, setThisArea] = useState()
  const [newPlants, setNewPlants] = useState([])

  useEffect(() => {
    if (querySelection && !newPlants.includes(querySelection)) {
      setNewPlants([...newPlants, querySelection])
    }
  }, [querySelection])

  useEffect(() => {
    let spaceFromUser =
      user?.spaces && user.spaces.filter((el) => el.name == area.space)[0]
    let areaFromUser =
      spaceFromUser?.areas &&
      spaceFromUser.areas.filter((el) => el.name == area.name)[0]
    setThisArea(areaFromUser)
  }, [user]);

  const handleAddPlantsClick = () => {
    let newPlantsIdArray = newPlants.map((el) => el.id)
    let spaceFromUser =
      user?.spaces && user.spaces.filter((el) => el.name == area.space)[0]
    let areaFromUser =
      spaceFromUser?.areas &&
      spaceFromUser.areas.filter((el) => el.name == area.name)[0]
    setThisArea(areaFromUser)
    areaFromUser.plants = newPlantsIdArray
    setUser(user.plants = [...new Set([...user.plants, ...newPlantsIdArray])])

    setUser(user)
    updateUser(user)
    navigate("/")
  }

  const handleDeletePlant = (e) => {
    const removeTargetPlant = newPlants.filter(
      (el) => el.common_name != e.target.value
    )
    setNewPlants(removeTargetPlant) // delete
  }

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
              orientation='list-group-horizontal'
            />
            {/* 
             {console.log('query', querySelection)}
             {console.log('area', area)} */}
            {/* {console.log(user.spaces[2].areas)} */}

            {newPlants.length > 0 && (
              <div>
                <div className="card-title mt-3">
                  <h5 className="mb-0 text-secondary" >New plants for {area.name}!</h5>
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
