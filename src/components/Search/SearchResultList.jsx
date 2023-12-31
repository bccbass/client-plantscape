import React, { useEffect, useState } from "react";
import { upperCaser } from "../helperfuncs.js";

const SearchResultList = ({
  searchResults,
  setQuerySelection,
  orientation,
}) => {
  const listStyle = orientation ? orientation : "list-group";
  return (
    <>
      {searchResults && searchResults[0] && (
        <h6 className="text-secondary">
          <em>Search results...</em>
        </h6>
      )}
      <ul className={`list-group ${listStyle}`}>
        {searchResults &&
          searchResults[0] &&
          searchResults.map((res, i) => (
            <li
              style={{ border: "none" }}
              className="list-group-item flex-fill"
              key={res.id}
            >
              <button
                className="btn btn-success opacity-50 "
                style={{ padding: ".2rem .5rem", fontSize: ".9rem" }}
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
