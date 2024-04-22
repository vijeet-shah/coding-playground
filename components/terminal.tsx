"use client";
import { useRef, useEffect } from "react";
import { Terminal } from "@xterm/xterm";

const XtermTerminal = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      const terminal = new Terminal();
      terminal.open(terminalRef.current);
      terminal.writeln("Welcome to the terminal!");
    }
  }, []);

  return <div ref={terminalRef} className="terminal bg-black text-white" />;
};

export default XtermTerminal;
