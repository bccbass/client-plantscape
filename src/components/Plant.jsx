import React from 'react'
import {upperCaser} from './helperfuncs.js'

const styles = { maxWidth: '540px', color: 'grey'}

const Plant = ({plant}) => {
    return <>
    <div className="card mb-3" style={styles}>
    <img src={plant.default_image.original_url} className="img-fluid rounded mb-2" alt="..."/>
    <h5 className="card-title">{upperCaser(plant.common_name)}</h5>
        <p className="card-text"><small className="text-body-secondary">{plant.scientific_name}</small></p>

  <div className="row g-0">
    <div className="col-md-4 mt-4 " style={{borderRight: '1px solid #D3D3D3'}}>
    <p className='m-3 '><small className="text-body-secondary">Cycle: {plant.cycle}</small></p>
    <p className='m-3'><small className="text-body-secondary">Watering: {plant.watering}</small></p>
    <p className='m-3'><small className="text-body-secondary">Sunlight: {plant.sunlight.length > 0 ? plant.sunlight.join(', ') : plant.sunlight[0]}</small></p>
    <p className='m-3'><small className="text-body-secondary">{plant.drought_tolerant && "Drought Tolerant"}</small></p>
    <p className='m-3'><small className="text-body-secondary">Maintenance: {plant.maintenance}</small></p>

    </div>
    <div className="col-md-8">
      <div className="card-body">
    
        <p className="card-text">{plant.description}</p>
      </div>
    </div>
  </div>
</div>

</>
}

export default Plant