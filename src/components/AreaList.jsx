import React, { useState } from "react";
import Area from "./Area.jsx";
import Dropdown from "react-bootstrap/Dropdown";

const style = {
  maxWidth: "750px",
  display: "flex",
  width: "90vw",
  justifyContent: "space-between",
};

// Pass in the user and space objects, and the areas and plants arrays to render a drop-down menu of the user's areas
// Passes a selected area and the plants array to render the nested Area component
const AreaList = ({ user, areas, plants, space }) => {
  const [areaSelect, setAreaSelect] = useState();

  return (
    <>
      <div style={style} className="container">
        {areas.length === 0 ? (
          <p>
            Sorry, no areas registered yet to this space. Nothing to display!
          </p>
        ) : (
          <>
            <Dropdown data-bs-theme="light">
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
                className="btn btn-success"
              >
                Select an Area
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {areas.map((area) => {
                  return (
                    <Dropdown.Item
                      className="bg-success bg-opacity-25"
                      onClick={(e) => {
                        e.preventDefault();
                        setAreaSelect(area);
                      }}
                    >
                      {area.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </>
        )}
      </div>
      {areaSelect && <Area space={space} user={user} area={areaSelect} plants={plants} />}
    </>
  );
};

export default AreaList;