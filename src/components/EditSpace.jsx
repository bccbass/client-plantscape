import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { updateUser } from './helperfuncs.js'

const EditSpace = ({ user, setUser }) => {
  const [form, setForm] = useState({
    name: "",
    notes: "",
    location: "",
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
    
    if (user.spaces.find((space) => space.name === newSpace.name)) {
      window.alert("That space already exists!")
    } else {
      let userCopy = { ...user };
      userCopy.spaces.push(newSpace);
      setUser(userCopy);
      setForm({ name: "", notes: "", location: "" })
    }
    updateUser(user)
  }

  return (
    <div>
      <h3>Edit Space</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label hidden htmlFor="name" >Name</label>
          <input
            type="text"
            placeholder="Edit Name"
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
            placeholder="Edit Notes"
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
          <input type="submit" value="Add Space" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default EditSpace;