import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style/main.css';
import logo from "../asset/main.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, json, useParams } from "react-router-dom"
import Navi from './nav'
import "../style/problem.css";
import {useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
function BasicExample() {
  const navigator =useNavigate();
  const [track,settrack]=useState([])
  const [suc,setsuc]=useState()
  const[email,setemail]=useState(localStorage.getItem("email")||"")
  const [id,setid]=useState(localStorage.getItem("id")||"")
  const [userinfo,setuserinfo]=useState({})
  const [userdata,setuserdata]=useState({})
  const [info,setinfo]=useState({})
 const trk=JSON.parse(localStorage.getItem("trk"))
  const [basictrk,setbasictrk]=useState([])
  const [loader,setloader]=useState(false)

  useEffect(()=>{
    axios.get("https://lets-code-api.onrender.com/info/"+id)
    .then((res)=>setinfo(res.data))
    .catch((er)=>console.log(er))
  })
  window.onload = function() {
    //considering there aren't any hashes in the urls already
    if(!window.location.hash) {
        //setting window location
        window.location = window.location + '#loaded';
        //using reload() method to reload web page
        window.location.reload();
    }
}
  useEffect(()=>{
    axios.get('https://lets-code-api.onrender.com/getinfo/'+email)
    .then((result)=>{
      setuserinfo(result.data)
     setid(userinfo[0]._id)
     localStorage.setItem("id",userinfo[0]._id)
    //  localStorage.setItem("userdata",JSON.stringify(result.data))
    //  settrack(userinfo[0].track)
     const arr =userinfo[0].track.filter(e=>e.type==="Basic Tracks")
     settrack(arr)
     setloader(true)
    })
    .catch((er)=>console.log(er))
  })
  // useEffect(()=>{
  //   axios.get('http://localhost:3001/trac')
  //   .then((result)=>settrack(result.data))
  //   .catch((err)=>console.log(err))
  // },[])

  // useEffect(()=>{
  //   axios.get('http://localhost:3001/gettrack')
  //   .then((result)=>settrk(result.data))
  //   .catch((er)=>console.log(er))
  // })
  useEffect(()=>{
    axios.get('https://lets-code-api.onrender.com/explore',{withCredentials:true})
    .then((result)=>{
      if(result.data.status==="Success"){
        setsuc("Success User")
        setemail(result.data.email)
        localStorage.setItem("email",result.data.email)
      }else{
        console.log("faild"+result.data)
        navigator('/')
   
      }
    }).catch((err)=>console.log(err))
  },[])
   
  //console.log(trk)
  return (     
  <div> 
     <Navi id={id} />
    <Container>
    <h6  style={{marginTop:100,fontSize:20,color:'GrayText'}}>Welcome To</h6>
    <h1>LetsCode Explore </h1>
    </Container>
    <Container>
        <h3 style={{marginTop:50}}>Available Languages</h3>
    </Container>
    <Container>
        <Row className="flex-wrap" xs={12} md={4} style={{marginTop:50}}
      >
       {
       loader? track.map((trk)=>{
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
          <button type='button' class='touch' onClick={()=>navigator(`/Exp/${id}/${trk.title}`)}  ><span>Enroll<i class="bi bi-chevron-double-right"></i></span></button>
        </Card.Body>
      </Card></Col> 
        </div>
       
      }):<div className='mainloader'><div class="loader"></div></div>
       }
      </Row>
    </Container>
    
    </div>
  );
}

export default BasicExample;