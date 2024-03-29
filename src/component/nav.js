import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../style/nav.css";
import logo from "../asset/main.png";
import { Link } from "react-router-dom";

function BasicExample(props) {
  const{email}=props
  return (
    <div>
      <Navbar
        fixed="top"
        expand="lg"
        className=" "
        style={{ backgroundColor: "orange", boxShadow: 5000 }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              style={{ height: 55, width: 50, marginRight: 7 }}
            ></img>
            L E T S C O D E
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto"
              style={{ width: 1200, fontSize: 25, padding: 5 }}
            >
              <Link
                className="opt"
                to="/Exp"
                style={{
                  marginLeft: 20,
                  fontFamily: "initial",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                EXPLORE
              </Link>
              <Link
                className="opt"
                to="/Problem"
                style={{
                  marginLeft: 20,
                  fontFamily: "initial",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                PROBLEM
              </Link>
              <Link
                className="opt"
                to="/Compiler"
                style={{
                  marginLeft: 20,
                  fontFamily: "initial",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                COMPILER
              </Link>
              <Link
                className="opt"
                to={"/Account/"+email}
                style={{
                  marginLeft: 20,
                  fontFamily: "initial",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                ACCOUNT
              </Link>
              <Link
                className="opt"
                to="/Board"
                style={{
                  marginLeft: 20,
                  fontFamily: "initial",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                LEADER BOARD{" "}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
