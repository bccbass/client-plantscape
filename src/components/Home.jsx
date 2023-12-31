import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Loading from "./Loading.jsx";
import { Link } from "react-router-dom";
import Title from './Title.jsx'

const Home = ({ user, plants }) => {
  return (
    <>
      <Title />
      {user && user?.spaces ? (
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src={logo} /> */}
          <Card.Body>
            <Card.Title>Welcome, {user.firstName}!</Card.Title>
          </Card.Body>
          <Card.Title className="mt-5">Spaces</Card.Title>

          <ListGroup className="list-of-spaces  mb-3">
            {user.spaces.map((space, index) => (
              <ListGroup.Item key={space._id}>
                <Link className="tester"  to={`/space/${index}`}>
                  {space.name}
                </Link>
              </ListGroup.Item>
            ))}

          </ListGroup>

          <div>
            <ListGroup className="list-of-spaces  mb-3">
              <ListGroup.Item className="bg-success bg-opacity-25">
                <Link className="addSpace" key="createSpace" to={`/newspace/`}>
                  Add Space
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </div>

          <div>
            <ListGroup className="list-of-spaces  mb-3">
              <ListGroup.Item className="bg-success bg-opacity-25">
                <Link className="addSpace" key="createarea" to={`/newarea/`}>
                  Add Area
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </div>

          {/* <Card.Title className="mt-3">Plants</Card.Title> */}

          <ListGroup className="list-of-plants  mb-3">
            <ListGroup.Item className="bg-success bg-opacity-25">
              <Link className="addSpace" key="addPlant" to={`/myplants`}>
                Add Plant
              </Link>
            </ListGroup.Item>
          </ListGroup>
          <Link className="mb-2" to="/myplants">
            ...all plants
          </Link>
        </Card>
        


      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
