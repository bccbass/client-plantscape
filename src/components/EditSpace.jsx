import React, { useState } from "react"
import { useNavigate } from "react-router"
import { updateUser } from './helperfuncs.js'

const EditSpace = ({ space, user, setUser }) => {
  const [form, setForm] = useState({
    name: space.name,
    notes: space.notes,
    location: space.location,
  })

  const navigate = useNavigate()

  // These methods will update the state properties
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value }
    })
  }

  // This function will handle the submission
  async function onSubmit(e) {
    e.preventDefault()

    const editedSpace = {
      name: form.name,
      notes: form.notes,
      location: form.location,
    }

    // Control flow structure to update the details for name, notes and location if any one of them are updated by the user
    if (space.name !== editedSpace.name || space.notes !== editedSpace.notes || space.location !== editedSpace.location) {
      space.name = editedSpace.name
      space.notes = editedSpace.notes
      space.location = editedSpace.location
    } else {
      window.alert("Please make an edit to the Space details.")
    }
      // Create a copy of the user object to modify    
      let userCopy = { ...user }
      // Call the setUser function to update the user state to the newly created copy
      setUser(userCopy)
      // Call the updateUser function, which sends a patch request to modify the user record in the database
      updateUser(user)
  }

  // This following section will display the form that takes the input from the user
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label hidden htmlFor="name" >Name</label>
          <input
            type="text"
            placeholder={`Edit Name - ${space.name}`}
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label hidden htmlFor="name">Notes</label>
          <input
            type="text"
            placeholder={`Edit Notes - ${space.notes}`}
            className="form-control"
            id="notes"
            value={form.notes}
            onChange={(e) => updateForm({ notes: e.target.value })}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="locationIndoors"
              value="Indoor"
              checked={form.location === "Indoor"}
              onChange={(e) => updateForm({ location: e.target.value })}
            />
            <label htmlFor="locationIndoors" className="form-check-label">
              Indoor
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="locationOutdoors"
              value="Outdoor"
              checked={form.location === "Outdoor"}
              onChange={(e) => updateForm({ location: e.target.value })}
            />
            <label htmlFor="locationOutdoor" className="form-check-label">
              Outdoor
            </label>
          </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Confirm" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default EditSpace