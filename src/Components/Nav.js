import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';
// import { MdSearch } from 'react-icons';
import { FaSearch } from 'react-icons/fa';
import '../Components/Nav.css'
import Noto from '../Components/Assets/images/noto_ice-cream.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/Nav.css'

function Navfar() {
  return (
    <div >    
      <Navbar>
    <Container  className="justify-content-center">
      <Navbar.Brand className='text'  href="#home">
        <i className='se'>Sensible </i>
      <img src={Noto} height={30} width={30} alt="/"/>  
      <i className='se'>Sundaes </i>



      <FaSearch className='ml-3'/>

      </Navbar.Brand>
    </Container>
  </Navbar>

  <div className='rol '> 
  <Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item >
    <Nav.Link eventKey="disabled" disabled>
    <i className='text-white'>Home</i>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled " disabled>
      <i className='text-white'>Spacial </i> 
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
    <i className='text-white'> OurStory</i>
    </Nav.Link>
  </Nav.Item>
</Nav>
</div>
  </div>
  )
}

export default Navfar;