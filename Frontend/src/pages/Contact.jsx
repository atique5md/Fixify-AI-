export default function Contact() {
  return (
    <section style={wrap}>
      <h1 style={h1}>👥 Team Members & Contact Information</h1>

      {/* Team Table */}
      <div style={card}>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Name</th>
              <th style={th}>Role & Responsibilities</th>
              <th style={th}>Email ID</th>
              <th style={th}>Contact Number</th>
              <th style={th}>University Roll No.</th>
            </tr>
          </thead>
          <tbody>
            {team.map((m, i) => (
              <tr key={i}>
                <td style={td}>{m.name}</td>
                <td style={td}>{m.role}</td>
                <td style={td}>
                  <a href={`mailto:${m.email}`} style={link}>{m.email}</a>
                </td>
                <td style={td}><a href={`tel:${m.phone}`} style={link}>{m.phone}</a></td>
                <td style={td}>{m.roll}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Project Communication Details */}
      <div style={card}>
        <h2 style={h2}>📬 Project Communication Details</h2>
        <ul style={list}>
          <li><strong>Project Title:</strong> CodeMate – AI-Powered Code Review System</li>
          <li><strong>Team Name:</strong> [Debug Ninjas / FixMate Crew / CodeCrafters]</li>
          <li><strong>Department:</strong> MCA (Master of Computer Applications)</li>
          <li><strong>Institution:</strong> [Your College Name Here]</li>
          <li><strong>Group Email (Optional):</strong> <a style={link} href="mailto:groupEmail@domain.com">groupEmail@domain.com</a></li>
        </ul>
      </div>

      {/* Detailed Roles */}
      <div style={card}>
        <h2 style={h2}>🧑‍💻 Team Roles & Contributions (Detailed)</h2>

        <h3 style={h3}>✅ Member 1 – Team Lead / Frontend Developer</h3>
        <ul style={list}>
          <li>UI/UX with React.js</li>
          <li>Integrated live code editor (Prism.js + react-simple-code-editor)</li>
          <li>Responsive split layout: Code (Left) & AI Review (Right)</li>
          <li>Led coordination, tasks & GitHub collaboration</li>
        </ul>

        <h3 style={h3}>✅ Member 2 – Backend & AI Integration Developer</h3>
        <ul style={list}>
          <li>REST API with Node.js & Express</li>
          <li>Connected backend to OpenAI / LLM for code reviews</li>
          <li>Handled errors, data security, and request/response flow</li>
          <li>Designed for multi-language scalability</li>
        </ul>

        <h3 style={h3}>✅ Member 3 – Documentation, Testing & Deployment</h3>
        <ul style={list}>
          <li>Proposal, mid-eval & final documentation</li>
          <li>Tested AI outputs across languages & edge cases</li>
          <li>Fixed UI/API issues; improved Markdown + highlight formatting</li>
          <li>Final presentation & deployment (if applicable)</li>
        </ul>
      </div>

      {/* Page Description */}
      <div style={card}>
        <h2 style={h2}>📄 Contact Page Description</h2>
        <p style={p}>
          This project is developed as part of the MCA curriculum to explore the application of
          Artificial Intelligence in improving software development practices. The team consists of
          three members, each contributing to frontend, backend, documentation, and testing. For any
          queries related to this project, future improvements, research collaboration, or academic
          verification, please contact us using the details above.
        </p>
      </div>
    </section>
  );
}

/* ---------- Data (edit these placeholders) ---------- */
const team = [
  {
    name: "[Member 1 Name]",
    role: "Team Leader, Frontend Developer (React.js UI, Code Editor Integration)",
    email: "email1@email.com",
    phone: "+91-XXXXXXXXXX",
    roll: "MCA/XX/XXX",
  },
  {
    name: "[Member 2 Name]",
    role: "Backend Developer (Node.js, Express, API Routing, AI Integration)",
    email: "email2@email.com",
    phone: "+91-XXXXXXXXXX",
    roll: "MCA/XX/XXX",
  },
  {
    name: "[Member 3 Name]",
    role: "System Documentation, Testing & Deployment (Report Writing, Debugging, Testing AI Outputs)",
    email: "email3@email.com",
    phone: "+91-XXXXXXXXXX",
    roll: "MCA/XX/XXX",
  },
];

/* ---------- Styles ---------- */
const wrap = { maxWidth: 1100, margin: "0 auto", padding: 20 };
const h1 = { fontSize: 28, margin: "0 0 16px 0" };
const h2 = { fontSize: 20, margin: "0 0 10px 0" };
const h3 = { fontSize: 16, margin: "16px 0 6px 0" };
const p  = { lineHeight: 1.6, margin: "8px 0" };
const card = {
  border: "1px solid #2a2a2a",
  borderRadius: 10,
  padding: "14px 16px",
  margin: "16px 0",
  background: "#0f172a",
  color: "#e5e7eb",
};
const list = { paddingLeft: 18, margin: 0, lineHeight: 1.6 };
const table = { width: "100%", borderCollapse: "collapse" };
const th = {
  textAlign: "left",
  padding: "10px",
  borderBottom: "1px solid #3b3b3b",
  color: "#e5e7eb",
};
const td = {
  padding: "10px",
  borderBottom: "1px solid #2a2a2a",
  color: "#e5e7eb",
  verticalAlign: "top",
};
const link = { color: "#93c5fd", textDecoration: "none" };
