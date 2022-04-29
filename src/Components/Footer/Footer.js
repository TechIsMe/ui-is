import React from 'react';
import {Nav} from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

// import './Footer.css'

function Footer() {
  return (
    <div className='foot'>
        <Nav className="mb-6 bg-info text-bold text-white justify-content-space-around mt-5">
    <Nav.Item>
        <Nav.Link className="text-center "eventKey="disabled" disabled>
        </Nav.Link>
    </Nav.Item>
    <ul className=''>
  <li><a href="default.asp">Catering</a></li>
  <li><a href="news.asp">ContactUs</a></li>
  <div className='social'>
  <FaInstagram />
  <FaTwitter />
  <FaFacebook />
  </div>

  {/* <li><a href="news.asp">ContactUs</a> <FaFacebook /></li> */}
   {/* <li><a href="news.asp">ContactUs</a>  </li> */}

 
</ul>
</Nav>
        </div>
  )
}

export default Footer;