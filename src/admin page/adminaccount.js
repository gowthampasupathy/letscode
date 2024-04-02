import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "./aminnav";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Table } from "react-bootstrap";
import { useEffect } from "react";
import axios, { Axios } from "axios";
function BasicExample() {
  const navigator = useNavigate();
  const [category, setcategory] = useState([]);
  const[problemtitle,setprbtitle]=useState()
  const[description,setdescription]=useState()
  const[sampleinput,setsampleinput]=useState()
  const[sampleoutput,setsampleoutput]=useState()
  const[explanation,setexplanation]=useState()
  const[title,settitle]=useState()
  const[lvl,setlevel]=useState()
  const[diff,setdiff]=useState()
  const[con,setconcept]=useState()
  const[ts1in,setts1in]=useState()
  const[ts1out,setts1out]=useState()
  const[hiddents1in,sethiddents1in]=useState()
  const[hiddents1out,sethiddents1out]=useState()
  const [prb,setprb]=useState([])
  const[testcase,settestcase]=useState([])
  const[hiddentestcase,sethiddentestcase]=useState([])
  const[lang,setlang]=useState(" ")
  const[time,settime]=useState(" ")
  const[space,setspace]=useState(" ")
  const[output,setoutput]=useState(" ")
  const[code,setcode]=useState(" ")
  

 
  useEffect(()=>{
    axios.get("https://lets-code-api.onrender.com/getprb")
    .then((pr)=>setprb(pr.data))
    .catch((er)=>console.log(er))
  })
  useEffect(()=>{
    axios.get("https://lets-code-api.onrender.com/cat")
    .then((res)=>setcategory(res.data))
    .catch(errr=>console.log(errr))
   
  },[])
  const submit=()=>{
    axios.post("https://lets-code-api.onrender.com/addproblem",{title,problemtitle,description,sampleinput,sampleoutput,explanation,diff,con,lvl,testcase,hiddentestcase})
    .then((res)=>console.log("problem added"))
    .catch((err)=>console.log(err))
  }
  const handleadd=(e)=>{
    settestcase([...testcase,{
      input:ts1in,
      output:ts1out
    }])

  }
  const handledelete=(id)=>{
    axios.delete("https://lets-code-api.onrender.com/deleteproblem/"+id)
    .then((res)=>{
      console.log(res.data)
      window.location.reload()})
    .catch((er)=>console.log(er))
  }
  const handleaddhiddden=(e)=>{
    sethiddentestcase([...hiddentestcase,{
      hiddeninput:hiddents1in,
      hiddenoutput:hiddents1out,
    }])

  }

  return (
    <div>
      <Nav></Nav>
     <Form onSubmit={submit}>
     <Container style={{marginTop:150}}>
<h2>Problem Addition</h2>
<Card className="shadow-sm" style={{padding:20}}>
<Row>
<Col xs={12} md={12}>
<Form.Group className="mb-3" >
<Form.Label><h5>Problem Title</h5></Form.Label>
<Form.Control required placeholder="Enter the Problem Title" onChange={(e)=>setprbtitle(e.target.value)} >
</Form.Control>
</Form.Group>
</Col>
</Row>
<Row>
<Form.Group>
  <Form.Label>
    <h5>Description</h5>
  </Form.Label>
  <Form.Control required placeholder="Enter the Description" as="textarea" rows={3} onChange={(e)=>setdescription(e.target.value)} ></Form.Control>
</Form.Group>
</Row>
<Row style={{marginTop:20}}>
<Col xs={12} md={6}>
  <Form.Group>
    <Form.Label>
      <h5>Sample Input</h5>
    </Form.Label>
    <Form.Control required placeholder="Enter the sample input" as="textarea" rows={3} onChange={(e)=>setsampleinput(e.target.value)}></Form.Control>
  </Form.Group>
</Col>
<Col xs={12} md={6}>
<Form.Group>
    <Form.Label>
      <h5>Sample Output</h5>
    </Form.Label>
    <Form.Control required placeholder="Enter the sample output" as="textarea" rows={3} onChange={(e)=>setsampleoutput(e.target.value)}></Form.Control>
  </Form.Group>
</Col>
</Row>
<Row style={{marginTop:20}}>
<Col xs={12} md={12}>
<Form.Group>
  <Form.Label>
    <h5>Test Case </h5>
  </Form.Label>
  <Form.Control required  placeholder="Enter the Input" as="textarea" rows={3} onChange={(e)=>setts1in(e.target.value)} ></Form.Control>
  <Form.Control required placeholder="Enter the Output"  style={{marginTop:20}} as="textarea" rows={3} onChange={(e)=>setts1out(e.target.value)} ></Form.Control>
</Form.Group>
<Button variant="outline-dark" style={{marginTop:30}} onClick={handleadd}>Add TestCase</Button>
</Col>


</Row>
<Row style={{marginTop:20}}>
<Col xs={12} md={12}>
<Form.Group>
  <Form.Label>
    <h5>Hidden Test Case </h5>
  </Form.Label>
  <Form.Control required  placeholder="Enter the Input" as="textarea" rows={3} onChange={(e)=>sethiddents1in(e.target.value)} ></Form.Control>
  <Form.Control required placeholder="Enter the Output"  style={{marginTop:20}} as="textarea" rows={3} onChange={(e)=>sethiddents1out(e.target.value)} ></Form.Control>
</Form.Group>
<Button variant="outline-dark" style={{marginTop:30}} onClick={handleaddhiddden}>Add Hidden  TestCase</Button>
</Col>


</Row>
<Row style={{marginTop:20}}>
<Form.Group>
  <Form.Label>
    <h5>Explanation</h5>
  </Form.Label>
  <Form.Control required placeholder="Enter the Explanation"  as="textarea" rows={3} onChange={(e)=>setexplanation(e.target.value)} ></Form.Control>
</Form.Group>
</Row>
<Row style={{marginTop:20}}>
<Col xs={12} md={3}>
<Form.Group>
  <Form.Label>
    <h5>Tracks</h5>
  </Form.Label>
  <Form.Select required onChange={(e)=>settitle(e.target.value)}>
    <option>Select Track</option>
    <option>General</option>
   {
    category.map((d,i)=>{
      return <option key={i}>{d.title}</option>
    })
   }
  </Form.Select>
</Form.Group>
</Col>
<Col xs={12} md={3}>
<Form.Group>
  <Form.Label>
    <h5>Level</h5>
  </Form.Label>
  <Form.Select required onChange={(e)=>setlevel(e.target.value)}>
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
  <Form.Select required onChange={(e)=>setdiff(e.target.value)}>
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
  <Form.Select required onChange={(e)=>setconcept(e.target.value)}>
    <option>Select Concept</option>
    <option>Array</option>
    <option>String</option>
    <option>List</option>
    <option>General</option>
  </Form.Select>
</Form.Group>
</Col>
</Row>
<Row style={{marginTop:20}}>
<Col xs={12} md={3}>
<Button variant="outline-dark" type="submit"  >Add</Button>
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
     </Form>
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
  {
    prb.map((d,i)=>(
      <tr key={i} >
        <td>{d.problemtitle}</td>
        <td>{d.title}</td>
        <td><Button variant="outline-dark" onClick={(e)=>handledelete(d._id)}>Remove</Button></td>
      </tr>
    ))
  }
  </tbody>
  </Table>
</Card>
</Container>
    </div>
  );
}

export default BasicExample;

