import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

import Editor from "@monaco-editor/react";


function CodeEditor() {
  return (
    <AceEditor
      mode="java" // Change this to "java", "c_cpp", or "python" based on the language
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
      value="# Your code here"
      onChange={(value) => console.log(value)}
      width="100%"
      height="500px"
    />
  );
}

export default CodeEditor;
