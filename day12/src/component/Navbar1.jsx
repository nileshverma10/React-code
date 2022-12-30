import {Container, Row, Col} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import"./Navbar1.css"
import {BsTwitter, BsFacebook,BsPinterest,BsDribbble,BsLinkedin,BsPencil} from 'react-icons/bs'
import {TfiGoogle} from 'react-icons/tfi'
import{FaUserAlt} from 'react-icons/fa' 

function Navbar1() {
  return (
    <Container fluid>
      <Row>
        <Col lg={12} className="px-0">
        <Navbar bg=" nav" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto margin">
            <ul>
                <li><a href="https://www.google.co.in/"><TfiGoogle/></a></li>
                <li><a href="https://twitter.com/login"><BsTwitter/></a></li>
                <li><a href="https://in.pinterest.com/"><BsPinterest/></a></li>
                <li><a href="https://react-icons.github.io/react-icons/search?q=google"><BsDribbble className='icons' /></a></li>
                <li><a href="https://in.linkedin.com/"><BsLinkedin/></a></li>
                <li><a href="https://www.facebook.com/"><BsFacebook/></a></li>
            </ul>
              <p className='user'>
              <FaUserAlt/>
              <a href="https://premiumlayers.com/html/sweethome/?"><h5 className='login'>Login</h5></a> 
              </p> 
              <p className='pencil'>
                <BsPencil/>
                <a href="https://premiumlayers.com/html/sweethome/?"><h5 className='register'>Register</h5></a>
              </p>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default Navbar1;