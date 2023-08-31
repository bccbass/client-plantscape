import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import apiURL from "./getAPI.js";

const updateUser = async (user) => {
  await fetch(`${apiURL}/users/${user._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
    },
    body: JSON.stringify(user),
  }).catch((error) => {
    window.alert(error);
    return;
  });
};

const NewArea = ({ user, setUser }) => {
  const [form, setForm] = useState({
    name: "",
    notes: "",
    space: "",
  })

  const [space, setSpace] = useState("Select Space")

  const updateSpace = (e) => {
    setSpace(e.target.value)
  }

  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const newArea = {
      name: form.name,
      notes: form.notes,
      space: form.space,
    };

    if (user.areas.find((area) => area.name === newArea.name)) {
      window.alert("That area already exists!");
    } else {
      let userCopy = { ...user };
      userCopy.spaces.push(newArea);
      setUser(userCopy);
      setForm({ name: "", notes: "", space: "" });
    }
    updateUser(user);
  }

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
        <select onChange={updateSpace} className="form-select form-select-me" aria-label="Small select example">
          <option value="Select Space"> -- Select Space -- </option>
          {user.spaces.map((space) => <option key={space.name} value={form.space}>{space.name}</option>)}
        </select>
        <div className="form-group">
          <input type="submit" value="Add Area" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default NewArea;
