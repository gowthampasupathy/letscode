import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import grp from "./prgname";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const List = ({ name, diif, accp }) => (
  <Card
    className="shadow-sm"
    style={{ marginBottom: 10, padding: 10, margin: 20 }}
  >
    <Card.Body>
      <Row>
        <Col xs={12} md={4}>
          <Card.Text>
            <h4>{name}</h4>
          </Card.Text>
        </Col>
        <Col xs={12} md={3}>
          <p>Difficulty: {diif}</p>
        </Col>
        <Col xs={12} md={3}>
          <p>Acceptance: {accp}%</p>
        </Col>
        <Col xs={12} md={2}>
          <Button
            style={{
              backgroundColor: "#ff914d",
              borderColor: "#ff914d",
            }}
            href="/Adsolve"
          >
            S o l v e
          </Button>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);


const CardList = ({ cards }) => (
  <div>
    {cards.map((d, i) => (
      <List key={i} {...d} />
    ))}
  </div>
);


function BasicExample() {
  const [diff, setdiff] = useState("all");
  const handleRadioChange = (event) => {
    setdiff(event.target.value);
  };
  const [lvl, setlvl] = useState("all");
  const handlelvlChange = (event) => {
    setlvl(event.target.value);
  };
  const [con, setcon] = useState("all");
  const handleconChange = (event) => {
    setcon(event.target.value);
  };
  console.log(diff);
  const filteredCards = grp.filter(
    (card) =>{
    return (
      (diff === 'all' || card.diif === diff) &&
      (con === 'all' || card.con === con) &&
      (lvl === 'all' || card.lvl === lvl)
  );
    });


  return (
    <div>
      <Container>
      <Row >
          <Col md={4}>
            {" "}
            <Button
              style={{ backgroundColor: "#36454F", borderColor: "#36454F" }}
              value={"String"}
              
            >
              Add New Problem 
            </Button>
            
          </Col>
          <Col md={4}>
            {" "}
            <Button
              style={{ backgroundColor: "#36454F", borderColor: "#36454F" }}
              value={"String"}
              
            >
              Update Problem List
            </Button>
            
          </Col>
          <Col md={4}>
            {" "}
            <Button
              style={{ backgroundColor: "#36454F", borderColor: "#36454F" }}
              value={"String"}
              
            >
              Delete Problem
            </Button>
           
          </Col>
        </Row>
        <Row>
          <Col xs={9} md={9} style={{ overflowY: "scroll" }}>
            <Col xs={12} md={12}>
              <CardList cards={filteredCards} />
            </Col>
          </Col>
          <Col xs={3} md={3}>
            <h4>Difficulty</h4>
            <h5 style={{ fontWeight: "normal" }}>
              <Form.Check
                type={"radio"}
                label="Easy"
                name="check"
                id="dif1"
                value={"Easy"}
                onClick={handleRadioChange}
              />
              <Form.Check
                type={"radio"}
                label="Medium"
                name="check"
                id="dif2"
                value={"Medium"}
                onClick={handleRadioChange}
              />
              <Form.Check
                type={"radio"}
                label="Hard"
                name="check"
                id="dif3"
                value={"Hard"}
                onClick={handleRadioChange}
              />
            </h5>
            <hr></hr>
            <h4>Level</h4>
            <h5 style={{ fontWeight: "normal" }}>
              <Form.Check
                type={"radio"}
                label="Basic"
                name="lvl"
                id="lvl1"
                value={"Basic"}
                onClick={handlelvlChange}
              />
              <Form.Check
                type={"radio"}
                label="Intermediate"
                name="lvl"
                id="lvl2"
                value={"Intermediate"}
                onClick={handlelvlChange}
              />
              <Form.Check
                type={"radio"}
                label="Advanced"
                name="lvl"
                id="lvl3"
                value={"Advanced"}
                onClick={handlelvlChange}
              />
            </h5>
            <hr></hr>
            <h4>Concepts</h4>
            <h5 style={{ fontWeight: "normal" }}>
              <Form.Check
                type={"radio"}
                label="String"
                name="con"
                id="con1"
                value={"String"}
                onClick={handleconChange}
              />
              <Form.Check
                type={"radio"}
                label="Array"
                name="con"
                id="con2"
                value={"Array"}
                onClick={handleconChange}
              />
              <Form.Check
                type={"radio"}
                label="Loops"
                name="con"
                id="con3"
                value={"Loops"}
                onClick={handleconChange}
              />
              <Form.Check
                type={"radio"}
                label="Opps"
                name="con"
                id="con4"
                value={"Opps"}
                onClick={handleconChange}
              />
              <Form.Check
                type={"radio"}
                label="Collection"
                name="con"
                id="con5"
                value={"Collection"}
                onClick={handleconChange}
              />
            </h5>
            <hr></hr>
            <h5>
              <Form.Check
                type={"radio"}
                label="All"
                name="all"
                id="all1"
                value={"All"}
                
              />
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BasicExample;
