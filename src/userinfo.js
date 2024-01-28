import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import prof from "./prof.png";
import Nav from "./nav";
import "./userinfo.css";
import jlogo from "./jlogo.jpg";
import clogo from "./clogo.png";
import App from "./modal";
import React from "react";
import App2 from "./passmodal";
import { useNavigate } from "react-router-dom";
function BasicExample() {
  const navigator = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  return (
    <div>
      <Nav></Nav>
      <Container>
        <Container>
        <Row>
          <Card
            style={{
              width: 1200,
              height: 300,
              margin: "auto",
              marginTop: 120,
            }}
            className="shadow-lg"
          >
            
              <Col md={6} xs={12}>
                <Card.Img
                  variant="top"
                  src={prof}
                  style={{ width: 250, marginTop: 20, marginLeft: 60 }}
                />
              </Col>
              <Col
                md={6}
                xs={12}
                style={{
                  backgroundColor: "orange",
                  height: 300,
                  marginLeft: -200,
                  width: "auto",
                }}
              >
                <Card.Body>
                  <Card.Text>
                    <h1
                      style={{
                        fontFamily: "-moz-initial",
                        fontWeight: "bold",
                      }}
                    >
                      My Profile
                    </h1>
                    <Row style={{ marginTop: 30 }}>
                      <Col md={6} xs={12}>
                        <h5 style={{ marginLeft: 60 }}>Name: Gowtham</h5>
                      </Col>
                      <Col md={6} xs={12}>
                        <h5 style={{ marginLeft: -90 }}>
                          Email: 717821f116@kce.ac.in
                        </h5>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: 30 }}>
                      <Col md={6} xs={12}>
                        <h5 style={{ marginLeft: 60 }}>Contact: 6374013119</h5>
                      </Col>
                      <Col md={6} xs={12}>
                        <h5 style={{ marginLeft: -90 }}>
                          {" "}
                          College: Karpagam College Of Engineering
                        </h5>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: 30 }}>
                      <Col md={4} xs={12}>
                        <button
                          type="button"
                          class="touch"
                          style={{ marginLeft: 40, width: 200 }}
                          onClick={() => setModalShow1(true)}
                        >
                          <span>
                            Reset Password
                            <i class="bi bi-chevron-double-right"></i>
                          </span>
                        </button>
                        <App2
                          show={modalShow1}
                          onHide={() => setModalShow1(false)}
                        />
                      </Col>
                      <Col md={4} xs={12}>
                        <button
                          type="button"
                          class="touch"
                          style={{ marginLeft: 40, width: 200 }}
                          onClick={() => setModalShow(true)}
                        >
                          <span>
                            Edit Profile
                            <i class="bi bi-chevron-double-right"></i>
                          </span>
                        </button>
                        <App
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </Col>
                      <Col md={4} xs={12}>
                        <button
                          type="button"
                          class="touch"
                          onClick={() => navigator("/Account/Logout")}
                          style={{ marginLeft: 40, width: 200 }}
                        >
                          <span>
                            Log Out
                            <i class="bi bi-chevron-double-right"></i>
                          </span>
                        </button>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Col>
            
          </Card>
          </Row>
        </Container>
        <Container>
          <Row style={{ marginTop: 60, marginLeft: 40 }}>
            <Col xs={12} md={5}>
              <Card>
                <Card.Header
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Problem Finished
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <h5>Total Problem Solved:15</h5>
                    <h5>Easy Level:5</h5>
                    <h5> Medium Level:5</h5>
                    <h5>Hard Level:5</h5>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={5}>
              <Card>
                <Card.Header
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Courses
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <h6> Kick Start For Absolute Beginners </h6>
                    <hr></hr>
                    <h6>C++ - 10 VERY-EASY CHALLENGES </h6>
                    <hr></hr>
                    <h6>PYTHON3.x - 10 AVERAGE CHALLENGES </h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: 10, marginLeft: 40 }}>
            <Col xs={12} md={5}>
              <Card>
                <Card.Header
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Badges
                </Card.Header>
                <Card.Body>
                  <img src={clogo} style={{ width: 100 }}></img>
                  <img src={jlogo} style={{ width: 100, marginLeft: 20 }}></img>
                  <img src={jlogo} style={{ width: 100, marginLeft: 20 }}></img>
                  <img src={jlogo} style={{ width: 100, marginLeft: 20 }}></img>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default BasicExample;
