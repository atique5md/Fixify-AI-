import { useEffect } from "react";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function CodeEditor({ code, onChange, language }) {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <div className="code">
      <Editor
        value={code}
        onValueChange={onChange}
        highlight={(val) => prism.highlight(val, prism.languages[language], language)}
        padding={10}
        style={{
          fontFamily: '"Fira Code", "Fira Mono", monospace',
          fontSize: 16,
          height: "100%",
          width: "100%",
        //   background: "#2d2d2d",
        //   color: "#f8f8f2",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}
