import "./main.css";
import Image from "react-bootstrap/Image";
import pic from "./kickcov.png";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import List from "./list"

function BasicExample() {
  return (
    <div>
      <img src={pic} fluid style={{ width: "100%",height:'100%', marginTop: "-50px" }} ></img>
      <Container>
        <h4 style={{ fontWeight: "bold", textAlign: "center", marginTop: 15 }}>
          Contains 10+ KickStart track programs{" "}
        </h4>
        <Button
          href="/Problem"
          variant="outline-dark"
          style={{ marginTop: "-65px" }}
        >
          BACK
        </Button>
      </Container>
      <List/>
    </div>
  );
}

export default BasicExample;
