import React, { useState, useEffect } from "react";
import SearchPlants from "./Search/SearchPlants.jsx";
import PlantList from "./PlantList.jsx";
import PlantPreview from "./Search/PlantPreview.jsx";
import NavBar from "./NavBar.jsx";

const style = {
  display: "flex",
  margin: "2rem",
};

const activeFrameStyle = {
  marginLeft: "2rem",
};

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
