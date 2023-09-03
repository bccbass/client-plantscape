import apiURL from "./getAPI.js";

// Function collection to enable Authentication and Log In; used in Auth Component


// Makes POST request to backend with user email and password, 
// sets status in Auth component and returns jwt token to store in 
// local storage for Auth and longer user sessions
const retrieveToken = async (setUser, setClicked, creds) => {
  // POST request to backend with user credentials
  await fetch(apiURL + "/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  })
    .then((res) => res.json())
    // takes parsed json response and sets contents to new object saved in user variable
    .then((data) => {
      const user = { ...data };
      // Ensure response is a valid user object (and not error object)
      if (user.id) {
        // set clicked status to true for user feedback in client
        setClicked(true);
        // set state with received user object resonse
        setUser(user);
      } else {
        // if unsuccessful log in attempt alert user in browser
        alert("Invalid user or password");
      }
    });
};


// Store returned jwt token in local storage
const storeToken = (token) => {
  // Makes sure response was successful with valid jwt token response
  if (token.id) {
    // set local storage item with key 'user' and value of token payload contents (user id and token)
    localStorage.setItem("user", JSON.stringify(token));
  }
};


// Request to backend for User document from database with user credentials from local storage 
const getUser = async (setter) => {
  // retrieve user object from Local Storage
  const user = JSON.parse(localStorage.getItem("user"));
  // Make request to backend with user id as param
  const res = await fetch(`${apiURL}/users/${user.id}`, {
    headers: {
      //  specify JSON req/res 
      "Content-Type": "application/json", 
      // supply bearer token from locally stored user obj for backend authentication
      Authorization: `Bearer ${user.token}`,
    },
  });
  const data = await res.json();
  // Checks that response was successful by checking for valid key
  if (!data.firstName) {
    setter(false);
  }
  // If successful set user state with received user document from database
  await setter(data);
};

// Takes array of plant ids from users plant list and request full plant documents from backend
// which then makes request to Perenual API (botanical information API)
const getPlants = async (setter, user, plants) => {
  // Fetch user obj from local storage
  const localUser = JSON.parse(localStorage.getItem("user"));
  // make request to backend to handle fetching plant data
  const res = await fetch(`${apiURL}/plants`, {
    method: "POST",
    mode: "cors",
    // supplies JSONified array of plant ids from user obj
    body: JSON.stringify(user.plants),
    headers: {
      "Content-Type": "application/json",
      // User token from local storage for auth
      Authorization: `Bearer ${localUser.token}`,
    },
  });
  const data = await res.json();
  // checks response is successful/valid
  if (data[0] && data[0].id) {
    // checks if users plant id array is the same length as the 
    // plants obj array (the stateful obj that stores full plant docs from Perenual)
    // if discrepency it will make update stateful plants object with response
    if (user.plants.length > 0 && user.plants.length != plants.length) {
      await setter(data);
    }
  }
};


// Checks for empty local user obj, makes a request to backend for user document from database, and sets user object 
const fetchUserData = async (user, setUser, setPlants) => {
  // Checks local user object to see if it is in memory. 
  // If not it will make request to backend to retrieve
  if (!user.firstName) {
    await getUser(setUser);
  }
  // first checks if user object is available then
  // Checks local plant object to see if it is populated with full plant info docs
  // if not it will make request to backend to retrieve docs from Perenual api
  if (user) {
    if ((await user.plants.length) > 0) {
      await getPlants(setPlants, user.plants);
    }
  }
};

export { storeToken, retrieveToken, getUser, getPlants, fetchUserData };
