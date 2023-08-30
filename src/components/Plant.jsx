import React from 'react'
import {upperCaser} from './helperfuncs.js'

const styles = { maxWidth: '540px', color: 'grey'}

const Plant = ({plant}) => {
    return <>
    <div className="card mb-3" style={styles}>
  <div className="row g-0">
    <div className="col-md-4">
      {/* <img src={plant.default_image.original_url} className="img-fluid rounded-start" alt="..."/> */}
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{upperCaser(plant.common_name)}</h5>
        <p className="card-text"><small className="text-body-secondary">{plant.scientific_name}</small></p>

        <p className="card-text">{plant.description}</p>
      </div>
    </div>
  </div>
</div>

</>
}

export default Plant