import apiURL from "./getAPI.js"

const upperCaser = (name) => name.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')

const updateUser = async (user) => {
    await fetch(`${apiURL}/users/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.user).token}`
      },
      body: JSON.stringify(user)
    })
    .catch(error => {
      console.error(error.message)
      return
    })
  }

const deleteUser = async (user) => {
  await fetch(`${apiURL}/users/${user._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.user).token}`
    }})
  .catch(error => {
    console.error(error.message)
    return
  })
}

export {upperCaser, updateUser, deleteUser}