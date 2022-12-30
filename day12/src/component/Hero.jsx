import { Container, Row , Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Hero.css'
function Hero() {
  return (
    <Container fluid >
    <Row>
        <Col >
        <Carousel className='cac'>
      <Carousel.Item>
        <img
          className="d-block  w-100"
          src="./image/slide-01.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="./image/slide-02.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="./image/slide-03.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
        </Col>
    </Row>
  </Container>
  );
};

export default Hero;