import React from 'react'
import NavBar from './NavBar'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const SpaceSelection = ({user}) => {
  console.log(user)
  return <>
    <NavBar />
    <h1>{user.firstName}'s Spaces</h1>
    {user && user?.spaces ? (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Spaces</Card.Title>
        <Card.Text>
        Here are all of your spaces, {user.firstName} {user.lastName}!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-of-all-spaces">
        <Card.Title>Spaces</Card.Title>
        {user.spaces.map((space, index) => (
          <ListGroup.Item>
            <Link key={index} to={`/space/${index}`}>
              {space.name}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Link to="/space/new">Add a new space</Link>
    </Card>
    )
    :
    <h1> Loading </h1>}
  </>
}

export default SpaceSelection