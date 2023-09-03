import React from "react"
import SpaceList from "./SpaceList"
import SpaceListAlt from "./SpaceListAlt"

const style = {
  display: "flex",
  margin: "2rem",
  maxWidth: "900px"
}

// 
const SpaceSelection = ({  user, plants }) => {
  return (
    <>
      <h1>{user.firstName}'s Spaces</h1>
      <SpaceListAlt spaces={user.spaces} plants={plants} />
      {/* <div>

        <SearchPlants user={user} setUser={setUser}/>
      </div> */}
    </>
  )
}

export default SpaceSelection
