import React from 'react'
import {Card, Container,Row ,Col,Button} from 'react-bootstrap';
import Reward from '../Assets/images/Rewards.jpg';
import Gift from '../Assets/images/Gift-Card.jpg';
import './Giftcard.css'



function Giftcard() {
  return (
    <div>
        {/* <Card>
  <Card.Body>This is some text within a card body.</Card.Body>
  
</Card> */}
<Container>
<div>
      <p className="bg-primary justify-content-end"> GiftCard and Reward </p>
      </div>
    <Row>
    <Col md={12}>

<Card className="mb-3 bg-primary text-black">
  {/* <Card.Img src="../Assets/images/Gift-Card.jpg" alt="Card image" /> */}
  <img src={Reward} height={200} width={320} alt="/" fluid/>

  <Card.ImgOverlay>
    {/* <Card.Title>Card title</Card.Title> */}
    {/* <Card.Text > */}
    <Card.Text className='bg-danger justify-content-end'>

      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
    <Button variant="outline-danger justify-content-end">Dark</Button>
  </Card.ImgOverlay>
</Card>
</Col>
<Col >

<Card className="mb-3 bg-primary text-black">
  {/* <Card.Img Variant ="end" src="../Assets/images/Gift-Card.jpg" alt="Card image" /> */}
  
  <img src= {Gift} 
  className="thumbnail"
  height={200} width={320} alt="/" fluid/>

  <Card.ImgOverlay>
    {/* <Card.Title>Card title</Card.Title> */}
    <Card.Text className='bg-danger justify-content-end'>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
  </Card.ImgOverlay>
</Card>
</Col>
</Row>
</Container>

    </div>
  )
}

export default Giftcard;