import React, { useState } from "react"
import apiURL from "../getAPI.js"

const SearchBar = ({ searchResults, setSearchResults }) => {
  const [query, setQuery] = useState([])
  const [submittedQuery, setSubmittedQuery] = useState('')

  const user = JSON.parse(localStorage.getItem("user"))

// Send request to backend with search query and set search results
  const queryPlants = async (query) => {
    // Send query to backend to retrieve results 
    const result = await fetch(`${apiURL}/plants?q=${query}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    })
    const parsedResult = await result.json()
    // Search only for common_names matching query
    // Future Stretch: add functionality to specify common vs scientific name search
    const filteredResult = parsedResult
      .filter((el) => el.common_name.includes(query))
      // Only return first six matches
      .slice(0, 6)
      // set search relts object to returned result
    setSearchResults(filteredResult)
  }

  return (
    <>
      <form
        style={{ maxWidth: '250px' }}
        className="input-group mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmittedQuery(query)
          setQuery('')
          queryPlants(query);
        }}
      >
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            let val = e.target.value
            setQuery(val)
          }}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          id="searchBar"
          placeholder="Search plants..."
        />
        <label htmlFor="searchBar"></label>
        <input
          type="submit"
          className="btn btn-success"
          id="basic-addon2"
          alue="Add Area"
        />
      </form>

      <div>
        {searchResults && !searchResults.length && (
          <h6 className="text-secondary mt-2">
            <em>No results for "{submittedQuery}"</em>
          </h6>
        )}
      </div>
    </>
  )
}

export default SearchBar