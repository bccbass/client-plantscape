
import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import NavBar from './NavBar.jsx'
import Loading from './Loading.jsx'
import { Link } from 'react-router-dom';
import logo from "../assets/anotherLogo.svg";
import './HomeStyle.css'



const Home = ({ user, plants }) => {

  return <>
  
    {user && user?.spaces ? (
    <Card style={{width: '18rem'}} >
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>Welcome, {user.firstName}!</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
</Card.Body>
      <ListGroup className="list-of-spaces mt-3 mb-3">
        <Card.Title className='mt-3'>Spaces</Card.Title>
        {user.spaces.map((space, index) => (
          <ListGroup.Item>
            <Link className='tester' key={index} to={`/space/${index}`}>
              {space.name}
            </Link>
          </ListGroup.Item>
        ))}
          <ListGroup.Item className="bg-success bg-opacity-25">
          <Link className='addSpace' key='createSpace' to={`/newspace/`}>
              Add Space
            </Link>
          </ListGroup.Item>
          <Card.Link className='mt-2' href="/space/all">...all spaces</Card.Link>

      </ListGroup>
      {/* <Card.Link href="#">Add Space</Card.Link> */}

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

      <ListGroup className="list-of-areas mt-3 mb-3">
        <Card.Title className='mt-3'>Areas</Card.Title>
        {user.spaces.flatMap((space, spaceIndex) =>
          space.areas.map((area, areaIndex) => ({
            spaceIndex,
            areaIndex,
            areaName: area.name,
          }))
        ).slice(0,3).map(({ spaceIndex, areaIndex, areaName }) => (
          <ListGroup.Item key={`${spaceIndex}-${areaIndex}`}>
            <Link to={`/space/${spaceIndex}/area/${areaIndex}`}>
              {areaName}
            </Link>
          </ListGroup.Item>
        ))}
      <Card.Link className='mt-2' href="#">...all areas</Card.Link>

      </ListGroup>

      <ListGroup className="list-of-plants mt-3 mb-3">
        <Card.Title className='mt-3'>Plants</Card.Title>
        {plants.slice(0,3).map((plant, index) => (
          <ListGroup.Item>
            <Link key={index} to={`/plants/${index}`}>
              {plant.common_name}
            </Link>
          </ListGroup.Item>
        ))}
      <Link className='mt-2' to="/myplants">...all plants</Link>

      </ListGroup>

    </Card>
  )
  :
          < Loading />
  }
  </>
}

export default Home