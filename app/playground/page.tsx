"use client";

import CodeEditor from "@/components/codeEditor";
import FileSelector from "@/components/fileStructure";
import OutputBrowser from "@/components/outputBrowser";
import XtermTerminal from "@/components/terminal";
import React, { useState } from "react";

const PlayGround = () => {
  const [files, setFiles] = useState([
    {
      name: "index.html",
      language: "html",
      content: "<h1>Hello Vijeet Shah<h1>",
    },
    { name: "style.css", language: "css", content: "" },
    { name: "script.js", language: "javascript", content: "" },
  ]);

  const [selectedFile, setSelectedFile] = useState(files[0]);

  const handleFileClick = (file: (typeof files)[0]) => {
    setSelectedFile(file);
  };

  const htmlFile = files.find((file) => file.language === "html");
  const cssFile = files.find((file) => file.language === "css");
  const jsFile = files.find((file) => file.language === "javascript");

  const html = `
  <html>
    <head>
      <style>${cssFile?.content}</style>
    </head>
    <body>
      ${htmlFile?.content}
      <script>${jsFile?.content}</script>
    </body>
  </html>
`;

  return (
    <div>
      <FileSelector
        files={files}
        selectedFile={selectedFile}
        onFileClick={handleFileClick}
      />

      <CodeEditor />

      <XtermTerminal />

      <OutputBrowser html={html} />
    </div>
  );
};

export default PlayGround;
