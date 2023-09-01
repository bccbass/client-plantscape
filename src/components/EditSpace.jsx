import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { updateUser } from './helperfuncs.js'

const EditSpace = ({ space, user, setUser }) => {
  const [form, setForm] = useState({
    name: space.name,
    notes: space.notes,
    location: space.location,
  });

  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const editedSpace = {
      name: form.name,
      notes: form.notes,
      location: form.location,
    }

    if (space.name !== editedSpace.name || space.notes !== editedSpace.notes || space.location !== editedSpace.location) {
      space.name = editedSpace.name
      space.notes = editedSpace.notes
      space.location = editedSpace.location
    } else {
      window.alert("Please make an edit to the Space details.")
    }
            
      let userCopy = { ...user }
      setUser(userCopy);
      updateUser(user)
  }

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
  );
};

export default EditSpace;