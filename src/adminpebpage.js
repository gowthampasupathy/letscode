import Container from "react-bootstrap/Container";
import "./main.css";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { Component } from "react";
import logo from "./main.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Navi from './aminnav'
import Button from "react-bootstrap/Button";

export default class Compiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: localStorage.getItem("input") || ``,
      output: ``,
      language_id: localStorage.getItem("language_Id") || 2,
      user_input: ``,
    };
  }
  input = (event) => {
    event.preventDefault();
    this.setState({ input: event.target.value });
    localStorage.setItem("input", event.target.value);
  };

  userInput = (event) => {
    event.preventDefault();
    this.setState({ user_input: event.target.value });
  };

  language = (event) => {
    event.preventDefault();
    this.setState({ language_id: event.target.value });
    localStorage.setItem("language_Id", event.target.value);
  };

  submit = async (e) => {
    e.preventDefault();
    let outputText = document.getElementById("out");
    outputText.innerHTML = "";
    outputText.innerHTML += "Creating Submission ...\n";
    const response = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions",
      {
        method: "POST",
        headers: {
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          "x-rapidapi-key":
            "c5a1c71df8mshb41a4da9e4c3c46p18b2fcjsn7cf2e291a23f",
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
              "c5a1c71df8mshb41a4da9e4c3c46p18b2fcjsn7cf2e291a23f",
            "content-type": "application/json",
          },
        });
        jsonGetSolution = await getSolution.json();
      }
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
  };
  render() {
    return (
      <div>
        <Navi/>
        <Container style={{marginTop:90}}>
        <Row >
          <Col md={3}>
            {" "}
            <Button
              style={{ backgroundColor: "#36454F", borderColor: "#36454F" }}
              value={"String"}
              
            >
             Update Problem Details
            </Button>
            
          </Col>
          <Col md={3}>
            {" "}
            <Button
              style={{ backgroundColor: "#36454F", borderColor: "#36454F", }}
              value={"String"}
              
            >
              Update Problem Testcase
            </Button>
            
          </Col>
        </Row>
          <Row>
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
            <Col xs={12} md={6} style={{ height: 640, overflowY: "scroll" }}>
              <Container>
                <Row style={{marginTop:20}}>
                  <Col xs={12} md={6}>
                    <label htmlFor="tags" className="mr-1">
                      <h5>Language</h5>
                    </label>
                    <select
                      id="tags"
                      class="form-select"
                      value={this.state.language_id}
                      onChange={this.language}
                      style={{
                        borderColor: "#36454F",
                        color: "black",
                      }}
                    >
                      <option value="54">C++</option>
                      <option value="50">C</option>
                      <option value="62">Java</option>
                      <option value="71">Python</option>
                    </select>
                  </Col>
                  <Col xs={12} md={6}>
                    <button
                      type="submit"
                      className="btn  ml-2 mr-2 "
                      onClick={this.submit}
                      style={{
                        backgroundColor: "#36454F",
                        borderColor: "#36454F",
                        color: "white",
                        marginTop:30
                      
                      }}
                    >
                      <i className="fas fa-cog fa-fw"></i> Run
                    </button>
                  </Col>
                </Row>
              </Container>
              <Container>
                <h3>Code Here </h3>
                <textarea
                  rows={15}
                  cols={80}
                  style={{ backgroundColor: "#36454F", color: "white",marginTop:10 }}
                  required
                  name="solution"
                  id="source"
                  onChange={this.input}
                  className=" source"
                  value={this.state.input}
                ></textarea>
              </Container>
              <h3>Output</h3>
              <Container>
                <textarea
                  id="out"
                  cols={80}
                  rows={5}
                  style={{ backgroundColor: "#36454F", color: "white" }}
                ></textarea>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
