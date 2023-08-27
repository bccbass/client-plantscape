const retrieveToken = async (setter, creds) => {
    await fetch('https://plantscapeapi.onrender.com/users/login', {
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
    console.log(user)
     const fetchUser = async () => {const res = await fetch(`https://plantscapeapi.onrender.com/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
        }
      )
      const data = await res.json()
      setter(data)
      console.log(data)
    }
    fetchUser()
  }

export { storeToken, retrieveToken, getUser}