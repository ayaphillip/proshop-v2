//imports bootstrap components
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
       <Container>  {/* container used for positioning*/}
       {/* row, col are bootstrap components along with container */}
        <Row>
          <Col className='text-center py-3'>
             <p>ProShop &copy; {currentYear}</p> {/* &copy; is to display copyright symbol */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;

