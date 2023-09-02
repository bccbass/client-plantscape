import React, { useState } from "react"
import { useNavigate } from "react-router"
import { updateUser } from './helperfuncs.js'

const NewArea = ({ user, setUser }) => {
  const [form, setForm] = useState({
    name: "",
    notes: "",
    space: "",
  });

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

    let index
    let userCopy

    // Error handling logic to prevent duplicate/identical Area being created
    for (let i of user.spaces) {
      if (i.areas.find((area) => area.name === form.name )) {
        window.alert("That area already exists")
      } else {
        // Create a copy of the user object to modify
        userCopy = { ...user }
        index = userCopy.spaces.findIndex((spaces) => spaces.name === form.space)
      }
    }

    // Variable to store details of the user's new Area
    let newArea = {
      name: form.name,
      notes: form.notes
    }

    userCopy.spaces[index].areas.push(newArea)
    // Call the setUser function to update the user state to the newly created copy
    setUser(userCopy)
    // Call the updateUser function, which sends a patch request to modify the user record in the database
    updateUser(user)
    // Reset the state of the form
    setForm({ name: "", notes: "", space: "" })
    // Employ useNavigate() to simulate going to / page
    navigate("/")
  }

  // This following section will display the form that takes the input from the user
  return (
    <div>
      <h3>Create New Area</h3>
      <p>An Area is a smaller place for your plants to call home! All Areas belong to a Space.</p>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label hidden htmlFor="name">Name</label>
          <input
            placeholder="Name of Area (e.g. Vege Garden, Kitchen)"
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
        <select
          onChange={(e) => updateForm({ space: e.target.value })}
          className="form-select form-select-me"
          aria-label="Small select example" id="space"
        >
          <option value="" disabled selected>Select Space</option>
          {(user?.spaces || []).map((space, index) => (
            <option key={index} value={space.name}>
              {space.name}
            </option>
          ))}
        </select>
        <div className="form-group">
          <input type="submit" value="Add Area" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default NewArea