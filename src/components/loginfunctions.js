const retrieveToken = async (getter, setter, creds) => {
    await fetch('https://plantscapeapi.onrender.com/users/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
}).then(res => res.json())
  .then(data => setter({...data}))
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

export { handleToken, retrieveToken, getUser}