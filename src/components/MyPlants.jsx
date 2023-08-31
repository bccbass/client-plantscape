import React, {useState} from "react";
import SearchPlants from "./Search/SearchPlants.jsx";
import PlantList from "./PlantList.jsx";
import NavBar from "./NavBar.jsx";


const style = {
  display: "flex",
  margin: "2rem",
};

const activeFrameStyle = {
  marginLeft: "2rem",
}

const MyPlants = ({ plants, user, setUser }) => {
  const [active, setActive] = useState(false)
  return (
    <>
      <h1>My Plants</h1>
      <div style={style}>
        <div className="leftColumn">
      <PlantList  plants={plants} setActive={setActive} />
      <SearchPlants  user={user} setUser={setUser} setActive={setActive}/>
      </div>
      <div style={activeFrameStyle}>
        {active}
        </div>

      </div>
    </>
  );
};

export default MyPlants;
