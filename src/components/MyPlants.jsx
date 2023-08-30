import React from "react";
import SearchPlants from "./Search/SearchPlants.jsx";
import PlantList from "./PlantList.jsx";
import NavBar from "./NavBar.jsx";
import SearchBar from "./Search/SearchBar.jsx";

const style = {
  display: "flex",
  margin: "2rem",
  maxWidth: "900px",
};

const MyPlants = ({ plants }) => {
  return (
    <>
      <NavBar />
      <h1>My Plants</h1>
      <PlantList plants={plants} />
      <div>

        <SearchPlants />
      </div>
    </>
  );
};

export default MyPlants;
