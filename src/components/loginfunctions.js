import apiURL from "./getAPI.js";

const retrieveToken = async (setUser, setClicked, creds) => {
  await fetch(apiURL + "/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  })
    .then((res) => res.json())
    .then((data) => {
      const user = { ...data };
      if (user.id) {
        setClicked(true);
        setUser(user);
      } else {
        alert("User not found");
      }
    });
};

const storeToken = (token) => {
  if (token.id) {
    localStorage.setItem("user", JSON.stringify(token));
  }
};

const getUser = async (setter) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await fetch(`${apiURL}/users/${user.id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  });
  const data = await res.json();
  if (!data.firstName) {
    setter(false);
  }
  await setter(data);
};

const getPlants = async (setter, user, plants) => {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const res = await fetch(`${apiURL}/plants`, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(user.plants),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localUser.token}`,
    },
  });
  const data = await res.json();
  if (data[0] && data[0].id) {
    if (user.plants.length > 0 && user.plants.length != plants.length) {
      await setter(data);
    }
  }
};

const fetchUserData = async (user, setUser, plants, setPlants) => {
  if (!user.firstName) {
    await getUser(setUser);
  }
  if (user) {
    if ((await user.plants.length) > 0) {
      await getPlants(setPlants, user.plants);
    }
  }
};

export { storeToken, retrieveToken, getUser, getPlants, fetchUserData };
