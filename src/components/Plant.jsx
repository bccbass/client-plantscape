import React from 'react'
import {upperCaser} from './helperfuncs.js'

const styles = { maxWidth: '540px', color: 'grey'}

const Plant = ({plant}) => {
    return <>
    <div class="card mb-3" style={styles}>
  <div class="row g-0">
    <div class="col-md-4">
      {/* <img src={plant.default_image.original_url} class="img-fluid rounded-start" alt="..."/> */}
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{upperCaser(plant.common_name)}</h5>
        <p class="card-text"><small class="text-body-secondary">{plant.scientific_name}</small></p>

        <p class="card-text">{plant.description}</p>
      </div>
    </div>
  </div>
</div>

</>
}

export default Plant