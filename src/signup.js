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
        <Row>
          <Col xs={12} md={4} style={{ margin: "auto" }}>
            <Card
              style={{ marginTop: 60, backgroundColor: "black" }}
              className="shadow-lg"
            >
              <Card.Body>
                <Card.Text>
                  <img
                    src={pic}
                    style={{ height: 200, width: 210, marginLeft: 80,marginTop:-10 }}
                  ></img>
                  <h5
                    style={{
                      textAlign: "center",
                      color: "white",
                      marginTop: -30,
                    }}
                  >
                    Create Account To Explopre The Platform
                  </h5>
                  <Container style={{ marginTop: 10 }}>
                    <Form style={{ padding: 30 }}>
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control
                          type="text"
                          className="mt-1"
                          placeholder="Enter Username"
                          style={{ width: 300 }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control
                          type="email"
                          className="mt-1"
                          placeholder="Enter email"
                          style={{ width: 300 }}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-4"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          className="mt-1"
                          style={{ width: 300 }}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-4"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          type="password"
                          placeholder="ConfirmPassword"
                          className="mt-1"
                          style={{ width: 300 }}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <Button
                        style={{
                          width: 300,
                          marginTop: 20,
                          backgroundColor: "orange",
                          borderColor: "orange",
                        }}
                        type="submit"
                        href="/Exp"
                      >
                        SignUp
                      </Button>
                    </Form>
                    <p
                      style={{ color: "white", marginLeft: 40, marginTop: -25 }}
                    >
                      Already Have An Account ?
                      <a href="/" style={{ color: "white" }}>
                        Login
                      </a>
                    </p>
                  </Container>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
