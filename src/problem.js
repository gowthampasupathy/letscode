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
import { useEffect } from "react";
import axios from "axios";

function BasicExample() {
  const [alltop, setalltop] = useState("all");
  const [search, setsearch] = useState("");
  const[plan,setplan]=useState([]);
  useEffect(()=>{
    axios.get("https://lets-code-api.onrender.com/plan").
    then((res)=>setplan(res.data))
    .catch(er=>console.log(er))
  })
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
        <Row className="flex-wrap" xs={12} md={2}>
            {
              plan.map((d)=>{
                return<div  data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="70"
                data-aos-offset="0"> <Col> <Card
                style={{
                  height: 160,
                  width: "100%",
                  marginTop: 15,
                  backgroundColor: "orange",
                }}
                className=" card1 shadow-sm"
              >
                <Card.Body>
                  <Card.Title>{d.title}</Card.Title>
                  <Card.Text>{d.description}</Card.Text>
                  <button
                    type="button"
                    class="touch"
                    onClick={() => navigator(`/Problem/${d.title}`)}
                  >
                    <span>
                      Start Coding<i class="bi bi-chevron-double-right"></i>
                    </span>
                  </button>
                </Card.Body>
              </Card></Col> </div>
              })
            }
         
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
