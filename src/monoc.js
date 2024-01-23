import React, { useState } from "react";

import Editor from "@monaco-editor/react";

const CodeEditorWindow = () => {
  
  return (
    <div >
      <Editor
        height="85vh"
        width={`100%`}
        language={ "python"}
        
        theme='vs-dark'
        defaultValue="// some comment"
      />
    </div>
  );
};
export default CodeEditorWindow;