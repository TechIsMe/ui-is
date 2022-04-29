import React from 'react'
import {Card,Container,Row,Col} from 'react-bootstrap';
import Sun from '../Assets/images/Sunday-Special.jpg'
import Sprinkles from '../Assets/images/Sprinkles-Sundae.jpg'
import './Sunday.css'

    function Sunday() {
    return (
        <div className="sunday ">
    <Container >
        <div className='under'>
        <p className=" text-primary text-center"> More </p>
        <p className="text-info text-center "> Sunday Spacial </p>
        </div>

            <Row className="mb-3 ">
            <Col md={6}>
    <Card className="mb-6 ">
        <img src={Sprinkles} className="card-img-top" alt="Ras" fluid/>
    <Card.Body >
        <Card.Title className='text-center' >Rasberry-Ice-Cream</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content. Some quick example text to build on the card title and make up the bulk of
        the card's content.
        <p className='price'>$5.99</p>
        </Card.Text>
    </Card.Body>
    </Card>
    </Col>

    <Col md={6}>
    <Card className="mb-3 ">
    <img  src={Sun} className="card-img-top" alt="ras" fluid/>
    <Card.Body>
        <Card.Title className='text-center'>Ice-Cream-Cake</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content. Some quick example text to build on the card title and make up the bulk of
        the card's content.
        <p className='price'>$5.99</p>
        </Card.Text>
    </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
        </div>
    )
    }

    export default Sunday;