"use client";

import FileSelector from "@/components/fileStructure";
import React, { useState } from "react";

const PlayGround = () => {
  const files = [
    { name: "index.html", language: "html", content: "" },
    { name: "style.css", language: "css", content: "" },
    { name: "script.js", language: "javascript", content: "" },
  ];

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
    </div>
  );
};

export default PlayGround;
