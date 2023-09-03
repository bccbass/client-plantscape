import apiURL from "./getAPI.js"

// Function to handle unpredictable capitalization from Perenual API
// Takes string and returns capitalized names
const upperCaser = (name) => name.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')

// Make request to the backend to update stored user document
const updateUser = async (user) => {
    // make PUT request to backend
    await fetch(`${apiURL}/users/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // Supply bearer token for authentication
        Authorization: `Bearer ${JSON.parse(localStorage.user).token}`
      },
      //  JSONified user document payload
      body: JSON.stringify(user)
    })
    .catch(error => {
      // Handle errors
      console.error(error.message)
      return
    })
  }

export {upperCaser, updateUser}