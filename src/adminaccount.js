import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import prof from "./prof.png";
import Nav from "./aminnav";
import "./userinfo.css";
import jlogo from "./jlogo.jpg";
import clogo from "./clogo.png";
import App from "./modal";
import React from "react";
import App2 from "./passmodal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Table } from "react-bootstrap";
function BasicExample() {
  const navigator = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  return (
    <div>
      <Nav></Nav>
      <Container style={{marginTop:150}}>
        <h2>Problem Addition</h2>
      <Card className="shadow-sm" style={{padding:20}}>
      <Row>
        <Col xs={12} md={4}>
        <Form.Group className="mb-3">
        <Form.Label><h5>Problem Id</h5></Form.Label>
        <Form.Control placeholder="Enter the Problem Id"  />
      </Form.Group>

        </Col>
        <Col xs={12} md={8}>
        <Form.Group className="mb-3">
        <Form.Label><h5>Problem Title</h5></Form.Label>
        <Form.Control placeholder="Enter the Problem Title" >
        </Form.Control>
      </Form.Group>
        </Col>
      </Row>
      <Row>
        <Form.Group>
          <Form.Label>
            <h5>Description</h5>
          </Form.Label>
          <Form.Control as="textarea" rows={3} ></Form.Control>
        </Form.Group>
      </Row>
      <Row style={{marginTop:20}}>
        <Col xs={12} md={6}>
          <Form.Group>
            <Form.Label>
              <h5>Sample Input</h5>
            </Form.Label>
            <Form.Control as="textarea" rows={3}></Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
        <Form.Group>
            <Form.Label>
              <h5>Sample Output</h5>
            </Form.Label>
            <Form.Control as="textarea" rows={3}></Form.Control>
          </Form.Group>
        </Col>
      </Row>
     <Row style={{marginTop:20}}>
      <Col xs={12} md={3}>
        <Form.Group>
          <Form.Label>
            <h5>Category</h5>
          </Form.Label>
          <Form.Select>
            <option>Select Category</option>
            <option>Basics Of C++</option>
            <option>Kick Start To c</option>
            <option>Inteoduction to Python</option>
            <option>General</option>
          </Form.Select>
        </Form.Group>
      </Col>
      <Col xs={12} md={3}>
      <Form.Group>
          <Form.Label>
            <h5>Level</h5>
          </Form.Label>
          <Form.Select>
            <option>Select Level</option>
            <option>Basics</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </Form.Select>
        </Form.Group>
      </Col>
      <Col xs={12} md={3}>
      <Form.Group>
          <Form.Label>
            <h5>Difficulty</h5>
          </Form.Label>
          <Form.Select>
            <option>Select Difficulty</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </Form.Select>
        </Form.Group>
      </Col>
      <Col xs={12} md={3}>
      <Form.Group>
          <Form.Label>
            <h5>Concept</h5>
          </Form.Label>
          <Form.Select>
            <option>Select Concept</option>
            <option>Array</option>
            <option>String</option>
            <option>List</option>
            <option>General</option>
          </Form.Select>
        </Form.Group>
      </Col>
     </Row>
      </Card>
      </Container>
      <Container style={{marginTop:20}}> 
        <h2>Problem Deletion</h2>
        <Card style={{padding:30}} className="shadow-sm">
          <Table striped bordered hover>
            <thead>
             <th>Title</th>
             <th>Category</th>
             <th></th>
            </thead>
            <tbody>
              <tr>
                <td>Prime Checker</td>
                <td>General</td>
                <td><Button variant="outline-dark">Remove</Button></td>
              </tr>
              <tr>
                <td>Prime Checker</td>
                <td>General</td>
                <td><Button variant="outline-dark">Remove</Button></td>
              </tr>
              <tr>
                <td>Prime Checker</td>
                <td>General</td>
                <td style={{width:110}}><Button variant="outline-dark">Remove</Button></td>
              </tr>
              <tr>
                <td>Prime Checker</td>
                <td>General</td>
                <td><Button variant="outline-dark">Remove</Button></td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </Container>
    </div>
  );
}

export default BasicExample;
