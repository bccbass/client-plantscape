import React, { useState, useEffect } from "react";
import SearchResultList from "./SearchResultList.jsx";
import SearchBar from "./SearchBar.jsx";

const style = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "500px",
  padding: "2rem",
  margin: "2rem",
};

const SearchPlants = ({
  user,
  setUser,
  setQuerySelection,
  setActive,
  orientation,
  searchResults,
  setSearchResults
}) => {
  useEffect(() => {
    setActive(
      <SearchResultList
        searchResults={searchResults}
        user={user}
        setUser={setUser}
        setQuerySelection={setQuerySelection}
        orientation={orientation}
        setActive={setActive}
      />
    );
  }, [searchResults]);

  return (
    <>
      <div>
        <SearchBar
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
        {/* <SearchResultList
          searchResults={searchResults}
          user={user}
          setUser={setUser}
          setQuerySelection={setQuerySelection}
          orientation={orientation}
          setActive={setActive}
        /> */}
      </div>
    </>
  );
};

export default SearchPlants;
