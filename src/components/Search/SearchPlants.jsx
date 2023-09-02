import React, { useState, useEffect } from "react";
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




const SearchPlants = ({user, setUser, setQuerySelection, orientation}) => {
  const [searchResults, setSearchResults] = useState(false);



    
    return <>
    <div >
        <SearchBar searchResults={searchResults} setSearchResults={setSearchResults}/>
        <SearchResultList searchResults={searchResults} user={user} setUser={setUser} setQuerySelection={setQuerySelection} orientation={orientation}/> 
        </div>
    </>    
  }

  export default SearchPlants