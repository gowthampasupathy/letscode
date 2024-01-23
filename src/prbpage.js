import Container from "react-bootstrap/Container";
import "./main.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { Component } from "react";
import Navi from './nav'
import lan from "./langdata";
import Editor from "@monaco-editor/react";
import Accordion from 'react-bootstrap/Accordion';


export default class Compiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: localStorage.getItem("input") || ``,
      output: localStorage.getItem("output") || ``,
      language_id: localStorage.getItem("language_Id") || 50,
      user_input: ``,
      lang:localStorage.getItem("lang") || `c_cpp`,
      col:``,
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
      alert("state"+this.state.output)
      alert("var"+output)
      if(test.trim()===output.trim){
        alert(output)
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
              <h3 style={{ marginTop: 40, paddingBottom: 10 }}>
                Problem Details{" "}
              </h3>
              <h4>Java String Tokens</h4>
              <p id="description">
                Given a string, , matching the regular expression [A-Za-z
                !,?._'@]+, split the string into tokens. We define a token to be
                one or more consecutive English alphabetic letters. Then, print
                the number of tokens, followed by each token on a new line.
              </p>
              <h5 id="samin">Input Format :</h5>
              <p>
                A single string, . Constraints is composed of any of the
                following: English alphabetic letters, blank spaces, exclamation
                points (!), commas (,), question marks (?), periods (.),
                underscores (_), apostrophes ('), and at symbols (@).
              </p>
              <h5 id="samout">Output Format</h5>
              <p>
                On the first line, print an integer, , denoting the number of
                tokens in string (they do not need to be unique). Next, print
                each of the tokens on a new line in the same order as they
                appear in input string .
              </p>
              <h5>Sample Input:</h5>
              <p style={{ fontWeight: "bold" }}>
                He is a very very good boy, isn't he?
              </p>
              <h5>Sample Output</h5>
              <p style={{ fontWeight: "bold" }}>
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
              <h5>Explanation</h5>
              <p>
                We consider a token to be a contiguous segment of alphabetic
                characters. There are a total of such tokens in string , and
                each token is printed in the same order in which it appears in
                string .
              </p>
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
              style={{backgroundColor:'#272822',borderColor:'#272822',width:200,marginRight:50,color:'white'}}
              defaultValue={this.state.language_id}
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
          <Col xs={12} md={6}><div style={{display:'flex',marginLeft:150}}>
          <button
              type="submit"
              className="btn  ml-2 mr-2 "
              onClick={this.submit}
              style={{backgroundColor:'#272822',borderColor:'#272822',color:'white' ,width:150}}
            >
              <i className="fas fa-cog fa-fw"></i> Run
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
        defaultValue="// some comment"
      />
       <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
      
              
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
