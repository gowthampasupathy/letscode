import Container from "react-bootstrap/Container";
import Navi from "./nav";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import  '../style/leader.css';
import { useState } from "react";
import data from "../data/boarddata";
import { useEffect } from "react";
import axios from "axios";

function BasicExample() {
    const [search1, setsearch1] = useState("all");
    const [search2, setsearch2] = useState("all");
    const[email,setemail]=useState()
    const[id,setid]=useState(localStorage.getItem("id")||"")
    const [userinfo,setuserinfo]=useState({})
    useEffect(()=>{
      axios.get('https://lets-code-api.onrender.com/getinfo/'+email)
      .then((result)=>{
        setuserinfo(result.data)
       setid(userinfo[0]._id)
       localStorage.setItem("id",userinfo[0]._id)
      })
      .catch((er)=>console.log(er))
    })
    useEffect(()=>{
      axios.get('https://lets-code-api.onrender.com/explore',{withCredentials:true})
      .then((result)=>{
          setemail(result.data.email)
      }).catch((err)=>console.log(err))
    },[])
    const Filter = data.filter((i) => {
        if (search1 === "all" &&search2==="all") {
          return i;
        } else if(search1!="all") {
          return i.name.toLocaleLowerCase().includes(search1);
        }else{
            return i.clg.toLocaleLowerCase().includes(search2)
        }
      });
  return (
   <>
    <Navi id={id} />
   <Container style={{marginTop:110}}>
    <h2>Overall Leaderboard</h2>
    <Row>
        <Col xs={6} md={4}>
        <div class="inputbox">
    <input required="required" type="text" onChange={(e) => setsearch1(e.target.value)} />
    <span>Name</span>
    <i></i>
</div>
        </Col>
        <Col xs={6} md={4}>
        <div class="inputbox">
    <input required="required" type="text" onChange={(e) => setsearch2(e.target.value)}/>
    <span>College</span>
    <i></i>
</div>
        </Col>
    </Row>
   <Container style={{marginTop:20}}>
   <Row>
    <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Rank</th>
      <th scope="col">Name</th>
      <th scope="col">College</th>
      <th scope="col">Count</th>
    </tr>
  </thead>
  {Filter.map((d, i) => (
  <tbody>
    <tr>
      <th scope="row">{d.rank}</th>
      <td>{d.name}</td>
      <td>{d.clg}</td>
      <td>{d.count}</td>
    </tr>
  </tbody>
  ))}
</table>
    </Row>
   </Container>
   </Container>
   </>
  );
}

export default BasicExample;
