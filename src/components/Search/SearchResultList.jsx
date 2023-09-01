import React, {useEffect, useState} from "react";
import PlantPreview from "./PlantPreview.jsx";
import {upperCaser} from '../helperfuncs.js'


const SearchResultList = ({ user, setUser, searchResults, setQuerySelection}) => {
  


  return (
    <>
      {searchResults[0] && <h6 className="text-secondary"><em>Search results...</em></h6>}
      <ul  className="list-group" style={{ maxWidth: "200px" }}>
        {searchResults[0] &&
          searchResults.map((res, i) => (
            <li
              style={{ border: "none" }}
              className="list-group-item flex-fill"
              key={res.id}
            >
              <button
                className="btn btn-success"
                onClick={(e) => {
                  e.preventDefault();
                  setQuerySelection(res);
                }}
              
              >
                {upperCaser(res.common_name)}{" "}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default SearchResultList;
