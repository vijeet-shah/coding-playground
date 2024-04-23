"use client";
import { useRef, useEffect } from "react";
import { Terminal } from "@xterm/xterm";
import ResizableComponent from "./resizableComponent";

const XtermTerminal = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      const terminal = new Terminal();
      terminal.open(terminalRef.current);
      terminal.writeln("Welcome to the terminal!");
    }
  }, []);

  return (
    <ResizableComponent resizeHandles={["top", "right", "left"]}>
      <div ref={terminalRef} className="terminal bg-black text-white" />
    </ResizableComponent>
  );
};

export default XtermTerminal;
