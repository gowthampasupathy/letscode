import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.css";
import logo from "./main.png";
import { Link } from "react-router-dom";

function BasicExample() {
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
              style={{ width: 1200, fontSize: 25, padding: 5 }}
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
                to="/AdProblem"
                style={{
                  marginLeft: 20,
                  fontFamily: "initial",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                VIEW USER
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
