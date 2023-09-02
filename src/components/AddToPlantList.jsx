import React from 'react'
import SearchPlants from './Search/SearchPlants.jsx'

const AddToPlantList = ({user, setUser}) => {
  return (<>
    <div>AddToPlantList</div>
    <SearchPlants user={user} setUser={setUser} />
    </>
  )
}

export default AddToPlantList