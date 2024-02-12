import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./board.css";
import Nav from "./aminnav";
import data from "./boarddata";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { Table } from "react-bootstrap";

function BasicExample() {
    
  return (
    <div>
      <Nav></Nav>
      <Container style={{marginTop:150}}>
        <h2>Tracks Addition</h2>
      <Card className="shadow-sm" style={{padding:20}}>
      <Row>
        <Col xs={12} md={4}>
        <Form.Group className="mb-3">
        <Form.Label><h5>Tracks Id</h5></Form.Label>
        <Form.Control placeholder="Enter the Problem Id"  />
      </Form.Group>

        </Col>
        <Col xs={12} md={8}>
        <Form.Group className="mb-3">
        <Form.Label><h5>Tracks Title</h5></Form.Label>
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
              <h5>Track Image Url</h5>
            </Form.Label>
            <Form.Control placeholder="Enter the Track Image Url" >
        </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
        <Form.Group>
            <Form.Label>
              <h5>Badges Image Url</h5>
            </Form.Label>
            <Form.Control placeholder="Enter the Badges Image Url" >
        </Form.Control>
          </Form.Group>
        </Col>
      </Row>
     <Row style={{marginTop:20}}>
      <Col xs={12} md={3}>
      <Button variant="outline-dark">Add</Button>
      </Col>
      <Col xs={12} md={3}>
      </Col>
      <Col xs={12} md={3}>
      </Col>
      <Col xs={12} md={3}>
    
      </Col>
     </Row>
      </Card>
      </Container>
      <Container style={{marginTop:20}}> 
        <h2>Tracks Deletion</h2>
        <Card style={{padding:30}} className="shadow-sm">
          <Table striped bordered hover>
            <thead>
             <th>Title</th>
             <th>Total Number Of problems</th>
             <th></th>
            </thead>
            <tbody>
              <tr>
                <td>Prime Checker</td>
                <td>4</td>
                <td><Button variant="outline-dark">Remove</Button></td>
              </tr>
              <tr>
                <td>Prime Checker</td>
                <td>20</td>
                <td><Button variant="outline-dark">Remove</Button></td>
              </tr>
              <tr>
                <td>Prime Checker</td>
                <td>10</td>
                <td style={{width:110}}><Button variant="outline-dark">Remove</Button></td>
              </tr>
              <tr>
                <td>Prime Checker</td>
                <td>54</td>
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
