const retrieveToken = async (getter, setter, creds) => {
    await fetch('https://plantscapeapi.onrender.com/users/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
}).then(res => res.json())
  .then(data => setter({...data}))

  if (getter.id) {
    localStorage.user = JSON.stringify(getter)
    console.log(getter)
}
    }



const storeToken = async (token) => {
    
  // This should then redirect to users home page and maybe store id/token in session or a token
    if (token.id) {
        localStorage.user = JSON.stringify(token)
        console.log('Eureka!')
    }

  }

  const handleToken = async (getter, setter, creds) => {
    await retrieveToken(getter, setter, creds)
    storeToken(getter)
    }

  const getUser = async (setter) => {
        const user = JSON.parse(localStorage.user)
        console.log('USER:', user)
        await fetch(`https://plantscapeapi.onrender.com/users/${user.id}`, {
          headers: {
          Authorization: `Bearer ${user.token}`,
          },
      }).then(res => res.json())
        .then(data => setter({...data}))
  }

export { handleToken, storeToken, retrieveToken, getUser}