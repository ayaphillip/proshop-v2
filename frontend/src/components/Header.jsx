import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap'; // LinkContainer is used to wrap Nav.Link
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        {/* Navbar used as wrapper  for positioning, branding, navigation, etc. */}
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          {/* LinkContainer allows there to be no href in the navbar. tags */}
          {/* the navbars below provide responsiveness */}
          <LinkContainer to='/'>
          <Navbar.Brand >
            <img src={logo} alt='logo' />
            ProShop
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {/* LinkContainers for redirection (eliminates hrefs) */}
            <Nav className='ms-auto'>
            <LinkContainer to='/cart'>
              <Nav.Link href='/cart'>
                <FaShoppingCart /> Cart {/* Fa shows icon next to cart */}
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
              <Nav.Link >
                <FaUser /> Sign In
              </Nav.Link>
            </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

