import React from 'react';
import { FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa';
import {Col,Container,Row} from 'react-bootstrap';
import './Footer.css'

function Footer2() {
  return (
    <div className='footer'>
        <Container className=' mt-3 ' >
            <Row className='dd' >
        <Col className='mx-3' sm={3}>
            <h5 className='p-2'> Catering</h5>
        </Col>
        <Col sm={3}>
        <h5 className='p-2'> ContactUs</h5>
        </Col>

        <Col sm={3}>
            <div className='icon-social mx-3'>
                <div className='social mx-3 px-3 '><i > <FaFacebook /></i></div>
                <div className='social'> <i> <FaInstagram/></i></div>
               <div className='social'>  <i> <FaTwitter /></i> </div>
               </div>
        </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Footer2;