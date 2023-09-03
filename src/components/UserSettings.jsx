import React from 'react'
import { deleteUser } from './helperfuncs.js'

function UserSettings({ user }) {

  async function onSubmit(e) {
    const result = confirm(`Are you sure you want to delete ${user.firstName}'s account?`)
    if (result) {
      await deleteUser(user)
      localStorage.clear()
    }
  }

  return (
    <>
      <h1>Account Settings</h1>
      <p>You can delete your Plantscape account below, but this is permanent.</p>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="submit" value="Delete Account" className="btn btn-danger" />
        </div>
      </form>
    </>
  )
}

export default UserSettings