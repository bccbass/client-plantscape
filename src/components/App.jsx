import react, { useState, createContext } from "react";
import "./App.css";
import Home from "./Home.jsx";
import MyPlants from "./MyPlants.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import NewSpace from "./NewSpace.jsx";
import EditSpace from "./EditSpace.jsx";
import NewArea from "./NewArea/NewArea.jsx";
import NavBar from "./NavBar";
import AltNavBar from "./AltNavBar.jsx";
import Auth from "./Auth.jsx";
import { Routes, Route, useParams } from "react-router-dom";
import NotFound from "./NotFound.jsx";
import SpaceSelectionAlt from "./SpaceSelectionAlt.jsx";
import Space from "./Space";
import Footer from "./Footer.jsx";
import AddToPlantList from "./AddToPlantList";
import About from "./About.jsx";

function App() {
  // These useState objs should be refactored to utilize 
  // useContext and useReducer as they are needed globally 
  // and create a great deal of prop drilling.
  const [user, setUser] = useState({});
  const [plants, setPlants] = useState([]);

  function SpaceViewWrapper() {
    const { spaceIndex } = useParams();
    return (
      <Space
        user={user}
        setUser={setUser}
        space={user.spaces[spaceIndex]}
        plants={plants}
      />
    );
  }

  return (
    <>
      {user && user.firstName ? <NavBar /> : <AltNavBar />}
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <Login setUser={setUser} />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Register />
            </>
          }
        />
        <Route
          path="/myplants"
          element={
            <Auth
              user={user}
              setUser={setUser}
              plants={plants}
              setPlants={setPlants}
            >
              <MyPlants user={user} setUser={setUser} plants={plants} />
            </Auth>
          }
        />
        <Route
          path="/addplants"
          element={
            <Auth
              user={user}
              setUser={setUser}
              plants={plants}
              setPlants={setPlants}
            >
              <MyPlants user={user} setUser={setUser} plants={plants} />
            </Auth>
          }
        />
        <Route
          path="/"
          element={
            <Auth
              user={user}
              setUser={setUser}
              plants={plants}
              setPlants={setPlants}
            >
              <Home user={user} plants={plants} />
            </Auth>
          }
        />
        <Route
          path="/space/"
          user={user}
          setUser={setUser}
          plants={plants}
          setPlants={setPlants}
        >
          <Route
            path=""
            element={
              <Auth
                user={user}
                setUser={setUser}
                plants={plants}
                setPlants={setPlants}
              >
                <SpaceSelectionAlt user={user} plants={plants} />
              </Auth>
            }
          />
          <Route
            path=":spaceIndex"
            element={
              <Auth
                user={user}
                setUser={setUser}
                plants={plants}
                setPlants={setPlants}
              >
                <SpaceViewWrapper />
              </Auth>
            }
          />
        </Route>
        <Route
          path="/newspace"
          element={
            <Auth
              user={user}
              setUser={setUser}
              plants={plants}
              setPlants={setPlants}
            >
              <NewSpace user={user} setUser={setUser} />
            </Auth>
          }
        />
        <Route
          path="/editspace"
          element={
            <Auth
              user={user}
              setUser={setUser}
              plants={plants}
              setPlants={setPlants}
            >
              <EditSpace user={user} setUser={setUser} />
            </Auth>
          }
        />
        <Route
          path="/newarea"
          element={
            <Auth
              user={user}
              setUser={setUser}
              plants={plants}
              setPlants={setPlants}
            >
              <NewArea user={user} setUser={setUser} />
            </Auth>
          }
        />

        <Route
          path="/about"
          element={
            <Auth>
              <About />
            </Auth>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
