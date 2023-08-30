import React, { useState } from "react";
import apiURL from "../getAPI.js";

// This is the original Search component. It should just be used for reference and 'SearchPlants' used in its place.

const SearchPlants = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState([]);
  const [querySelection, setQuerySelection] = useState();

  const user = JSON.parse(localStorage.getItem("user"));

  const queryPlants = async (query) => {
    const result = await fetch(`${apiURL}/plants?q=${query}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const parsedResult = await result.json();
    console.log(parsedResult);
    setSearchResults(parsedResult);
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
          id="searchplants"
          placeholder="Search plants..."
        />
        <label htmlFor="searchplants"></label>
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
        <ul className="list-group" style={{ maxWidth: "200px" }}>
          {searchResults &&
            searchResults
              .filter((el) => el.common_name.includes(query))
              .slice(0, 6)
              .map((res, i) => (
                <li
                  style={{ border: "none" }}
                  className="list-group-item flex-fill"
                  key={i}
                >
                  <button
                    className="btn btn-success"
                    onClick={(e) => {
                      e.preventDefault();
                      setQuerySelection(res);
                    }}
                  >
                    {res.common_name}{" "}
                  </button>
                </li>
              ))}
        </ul>
        <div>
          {querySelection ? (
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
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPlants;
