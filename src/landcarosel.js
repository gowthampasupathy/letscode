import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import lancov from "./landcov.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./problem.css";
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Row >
          <Col xs={4} md={4}>
            <Card
              style={{
                height: "100%",
                width: "100%",
                marginTop: 15,
                backgroundColor: "orange",
              }}
              className="  shadow-sm"
            >
              <Card.Body>
                <Card.Title>Kick Start For Absolute Beginners</Card.Title>
                <Card.Text>Contains 100+ KickStart track programs</Card.Text>
                <button
                  type="button"
                  class="touch"
                  onClick={() => navigator("/Problem/kick")}
                >
                  <span>
                    Start Coding<i class="bi bi-chevron-double-right"></i>
                  </span>
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} md={4}>
            <Card
              style={{
                height: "100%",
                width: "100%",
                marginTop: 15,
                backgroundColor: "orange",
              }}
              className="  shadow-sm"
            >
              <Card.Body>
                <Card.Title>Kick Start For Absolute Beginners</Card.Title>
                <Card.Text>Contains 100+ KickStart track programs</Card.Text>
                <button
                  type="button"
                  class="touch"
                  onClick={() => navigator("/Problem/kick")}
                >
                  <span>
                    Start Coding<i class="bi bi-chevron-double-right"></i>
                  </span>
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} md={4}>
            <Card
              style={{
                height: "100%",
                width: "100%",
                marginTop: 15,
                backgroundColor: "orange",
              }}
              className="  shadow-sm"
            >
              <Card.Body>
                <Card.Title>C - STARTER</Card.Title>
                <Card.Text>
                  Contains 100+ challenges related to beginners in programming.
                </Card.Text>
                <button
                  type="button"
                  class="touch"
                  onClick={() => navigator("/Problem/start")}
                >
                  <span>
                    Start Coding<i class="bi bi-chevron-double-right"></i>
                  </span>
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Carousel.Item>
      
      <Carousel.Item>
      <Row className="flex-wrap">
          <Col xs={4} md={4}>
            <Card
              style={{
                height: "100%",
                width: "100%",
                marginTop: 15,
                backgroundColor: "orange",
              }}
              className="  shadow-sm"
            >
              <Card.Body>
                <Card.Title>Kick Start For Absolute Beginners</Card.Title>
                <Card.Text>Contains 100+ KickStart track programs</Card.Text>
                <button
                  type="button"
                  class="touch"
                  onClick={() => navigator("/Problem/kick")}
                >
                  <span>
                    Start Coding<i class="bi bi-chevron-double-right"></i>
                  </span>
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} md={4}>
            <Card
              style={{
                height: "100%",
                width: "100%",
                marginTop: 15,
                backgroundColor: "orange",
              }}
              className="  shadow-sm"
            >
              <Card.Body>
                <Card.Title>Kick Start For Absolute Beginners</Card.Title>
                <Card.Text>Contains 100+ KickStart track programs</Card.Text>
                <button
                  type="button"
                  class="touch"
                  onClick={() => navigator("/Problem/kick")}
                >
                  <span>
                    Start Coding<i class="bi bi-chevron-double-right"></i>
                  </span>
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} md={4}>
            <Card
              style={{
                height: "100%",
                width: "100%",
                marginTop: 15,
                backgroundColor: "orange",
              }}
              className="  shadow-sm"
            >
              <Card.Body>
                <Card.Title>C - STARTER</Card.Title>
                <Card.Text>
                  Contains 100+ challenges related to beginners in programming.
                </Card.Text>
                <button
                  type="button"
                  class="touch"
                  onClick={() => navigator("/Problem/start")}
                >
                  <span>
                    Start Coding<i class="bi bi-chevron-double-right"></i>
                  </span>
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
      <Row className="flex-wrap">
          <Col xs={4} md={4}>
            <Card
              style={{
                height: "100%",
                width: "100%",
                marginTop: 15,
                backgroundColor: "orange",
              }}
              className="  shadow-sm"
            >
              <Card.Body>
                <Card.Title>Kick Start For Absolute Beginners</Card.Title>
                <Card.Text>Contains 100+ KickStart track programs</Card.Text>
                <button
                  type="button"
                  class="touch"
                  onClick={() => navigator("/Problem/kick")}
                >
                  <span>
                    Start Coding<i class="bi bi-chevron-double-right"></i>
                  </span>
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} md={4}>
            <Card
              style={{
                height: "100%",
                width: "100%",
                marginTop: 15,
                backgroundColor: "orange",
              }}
              className="  shadow-sm"
            >
              <Card.Body>
                <Card.Title>Kick Start For Absolute Beginners</Card.Title>
                <Card.Text>Contains 100+ KickStart track programs</Card.Text>
                <button
                  type="button"
                  class="touch"
                  onClick={() => navigator("/Problem/kick")}
                >
                  <span>
                    Start Coding<i class="bi bi-chevron-double-right"></i>
                  </span>
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} md={4}>
            <Card
              style={{
                height:"100%",
                width: "100%",
                marginTop: 15,
                backgroundColor: "orange",
              }}
              className="  shadow-sm"
            >
              <Card.Body>
                <Card.Title>C - STARTER</Card.Title>
                <Card.Text>
                  Contains 100+ challenges related to beginners in programming.
                </Card.Text>
                <button
                  type="button"
                  class="touch"
                  onClick={() => navigator("/Problem/start")}
                >
                  <span>
                    Start Coding<i class="bi bi-chevron-double-right"></i>
                  </span>
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
