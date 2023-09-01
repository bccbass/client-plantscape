import React, { useState } from "react";
import apiURL from "../getAPI.js";

const SearchBar = ({ searchResults, setSearchResults }) => {
  const [query, setQuery] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const queryPlants = async (query) => {
    const result = await fetch(`${apiURL}/plants?q=${query}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const parsedResult = await result.json();
    const filteredResult = parsedResult
      .filter((el) => el.common_name.includes(query))
      .slice(0, 6);
    setSearchResults(filteredResult);
  };

  return (
    <>
      <form
        style={{ width: "100%" }}
        className="input-group mb-3 mt-2"
        onSubmit={(e) => {
          e.preventDefault();
          setQuery('')
          queryPlants(query);
        }}
      >
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
        <input
          type="submit"
          className="btn btn-primary "
          id="basic-addon2"
          alue="Add Area"
        />
      </form>

      <div>
        {searchResults && !searchResults.length && (
          <h6 className="text-secondary">
            <em>No results for "{query}"</em>
          </h6>
        )}
      </div>
    </>
  );
};

export default SearchBar;
