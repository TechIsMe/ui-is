import React from 'react';
import {Card,Container,Row,Col} from 'react-bootstrap';
import Ras from '../Assets/images/Rasberry-Ice-Cream.jpg';
import Sprinkle from '../Assets/images/Strawberry-Sundae.jpg';
import IceCream from '../Assets/images/Ice-Cream-Cake.jpg';
import './Menu.css'


function Menu() {
  return (
    <div className="mt-3">
      <div >
      <p className=" text-center text-info"> Menu</p>
      </div>
        <Container >
          <Row>
            <Col md={4}>
<Card className="mb-3">
  <img 
  src={Ras} 
  className="card-img-top"
  alt="Ras" fluid/>
  <Card.Body>
    <Card.Title className='text-white'>Rasberry-Ice-Cream</Card.Title>
    <Card.Text className='text-white'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</Col>

<Col md={4}>
<Card className="mb-3">
  <img 
  src={Sprinkle} 
  alt="Ras" fluid/>

  <Card.Body>
    <Card.Title className='text-white'>Strawberyr-Ice-Cream</Card.Title>
    <Card.Text className='text-white'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col md={4}>

<Card className="mb-3">
  <img 
  src={IceCream} 
  className="card-img-top"
  alt="ras" fluid/>

  <Card.Body>
    <Card.Title className='text-white'>Ice-Cream-
      Cake</Card.Title >
    <Card.Text className='text-white'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.      
    </Card.Text>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
    </div>
  )
}

export default Menu;