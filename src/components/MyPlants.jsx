import React, { useState, useEffect } from "react";
import SearchPlants from "./Search/SearchPlants.jsx";
import PlantList from "./PlantList.jsx";
import PlantPreview from "./Search/PlantPreview.jsx";

const style = {
  display: "flex",
  color: "grey",
};

const activeFrameStyle = {
  marginLeft: "2rem",
};

// Passes in the plants array, user object and setUser variable to render a nested PlantList of all of the user's plants
// The plants, user and setUser props are passed to the nested SearchPlants and PlantPreview components 
// to respectively render a plant search bar and preview card for a selected Plant
const MyPlants = ({ plants, user, setUser }) => {
  const [searchResults, setSearchResults] = useState(false);
  const [active, setActive] = useState(false);
  const [querySelection, setQuerySelection] = useState();

  useEffect(() => {
    if (querySelection) {
      setActive(
        <PlantPreview
          plant={querySelection}
          user={user}
          setUser={setUser}
          setActive={setActive}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          setQuerySelection={setQuerySelection}
        />
      );
    }
  }, [querySelection]);

  return (
    <>
      <h1>{user.firstName}'s Plants</h1>
      <div style={style}>
        <div className="leftColumn">
          <div className="mb-2 me-4">
        <span className="">From my plants list...</span>
        </div>
          
          <PlantList plants={plants} setActive={setActive} />
          <SearchPlants
            user={user}
            setUser={setUser}
            setQuerySelection={setQuerySelection}
            setActive={setActive}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          />
        </div>
        <div style={activeFrameStyle}>{active}</div>
      </div>
    </>
  );
};

export default MyPlants;
