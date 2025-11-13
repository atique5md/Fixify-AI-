
export default function Product() {
  return (
    <section style={wrap}>
      <h1 style={title}>Future Plans & Vision</h1>

      <p style={p}>
        This project is not just a standalone tool but the beginning of a larger vision to build
        AI-based productivity tools for developers, students, and professionals. In the future,
        I aim to create a complete ecosystem of intelligent developer tools that make coding easier,
        faster, and more accessible for everyone — from beginners to professionals.
      </p>

      <p style={p}>
        My long-term goal is to develop AI-powered products that provide assistance beyond code
        review — such as AI debugging, auto-documentation, project generator tools, API testers,
        and learning assistants. These platforms will help programmers write better code, fix bugs
        quickly, reduce development time, and improve problem-solving skills.
      </p>

      <div style={sectionBox}>
        <h2 style={subTitle}>Future Product Ideas</h2>

        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Idea Name</th>
              <th style={th}>Description</th>
            </tr>
          </thead>
          <tbody>
            {ideas.map((idea, index) => (
              <tr key={index}>
                <td style={td}>{idea.name}</td>
                <td style={td}>{idea.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={subTitle}>Final Vision Statement</h2>

      <p style={p}>
        “My aim is to build an AI-powered developer ecosystem that makes coding simpler, smarter,
        and faster. FixMate is just the first step — in the future, I plan to develop more intelligent
        tools that will help programmers write better code, generate complete projects, debug
        efficiently, and learn faster. I want to create AI products that empower not just coders,
        but students, freelancers, educators, and tech innovators.”
      </p>
    </section>
  );
}

const ideas = [
  { name: "AI Debugger & Bug Fixer", description: "AI explains bugs, identifies causes, and provides exact fixes." },
  { name: "Code-to-Project Generator", description: "Turn instructions into complete full-stack project code." },
  { name: "Auto Documentation Generator", description: "Generate README, function explanation, and UML diagrams." },
  { name: "Code Mentor Chatbot", description: "Explains code line-by-line and helps learn programming concepts." },
  { name: "API Tester + AI Validator", description: "Tests APIs and generates debugging guidance + test cases." },
  { name: "AI Pair Programmer", description: "Real-time smart code suggestions while typing." },
  { name: "AI Resume & Portfolio Builder", description: "Builds developer resumes and GitHub summaries automatically." },
  { name: "Auto Unit Test Generator", description: "Generates test cases for multiple languages and frameworks." },
  { name: "AI Code Translator", description: "Converts code from one language to another intelligently." },
  { name: "AI Learning Platform", description: "Teaches topics with quizzes, code review, and progress tracking." },
];

/* Styles */
const wrap = { maxWidth: "1000px", margin: "0 auto", padding: "20px" };
const title = { fontSize: "28px", marginBottom: "16px" };
const subTitle = { fontSize: "22px", marginBottom: "12px" };
const p = { lineHeight: "1.6", marginBottom: "14px" };
const sectionBox = {
  padding: "16px",
  margin: "20px 0",
  border: "1px solid #2a2a2a",
  borderRadius: "8px",
  background: "#0f172a",
  color: "#e5e7eb"
};
const table = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "10px"
};
const th = {
  padding: "10px",
  borderBottom: "1px solid #3b3b3b",
  textAlign: "left",
  color: "#e5e7eb"
};
const td = {
  padding: "10px",
  borderBottom: "1px solid #2a2a2a",
  color: "#e5e7eb"
};
