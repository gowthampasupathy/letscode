import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import userpic from "../asset/p.png";
import pr from "../asset/p1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Navi from "./aminnav";
import Table from "react-bootstrap/Table";
import "../style/problem.css";
import { useNavigate } from "react-router-dom";
import { orange } from "@mui/material/colors";
import axios from "axios";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';

//import { LineChart } from '@mui/x-charts/LineChart';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer,Area } from 'recharts';
function BasicExample() {
  const navigator=useNavigate();
  const[suc,setsuc]=useState()
  const[user,setuser]=useState([])
  const[usercount,setusercount]=useState()
  const[trackcount,settrackcount]=useState()
  const[problemcount,setproblemcount]=useState()
  useEffect(()=>{
    axios.get('https://lets-code-api.onrender.com/user')
    .then((uss)=>setuser(uss.data))
    .catch((err)=>console.log(err))
  })

  useEffect(()=>{
    axios.get('https://lets-code-api.onrender.com/dashboard',{withCredentials:true})
    .then((result)=>{
    if(result.data==="Success"){
        setsuc("Success Admin")
      }else{
        navigator('/')
      }
    }).catch((err)=>console.log(err))
  })
  useEffect(()=>{
    axios.get('https://lets-code-api.onrender.com/getusercount')
    .then((result)=>setusercount(result.data))
  })
  useEffect(()=>{
    axios.get('https://lets-code-api.onrender.com/getproblemcount')
    .then((result)=>setproblemcount(result.data))
  })
  useEffect(()=>{
    axios.get('https://lets-code-api.onrender.com/gettrackcount')
    .then((result)=>settrackcount(result.data))
  })
  return (
    <div>
      <Navi />
      <Container>
      <div style={{marginTop:150}}>
        <Row>
          <Col xs={12} md={4} style={{padding:30,}}>
            <Card style={{backgroundColor:"#1e1e1e",width:"auto",height:160}} >
              <Row>
              <Col xs={4} md={4}><img src={userpic} style={{width:'9rem',height:'100%',padding:15,}}></img></Col>
              <Col xs={8} md={8} style={{padding:30,color:'orange'}}>
                <Container style={{textAlign:'center'}} >
                  <Row>
                    <h1>{problemcount}</h1>
                  </Row>
                  <Row>
                    <p>Total Problem </p>
                  </Row>
                </Container>
              </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={12} md={4} style={{padding:30}}>
            <Card style={{backgroundColor:"#1e1e1e",width:"auto",height:160}} >
              <Row>
              <Col xs={4} md={4}><img src={userpic} style={{width:'9rem',height:'100%',padding:10}}></img></Col>
              <Col xs={8} md={8} style={{padding:30,color:'orange'}}>
                <Container style={{textAlign:'center'}} >
                  <Row>
                    <h1>{trackcount}</h1>
                  </Row>
                  <Row>
                    <p>Total Tracks</p>
                  </Row>
                </Container>
              </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={12} md={4} style={{padding:30,}}>
            <Card style={{backgroundColor:"#1e1e1e",width:"auto",height:160}} >
              <Row>
              <Col xs={4} md={4}><img src={pr} style={{width:'9rem',height:'100%',padding:10}}></img></Col>
              <Col xs={8} md={8} style={{padding:30,color:'orange'}}>
                <Container style={{textAlign:'center'}} >
                  <Row>
                    <h1>{usercount}</h1>
                  </Row>
                  <Row>
                    <p>Total Users</p>
                  </Row>
                </Container>
              </Col>
              </Row>
            </Card>
          </Col>
          {/* <Col xs={12} md={6}></Col> */}
        </Row>
      </div>
      <Row>
      <Container style={{marginTop:20}}><h1>Let's Code User Information </h1></Container>
      <Container style={{ marginTop: 50 }}>
       <Row>
        <Col xs={12} md={12}>
        <Table striped bordered hover style={{width:"100%"}}>
      <thead>
        <tr >
          <th  style={{backgroundColor:'#1e1e1e',color:'white'}}>Name</th>
          <th  style={{backgroundColor:'#1e1e1e',color:'white'}}>Gmail</th>
        </tr>
      </thead>
      <tbody>
      {user.map((d, i) => (
        <tr  key={i} >
          <td style={{backgroundColor:'orange',color:'black'}}>{d.name}</td>
          <td style={{backgroundColor:'orange',color:'black'}}>{d.email}</td>
        </tr>
         ))}
      </tbody>
    </Table>
        </Col>
       </Row>
      </Container>
      </Row>
      </Container>
      
    </div>
  );
}

export default BasicExample;
