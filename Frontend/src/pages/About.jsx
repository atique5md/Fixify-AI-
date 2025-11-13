export default function About() {
  return (
    <section style={wrap}>
      <h1 style={title}>About the Project – FixMate AI</h1>

      <p style={p}>
        FixMate AI is an AI-powered code review and debugging system designed to help
        developers and students write cleaner, more efficient, and error-free code.
        Users can paste or write their code in the interface, and the system instantly
        provides feedback, points out errors, suggests optimizations, and generates
        improved versions of the code. It supports multiple programming languages and
        follows best practices like clean code, security, efficiency, and scalability.
      </p>

      <div style={sectionBox}>
        <h2 style={subTitle}>Detailed Overview</h2>
        <p style={p}>
          This project aims to develop an AI-assisted Code Review System that analyzes,
          reviews, and improves code automatically. The platform provides a web-based
          editor built with React.js for real-time code editing and syntax highlighting.
        </p>

        <p style={p}>
          Once the user submits code, it is sent to a Node.js backend, which communicates
          with an AI model to perform intelligent review. The AI evaluates logical issues,
          structure, security concerns, performance inefficiencies, and coding standard
          violations, then returns suggestions, corrected code, and explanations.
        </p>

        <p style={p}>
          This system benefits developers, students, educators, and teams by reducing
          manual code review time and improving code quality through instant automated feedback.
        </p>
      </div>

      <div style={sectionBox}>
        <h2 style={subTitle}>Project Highlights</h2>
        <ul style={list}>
          <li>✔ Supports JavaScript, Python, Java, C++ and more</li>
          <li>✔ Detects errors, logic issues, and security vulnerabilities</li>
          <li>✔ Suggests optimized code and improvements</li>
          <li>✔ Built using React, Node.js, Express, and AI-based APIs</li>
        </ul>
      </div>
    </section>
  );
}

/* Inline Styles */
const wrap = { maxWidth: "900px", margin: "0 auto", padding: "20px" };
const title = { fontSize: "28px", marginBottom: "16px" };
const subTitle = { fontSize: "20px", marginBottom: "10px" };
const p = { lineHeight: "1.6", marginBottom: "12px" };
const sectionBox = {
  padding: "16px",
  margin: "20px 0",
  border: "1px solid #2a2a2a",
  borderRadius: "8px",
  background: "#0f172a",
  color: "#e5e7eb"
};
const list = { margin: "12px 0 0 18px", lineHeight: "1.6" };
