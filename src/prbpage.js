import Container from "react-bootstrap/Container";
import "./main.css";
import "./prbpage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { Component, useState } from "react";
import Navi from './nav'
import lan from "./langdata";
import Editor from "@monaco-editor/react";
import Accordion from 'react-bootstrap/Accordion';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from 'axios'


const useHook =()=>{
  const {problemtitle}=useParams()
  const [prb,setprb]=useState([])
  useEffect(()=>{
    axios.get("https://lets-code-api.onrender.com/getprb/"+problemtitle)
    .then((result)=>setprb(result.data))
    .catch((err)=>console.log(err))
  })
  return prb;
}
 
export default class Compiler extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      input: localStorage.getItem("input") || ``,
      output: localStorage.getItem("output") || ``,
      language_id: localStorage.getItem("language_Id") || ``,
      user_input: ``,
      lang:localStorage.getItem("lang") || ``,
      col:``,
      drf:localStorage.getItem("drf") || ``,
    };
  }
  input = (value) => {
    this.setState({ input: value });
    localStorage.setItem("input", value);
    console.log(this.state)
  };

  
  userInput = (event) => {
    event.preventDefault();
    this.setState({ user_input: event.target.value });
  };

  language = (event) => {
    event.preventDefault();
    this.setState({ language_id: event.target.value });
    localStorage.setItem("language_Id", event.target.value);
    const selectedLang = lan.find((e) => event.target.value === e.id);
    if (selectedLang) {
      this.setState({ lang: selectedLang.name });
      localStorage.setItem("lang",selectedLang.name);
      this.setState({ drf: selectedLang.def });
    localStorage.setItem("drf", selectedLang.def);
    window.location.reload(false);
      
    }
  };

  submit = async (e) => {
    e.preventDefault();
    let outputText = document.getElementById("output");
    outputText.innerHTML = "";
    outputText.innerHTML += "Creating Submission ...\n";
    const response = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions",
      {
        method: "POST",
        headers: {
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          "x-rapidapi-key":
            "8d128b0bf9msh5f96c0d59679f5fp182c7ejsn64644077f373", 
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          source_code: this.state.input,
          stdin: this.state.user_input,
          language_id: this.state.language_id,
        }),
      }
    );

    outputText.innerHTML += "Submission Created ...\n";
    const jsonResponse = await response.json();
    let jsonGetSolution = {
      status: { description: "Queue" },
      stderr: null,
      compile_output: null,
    };
    while (
      jsonGetSolution.status.description !== "Accepted" &&
      jsonGetSolution.stderr == null &&
      jsonGetSolution.compile_output == null
    ) {
      outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`;
      if (jsonResponse.token) {
        let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;
        const getSolution = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key":
              "8d128b0bf9msh5f96c0d59679f5fp182c7ejsn64644077f373", 
            "content-type": "application/json",
          },
        });
        jsonGetSolution = await getSolution.json();
      }
    }

    if (jsonGetSolution.stdout) {
      const output = atob(jsonGetSolution.stdout);
      const test ="100"
      const wcolor="#008000"
      const color="#FF0000"
      
      outputText.innerHTML = "";
      outputText.innerHTML += `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
      
      this.setState({ output: output  })
      localStorage.setItem("output",output);
      if(test.trim()===output.trim()){
        this.setState({ col: wcolor  })
        localStorage.setItem("col",wcolor);
        alert(this.state.col)
       }else{
        this.setState({ col: color  })
        localStorage.setItem("col",color);
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
    
  };

  render() {
    
    return (
      <div>
        <Navi/>
        <div style={{marginTop:90}}>
          <Row style={{paddingLeft:10}}>
            <Col xs={12} md={6} style={{ height: 640, overflowY: "scroll" }}>

             <HookData/>
            </Col>
            <Col xs={12} md={6} style={{ height: 640,overflowY: "scroll"}}>
              <Container>
                <Row style={{marginTop:20}}>
          <Col xs={12} md={6} >
            <div style={{justifyContent:'start',display:'flex',marginRight:50}}> <label htmlFor="tags" className="mr-1">
              <b className="heading"><h3>Language:</h3></b>
            </label>
            <select
              value={this.state.language_id}
              onChange={this.language}
              id="tags"
              className="form-select  mb-2 language"
              style={{backgroundColor:'#272822',borderColor:'#272822',width:200,marginRight:20,color:'white'}}
              defaultValue={this.state.language_id}
            >
              <option value="0"  >Select language</option>
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
              onClick={this.submit}
              style={{backgroundColor:'#1e1e1e',borderColor:'#1e1e1e',color:'white' ,width:150}}
            >
              <i className="fas fa-cog fa-fw"></i> Run
            </button></div></Col>
            <Col xs={12} md={3}><div style={{display:'flex',}}>
          <button
              type="submit"
              className="btn  ml-2 mr-2 "
              onClick={this.submit}
              style={{backgroundColor:'#1e1e1e',borderColor:'#1e1e1e',color:'white' ,width:150}}
            >
              <i className="fas fa-cog fa-fw"></i> Submit
            </button></div></Col>
                </Row>
              </Container>
              <Container>
              <h5 style={{display:'flex',justifyContent:'start'}}>Code Here</h5>
              <Editor
       width="100%"
       height="500px"
        language={ this.state.lang}
        onChange={this.input}
        theme='vs-dark'
        defaultValue={this.state.drf}
      />
    </Container>
    <h5  style={{display:'flex',justifyContent:'start',marginTop:30}} >Custom Input</h5>
    <textarea id="input"  
                  rows={7} onChange={this.userInput} placeholder="Enter The Input Here" style={{backgroundColor: "#1e1e1e",
                        color: "white", overflowY:'hidden',resize:'none',width:"100%"}}></textarea>
    <Container style={{marginTop:30}}><h3>Test Case</h3></Container>
    <Container>
    <Tabs
     defaultActiveKey="home"
     transition={false}
      id="noanim-tab-example"
      className="mb-3"
      style={{backgroundColor:'#28282B '}}
      
    >
    <Tab eventKey="home" title="Test Case 1" style={{height:200,width:'100%',backgroundColor: "#1e1e1e",marginTop:-20,color:'white',overflowY: "scroll",}} >
      <p style={{marginTop:20,padding:20}} >
        <h5>Input</h5>
        <p style={{color:this.state.col}}> He is a very very good boy, isn't he?</p>
        <h5>Expected Output</h5>
        <p style={{color:this.state.col}}>
                {" "}
                10<br></br>
                He<br></br>
                is<br></br>a<br></br>
                very<br></br>
                very<br></br>
                good<br></br>
                boy<br></br>
                isn<br></br>t<br></br>
                he
              </p>
      </p>
  </Tab>
     <Tab eventKey="profile" title="Test Case 2" style={{height:200,width:'100%',backgroundColor: "#1e1e1e",marginTop:-20,color:'white',overflowY: "scroll"}}>
     <p style={{marginTop:20,padding:20}} >
        <h5>Input</h5>
        <p style={{color:this.state.col}}> He is a very very good boy, isn't he?</p>
        <h5>Expected Output</h5>
        <p style={{color:this.state.col}}>
                {" "}
                10<br></br>
                He<br></br>
                is<br></br>a<br></br>
                very<br></br>
                very<br></br>
                good<br></br>
                boy<br></br>
                isn<br></br>t<br></br>
                he
              </p>
      </p>
        </Tab>
        <Tab eventKey="contact" title="Test Case 3"style={{height:200,width:'100%',backgroundColor: "#1e1e1e",marginTop:-20,color:'white',overflowY: "scroll"}} >
        <p style={{marginTop:20,padding:20}} >
        <h5>Input</h5>
        <p style={{color:this.state.col}}> He is a very very good boy, isn't he?</p>
        <h5>Expected Output</h5>
        <p style={{color:this.state.col}}>
                {" "}
                10<br></br>
                He<br></br>
                is<br></br>a<br></br>
                very<br></br>
                very<br></br>
                good<br></br>
                boy<br></br>
                isn<br></br>t<br></br>
                he
              </p>
      </p>
          </Tab>
          </Tabs>
         </Container>                    
      <h5  style={{display:'flex',justifyContent:'start',marginTop:30}} >Your Output</h5>
              <Container>
              <textarea id="output"   
                  rows={11} placeholder="Your Output Will Be Displayed Here" style={{backgroundColor: "#1e1e1e",
                        color: "white",overflowY: "hidden" ,resize:'none',width:"100%"}} ></textarea>
              </Container>
              
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}


const HookData=()=>{
  const pr=useHook();
  return (
    <>
    <div>
    {
      pr.map((d)=>{
        return <div>
          <h3 style={{ marginTop: 40, paddingBottom: 10 }}>
        Problem Details
      </h3>
      <h4>{d.problemtitle}</h4>
      <p id="description">
       {d.description}
      </p>
      <h5>Sample Input:</h5>
      <p style={{ fontWeight: "bold" }}>
        {d.sampleinput}
      </p>
      <h5>Sample Output</h5>
      <p style={{ fontWeight: "bold" }}>
      {d.sampleoutput}
      </p>
      <h5>Explanation</h5>
      <p>
       {d.explanation}
      </p>
        </div>
      })
        }
    </div>
    </>
  )
}
