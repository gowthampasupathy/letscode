import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// https://rapidapi.com/judge0-official/api/judge0-ce/
import lan from "../data/langdata";
import { useState } from "react";
import axios from "axios";
import Editor from "@monaco-editor/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navi from './nav'
const Compiler = () => {
  const [input, setInput] = useState(localStorage.getItem("input") || "");
  const [output, setOutput] = useState(localStorage.getItem("output") || "");
  const [languageId, setLanguageId] = useState(localStorage.getItem("language_Id") || "");
  const [userInput, setUserInput] = useState(localStorage.getItem("user_Input") || "");
  const [lang, setLang] = useState(localStorage.getItem("lang") || "");
  const [col, setCol] = useState('white');
  const [drf, setDrf] = useState(localStorage.getItem("drf") || "");
  const [prb, setprb] = useState({});
  const[test,settest]=useState([])
  const[submission,setsubmission]=useState([])
  const[sts,setsts]=useState("Rejected")
  const[time,settime]=useState(localStorage.getItem("time") || "")
  const[space,setspace]=useState(localStorage.getItem("space") || "")
  const[key,setkey]=useState(0)
  const navigator = useNavigate();
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


  const handleInput = (value) => {
    setInput(value);
    localStorage.setItem("input", value);
  };
  const handle=()=>{
    setkey(1)
  }
  const handleUserInput = (event) => {
    setUserInput(event.target.value);
    localStorage.setItem("user_Input", event.target.value);
   
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
       //window.location.reload();
    }
  };

  const handleSubmit = async (i) => {
    console.log(i);
    console.log(userInput);
    let inputval=document.getElementById(`input`).value;
    // setUserInput(inputval)
    let outputText = document.getElementById(`output`);
    outputText.innerHTML = "";
    outputText.innerHTML += "Creating Submission ...\n";
    try {
      const response = await axios.post("http://172.16.100.31:8899/submissions", {
        source_code: input,
        stdin: userInput,
        language_id: languageId,
      }, {
        headers: {
          // "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          // "x-rapidapi-key":
          //   "c5a1c71df8mshb41a4da9e4c3c46p18b2fcjsn7cf2e291a23f", 
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
          const url = `http://172.16.100.31:8899/submissions/${jsonResponse.token}?base64_encoded=true`;
          const getSolution = await axios.get(url, {
            headers: {
              // "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
              // "x-rapidapi-key":
              //   "c5a1c71df8mshb41a4da9e4c3c46p18b2fcjsn7cf2e291a23f", 
              "content-type": "application/json",
            },
          });
          jsonGetSolution = getSolution.data;
        }
      }

      if (jsonGetSolution.stdout) {
        const output = atob(jsonGetSolution.stdout);

        outputText.innerHTML = "";
        outputText.innerHTML += `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
        localStorage.setItem("output", output);      
        

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
      <>
      <div className="main">
      <Navi id={id} />
    <div style={{marginTop:100}}>
    <Card className="text-center">
      <Card.Header>
        <Row>
          <Col xs={12} md={8}><h1 style={{justifyContent:'start',display:'flex',fontWeight:'bolder',}}>Playground </h1> </Col>
          <Col xs={12} md={2}><div style={{justifyContent:'start',display:'flex',marginRight:50}}> <label htmlFor="tags" className="mr-1">
              <b className="heading"><h3>Language:</h3></b>
            </label>
            <select
              
              onChange={handleLanguage}
              id="tags"
              className="form-select  mb-2 language"
              style={{backgroundColor:'#272822',borderColor:'#272822',width:100,marginRight:50,color:'white'}}
              
            >
              <option value="50"  >C</option>
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
          <Col xs={12} md={2}><div style={{justifyContent:'start',display:'flex',marginRight:50}}>
          <button
              type="submit"
              className="btn  ml-2 mr-2 "
              onClick={handleSubmit}
              style={{backgroundColor:'#1e1e1e',borderColor:'#1e1e1e',color:'white' ,width:130}}
            >
              <i className="fas fa-cog fa-fw"></i> Run
            </button></div></Col>
         
        </Row>
       </Card.Header>
      <Card.Body>
       <Row>
        <Col xs={12} md={6}>
          <h5 style={{display:'flex',justifyContent:'start'}}>Code Here</h5>
      <Editor
       width="100%"
       height="500px"
        language={ lang}
        onChange={handleInput}
        theme='vs-dark'
        value={drf}
      />
      </Col>
        <Col xs={12} md={6}>
          <Row><h5 style={{display:'flex',justifyContent:'start'}}>Custom Input</h5>
            <Col xs={12} md={12}>
          <textarea id="input"   
                  rows={7} onChange={handleUserInput} placeholder="Enter The Input Here" style={{backgroundColor: "#1e1e1e",
                        color: "white", overflowY:'hidden',resize:'none',width:"100%"}}></textarea>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
            <h5  style={{display:'flex',justifyContent:'start'}} >Your Output</h5>
              <textarea id="output"  
                  rows={11} placeholder="Your Output Will Be Displayed Here" style={{backgroundColor: "#1e1e1e",
                        color: "white",overflowY: "hidden" ,resize:'none',width:"100%"}} ></textarea>
            </Col>
          </Row>
        </Col>
       </Row>
      </Card.Body>
    </Card>

    </div>
      
        </div>
      </>
    );
  
}

export default Compiler;
