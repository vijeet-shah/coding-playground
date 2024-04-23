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
    <ResizableComponent
      resizeHandles={["top", "right", "left"]}
      initialHeight={313}
      initialWidth={900}
    >
      <div
        ref={terminalRef}
        className="terminal bg-black text-white border-2 border-gray-800"
      />
    </ResizableComponent>
  );
};

export default XtermTerminal;
