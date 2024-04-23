import React from "react";
import ResizableComponent from "./resizableComponent";

interface FileSelectorProps {
  files: { name: string; language: string; content: string }[];
  selectedFile: { name: string; language: string; content: string };
  onFileClick: (file: {
    name: string;
    language: string;
    content: string;
  }) => void;
}

const FileSelector: React.FC<FileSelectorProps> = ({
  files,
  selectedFile,
  onFileClick,
}) => {
  return (
    <ResizableComponent resizeHandles={["right", "left"]} initialHeight={870}>
      <div className=" bg-gray-100 p-4 w-56 h-full text-black border-2 border-gray-800">
        <h2 className="text-2xl font-bold mb-4">Files</h2>
        <ul>
          {files.map((file) => (
            <li
              key={file.name}
              className={`cursor-pointer ${
                selectedFile.name === file.name ? "bg-black text-white" : ""
              }`}
              onClick={() => onFileClick(file)}
            >
              {file.name}
            </li>
          ))}
        </ul>
      </div>
    </ResizableComponent>
  );
};

export default FileSelector;
