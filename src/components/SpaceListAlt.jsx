import React, { useState } from "react"
import Space from "./Space"
import Dropdown from "react-bootstrap/Dropdown"

const style = {
  maxWidth: "750px",
  display: "flex",
  width: "90vw",
  justifyContent: "space-between",
}

const SpaceListAlt = ({ spaces, plants }) => {
    const [spaceSelect, setSpaceSelect] = useState();

  return (
    <>
      <div style={style} className="container">
        {spaces.length === 0 ? (
          <p>
            Sorry, no spaces to display!
          </p>
        ) : (
          <>
            <Dropdown data-bs-theme="light">
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
                className="btn btn-success"
              >
                Select a Space
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {spaces.map((space) => {
                  return (
                    <Dropdown.Item
                      className="bg-success bg-opacity-25"
                      onClick={(e) => {
                        e.preventDefault();
                        setSpaceSelect(space);
                      }}
                    >
                      {space.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </>
        )}
      </div>
      {spaceSelect && <Space space={spaceSelect} plants={plants} />}
    </>
  );
};

export default SpaceListAlt