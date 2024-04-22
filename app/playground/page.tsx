"use client";

import CodeEditor from "@/components/codeEditor";
import FileSelector from "@/components/fileStructure";
import XtermTerminal from "@/components/terminal";
import React, { useState } from "react";

const PlayGround = () => {
  const [files, setFiles] = useState([
    { name: "index.html", language: "html", content: "" },
    { name: "style.css", language: "css", content: "" },
    { name: "script.js", language: "javascript", content: "" },
  ]);

  const [selectedFile, setSelectedFile] = useState(files[0]);

  const handleFileClick = (file: (typeof files)[0]) => {
    setSelectedFile(file);
  };

  return (
    <div>
      <FileSelector
        files={files}
        selectedFile={selectedFile}
        onFileClick={handleFileClick}
      />

      <CodeEditor />

      <XtermTerminal />
    </div>
  );
};

export default PlayGround;
