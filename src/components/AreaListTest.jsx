import React, { useState } from "react";
import Area from "./Area.jsx";
import Dropdown from "react-bootstrap/Dropdown";

const style = {
  maxWidth: "750px",
  display: "flex",
  width: "90vw",
  justifyContent: "space-between",
};

const AreaListTest = ({ user, areas, plants }) => {
  const [areaSelect, setAreaSelect] = useState();

  return (
    <>
      <div style={style} className="container">
        {areas.length === 0 ? (
          <p>
            Sorry, no areas registered yet to this space. Nothing to display!
          </p>
        ) : (
          // add link to the NewArea component here
          <>
            <Dropdown data-bs-theme="light">
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
                style={{ backgroundColor: "#53835C" }}
              >
                Select an Area
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {areas.map((area) => {
                  return (
                    <Dropdown.Item
                      style={{ backgroundColor: "#A2FFB3", color: "#426949" }}
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
      {areaSelect && <Area user={user} area={areaSelect} plants={plants} />}
    </>
  );
};

export default AreaListTest;