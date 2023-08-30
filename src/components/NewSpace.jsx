import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import NavBar from "./NavBar.jsx"
import apiURL from "./getAPI.js"
import { storeToken, retrieveToken, getUser, getPlants, fetchUserData } from './loginfunctions.js'

export default function NewSpace() {
  const [form, setForm] = useState({
    name: "",
    notes: "",
    location: "",
  });
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const id = params.id
      const response = await fetch(`${apiURL}/users/${id}`)

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`
        window.alert(message)
        return
      }

      const record = await response.json()
      if (!record) {
        window.alert(`Record with id ${id} not found`)
        navigate("/")
        return
      }

      setForm(record)
    }

    fetchData()

    return;
  }, [params.id, navigate])

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value }
    })
  }

  async function onSubmit(e) {
    e.preventDefault()

    const newSpace = {
      name: form.name,
      notes: form.notes,
      location: form.location,
    };

    await fetch(`${apiURL}/users/{${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "spaces": newSpace
      }),
    }).catch((error) => {
      window.alert(error)
      return
    }).then((data) => console.log(data))

    navigate("/newspace")
  }

  return (
    <div>
      <NavBar />
      <h3>Create New Space</h3>
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
}
