import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import NewAreaForm from "./NewAreaForm.jsx";
import AddPlants from "./AddPlants.jsx";
import { updateUser } from "../helperfuncs.js";


const NewArea = ({user, setUser}) => {
const [formSubmit, setFormSubmit] = useState(false)
const [area, setArea] = useState({space: 'Front Yard', name: 'Verandah'})

  return (<>
   {!formSubmit ? 
    <NewAreaForm user={user} setUser={setUser} setArea={setArea} setFormSubmit={setFormSubmit}/>
    :
    < AddPlants area={area} user={user} setUser={setUser}/>
}
    
     
    </>)
};

export default NewArea;
