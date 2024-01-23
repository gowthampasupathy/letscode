import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./board.css";
import Navi from "./aminnav";
import data from "./boarddata";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function BasicExample() {
    const [search1, setsearch1] = useState("all");
    const [search2, setsearch2] = useState("all");
    const Filter = data.filter((i) => {
        if (search1 === "all" &&search2==="all") {
          return i;
        } else if(search1!="all") {
          return i.name.includes(search1);
        }else{
            return i.clg.includes(search2)
        }
      });
  return (
    <div>
      <Navi />
      <Container style={{marginTop:10}}>
      <Button
              style={{ backgroundColor: "#36454F", borderColor: "#36454F" ,marginTop:100}}
              value={"String"}
            > Edit Fields
            </Button>
        <Row>
          <Col xs={12} md={4}>
            <div class="textInputWrapper">
               
              <input placeholder="Search By Name" type="text" class="textInput"  onChange={(e) => setsearch1(e.target.value)} />
            </div>
          </Col>
          <Col xs={12} md={4}>
          <div class="textInputWrapper">
               
               <input placeholder="Search By College" type="text" class="textInput"  onChange={(e) => setsearch2(e.target.value)} />
             </div>
          </Col>
          
        </Row>
      </Container>
      <Container style={{marginTop:30}}>
        <Row>
            <Col xs={12} md={4}>
                <h3>NAME</h3>
            </Col>
            <Col xs={12} md={4}>
            <h3 style={{marginLeft:10}}>COLLEGE NAME</h3>
            </Col>
            <Col xs={12} md={4}>
            <h3> PROGRAM COMPLETED</h3>
            </Col>
        </Row>
        <hr></hr>
      </Container>
      
      <Container style={{marginTop:30}}>
      {Filter.map((d, i) => (
        <Container>
              <Row>
              <Col xs={12} md={4}>
                  <h5>{d.name}</h5>
              </Col>
              <Col xs={12} md={4}>
              <h5 style={{marginLeft:10}}>{d.clg}</h5>
              </Col>
              <Col xs={12} md={4}>
              <h5 style={{marginLeft:120}}> {d.count}</h5>
              </Col>
          </Row>
          <hr></hr>
          </Container>
            ))}
      </Container>
    </div>
  );
}

export default BasicExample;
