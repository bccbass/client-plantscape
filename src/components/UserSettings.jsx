import React from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteUser } from './helperfuncs.js'

// User Settings component to allow account editing/deleting functionality
function UserSettings({ user }) {
  const navigate = useNavigate()
  async function onSubmit(e) {
    // Browser popup confirmation
    const result = confirm(`Are you sure you want to delete ${user.firstName}'s account?`)
    // Call the deleteUser function to remove the user record from the database
    if (result) {
      localStorage.clear()
      await deleteUser(user)
      navigate('/login')
    } 
  }

  // The following section will display the button that confirms the account deletion and actions it
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