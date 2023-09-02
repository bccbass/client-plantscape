import React, { useState } from 'react'
import { updateUser } from './helperfuncs.js'
import EditSpace from './EditSpace.jsx'
import { useNavigate } from 'react-router-dom'
import AreaList from './AreaList.jsx'

const Space = ({ user, setUser, space, plants, spaceIndex }) => {
  const navigate = useNavigate()

  const [showComponent, setShowComponent] = useState(false)

  const handleClick = () => {
    setShowComponent(true)
  }

  const deleteSpace = () => {
    const indexOf = user.spaces.findIndex(spaces => spaces._id === space._id)
    user.spaces.splice(indexOf, 1)
    updateUser(user)
    navigate("/")
  }

  const styles = { maxWidth: '540px', color: 'grey'}
  
  return <>
    <div className="card mb-3" style={styles}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={space.imgUrl} className="img-fluid rounded-start" alt="image of selected space goes here"/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{space.name}</h5>
          {/* <p className="card-text"><small className="text-body-secondary">{plant.scientific_name}</small></p> */}

          <p className="card-text">{space.notes}</p>
        </div>
      <button className="btn btn-success" onClick={e => {navigate('/newarea')}}>Add Area</button>
    </div>
  </div>
</div>
<AreaList user={user} areas={space.areas} plants={plants}/>
<div className="form-group">
  <input type="submit" onClick={handleClick} value={`Edit ${space.name}`} className="btn btn-success" />
  {showComponent && <EditSpace space={space} user={user} setUser={setUser} />}
</div>
<div className="form-group">
  <input type="submit" onClick={deleteSpace} value={`Delete ${space.name}`} className="btn btn-success" />
</div>
</>
}

export default Space