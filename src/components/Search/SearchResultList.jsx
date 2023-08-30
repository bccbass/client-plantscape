import React from "react";

const SearchResultList = ({ searchResults, setQuerySelection }) => {

  return (
    <>
      <ul className="list-group" style={{ maxWidth: "200px" }}>
        {searchResults &&
          searchResults.map((res, i) => (
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
    </>
  );
};

export default SearchResultList;
