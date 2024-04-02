import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../style/nav.css";
import logo from "../asset/main.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BasicExample() {
  const navigator=useNavigate()
  return (
    <div>
      <Navbar
        fixed="top"
        expand="lg"
        className=" "
        style={{ backgroundColor: "orange", boxShadow: 5000,width:'100%' }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              style={{ height: 55, width: 50, marginRight: 7 }}
            ></img>
            A D M I N P O R T A L
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto"
              style={{ width: 900, fontSize: 25, padding: 5 }}
            >
              <Link
                className="opt"
                to="/admin"
                style={{
                  marginLeft: 20,
                  fontFamily: "initial",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                DASHBOARD
              </Link>
              <Link
                className="opt"
                to="/AdAccount"
                style={{
                  marginLeft: 20,
                  fontFamily: "initial",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                PROBLEM MODIFICATION
              </Link>
              <Link
                className="opt"
                to="/AdBoard"
                style={{
                  marginLeft: 20,
                  fontFamily: "initial",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                ADD TRACKS
              </Link>
              
            </Nav>
            <Nav >
            <button class="Btn" onClick={()=>navigator("/")}>
  
              <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
              
              <div class="text">Logout</div>
            </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
