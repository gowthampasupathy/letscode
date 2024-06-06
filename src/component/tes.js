import "../style/tes.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import List from "./list"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BasicExample() {
  const {title}=useParams()
  const {id}=useParams();
  const [head,sethead]=useState([])
  const [prb,setprb]=useState([])
  const[enroll,setenroll]=useState(0)
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(()=>{
    axios.get(`${apiUrl}/prb/`+title).
    then((res)=>{
      sethead(res.data)
    })
    .catch(er=>console.log(er))
  })

   useEffect(()=>{
    setenroll(1)
    axios.put(`${apiUrl}/trackenrollment/${id}/${title}`,{enroll})
    .then((result)=>console.log(result.data))
    .catch((er)=>console.log(er))
   })
  return (
    <>
    <div>
      <div className="top">
      <div class="typewriter">
      <h1 class="typed" style={{letterSpacing:10}}>{title} </h1>
   </div>
      </div>   
      
        <div className="contentdiv">
      <List title={title} id={id}/>
        </div>
       </div>
    </>
  );
}

export default BasicExample;
