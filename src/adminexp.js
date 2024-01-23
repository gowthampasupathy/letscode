import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./main.css";
import React from "react";
import logo from "./main.png";
import clogo from "./clogo.png";
import jlogo from "./jlogo.jpg";
import cpplogo from "./cpplogo.png";
import pylogo from "./pylogo.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Navi from "./aminnav";
import "./problem.css";
import App2 from "./addmodal";
import App3 from "./updatemodal";
import App4 from "./deletemodal";
import { useNavigate } from "react-router-dom";
function BasicExample() {
  const navigator = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  return (
    <div>
      <Navi />
      <Container>
        <h6 style={{ marginTop: 100, fontSize: 20, color: "GrayText" }}>
          Welcome To
        </h6>
        <h1>LetsCode Explore </h1>
        <Row style={{ marginLeft: 600 }}>
          <Col md={4}>
            {" "}
            <Button
              style={{ backgroundColor: "#36454F", borderColor: "#36454F" }}
              value={"String"}
              onClick={() => setModalShow(true)}
            >
              Add New Languages
            </Button>
            <App2 show={modalShow} onHide={() => setModalShow(false)} />
          </Col>
          <Col md={4}>
            {" "}
            <Button
              style={{ backgroundColor: "#36454F", borderColor: "#36454F" }}
              value={"String"}
              onClick={() => setModalShow1(true)}
            >
              Update Languages
            </Button>
            <App3 show={modalShow1} onHide={() => setModalShow1(false)} />
          </Col>
          <Col md={4}>
            {" "}
            <Button
              style={{ backgroundColor: "#36454F", borderColor: "#36454F" }}
              value={"String"}
              onClick={() => setModalShow2(true)}
            >
              Delete Languages
            </Button>
            <App4 show={modalShow2} onHide={() => setModalShow2(false)} />
          </Col>
        </Row>
      </Container>
      <Container>
        <h3 style={{ marginTop: 50 }}>Available Languages</h3>
      </Container>
      <Container>
        <Row className="flex-wrap">
          <Col xs={12} md={3}>
            {" "}
            <Card className=" card1 shadow-sm">
              <Card.Img
                variant="top"
                src={clogo}
                style={{ height: 200, width: 200, margin: "auto" }}
              />
              <Card.Body>
                <Card.Title>C Programming</Card.Title>
                <Card.Text>
                  Hands-on Programming Challenges to learn and practise C
                </Card.Text>
                <button
                  type="button"
                  class="touch"
                  
                >
                  <span>
                    Show<i class="bi bi-chevron-double-right"></i>
                  </span>
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            {" "}
            <Card className=" card1 shadow-sm">
              <Card.Img
                variant="top"
                src={jlogo}
                style={{ height: 200, width: 200, margin: "auto" }}
              />
              <Card.Body>
                <Card.Title>Java Programming </Card.Title>
                <Card.Text>
                  Hands-on Programming Challenges to learn and practise Java
                </Card.Text>
                <button
                  type="button"
                  class="touch"
                  onClick={() => navigator("/Exp/cpp")}
                >
                  <span>
                    Show<i class="bi bi-chevron-double-right"></i>
                  </span>
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            {" "}
            <Card className=" card1 shadow-sm">
              <Card.Img
                variant="top"
                src={cpplogo}
                style={{ height: 200, width: 200, margin: "auto" }}
              />
              <Card.Body>
                <Card.Title>C++ Programming </Card.Title>
                <Card.Text>
                  Hands-on Programming Challenges to learn and practise C++
                </Card.Text>
                <button
                  type="button"
                  class="touch"
                  onClick={() => navigator("/Exp/cpp")}
                >
                  <span>
                    Show<i class="bi bi-chevron-double-right"></i>
                  </span>
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            {" "}
            <Card className=" card1 shadow-sm">
              <Card.Img
                variant="top"
                src={pylogo}
                style={{ height: 200, width: 200, margin: "auto" }}
              />
              <Card.Body>
                <Card.Title>Python Programming</Card.Title>
                <Card.Text>
                  SoHands-on Programming Challenges to learn and practise Python
                </Card.Text>
                <button
                  type="button"
                  class="touch"
                  onClick={() => navigator("/Exp/cpp")}
                >
                  <span>
                    Show<i class="bi bi-chevron-double-right"></i>
                  </span>
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BasicExample;
