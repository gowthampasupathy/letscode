import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "./aminnav";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { Table } from "react-bootstrap";
import axios from "axios";

function BasicExample() {
    const[title,settitle]=useState();
    const[description,setdescription]=useState();
    const[imageurl,setimageurl]=useState();
    const[type,settype]=useState();
    const[url,seturl]=useState();
    const [track,settrack]=useState([])
    const check=false;
    const count=0;
    const badgecount=0;
    const apiUrl = process.env.REACT_APP_API_URL;
    const Submit=()=>{
      axios.post(`${apiUrl}/addtrack`,{title,description,imageurl,type,url,check,count,badgecount})
      .then((res)=>{console.log("added")})
    }
    useEffect(()=>{
      axios.get(`${apiUrl}/track`)
      .then((result)=>settrack(result.data))
      .catch((err)=>console.log(err))
    },[])
    const handledelete=(id)=>{
      axios.delete(`${apiUrl}/deletetrack/`+id)
      .then((res)=>{
        console.log(res.data)
        window.location.reload()})
      .catch((er)=>console.log(er))
    }
    
  return (
    <div>
      <Nav></Nav>
      <Container style={{marginTop:150}}>
        <h2>Tracks Addition</h2>
      <Card className="shadow-sm" style={{padding:20}}>
    <Form onSubmit={Submit}>
    <Row>
        <Col xs={12} md={4}>
        <Form.Group>
          <Form.Label>
            <h5>Track Type</h5>
          </Form.Label>
          <Form.Select required onChange={(e)=>settype(e.target.value)}>
            <option>Select Category</option>
            <option>Basic Tracks</option>
            <option>Study Plan</option>
          </Form.Select>
        </Form.Group>

        </Col>
        <Col xs={12} md={8}>
        <Form.Group className="mb-3">
        <Form.Label><h5>Tracks Title</h5></Form.Label>
        <Form.Control required placeholder="Enter the Problem Title" onChange={(e)=>settitle(e.target.value)} >
        </Form.Control>
      </Form.Group>
        </Col>
      </Row>
      <Row>
        <Form.Group>
          <Form.Label>
            <h5>Description</h5>
          </Form.Label>
          <Form.Control required as="textarea" rows={3} onChange={(e)=>setdescription(e.target.value)} ></Form.Control>
        </Form.Group>
      </Row>
      <Row style={{marginTop:20}}>
        <Col xs={12} md={6}>
          <Form.Group>
            <Form.Label>
              <h5>Track Image Url</h5>
            </Form.Label>
            <Form.Control placeholder="Enter the Track Image Url" onChange={(e)=>setimageurl(e.target.value)} >
        </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
        <Form.Group>
            <Form.Label>
              <h5>Badges Image Url</h5>
            </Form.Label>
            <Form.Control placeholder="Enter the Badges Image Url" onChange={(e)=>seturl(e.target.value)} >
        </Form.Control>
          </Form.Group>
        </Col>
      </Row>
     <Row style={{marginTop:20}}>
      <Col xs={12} md={3}>
      <Button variant="outline-dark" type="submit">Add</Button>
      </Col>
      <Col xs={12} md={3}>
      </Col>
      <Col xs={12} md={3}>
      </Col>
      <Col xs={12} md={3}>
    
      </Col>
     </Row>
    </Form>
      </Card>
      </Container>
      <Container style={{marginTop:20}}> 
        <h2>Tracks Deletion</h2>
        <Card style={{padding:30}} className="shadow-sm">
          <Table striped bordered hover>
            <thead>
             <th>TITLE</th>
             <th></th>
            </thead>
            <tbody>
      {track.map((d, i) => (
        <tr  key={i} >
          <td>{d.title}</td>
          <td><Button variant="outline-dark" onClick={(e)=>handledelete(d._id)}>Delete</Button></td>
        </tr>
         ))}
      </tbody>
          </Table>
        </Card>
      </Container>
    </div>
  );
}

export default BasicExample;
