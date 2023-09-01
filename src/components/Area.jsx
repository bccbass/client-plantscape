import React, { useState } from 'react'
import {upperCaser} from './helperfuncs.js'
import PlantList from './PlantList.jsx'

const styles = { maxWidth: '540px', color: 'grey'}

const Area = ({area, plants}) => {
  console.log(plants)
  console.log(area)
  console.log(area.plants)
  // could also do a use effect where the filtering will take place (i.e. wrapping the filter in a useEffect )
  // set the result of the filter to state
  // pass the state into plantlist
  const areaPlants = plants.filter(plant => area.plants.includes(plant.id))
  console.log(areaPlants)
  const [active, setActive] = useState(false)

  // const areaPlantsIds = area.plants.map((plant) => plant.plantId)
  // console.log(areaPlantsIds)
  // const areaPlants = plants.filter(plant => areaPlantsIds.includes(plant.id))
  // // const areaPlants = plants.filter(plant => plant.id === area.plants.plantId)
  return <>
    <div>Area.jsx</div>
    <div className="card mb-3" style={styles}>
  <div className="row g-0">
    {/* <div className="col-md-4">
      <img src={area.imgUrl} className="img-fluid rounded-start" alt="image of selected area goes here"/>
    </div> */}
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{area.name}</h5>
        {/* <p className="card-text"><small className="text-body-secondary">{plant.scientific_name}</small></p> */}

        <p className="card-text">{area.notes}</p>
      </div>
      <PlantList plants={areaPlants} setActive={setActive}   />
    </div>
    {active}
  </div>
</div>

</>
}

export default Area