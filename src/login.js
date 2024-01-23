import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import pic from "./mainlogo.png";
import "./login.css";
import Form from "react-bootstrap/Form";

function App() {
  return (
    <>
      <Container>
        <Card
          style={{
            width:1000,
            height:500,
            margin:'auto',
            marginTop:120
          }}
          className="shadow-lg"
        >
          <Row>
            <Col md={6} xs={12}>
              <Card.Img variant="top" src={pic} style={{ width:500 }} />
            </Col>
            <Col md={6} xs={12} style={{ backgroundColor: "orange",height:500 }}>
              <Card.Body>
                <Card.Text>
                  <h1
                    style={{
                      textAlign: "center",
                      fontFamily: "-moz-initial",
                      fontWeight: "bold",
                    }}
                  >
                    W E L C O M E
                  </h1>
                  <h3 style={{ textAlign: "center" }}>B A C K</h3>
                  <h5 style={{ textAlign: "center" }}>
                    Login In To Continue Your Coding
                  </h5>
                  <Container style={{ marginTop: 50 }}>
                    <Form style={{ padding: 10 }}>
                      <Form.Group
                        className="mb-4"
                        controlId="formBasicEmail"
                        style={{ marginLeft: 10 }}
                      >
                        <Form.Control
                          type="email"
                          className="mt-1"
                          placeholder="Enter email"
                          style={{ width: 400 }}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-4"
                        controlId="formBasicPassword"
                        style={{ marginLeft: 10, marginTop: 50 }}
                      >
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          className="mt-1"
                          style={{ width: 400 }}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <Button
                        style={{
                          width: 400,
                          marginLeft: 10,
                          marginTop: 30,
                          backgroundColor: "black",
                          borderColor: "black",
                        }}
                        type="submit"
                        href="/Exp"
                      >
                        Login
                      </Button>
                    </Form>
                    <a href="#psss" style={{ color: "black", marginLeft: 20 }}>
                      Forgot Password
                    </a>
                    <p
                      style={{
                        color: "black",
                        marginLeft: 180,
                        marginTop: -25,
                      }}
                    >
                      Don't Have An Account ?
                      <a href="/Signup" style={{ color: "black", }}>
                        SignUp
                      </a>
                    </p>
                  </Container>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}

export default App;
