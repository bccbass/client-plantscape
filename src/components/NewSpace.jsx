import React, { useState } from "react"
import { useNavigate } from "react-router"
import { updateUser } from './helperfuncs.js'

const NewSpace = ({ user, setUser }) => {
  const [form, setForm] = useState({
    name: "",
    notes: "",
    location: "",
  })

  const navigate = useNavigate()

  // These methods will update the state properties
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value }
    })
  }

  // This function will handle the submission
  async function onSubmit(e, navDestination) {
    e.preventDefault()

    // Variable to store details of the user's new Space
    const newSpace = {
      name: form.name,
      notes: form.notes,
      location: form.location,
    }
    
    // Error handling logic to prevent duplicate/identical Spaces being created
    if (user.spaces.find((space) => space.name === newSpace.name)) {
      window.alert("That space already exists!")
    } else {
      // Create a copy of the user object to modify
      let userCopy = { ...user }
      // Add the new Space to the copy
      userCopy.spaces.push(newSpace)
      // Call the setUser function to update the user state to the newly created copy
      setUser(userCopy)
      // Reset the state of the form
      setForm({ name: "", notes: "", location: "" })
    }
    // Call the updateUser function, which sends a patch request to modify the user record in the database
    updateUser(user)
    navigate(navDestination)
  }

  // This following section will display the form that takes the input from the user
  return (
    <div>
      <h3>Create New Space</h3>
      <p>A Space is just a big place to group your areas and plants in!</p>
      <form onSubmit={(e) => onSubmit(e, '/')}>
        <div className="form-group">
          <label hidden htmlFor="name">Name</label>
          <input
            placeholder="Name of Space (e.g. Front Yard, House)"
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label hidden htmlFor="name">Notes</label>
          <input
            placeholder="Notes"
            type="text"
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
          <input type="submit" value="Add Space" className="btn btn-success" />
        </div>
      </form>
    </div>
  )
}

export default NewSpace