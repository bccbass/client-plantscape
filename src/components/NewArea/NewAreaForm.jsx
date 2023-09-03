import React, { useState } from "react";
import { updateUser } from "../helperfuncs.js";

const NewAreaForm = ({ user, setUser, setArea, setFormSubmit}) => {
  const [form, setForm] = useState({
    name: "",
    notes: "",
    space: "",
  });

  // These methods will update the state properties
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission
  async function onSubmit(e) {
    e.preventDefault();
    let index;
    let userCopy;
    // Loop to iterate over the user.spaces array
    for (let i of user.spaces) {
      // The find method searches the array for the area name that matches the name entered in the form
      if (i.areas.find((area) => area.name === form.name)) {
        // Popup to alert user that a duplicate cannot be created - a matching record was found in the database
        window.alert("That area already exists");
        return
      } else {
        // Create a copy of the user data
        userCopy = { ...user };
        // Find the index of the space index in the spaces array that matches the space name entered in the form
        index = userCopy.spaces.findIndex(
          (spaces) => spaces.name === form.space
        );
        // Update the state of Area
        setArea({ space: form.space, name: form.name });
        setFormSubmit(true);
      }
    }

    // Variable to store details of the user's new Area
    let newArea = {
      name: form.name,
      notes: form.notes,
      plants: [],
    };

    // Push the newly created Area to the UserCopy variable
    userCopy.spaces[index].areas.push(newArea);
    // Call the setUser function to update the user state to the newly created copy
    setUser(userCopy);
    // Reset the state of the form
    setForm({ name: "", notes: "", space: "" });
  }
  // Call the updateUser function, which sends a patch request to modify the user record in the database
  updateUser(user);

  return (
    <div>
      <h3>Create New Area</h3>
      <form onSubmit={onSubmit} validate>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Notes</label>
          <input
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
          aria-label="Small select example"
          id="space"
          required
          
        >
          <option value="" disable selected > -- Select Space -- </option>
          {(user?.spaces || []).map((space, index) => (
            <option key={index} value={space.name} required>
              {space.name}
            
            </option>
          ))}
        </select>
        <div className="form-group">
          <input type="submit" value="Add Area" className="btn btn-success" />
        </div>
      </form>
    </div>
  );
};

export default NewAreaForm;
