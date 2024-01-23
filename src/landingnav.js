import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./main.png";
import "./landing.css";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className='nav' >
      <Container>
      <Navbar.Brand href="#home" style={{color:'white'}}>
            <img
              src={logo}
              style={{ height: 55, width: 50, marginRight: 7 }}
            ></img>
            L E T S C O D E
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-end">
          <Nav>
            <Nav.Link href="/about" style={{color:'white'}}>About Us</Nav.Link>
            <Nav.Link  href="/login" style={{color:'white'}}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;