import "./tes.css";
import Image from "react-bootstrap/Image";
import pic from "./cpcov.png";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import grp from "./prgname";
import List from "./list"

function BasicExample() {
  return (
    <div>
   <div className="top">
   <div class="typewriter">
  <h1 class="typed" style={{letterSpacing:10}}>C++basics </h1>
</div>
   </div>
     
        <Row>
          <Col xs={3} md={3}>
            <Button href="/Problem" variant="outline-dark" style={{ marginTop:10,marginLeft:10 }}>
          BACK
        </Button>
          </Col>
        </Row>
        
      <List/>
    </div>
  );
}

export default BasicExample;
