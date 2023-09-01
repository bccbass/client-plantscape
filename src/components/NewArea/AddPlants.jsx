import React, { useState, useEffect } from "react";
import SearchBar from '../Search/SearchBar.jsx'
import SearchResultList from '../Search/SearchResultList.jsx'
import SearchPlants from '../Search/SearchResultList.jsx'


const AddPlants = ({ user, setUser, area, space }) => {
  const [query, setQuery] = useState();

  // const [thisArea, setThisArea] = useState();
  // // console.log(user.spaces[0].areas[0].name)
  // console.log(area);
  // useEffect(() => {
  //   // if (user && user.spaces.length > 0) {
  //   let spaceFromUser =
  //     user?.spaces && user.spaces.filter((el) => el.name == space)[0];

  //   let areaFromUser =
  //     spaceFromUser?.areas && spaceFromUser.areas.filter((el) => el.name == area)[0];
  //   setThisArea(areaFromUser); // 
  //   console.log("thisarea:", thisArea)
  //   // }
  // }, [user]);

  return (
    <>
      <h1>Addplants</h1>

      <div className="container w-75">
        <div className="card ">
          <div className="card-body">
             <h3 className="card-title">Adding plants to {area.name} </h3> 
             <h5 className="card-title"></h5> 
            
             <SearchPlants  user={user} setUser={setUser}  query={query} setQuery={setQuery}/>


             {console.log('query', query)}
            <p className="card-text">
             {/* {area.notes} */}

            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default AddPlants;
