import React, { useState } from 'react'
import { updateUser } from './helperfuncs.js'
import EditSpace from './EditSpace.jsx'
import { useNavigate } from 'react-router-dom'
import AreaList from './AreaList.jsx'

// Passes in the user, setUser, and space objects and plants array to render the Space component
// User, setUser, and space objects are passes in to the render the nested Edit Space and Delete Space button components
const Space = ({ user, setUser, space, plants }) => {
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
    <div className="card m-3" style={styles}>
      <div className="row g-0">
          <div className="card-body">
            <h5 className="card-title">{space.name}</h5>
            <p className="card-text">{space.notes}</p>
            {/* the following 3 lines are the Edit Space and Delete Space buttons */}
            <input type="submit" onClick={handleClick} value={`Edit`} className="btn btn-success m-2" />
            {showComponent && <EditSpace space={space} user={user} setUser={setUser} />}
            <input type="submit" onClick={deleteSpace} value={`Delete`} className="btn btn-danger m-2" />
          </div>
          <button className="btn btn-success" onClick={e => {navigate('/newarea')}}>Add an Area to {space.name}</button>
      </div>
    </div>
    <AreaList space={space} user={user} areas={space.areas} plants={plants}/>
  </>
}

export default Space