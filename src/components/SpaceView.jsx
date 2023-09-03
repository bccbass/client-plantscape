import React from 'react'
import NavBar from './NavBar'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const SpaceView = ({space}) => {
  return space ? <>
    <h1>Areas in {space.name}</h1>
    <p>This is the view of all the areas for the space called {space.name}</p>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Areas in {space.name}</Card.Title>
        <Card.Text>
        This is the view of all the areas for the space called {space.name}!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-of-areas">
        <Card.Title>Areas</Card.Title>
        {space.areas.map((area, areaIndex) => (
          <ListGroup.Item>
            <Link key={areaIndex} to={`area/${areaIndex}`}>
              {area.name}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Body>
        <Link to="/space">See all of your spaces</Link>
      </Card.Body>
      <Card.Body>
        <Link to={`area/new`}>Add a new area</Link>
      </Card.Body>
    </Card>
  </>
  :
  <h1>Loading...</h1>
}

export default SpaceView