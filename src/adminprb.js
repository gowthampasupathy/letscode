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
import { useEffect } from "react";
import axios from "axios";
function BasicExample() {
  const[user,setuser]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/user')
    .then((uss)=>setuser(uss.data))
    .catch((err)=>console.log(err))
  })
  return (
    <div>
      <Navi />
      <Container style={{marginTop:120}}><h1>Let's Code User Information </h1></Container>
      <Container style={{ marginTop: 50 }}>
       <Row>
        <Col xs={12} md={12}>
        <Table striped bordered hover style={{width:"100%"}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gmail</th>
        </tr>
      </thead>
      <tbody>
      {user.map((d, i) => (
        <tr  key={i} >
          <td>{d.name}</td>
          <td>{d.email}</td>
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
