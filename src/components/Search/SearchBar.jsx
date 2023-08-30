import React, { useState } from "react";
import apiURL from "../getAPI.js"


const SearchBar = ({setSearchResults}) => {
  const [query, setQuery] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const queryPlants = async (query) => {
    const result = await fetch(`${apiURL}/plants?q=${query}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const parsedResult = await result.json()
    const filteredResult = parsedResult
    .filter((el) => el.common_name.includes(query))
    .slice(0, 6);
    setSearchResults(filteredResult);
  };

  return (
    <>
      <form className="input-group mb-3 w-50 ">
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          id="searchBar"
          placeholder="Search plants..."
        />
        <label htmlFor="searchBar"></label>
        <button
          type="button"
          className="btn btn-primary "
          id="basic-addon2"
          onClick={(e) => {
            e.preventDefault();
            query.length && queryPlants(query);
          }}
        >
          Search
        </button>
      </form>

        <div>
          
        </div>
    </>
  );
};

export default SearchBar;
