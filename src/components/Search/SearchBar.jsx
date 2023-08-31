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
      <form style={{width: '100%'}} className="input-group mb-3 mt-2 ">
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
            queryPlants(query);
          }}
        >
          Search
        </button>
      </form>

        <div>
          {/* < SearchResultList searchResults={searchResults}/> */}
          {/* {querySelection ? (
            <div class="card w-75">
              <img
                src={querySelection.default_image.medium_url}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{querySelection.common_name}</h5>
                <div class="card-text">
                  <p> Watering: {querySelection.watering}</p>{" "}
                  <p>sunlight: {querySelection.sunlight}</p>
                </div>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ) : (
            <h1></h1>
          )} */}
        </div>
    </>
  );
};

export default SearchBar;
