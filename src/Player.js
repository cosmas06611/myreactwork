// src/Player.js
import React from 'react';
import {Card, Container, Row, Col }from 'react-bootstrap';

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  return (
   
    <Card style={{ width: '18rem' }}>
        
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p style={{color:"black", fontSize:"large", fontWeight:"bold"}}>Team: {team}</p>
          <p style={{color:"red", fontSize:"large", fontWeight:"bold"}}>Nationality: {nationality}</p>
          <p style={{color:"blue", fontSize:"large", fontWeight:"bold"}}>Jersey Number: {jerseyNumber}</p>
          <p style={{color:"grey", fontSize:"large", fontWeight:"bold"}}>Age: {age}</p>
        </Card.Text>
      </Card.Body>
   
    </Card>
   
  );
}

export default Player;