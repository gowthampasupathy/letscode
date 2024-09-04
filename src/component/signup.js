import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import pic from "../asset/mainlogo.png";
import "../style/login.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const [name,setname]=useState()
  const [email,setemail]=useState()
  const [password,setpassword]=useState()
  const [contact,setcontact]=useState()
  const [college,setcollege]=useState()
  const [country,setcountry]=useState()
  const navigate=useNavigate();
  const[problem,setproblem]=useState([])
  const[track,settrack]=useState([])
  const total=0;
  const easy=0;
  const medium=0;
  const hard=0;
  const[emailerror,setemailerror]=useState("");
  const[passworderror,setpassworderror]=useState("");
  const[contacterror,setcontacterror]=useState("");
  const[val,setval]=useState(0)
  const [validate,setvalidate]=useState(false)
  const[opacity,setopacity]=useState("")
  const[cursor,setcursor]=useState("pointer")
  const[btnval,setbtnval]=useState("SignUp")
  const apiUrl = process.env.REACT_APP_API_URL;
 
 
  useEffect(()=>{
    axios.get(`${apiUrl}/getprb`)
    .then((pr)=>setproblem(pr.data))
    .catch((er)=>console.log(er))
  },[])
  useEffect(()=>{
    axios.get(`${apiUrl}/track`)
    .then((result)=>settrack(result.data))
    .catch((err)=>console.log(err))
  },[])
  const handlesubmit = async (e) => {
    e.preventDefault();
    await checkemail(email)
    await handleerror(email, password, contact); 
    if (validate) {
      change()
    }
  }
  console.log(val)

  const handleerror=(email,password,contact)=>{
    const regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!regex.test(email)){
      setemailerror("Please Enter A Valid Email Address")
      setval(1)
      setvalidate(false)
    }
    else if(password.length<8){
      setpassworderror("Password Must Contain Minimum 8 Characters")
      setval(1)
      setvalidate(false)
    }else if(contact.length<10){
      setcontacterror("Please Enter The Valid Contact Number")
      setval(1)
      setvalidate(false)
    }else{
      setemailerror("")
      setcontacterror("")
      setpassworderror("")
      setval(0)
      setvalidate(true)
    }
  }
  //#
  const change=()=>{
    setcursor("not-allowed")
    setopacity(0.6)
    setbtnval("Signing Up Please Wait")
    Submit()
  }
  const checkemail=(email)=>{
    axios.post(`${apiUrl}/getemail`,{email})
    .then((res)=>{
      if(res.data==="yes"){
        setemailerror("Email Already Exist")
      }else{
        console.log(res.data)
        setemailerror("")
      }
    })
    .catch((er)=>console.log(er))
  }
  const Submit =()=>{
    const url1=axios.post(`${apiUrl}/register`,{name,email,password},{withCredentials:true})
    const url2=axios.post(`${apiUrl}/user`,{name,email,country,contact,college,total,easy,medium,hard,problem,track})
    //const url2=axios.post("http://localhost:3001/type",{email,track},{withCredentials:true})
    Promise.all([url1,url2])
    .then((res)=>{
      navigate("/login");
      console.log(res.data)
    })
    .catch((er)=>console.log(er))




   
  }
  
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={4} style={{ margin: "auto" , }}>
            <Card
              style={{ marginTop: 60, backgroundColor: "black",width:"auto",height:"auto"}}

              className="shadow-lg"
            >
              <Card.Body>
                <Card.Text>
                <div style={{marginTop:20}}>
                <h3 style={{
                      textAlign: "center",
                      color: "white",
                      
                      width:"100%"
                    }}>Welcome To Let's Code</h3>
                  
                  <h5
                    style={{
                      textAlign: "center",
                      color: "white",
                      marginTop: 30,
                      width:"100%"
                    }}
                  >
                    Create Account To Explopre The Platform
                  </h5>
                  <Container style={{ marginTop: 10 }}>
                    <Form style={{ padding: 30 }}  >
                      <Form.Group className="mb-4" controlId="TextInput" >
                        <Form.Control
                          type="text"
                          className="mt-1"
                          placeholder="Enter Username"
                          style={{ width: "100%" }}
                          onChange={(e)=>setname(e.target.value)}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control
                          type="email"
                          className="mt-1"
                          placeholder="Enter email"
                          style={{ width: "100%" }}
                          onChange={(e)=>setemail(e.target.value)}
                          required
                        />
                         <p style={{color:"red",}}>{emailerror}</p>
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="TextInput">
                        <Form.Control
                          type="text"
                          className="mt-1"
                          placeholder="Enter College Name"
                          style={{ width: "100%" }}
                          onChange={(e)=>setcollege(e.target.value)}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="TextInput">
                        <Form.Control
                          type="text"
                          className="mt-1"
                          placeholder="Enter Contact"
                          style={{ width: "100%" }}
                          onChange={(e)=>setcontact(e.target.value)}
                          required
                        />
                         <p style={{color:"red",}}>{contacterror}</p>
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="TextInput">
                        <Form.Control
                          type="text"
                          className="mt-1"
                          placeholder="Enter Country"
                          style={{ width: "100%" }}
                          onChange={(e)=>setcountry(e.target.value)}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-4"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          className="mt-1"
                          style={{ width: "100%" }}
                          onChange={(e)=>setpassword(e.target.value)}
                          required
                        />
                         <p style={{color:"red",}}>{passworderror}</p>
                      </Form.Group>
                      {/* <Form.Group
                        className="mb-4"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          type="password"
                          placeholder="ConfirmPassword"
                          className="mt-1"
                          style={{ width: "100%" }}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group> */}
                      <Button
                        style={{
                          width: "100%",
                          marginTop: 20,
                          backgroundColor: "orange",
                          borderColor: "orange",
                          cursor:cursor,
                          opacity:opacity
                        }}
                        type="submit"
                        //href="/Exp"
                        onClick={handlesubmit}
                        
                      >
                        {btnval}
                      </Button>
                    </Form>
                    <p
                      style={{ color: "white", marginLeft: 40, marginTop: -25,width:"100%" }}
                    >
                      Already Have An Account ?
                      <a href="/" style={{ color: "white" }}>
                        Login
                      </a>
                    </p>
                  </Container>
                </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
