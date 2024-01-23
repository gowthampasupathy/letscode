import "./main.css";
import Image from "react-bootstrap/Image";
import pic from "./kickcov.png";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import List from "./adminlist"

function BasicExample() {
  return (
    <div>
      <Image src={pic} fluid style={{ width: 1600, marginTop: "-50px" }} />
      <Container>
        <h4 style={{ fontWeight: "bold", textAlign: "center", marginTop: 15 }}>
          Contains 10+ KickStart track programs{" "}
        </h4>
        <Button
          href="/AdProblem"
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
