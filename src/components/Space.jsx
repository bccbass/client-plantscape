import React from 'react'
import {upperCaser} from './helperfuncs.js'
import AreaList from './AreaList.jsx'
import AreaListTest from './AreaListTest.jsx'
import { useNavigate } from 'react-router-dom'

const styles = { maxWidth: '540px', color: 'grey'}

const Space = ({space, plants}) => {
  const navigate = useNavigate()
  return <>
    <div>Space.jsx</div>
    <div className="card mb-3" style={styles}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={space.imgUrl} className="img-fluid rounded-start" alt="image of selected space goes here"/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{upperCaser(space.name)}</h5>
          {/* <p className="card-text"><small className="text-body-secondary">{plant.scientific_name}</small></p> */}

          <p className="card-text">{space.notes}</p>
        </div>
      {/* <AreaList areas={space.areas} plants={plants}/> */}
      <button className="btn btn-success" onClick={e => {navigate('/newarea')}}>Add Area</button>
    </div>
  </div>
</div>
<AreaListTest areas={space.areas} plants={plants}/>
</>
}

export default Space