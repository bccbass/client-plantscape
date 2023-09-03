import React, { useState, useEffect } from "react";
import NewAreaForm from "./NewAreaForm.jsx";
import AddPlants from "./AddPlants.jsx";
import HomeButton from "../HomeButton.jsx";

const NewArea = ({ user, setUser }) => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [area, setArea] = useState();

  return (
    <>
      {!formSubmit ? (
        <NewAreaForm
          user={user}
          setUser={setUser}
          setArea={setArea}
          setFormSubmit={setFormSubmit}
        />
      ) : (
        <AddPlants area={area} user={user} setUser={setUser} />
      )}
      <div>
        <HomeButton />
      </div>
    </>
  );
};

export default NewArea;
