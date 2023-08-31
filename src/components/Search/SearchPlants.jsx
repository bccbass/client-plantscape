import React, { useState } from "react";
import SearchResultList from './SearchResultList.jsx'
import SearchBar from './SearchBar.jsx'
import PlantPreview from "./PlantPreview.jsx";

const style = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    padding: '2rem',
    margin: '2rem',
}

// To make this work to select plants for areas, pass in a setter to Search plants. 
// Create logic to 'set' that setter when the Plant Prevew is clicked - probalby a button on the 
// PlantPreview that assigns the plant ID to the setter. Parent logic would then add that 
// plant id to appropriate user plant lists.


const SearchPlants = ({user, setUser, setActive}) => {
  const [searchResults, setSearchResults] = useState([]);
  const [querySelection, setQuerySelection] = useState();



    
    return <>
    <div >
        <SearchBar  setSearchResults={setSearchResults}/>
        <SearchResultList searchResults={searchResults} querySelection={querySelection} setQuerySelection={setQuerySelection} user={user} setUser={setUser} setActive={setActive}/> 
        {/* {querySelection && <PlantPreview plant={querySelection} user={user} setUser={setUser} setActive={setActive}/>} */}
        </div>
    </>    
  }

  export default SearchPlants