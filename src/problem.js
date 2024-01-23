import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import data from "./data";
import "./prbpage";
import { Link } from "react-router-dom";
import Navi from "./nav";
import "./problem.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function BasicExample() {
  const [alltop, setalltop] = useState("all");
  const [search, setsearch] = useState("");
  const navigator = useNavigate();
  console.log(search);
  const Filtertable = data.filter((i) => {
    if (alltop === "all") {
      return search.toLocaleLowerCase === "" ? i : i.prb.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    } else {
      return i.tpc.includes(alltop);
    }
  });
  return (
    <div>
      <Navi />

      <Container style={{ paddingTop: 100 }}>
        <h2>Study Plan</h2>
      </Container>
      <Container>
        <Row className="flex-wrap">
          <Col xs={12} md={5}>
            <Card
              style={{
                height: 160,
                width: 500,
                marginTop: 15,
                backgroundColor: "orange",
              }}
              className=" card1 shadow-sm"
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
          <Col xs={12} md={6}>
            <Card
              style={{
                height: 160,
                width: 500,
                marginTop: 15,
                backgroundColor: "orange",
              }}
              className=" card1 shadow-sm"
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
        <Row className="flex-wrap">
          <Col xs={12} md={5}>
            <Card
              style={{
                height: 160,
                width: 500,
                marginTop: 15,
                backgroundColor: "orange",
              }}
              className=" card1 shadow-sm"
            >
              <Card.Body>
                <Card.Title>C++ - 10 VERY-EASY CHALLENGES</Card.Title>
                <Card.Text>
                  Contains 50 Very-Easy level programming challenges focusing on
                  the basic programming syntax.
                </Card.Text>
                <button
                  type="button"
                  class="touch"
                  onClick={() => navigator("/Problem/cpp")}
                >
                  <span>
                    Start Coding<i class="bi bi-chevron-double-right"></i>
                  </span>
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card
              style={{
                height: 160,
                width: 500,
                marginTop: 15,
                backgroundColor: "orange",
              }}
              className=" card1 shadow-sm"
            >
              <Card.Body>
                <Card.Title>PYTHON3.x - 10 AVERAGE CHALLENGES</Card.Title>
                <Card.Text>
                  Contains 50 AVERAGE level programming challenges focusing on
                  basic problem solving techniques.
                </Card.Text>
                <button
                  type="button"
                  class="touch"
                  onClick={() => navigator("/Problem/python")}
                >
                  <span>
                    Start Coding<i class="bi bi-chevron-double-right"></i>
                  </span>
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: 30 }}>
        <Row className="flex-wrap">
          <Col xs={"auto"}>
            <Button
              style={{ backgroundColor: "#36454F", borderColor: "#36454F" }}
              onClick={(e) => setalltop(e.target.value)}
              value={"all"}
            >
              All Topis
            </Button>
          </Col>
          <Col xs={"auto"}>
            <Button
              style={{ backgroundColor: "#36454F", borderColor: "#36454F" }}
              onClick={(e) => setalltop(e.target.value)}
              value={"List"}
            >
              List
            </Button>
          </Col>
          <Col xs={"auto"}>
            <Button
              style={{ backgroundColor: "#36454F", borderColor: "#36454F" }}
              onClick={(e) => setalltop(e.target.value)}
              value={"Array"}
            >
              Array
            </Button>
          </Col>
          <Col xs={"auto"}>
            <Button
              style={{ backgroundColor: "#36454F", borderColor: "#36454F" }}
              onClick={(e) => setalltop(e.target.value)}
              value={"String"}
            >
              String
            </Button>
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Search"
              className=" textInputWrapper  mr-sm-2"
              onChange={(e) => setsearch(e.target.value)}
            />
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: 20 }}>
        <Table>
          <thead>
            <tr>
              <th>PROBLEM </th>
              <th>TOPIC </th>
            </tr>
          </thead>
          <tbody>
            {Filtertable.map((d, i) => (
              <tr key={i}>
                <td>
                  <Link
                    to={"solve"}
                    style={{ textDecoration: "none", color: "black" }}
                    className="name"
                  >
                    {d.prb}
                  </Link>
                </td>
                <td>{d.tpc}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default BasicExample;
