import React from 'react'
import { deleteUser } from './helperfuncs.js'

function UserSettings({ user }) {

  async function onSubmit(e) {
    deleteUser(user)
    localStorage.clear()
    return redirect('/login')
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