import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import data from "./data copy";
import "./prbpage";
import { Link } from "react-router-dom";
import Navi from "./aminnav";
import "./problem.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function BasicExample() {
  return (
    <div>
      <Navi />
      <Container style={{marginTop:120}}><h1>Let's Code User Information </h1></Container>
      <Container style={{ marginTop: 50 }}>
       <Row>
        <Col xs={12} md={12}>
        {/* <Table>
          <thead>
            <tr>
              <th>Name </th>
              <th>Gmail </th>
              <th>Contact Number </th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>
                    {d.name}
                </td>
                <td>{d.gmail}</td>
                <td>{d.contact}</td>
              </tr>
            ))}
          </tbody>
          
        </Table> */}
        <Table striped bordered hover style={{width:"100%"}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gmail</th>
        </tr>
      </thead>
      <tbody>
      {data.map((d, i) => (
        <tr  key={i} >
          <td>{d.name}</td>
          <td>{d.gmail}</td>
        </tr>
         ))}
      </tbody>
    </Table>
        </Col>
       </Row>
      </Container>
    </div>
  );
}

export default BasicExample;
