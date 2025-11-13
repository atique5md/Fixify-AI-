import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export default function ReviewPanel({ loading, language, review }) {
  if (loading) {
    return (
      <div className="review-output">
        <p>Analyzing your code...</p>
      </div>
    );
  }

  return (
    <div className="review-output">
      <Markdown rehypePlugins={[rehypeHighlight]}>
{`\`\`\`${language}
${review}
\`\`\``}
      </Markdown>
    </div>
  );
}
