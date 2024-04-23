"use client";
import Editor from "@monaco-editor/react";
import ResizableComponent from "./resizableComponent";

const CodeEditor = () => {
  return (
    <ResizableComponent
      resizeHandles={["bottom", "right", "left"]}
      initialHeight={500}
      initialWidth={900}
    >
      <Editor height="400px" className="border-2 border-gray-800" />{" "}
    </ResizableComponent>
  );
};

export default CodeEditor;
