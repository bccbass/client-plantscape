
import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import NavBar from './NavBar.jsx'
import { Link } from 'react-router-dom';
import logo from "../assets/anotherLogo.svg";



const Home = ({ user }) => {
  

  return <>
    < NavBar />
    {user && user?.spaces ? (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>Welcome, {user.firstName}!</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-of-spaces">
        <Card.Title>Spaces</Card.Title>
        {user.spaces.map((space, index) => (
          <ListGroup.Item>
            <Link key={index} to={`/spaces/${index}`}>
              {space.name}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Link href="#">Add space</Card.Link>

      {/* <ListGroup className="list-of-areas">
        <Card.Title>Areas</Card.Title>
        {tempUser.spaces.map((space, spaceIndex) => (
          <div key={spaceIndex}>
            <p>{space.name}</p>
            {space.areas.map((area, areaIndex) => (
              <ListGroup.Item key={areaIndex}>
                <Link to={`/space/areas/${spaceIndex}/${areaIndex}`}>
                  {area.name}
                </Link>
              </ListGroup.Item>
            ))}
          </div>
        ))}
      </ListGroup>
      <Card.Link href="#">All areas</Card.Link> */}

      <ListGroup className="list-of-areas">
        <Card.Title>Areas</Card.Title>
        {user.spaces.flatMap((space, spaceIndex) =>
          space.areas.map((area, areaIndex) => ({
            spaceIndex,
            areaIndex,
            areaName: area.name,
          }))
        ).slice(0,3).map(({ spaceIndex, areaIndex, areaName }) => (
          <ListGroup.Item key={`${spaceIndex}-${areaIndex}`}>
            <Link to={`/space/areas/${spaceIndex}/${areaIndex}`}>
              {areaName}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Link href="#">...all areas</Card.Link>

      <ListGroup className="list-of-plants">
        <Card.Title>Plants</Card.Title>
        {user.plants.slice(0,3).map((plant, index) => (
          <ListGroup.Item>
            <Link key={index} to={`/plants/${index}`}>
              {plant}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Link href="#">...all plants</Card.Link>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
  :
  <h1> Loading </h1>}
  </>
}

export default Home