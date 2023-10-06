// src/Player.js
import React from 'react';
import {Card, Container, Row, Col }from 'react-bootstrap';

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  return (
    <Container>
                            <Row md={2}>
                                <Col md={6}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>Team: {team}</p>
          <p Style={{Color:'red'}}>Nationality: {nationality}</p>
          <p>Jersey Number: {jerseyNumber}</p>
          <p>Age: {age}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
  );
}

export default Player;