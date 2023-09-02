import React, { useState } from "react";
import { updateUser } from "../helperfuncs.js";

const NewAreaForm = ({ user, setUser, setArea, setFormSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    notes: "",
    space: "",
  });

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    let index;
    let userCopy;

    for (let i of user.spaces) {
      if (i.areas.find((area) => area.name === form.name)) {
        window.alert("That area already exists");
      } else {
        userCopy = { ...user };
        index = userCopy.spaces.findIndex(
          (spaces) => spaces.name === form.space
        );
        setArea({ space: form.space, name: form.name });
        setFormSubmit(true);
      }
    }

    let newArea = {
      name: form.name,
      notes: form.notes,
      plants: [],
    };

    userCopy.spaces[index].areas.push(newArea);
    setUser(userCopy);
    setForm({ name: "", notes: "", space: "" });
  }

  updateUser(user);

  return (
    <div>
      <h3>Create New Area</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
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
        >
          <option value="Select Space"> -- Select Space -- </option>
          {(user?.spaces || []).map((space, index) => (
            <option key={index} value={space.name}>
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
