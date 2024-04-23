"use client";
import Editor from "@monaco-editor/react";
import ResizableComponent from "./resizableComponent";

const CodeEditor = () => {
  return (
    <ResizableComponent resizeHandles={["bottom", "right", "left"]}>
      <Editor height="400px" />{" "}
    </ResizableComponent>
  );
};

export default CodeEditor;
