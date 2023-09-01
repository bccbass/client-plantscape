import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { updateUser } from './helperfuncs.js'

const NewArea = ({ user, setUser }) => {
  const [form, setForm] = useState({
    name: "",
    notes: "",
    space: "",
  });

  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    let index
    let userCopy

    for (let i of user.spaces) {
      if (i.areas.find((area) => area.name === form.name )) {
        window.alert("That area already exists");
      } else {
        userCopy = { ...user };
        index = userCopy.spaces.findIndex((spaces) => spaces.name === form.space)
      }
    }

    let newArea = {
      name: form.name,
      notes: form.notes
    }

    // console.log(newArea)
    userCopy.spaces[index].areas.push(newArea)
    setUser(userCopy);
    setForm({ name: "", notes: "", space: "" });
    // console.log(userCopy.spaces[index].areas)
  }

  updateUser(user);  

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
  );
};

export default NewArea;
