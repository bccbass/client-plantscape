import React from "react"
import SpaceList from "./SpaceList"
import SpaceListAlt from "./SpaceListAlt"

const style = {
  display: "flex",
  margin: "2rem",
  maxWidth: "900px"
}

// Parses in the user object and plants array to display the user's list of spaces
// Passes in the user's spaces and plants array to the SpaceList component
const SpaceSelection = ({  user, plants }) => {
  return (
    <>
      <h1>{user.firstName}'s Spaces</h1>
      <SpaceListAlt spaces={user.spaces} plants={plants} />
    </>
  )
}

export default SpaceSelection
