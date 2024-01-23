import React, { Component } from "react";

// https://rapidapi.com/judge0-official/api/judge0-ce/
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";



import Navi from './nav'
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
      <>
      <div className="main">
    <Navi/>
     <div style={{marginTop:50}}>
        <div className="row container-fluid">
          <div className="col-6 ml-4 ">
            <label htmlFor="solution ">
              <span className="badge badge-info heading mt-2 ">
                <i className="fas fa-code fa-fw fa-lg"></i> Code Here
              </span>
            </label> <AceEditor
      mode="rust" // Change this to "java", "c_cpp", or "python" based on the language
      theme="monokai"
      name="code-editor"
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        fontSize: 14,
        showPrintMargin: true,
        showGutter: true,
        highlightActiveLine: true,
      }}
      onChange={this.input}
      width="100%"
      height="500px"
    />
            <button
              type="submit"
              className="btn  ml-2 mr-2 "
              onClick={this.submit}
              style={{backgroundColor:'#36454F',borderColor:'#36454F',color:'white'}}
            >
              <i className="fas fa-cog fa-fw"></i> Run
            </button>

            <label htmlFor="tags" className="mr-1">
              <b className="heading">Language:</b>
            </label>
            <select
              value={this.state.language_id}
              onChange={this.language}
              id="tags"
              className="form-select form-inline mb-2 language"
              style={{borderColor: "#36454F",
                        color: "black",}}
            >
              <option value="54">C++</option>
              <option value="50">C</option>
              <option value="62">Java</option>
              <option value="71">Python </option>
              <option value="63">Javascript</option>
              <option value="51">C#</option>
              <option value="73">Rust </option>
              <option value="72">Ruby </option>
              <option value="83">Swift </option>
              <option value="78">Kotlin </option>
            </select>
          </div>
          <div className="col-5">
          
            <div>
              <span className="badge badge-info heading my-2 ">
                <i className="fas fa-exclamation fa-fw fa-md"></i> Output
              </span>
              
              <textarea id="output"   cols={80}
                  rows={5} placeholder="Your Output Will Be Displayed Here" style={{backgroundColor: "#36454F",
                        color: "white",}} ></textarea>
            </div>
          </div>
          <div className="mt-2 ml-5">
          <span className="badge badge-primary heading my-2 ">
            <i className="fas fa-user fa-fw fa-md"></i> User Input
          </span>
          <br />
          <textarea id="input"   cols={80}
                  rows={5} onChange={this.userInput} placeholder="Enter The Input Here" style={{backgroundColor: "#36454F",
                        color: "white",}}></textarea>
        </div>
        </div>
        </div>
        </div>
        
      </>
    );
  }
}