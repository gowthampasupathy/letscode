import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navi from './nav'
import lan from "../data/langdata";
import Editor from "@monaco-editor/react";
import Accordion from 'react-bootstrap/Accordion';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';
import '../style/prbpage.css'
import Table from 'react-bootstrap/Table';
import { Link, useHref, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';



const Compiler = () => {
  const [input, setInput] = useState(localStorage.getItem("input") || "");
  const [output, setOutput] = useState(localStorage.getItem("output") || "");
  const [languageId, setLanguageId] = useState(localStorage.getItem("language_Id") || "");
  const [userInput, setUserInput] = useState("");
  const [lang, setLang] = useState(localStorage.getItem("lang") || "");
  const [col, setCol] = useState('white');
  const [drf, setDrf] = useState(localStorage.getItem("drf") || "");
  const { problemtitle } = useParams();
  const [prb, setprb] = useState({});
  const[test,settest]=useState([])
  const[submission,setsubmission]=useState([])
  const[sts,setsts]=useState("Rejected")
  const[time,settime]=useState(localStorage.getItem("time") || "")
  const[space,setspace]=useState(localStorage.getItem("space") || "")
  const[key,setkey]=useState(0)
  const navigator = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3001/getprb/" + problemtitle)
      .then((result) => {
        setprb(result.data);
        settest(result.data.testcase);
      }).catch((err) => console.log(err));
      
  }, );

  const handleadd=()=>{
    setsubmission(...submission,[{
      title:problemtitle,
      status:sts,
      code:input,
      language:lang,
      space:space,
      time:time,
    }])
  }

  const handleInput = (value) => {
    setInput(value);
    localStorage.setItem("input", value);
  };
  const handle=()=>{
    setkey(1)
  }
  const handleUserInput = (event) => {
    navigator("#res")
   for(let i=0;i<test.length;i++){
 
    handleSubmit(i)
   }
  };

  const handleLanguage = (event) => {
    event.preventDefault();
    setLanguageId(event.target.value);
    localStorage.setItem("language_Id", event.target.value);
    const selectedLang = lan.find((e) => event.target.value === e.id);
    if (selectedLang) {
      setLang(selectedLang.name);
      localStorage.setItem("lang", selectedLang.name);
      setDrf(selectedLang.def);
      localStorage.setItem("drf", selectedLang.def);
      // window.location.reload();
    }
  };

  const handleSubmit = async (i) => {
    console.log(i);
    console.log(userInput);
    let inputval=document.getElementById(`input${i}`).value;
    let expecoutput=document.getElementById(`expecoutput${i}`).value;
    // setUserInput(inputval)
    let outputText = document.getElementById(`output${i}`);
    outputText.innerHTML = "";
    outputText.innerHTML += "Creating Submission ...\n";
    try {
      const response = await axios.post("https://judge0-ce.p.rapidapi.com/submissions", {
        source_code: input,
        stdin: inputval,
        language_id: languageId,
      }, {
        headers: {
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          "x-rapidapi-key":
            "c5a1c71df8mshb41a4da9e4c3c46p18b2fcjsn7cf2e291a23f", 
          "content-type": "application/json",
          accept: "application/json",
        }
      });

      outputText.innerHTML += "Submission Created ...\n";
      let jsonGetSolution = {
        status: { description: "Queue" },
        stderr: null,
        compile_output: null,
      };
      const jsonResponse = response.data;

      while (jsonGetSolution.status.description !== "Accepted" &&
        jsonGetSolution.stderr == null &&
        jsonGetSolution.compile_output == null) {
        outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`;
        if (jsonResponse.token) {
          const url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;
          const getSolution = await axios.get(url, {
            headers: {
              "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
              "x-rapidapi-key":
                "c5a1c71df8mshb41a4da9e4c3c46p18b2fcjsn7cf2e291a23f", 
              "content-type": "application/json",
            },
          });
          jsonGetSolution = getSolution.data;
        }
      }

      if (jsonGetSolution.stdout) {
        const output = atob(jsonGetSolution.stdout);
        const test = "100";
        const wcolor = "#008000";
        const color = "#FF0000";

        outputText.innerHTML = "";
        outputText.innerHTML += `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
        localStorage.setItem("output", output);      
        if ( output.trim()===expecoutput) {
          setCol(wcolor);
          localStorage.setItem("col", wcolor);
          localStorage.setItem("space", jsonGetSolution.memory);
          localStorage.setItem("time", jsonGetSolution.time);
          setsts("Accepted")
          handleadd();
          console.log(submission)
          
        } else {
          setCol(color);
          localStorage.setItem("col", color);
          
        }

      } else if (jsonGetSolution.stderr) {
        const error = atob(jsonGetSolution.stderr);
        outputText.innerHTML = "";
        outputText.innerHTML += `\n Error :${error}`;
      } else {
        const compilation_error = atob(jsonGetSolution.compile_output);
        outputText.innerHTML = "";
        outputText.innerHTML += `\n Error :${compilation_error}`;
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navi />
      <div style={{ marginTop: 90 }}>
        <Row style={{ paddingLeft: 10 }}>
          <Col xs={12} md={6} style={{ height: 640, overflowY: "hidden" }}>
          <Tabs
    
    activeKey={key}
    onSelect={(k) => setkey(k)}
     
      id="noanim-tab-example"
      className="mb-3"
      style={{backgroundColor:'white ',marginTop:20,}}
      
    >
      <Tab eventKey={0} title={"Description"} style={{height:640,width:'100%',backgroundColor: "white",marginTop:-20,color: col,overflowY: "scroll",color:'black'}} >
      <div>
            {
                <div >
                <h3 style={{ marginTop: 40, paddingBottom: 10 }}>Problem Details</h3>
                <h4>{prb.problemtitle}</h4>
                <p id="description">{prb.description}</p>
                <h5>Sample Input:</h5>
                <p style={{ fontWeight: "bold" }}>{prb.sampleinput}</p>
                <h5>Sample Output</h5>
                <p style={{ fontWeight: "bold" }}>{prb.sampleoutput}</p>
                <h5>Explanation</h5>
                <p>{prb.explanation}</p>
              </div>
            }
    </div>
            
        </Tab>
        <Tab eventKey={1} title={"Submission"} style={{height:640,width:'100%',backgroundColor: "white",marginTop:-20,color: col,overflowY: "scroll",color:'black'}} >
      <div  >
      <div>
      <Table striped bordered hover style={{marginTop:50}}>
      <thead>
        <tr>
          <th>Status</th>
          <th>Language Used</th>
          <th>Time Complexity</th>
          <th>Space Complexity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{sts}</td>
          <td>{lang}</td>
          <td>{time}</td>
          <td>{space}</td>
        </tr>
      </tbody>
    </Table>

    </div>
    </div>
            
        </Tab>
       </Tabs>
          
          </Col>
          <Col xs={12} md={6} style={{ height: 670,overflowY: "scroll"}}>
              <Container>
                <Row style={{marginTop:20}}>
          <Col xs={12} md={6} >
            <div style={{justifyContent:'start',display:'flex',marginRight:50}}> <label htmlFor="tags" className="mr-1">
              <b className="heading"><h3>Language:</h3></b>
            </label>
            <select
              // value={lang}
              onChange={handleLanguage}
              id="tags"
              className="form-select  mb-2 language"
              style={{backgroundColor:'#272822',borderColor:'#272822',width:200,marginRight:20,color:'white'}}
             
            >
              <option value="50">C</option>
              <option value="54">C++</option>
              <option value="62">Java</option>
              <option value="71">Python </option>
              <option value="63">Javascript</option>
              <option value="51">C#</option>
              <option value="73">Rust </option>
              <option value="72">Ruby </option>
              <option value="83">Swift </option>
              <option value="78">Kotlin </option>
            </select></div></Col>
          <Col xs={12} md={3}><div style={{display:'flex',}}>
          <button
              type="submit"
              
              className="btn  ml-2 mr-2 "
              onClick={handleUserInput}
              style={{backgroundColor:'#1e1e1e',borderColor:'#1e1e1e',color:'white' ,width:150}}
            >
              <HashLink to={"#res"} style={{textDecoration:'none',color:'white'}}>Run</HashLink>
            </button></div></Col>
            <Col xs={12} md={3}><div style={{display:'flex',}}>
          <button
              type="submit"
              className="btn  ml-2 mr-2 "
              onClick={handle}
              style={{backgroundColor:'#1e1e1e',borderColor:'#1e1e1e',color:'white' ,width:150}}
            >
              Submit
            </button></div></Col>
                </Row>
              </Container>
              <Container>
              <h5 style={{display:'flex',justifyContent:'start'}}>Code Here</h5>
              <Editor
       width="100%"
       height="500px"
        language={lang}
        onChange={handleInput}
        theme='vs-dark'
        value={drf}
        
      />
    </Container>
    {/* <h5  style={{display:'flex',justifyContent:'start',marginTop:30}} >Custom Input</h5>
    <textarea id="input"  
                  rows={7} onChange={handleUserInput} placeholder="Enter The Input Here" style={{backgroundColor: "#1e1e1e",
                        color: "white", overflowY:'hidden',resize:'none',width:"100%"}}></textarea> */}
    <Container style={{marginTop:30}}><h3>Test Case</h3></Container>
  <div id="res" >
  <Container>
    <Tabs
     defaultActiveKey={0}
     transition={false}
     
      className="mb-3"
      style={{backgroundColor:'#28282B '}}
      
    >
    {
        test.map((d,i)=>{
            return <Tab key={i} eventKey={i} title={`Test Case ${i+1}`} style={{height:300,width:'100%',backgroundColor: "#1e1e1e",marginTop:-20,color: col,overflowY: "scroll",}} >
            <p style={{marginTop:20,padding:20}} >
              <h5>Input</h5>
              {/* <p > {d.input}</p> */}
              <textarea id={`input${i}`} 
                  rows={2} value={d.input} style={{backgroundColor: "#1e1e1e",
                        color: col, overflowY:'hidden',resize:'none',width:"100%"}}></textarea>
              <h5>Expected Output</h5>
              <p  style={{color:col}}>
              <Container>
              <textarea id={`expecoutput${i}`} 
                  rows={2} value={d.output} style={{backgroundColor: "#1e1e1e",
                  color: col,overflowY: "hidden" ,resize:'none',width:"100%"}} ></textarea>
              </Container>
                     
                    </p>
                    <h5  style={{display:'flex',justifyContent:'start',marginTop:30}} >Your Output</h5>
              <Container>
              <textarea id={`output${i}`} 
                  rows={5} placeholder="Your Output Will Be Displayed Here" style={{backgroundColor: "#1e1e1e",
                  color: col,overflowY: "hidden" ,resize:'none',width:"100%"}} ></textarea>
              </Container>
            </p>
        </Tab>
        })
    }
          </Tabs>
         </Container>  
    </div>                  
      {/* <h5  style={{display:'flex',justifyContent:'start',marginTop:30}} >Your Output</h5>
              <Container>
              <textarea id="output"   
                  rows={11} placeholder="Your Output Will Be Displayed Here" style={{backgroundColor: "#1e1e1e",
                        color: "white",overflowY: "hidden" ,resize:'none',width:"100%"}} ></textarea>
              </Container> */}
              
            </Col> 
        </Row>
      </div>
    </div>
  );
};


export default Compiler;
