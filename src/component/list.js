import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "../style/list.css";
import { useEffect } from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'
const List = ({ problemtitle, diff, con,_id,completion,id,}) => {
  const [buttonname,setbuttonname]=useState("Solve")
  const [dcolor,setdcolor]=useState("#ff914d")
 useEffect(()=>{
  if(completion==1){
    setbuttonname("Solved")
    setdcolor("green")
  }
 })

   return <div>
    <Card
    className="shadow-sm"
    style={{ marginBottom: 10, padding: 10, margin: 20 }}
  >
    <Card.Body>
      <Row>
        <Col xs={12} md={4}>
          <Card.Text>
            <h4>{problemtitle}</h4>
          </Card.Text>
        </Col>
        <Col xs={12} md={3}>
          <p>Difficulty: {diff}</p>
        </Col>
        <Col xs={12} md={3}>
          <p>Concept: {con}</p>
        </Col>
        <Col xs={12} md={2}>
          <Link to={`/Exp/${id}/solve/${_id}`} >
          <Button
            style={{
              backgroundColor: dcolor,
              borderColor: dcolor,
            }}
            
          >
            {buttonname}
          </Button>
          </Link>
        </Col>
      </Row>
    </Card.Body>
  </Card>
   </div>
};

const CardList = ({ cards ,id}) => (
  <div>
    {cards.map((d, i) => (
      <List key={i} {...d} id={id} />
    ))}
  </div>
);

function BasicExample(props) {
  const {title,id}=props
  const [diff, setdiff] = useState("all");
  const [info,setinfo]=useState({})
  const [loader,setloader]=useState(false)
  const handleRadioChange = (event) => {
    setdiff(event.target.value);
  };
  const [lvl, setlvl] = useState("all");
  const handlelvlChange = (event) => {
    setlvl(event.target.value);
  };
  const [con, setcon] = useState("all");
  const handleconChange = (event) => {
    setcon(event.target.value);
  };

  const[prb,setprb]=useState([])
  const apiUrl = process.env.REACT_APP_API_URL;
  // useEffect(()=>{
  //   axios.get("http://localhost:3001/problem/"+title)
  //   .then((res)=>setprb(res.data))
  //   .catch((er)=>console.log(er))
  // })
  useEffect(()=>{
    axios.get(`${apiUrl}/info/`+id)
    .then((res)=>{
      setinfo(res.data)
      const prblm=res.data.problem.filter(e=>e.title==title)
      setprb(prblm)
      setloader(true)
    })
    .catch((er)=>console.log(er))
  },[apiUrl, id, title])
  const filteredCards = prb.filter((card) => {
    return (
      (diff === "all" || card.diff === diff) &&
      (con === "all" || card.con === con) &&
      (lvl === "all" || card.lvl === lvl)
    );
  });
 
  const navigator =useNavigate();

  return (
    <div>
      <Container>
        <Row style={{marginTop:10}}>
           <Col xs={12} md={3} >
            <h4>Difficulty</h4>
            <h5 style={{ fontWeight: "normal" }}>
              <Form.Check
                type={"radio"}
                label="Easy"
                name="check"
                class="input"
                id="dif1"
                value={"Easy"}
                onClick={handleRadioChange}
              />
              <Form.Check
                type={"radio"}
                label="Medium"
                name="check"
                id="dif2"
                class="input"
                value={"Medium"}
                onClick={handleRadioChange}
              />
              <Form.Check
                type={"radio"}
                label="Hard"
                name="check"
                class="input"
                id="dif3"
                value={"Hard"}
                onClick={handleRadioChange}
              />
            </h5>
            <hr></hr>
            <h4>Level</h4>
            <h5 style={{ fontWeight: "normal" }}>
              <Form.Check
                type={"radio"}
                label="Basic"
                name="lvl"
                class="input"
                id="lvl1"
                value={"Basics"}
                onClick={handlelvlChange}
              />
              <Form.Check
                type={"radio"}
                label="Intermediate"
                name="lvl"
                class="input"
                id="lvl2"
                value={"Intermediate"}
                onClick={handlelvlChange}
              />
              <Form.Check
                type={"radio"}
                label="Advanced"
                name="lvl"
                class="input"
                id="lvl3"
                value={"Advanced"}
                onClick={handlelvlChange}
              />
            </h5>
            <hr></hr>
            <h4>Concepts</h4>
            <h5 style={{ fontWeight: "normal" }}>
              <Form.Check
                type={"radio"}
                label="String"
                name="con"
                class="input"
                id="con1"
                value={"String"}
                onClick={handleconChange}
              />
              <Form.Check
                type={"radio"}
                label="Array"
                name="con"
                class="input"
                id="con2"
                value={"Array"}
                onClick={handleconChange}
              />
              <Form.Check
                type={"radio"}
                label="Loops"
                name="con"
                class="input"
                id="con3"
                value={"Loops"}
                onClick={handleconChange}
              />
              <Form.Check
                type={"radio"}
                label="Opps"
                name="con"
                class="input"
                id="con4"
                value={"Opps"}
                onClick={handleconChange}
              />
              <Form.Check
                type={"radio"}
                label="Collection"
                name="con"
                class="input"
                id="con5"
                value={"Collection"}
                onClick={handleconChange}
              />
            </h5>

            <hr></hr>
          </Col>
          <Col xs={12} md={9} >
            <Col xs={12} md={12}>
             {
              loader? <div style={{ overflowY: "scroll",width:'100%',height:500 }}>
              <CardList cards={filteredCards} id={id} />
              </div>:<div className='mainloader'><div class="loader"></div></div>
             }
              
            </Col>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
}

export default BasicExample;
