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
  const [head,sethead]=useState([])
  const [prb,setprb]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3001/prb/"+title).
    then((res)=>sethead(res.data))
    .catch(er=>console.log(er))
  })
  // useEffect(()=>{
  //   axios.get("http://localhost:3001/prblist/"+title)
  //   .then((res)=>setprb(res.data))
  //   .catch(err=>console.log(err))
  // })
  return (
    <>
    {
      head.map((d)=>{
        return <div>
        <div className="top">
        <div class="typewriter">
        <h1 class="typed" style={{letterSpacing:10}}>{d.title} </h1>
     </div>
        </div>   
           <List title={d.title}/>
         </div>
      })
    }
    </>
  );
}

export default BasicExample;
