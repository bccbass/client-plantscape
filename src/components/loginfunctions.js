const devAPI = import.meta.env.VITE_API_HOST + import.meta.env.VITE_PORT
const prodAPI = import.meta.env.VITE_API_HOST

const getAPIUrl = () => {
  if (import.meta.env.DEV) {
  return devAPI
}  else {
    return prodAPI}
  }
  
const apiURL = getAPIUrl()


const retrieveToken = async (setter, creds) => {
    await fetch(apiURL + '/users/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
}).then(res => res.json())
  .then(data => {
    const user = {...data}; 
    if (user.id)
      {setter(user)}})
    }
  
const storeToken = (token) => {
  if (token.id) {
    localStorage.setItem('user', JSON.stringify(token))
  }
}




  const handleToken = async (getter, setter, creds) => {
    await retrieveToken(getter, setter, creds)
    }


  const getUser = async (setter) => {
    const user = JSON.parse(localStorage.getItem('user'))
     const fetchUser = async () => {const res = await fetch(`${apiURL}/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
        }
      )
      const data = await res.json()
      setter(data)
    }
    fetchUser()
  }

export { storeToken, retrieveToken, getUser, apiURL }