import React, { useEffect, useRef, useState } from "react";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/dracula.css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/lib/codemirror.css";
import CodeMirror from "codemirror";
import { ACTIONS } from "../Actions";
import { executeCode } from "./api";

function Editor({ socketRef, roomId, onCodeChange, language }) {
  const editorRef = useRef(null);
  const [output, setOutput] = useState(""); // State for storing output

  useEffect(() => {
    const init = async () => {
      const editor = CodeMirror.fromTextArea(
        document.getElementById("realtimeEditor"),
        {
          mode: { name: "javascript", json: true },
          theme: "dracula",
          autoCloseTags: true,
          autoCloseBrackets: true,
          lineNumbers: true,
        }
      );
      editorRef.current = editor;

      editor.setSize(null, "100%");
      editorRef.current.on("change", (instance, changes) => {
        const { origin } = changes;
        const code = instance.getValue();
        onCodeChange(code);
        if (origin !== "setValue") {
          socketRef.current.emit(ACTIONS.CODE_CHANGE, {
            roomId,
            code,
          });
        }
      });
    };

    init();
  }, []);

  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
        if (code !== null) {
          editorRef.current.setValue(code);
        }
      });
    }
    return () => {
      socketRef.current.off(ACTIONS.CODE_CHANGE);
    };
  }, [socketRef.current]);

  const runCode = async () => {
    const code = editorRef.current.getValue();
    try {
      const result = await executeCode(language.toLowerCase(), code); // Run the code with the selected language
      setOutput(result.run.stdout || result.run.stderr || "No output");
    } catch (error) {
      setOutput("Error executing code.");
    }
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Code Workspace */}
      <div style={{ flex: "0 0 60%", overflow: "auto" }}>
        <h3>Code Workspace</h3>
        <textarea id="realtimeEditor" style={{ display: "none" }}></textarea>
      </div>

      {/* Output Section */}
      <div style={{ flex: "0 0 40%", overflow: "auto", marginTop: "10px" }}>
        <button onClick={runCode} style={{ margin: "10px 0", display: "block" }} className="btn btn-danger mt-2 mb-2 px-3 btn-block">
          Run Code
        </button>
        <h3>Output</h3>
        <div
          style={{
            height: "calc(100% - 40px)",
            backgroundColor: "#282a36",
            color: "#f8f8f2",
            padding: "10px",
            overflow: "auto",
            borderRadius: "5px",
          }}
        >
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
}

export default Editor;
