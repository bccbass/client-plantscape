import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const UserSummary = () => {
    const [bearerToken, setBearerToken] = useState(null)
    useEffect(async () => {
        const capturedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTgxMmYyZTdkNzYwZTIyZjI3OTBjYyIsImlhdCI6MTY5MjkzNTc1MSwiZXhwIjoxNjkzNTQwNTUxfQ.uMBwdV_fvEtChVaBFM6G9Tgv9IginOMNNuM6qguWHks'
        setBearerToken(capturedToken)
    }, [])

    return (
        fetch (`https://plantscapeapi.onrender.com/users/<userID>`, {
            headers: {
                Authorization: `Bearer <JWTToken>`,
            },
        }).then(response => response.json())
        .then(data => console.log('user', data))
        // <Card style={{ width: '80vw' }}>
        // <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        // <Card.Body>
        //     <Card.Title>Card Title</Card.Title>
        //     <Card.Text>
        //     Some quick example text to build on the card title and make up the
        //     bulk of the card's content. Your Bearer Token is {bearerToken}
        //     </Card.Text>
        // </Card.Body>
        // <ListGroup className="list-group-flush">
        //     <ListGroup.Item>Cras justo odio</ListGroup.Item>
        //     <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        //     <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        // </ListGroup>
        // <Card.Body>
        //     <Card.Link href="#">Card Link</Card.Link>
        //     <Card.Link href="#">Another Link</Card.Link>
        // </Card.Body>
        // </Card>
    )
}

export default UserSummary