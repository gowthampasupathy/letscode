import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./main.css";
import React, { useState } from "react";
import logo from "./main.png";
import clogo from "./clogo.png";
import jlogo from "./jlogo.jpg";
import cpplogo from "./cpplogo.png";
import user from "./p.png";
import pr from "./p1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Navi from "./aminnav";
import "./problem.css";
import App2 from "./addmodal";
import App3 from "./updatemodal";
import App4 from "./deletemodal";
import { useNavigate } from "react-router-dom";
import { orange } from "@mui/material/colors";
import axios from "axios";
import { useEffect } from "react";
//import { LineChart } from '@mui/x-charts/LineChart';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer,Area } from 'recharts';
function BasicExample() {
  const navigator=useNavigate();
  const[suc,setsuc]=useState()
  const data = [
    { name: 1, value: 2 },
    { name: 2, value: 5.5 },
    { name: 3, value: 2 },
    { name: 5, value: 8.5 },
    { name: 8, value: 1.5 },
    { name: 10, value: 5 },
  ];

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
  return (
    <div>
      <Navi />
      <div style={{marginTop:150}}>
        <Row>
          <Col xs={12} md={4} style={{padding:30,}}>
            <Card style={{backgroundColor:"#1e1e1e",width:"auto",height:160}} >
              <Row>
              <Col xs={4} md={4}><img src={user} style={{width:'9rem',height:'100%',padding:15,}}></img></Col>
              <Col xs={8} md={8} style={{padding:30,color:'orange'}}>
                <Container style={{textAlign:'center'}} >
                  <Row>
                    <h1>50</h1>
                  </Row>
                  <Row>
                    <p>Total Problem Solved</p>
                  </Row>
                </Container>
              </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={12} md={4} style={{padding:30}}>
            <Card style={{backgroundColor:"#1e1e1e",width:"auto",height:160}} >
              <Row>
              <Col xs={4} md={4}><img src={pr} style={{width:'9rem',height:'100%',padding:10}}></img></Col>
              <Col xs={8} md={8} style={{padding:30,color:'orange'}}>
                <Container style={{textAlign:'center'}} >
                  <Row>
                    <h1>50</h1>
                  </Row>
                  <Row>
                    <p>Total Users</p>
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
                    <h1>50</h1>
                  </Row>
                  <Row>
                    <p>Active Users</p>
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
   <div>
      {/* <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          stroke: "orange", // Set the color of the line to orange
        },
      ]}
      width={"900"}
      height={400}
      
    /> */}
    <ResponsiveContainer width="100%" height={400}>
  <LineChart
    data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  >
    <XAxis dataKey="name" />
    <YAxis />
    <Line type="monotone" dataKey="value" stroke="orange" />
    <Area type="monotone" dataKey="value" stroke="orange" fill="orange" fillOpacity={0.3} />
  </LineChart>
</ResponsiveContainer>
      </div>
   </Row>
    </div>
  );
}

export default BasicExample;
