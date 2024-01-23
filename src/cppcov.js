import "./main.css";
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
      <Image src={pic} fluid style={{ width: 1600, marginTop: "-40px" }} />
      <Container>
        <h4 style={{ fontWeight: "bold", textAlign: "center", marginTop: 15 }}>
        Contains 10 Very-Easy level programming challenges focusing on the basic programming syntax{" "}
        </h4>
        <Button href="/Problem" variant="outline-dark" style={{ marginTop: "-65px" }}>
          BACK
        </Button>
      </Container>

      <List/>
    </div>
  );
}

export default BasicExample;
