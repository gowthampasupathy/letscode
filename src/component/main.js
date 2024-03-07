import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style/main.css';
import logo from "../asset/main.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from "react-router-dom"
import Navi from './nav'
import "../style/problem.css";
import {useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
function BasicExample() {
  const navigator =useNavigate();
  const [track,settrack]=useState([])
  const [suc,setsuc]=useState()
  const[email,setemail]=useState()


  useEffect(()=>{
    axios.get('http://localhost:3001/trac')
    .then((result)=>settrack(result.data))
    .catch((err)=>console.log(err))
  },[])
  useEffect(()=>{
    axios.get('http://localhost:3001/explore',{withCredentials:true})
    .then((result)=>{
      if(result.data.status==="Success"){
        setsuc("Success User")
        setemail(result.data.email)
      }else{
        console.log("faild"+result.data)
        navigator('/')
   
      }
    }).catch((err)=>console.log(err))
  },[])

  return (     
  <div> 
     <Navi email={email} />
    <Container>
    <h6  style={{marginTop:100,fontSize:20,color:'GrayText'}}>Welcome To</h6>
    <h1>LetsCode Explore </h1>
    </Container>
    <Container>
        <h3 style={{marginTop:50}}>Available Languages</h3>
    </Container>
    <Container>
      {/* <Row className="flex-wrap"
      >
        <Col xs={12} md={3}> <Card className=" card1 shadow-sm">
      <Card.Img variant="top" src={clogo} style={{height:200,width:200,margin:'auto'}} />
      <Card.Body >
        <Card.Title>C Programming</Card.Title>
        <Card.Text>
        Hands-on Programming Challenges to learn and practise C
        </Card.Text>
        <button type='button' class='touch' onClick={()=>navigator("/Exp/cpp")}  ><span>Show<i class="bi bi-chevron-double-right"></i></span></button>
      </Card.Body>
    </Card></Col>
        <Col xs={12}md={3}> <Card className=" card1 shadow-sm">
      <Card.Img variant="top" src={jlogo} style={{height:200,width:200,margin:'auto'}} />
      <Card.Body>
        <Card.Title>Java Programming </Card.Title>
        <Card.Text>
        Hands-on Programming Challenges to learn and practise Java
        </Card.Text>
        <button type='button' class='touch' onClick={()=>navigator("/Exp/cpp")}  ><span>Show<i class="bi bi-chevron-double-right"></i></span></button>
      </Card.Body>
    </Card></Col>
        <Col xs={12} md={3}> <Card className=" card1 shadow-sm">
      <Card.Img variant="top" src={cpplogo} style={{height:200,width:200,margin:'auto'}}/>
      <Card.Body>
        <Card.Title>C++ Programming </Card.Title>
        <Card.Text>
        Hands-on Programming Challenges to learn and practise C++
        </Card.Text>
        <button type='button' class='touch' onClick={()=>navigator("/Exp/cpp")}  ><span>Show<i class="bi bi-chevron-double-right"></i></span></button>
      </Card.Body>
    </Card></Col>
        <Col xs={12} md={3}> <Card className=" card1 shadow-sm">
      <Card.Img variant="top" src={pylogo} style={{height:200,width:200,margin:'auto'}} />
      <Card.Body>
        <Card.Title>Python Programming</Card.Title>
        <Card.Text>
        SoHands-on Programming Challenges to learn and practise Python
        </Card.Text>
        <button type='button' class='touch' onClick={()=>navigator("/Exp/cpp")}  ><span>Show<i class="bi bi-chevron-double-right"></i></span></button>
      </Card.Body>
    </Card></Col>
      </Row> */}
        <Row className="flex-wrap" xs={12} md={4} style={{marginTop:50}}
      >
       {
        track.map((trk)=>{
          return  <div  data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="70"
          data-aos-offset="0">
            <Col > <Card className=" card1 shadow-sm" style={{margin:5,}}>
          <Card.Img variant="top" src={trk.imageurl} style={{height:200,width:200,margin:'auto'}} />
          <Card.Body >
            <Card.Title>{trk.title}</Card.Title>
            <Card.Text>
            {
              trk.description
            }
            </Card.Text>
            <button type='button' class='touch' onClick={()=>navigator(`/Exp/${trk.title}`)}  ><span>Show<i class="bi bi-chevron-double-right"></i></span></button>
          </Card.Body>
        </Card></Col> 
          </div>
         
        })
       }
      </Row>
    </Container>
    
    </div>
  );
}

export default BasicExample;