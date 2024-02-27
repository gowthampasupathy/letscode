import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// https://rapidapi.com/judge0-official/api/judge0-ce/
import lan from "./langdata";

import Editor from "@monaco-editor/react";

import Navi from './nav'
export default class Edito extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: localStorage.getItem("input") || ``,
      output: ``,
      language_id: localStorage.getItem("language_Id") || 50,
      user_input: ``,
      lang:localStorage.getItem("lang") || `c_cpp`,
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
    try{
    this.setState({ language_id: event.target.value });
    localStorage.setItem("language_Id", event.target.value);
    const selectedLang = lan.find((e) => event.target.value === e.id);
    if (selectedLang) {
      this.setState({ lang: selectedLang.name });
      localStorage.setItem("lang",selectedLang.name);
      console.log(this.state)
    }}catch(error){
      console.error("This is error",error);
    }
  };

  submit = async (e) => {
    e.preventDefault();
    let outputText = document.getElementById("output");
    outputText.innerHTML = "";
    outputText.innerHTML += "Creating Submission ...\n";
    
    try {
      const response = await fetch(
        "https://judge0-ce.p.rapidapi.com/submissions",
        {
          method: "POST",
          headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": "5f305912d1mshb83f78a5d5fc7b5p1ac770jsnb96fd5320a81", 
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            source_code: this.state.input,
            stdin: this.state.user_input,
            language_id: this.state.language_id,
          }),
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      outputText.innerHTML += "Submission Created ...\n";
      const jsonResponse = await response.json();
      let jsonGetSolution = {
        status: { description: "Queue" },
        stderr: null,
        compile_output: null,
      };
  
      const checkSubmissionStatus = async () => {
        let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;
        const getSolution = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": "5f305912d1mshb83f78a5d5fc7b5p1ac770jsnb96fd5320a81", 
          },
        });
        console.log("JSON Response:", jsonResponse);
  
        jsonGetSolution = await getSolution.json();
  
        // Check if submission is still in the queue, stderr is null, and compile_output is null
        return (
          jsonGetSolution.status.description !== "Accepted" &&
          jsonGetSolution.stderr == null &&
          jsonGetSolution.compile_output == null
        );
      };
      
console.log("JSON Get Solution:", jsonGetSolution);
      // Poll for submission status with a delay between requests
      while (await checkSubmissionStatus()) {
        outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`;
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for 1 second
      }
  
      if (jsonGetSolution.stdout) {
        const output = atob(jsonGetSolution.stdout);
        outputText.innerHTML = "";
        outputText.innerHTML += `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
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
      console.error("Error submitting code:", error);
      outputText.innerHTML = "An error occurred during submission. Please try again.";
    }
  };
  

  render() {
    return (
      <>
      <div className="main">
    <Navi/>
    <div style={{marginTop:100}}>
    <Card className="text-center">
      <Card.Header>
        <Row>
          <Col xs={12} md={8}><h1 style={{justifyContent:'start',display:'flex',fontWeight:'bolder',}}>Playground </h1> </Col>
          <Col xs={12} md={2}><div style={{justifyContent:'start',display:'flex',marginRight:50}}> <label htmlFor="tags" className="mr-1">
              <b className="heading"><h3>Language:</h3></b>
            </label>
            <select
              value={this.state.language_id}
              onChange={this.language}
              id="tags"
              className="form-select  mb-2 language"
              style={{backgroundColor:'#272822',borderColor:'#272822',width:100,marginRight:50,color:'white'}}
              
            >
              <option value="0"  >Select language</option>
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
              onClick={this.submit}
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
        language={ this.state.lang}
        onChange={this.input}
        theme='vs-dark'
        defaultValue="// some comment"
      />
      </Col>
        <Col xs={12} md={6}>
          <Row><h5 style={{display:'flex',justifyContent:'start'}}>Custom Input</h5>
            <Col xs={12} md={12}>
          <textarea id="input"   
                  rows={7} onChange={this.userInput} placeholder="Enter The Input Here" style={{backgroundColor: "#1e1e1e",
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
}
