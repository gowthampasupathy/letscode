import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import data from "../data/data";
import { Link } from "react-router-dom";
import Navi from "./nav";
import "../style/problem.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function BasicExample() {
  const [alltop, setalltop] = useState("all");
  const [search, setsearch] = useState("");
  const[plan,setplan]=useState([]);
  const [problem,setproblem]=useState([])
  const[email,setemail]=useState()
  const[id,setid]=useState(localStorage.getItem("id")||"")
  const [userinfo,setuserinfo]=useState({})
  const [generalproblem,setgeneralproblem]=useState([])
  const prb=JSON.parse(localStorage.getItem("prb"))
  const [loader,setloader]=useState(false)
  const [loader1,setloader1]=useState()
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(()=>{
    if(prb==null){
      setloader(false)
    }else{
      setloader(true)
    }
  })

  useEffect(()=>{
    axios.get(`${apiUrl}/getinfo/`+email)
    .then((result)=>{
      setuserinfo(result.data)
     setid(userinfo[0]._id)
     localStorage.setItem("id",userinfo[0]._id)
     const arr =userinfo[0].track.filter(e=>e.type==="Study Plan")
     setproblem(arr)
     localStorage.setItem("prb",JSON.stringify(arr))
     setloader(true)
   
    })
    .catch((er)=>console.log(er))
  })
  useEffect(()=>{
    axios.get(`${apiUrl}/getgeneralprblm/`+id)
    .then((result)=>{
      setgeneralproblem(result.data)
      
      setloader1(true)
    })
    .catch((er)=>console.log(er))
  })
  useEffect(()=>{
    axios.get(`${apiUrl}/explore`,{withCredentials:true})
    .then((result)=>{
        setemail(result.data.email)
    }).catch((err)=>console.log(err))
  },[])
  useEffect(()=>{
    axios.get(`${apiUrl}/plan`).
    then((res)=>setplan(res.data))
    .catch(er=>console.log(er))
  })
  const navigator = useNavigate();
  console.log(search);
  const Filtertable = generalproblem.filter((i) => {
    if (alltop === "all") {
      return search.toLocaleLowerCase === "" ? i : i.problemtitle.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    } else {
      return i.con.includes(alltop);
    }
  });
  console.log(generalproblem)

  return (
    <div>
      <Navi id={id} />

      <Container style={{ paddingTop: 100 }}>
        <h2>Study Plan</h2>
      </Container>
      <Container>
        <Row className="flex-wrap" xs={12} md={2}>
            {
              loader ? prb.map((d)=>{
                return<div  data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="70"
                data-aos-offset="0"> <Col> <Card
                style={{
                  height: 160,
                  width: "100%",
                  marginTop: 15,
                  backgroundColor: "orange",
                }}
                className=" card1 shadow-sm"
              >
                <Card.Body>
                  <Card.Title>{d.title}</Card.Title>
                  <Card.Text>{d.description}</Card.Text>
                  <button
                    type="button"
                    class="touch"
                    onClick={() => navigator(`/Problem/${d.title}`)}
                  >
                    <span>
                      Start Coding<i class="bi bi-chevron-double-right"></i>
                    </span>
                  </button>
                </Card.Body>
              </Card></Col> </div>
              }):<div className='mainloader'><div class="loader"></div></div>
            }
         
        </Row>
      </Container>
      <Container style={{ marginTop: 30 }}>
        <Row className="flex-wrap">
          <Col xs={"auto"}>
            <Button
              style={{ backgroundColor: "#36454F", borderColor: "#36454F" }}
              onClick={(e) => setalltop(e.target.value)}
              value={"all"}
            >
              All Topis
            </Button>
          </Col>
          <Col xs={"auto"}>
            <Button
              style={{ backgroundColor: "#36454F", borderColor: "#36454F" }}
              onClick={(e) => setalltop(e.target.value)}
              value={"List"}
            >
              List
            </Button>
          </Col>
          <Col xs={"auto"}>
            <Button
              style={{ backgroundColor: "#36454F", borderColor: "#36454F" }}
              onClick={(e) => setalltop(e.target.value)}
              value={"Array"}
            >
              Array
            </Button>
          </Col>
          <Col xs={"auto"}>
            <Button
              style={{ backgroundColor: "#36454F", borderColor: "#36454F" }}
              onClick={(e) => setalltop(e.target.value)}
              value={"String"}
            >
              String
            </Button>
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Search"
              className=" textInputWrapper  mr-sm-2"
              onChange={(e) => setsearch(e.target.value)}
            />
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: 20 }}>
        <Table >
          <thead>
            <tr>
              <th>PROBLEM </th>
              <th>TOPIC </th>
            </tr>
          </thead>
          <tbody>
            {loader1?Filtertable.map((d, i) => (
              <tr key={i}>
                <td>
                  <Link
                    to={`${id}/solve/${d._id}`}
                    style={{ textDecoration: "none", color: "black" }}
                    className="name"
                  >
                    {d.problemtitle}
                  </Link>
                </td>
                <td>{d.con}</td>
              </tr>
            )):<div className='mainloader2'><div class="loader"></div></div>}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default BasicExample;
