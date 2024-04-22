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
    <div className="flex h-screen">
      <FileSelector
        files={files}
        selectedFile={selectedFile}
        onFileClick={handleFileClick}
      />

      <div className="flex flex-col w-1/2">
        <div className="flex-grow p-4">
          <h2 className="text-2xl font-bold mb-4">Code Editor</h2>

          <CodeEditor />
        </div>

        <div className="mt-4 px-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Run
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Terminal</h2>
          <XtermTerminal />
        </div>
      </div>
      <OutputBrowser html={html} />
    </div>
  );
};

export default PlayGround;
