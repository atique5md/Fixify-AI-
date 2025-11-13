import { useState } from "react";
import CodeEditor from "../components/CodeEditor";
import ReviewPanel from "../components/ReviewPanel";
import ReviewButton from "../components/ReviewButton";
import { useCodeReview } from "../hooks/useCodeReview";

export default function Home() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("Paste your code to Get Review");
  const { review, loading, runReview } = useCodeReview();

  const handleReview = () => runReview({ code, language });

  return (
    <main>
      <div className="left">
        <CodeEditor code={code} onChange={setCode} language={language} />
        <ReviewButton onClick={handleReview} />
      </div>

      <div className="right">
        <ReviewPanel loading={loading} language={language} review={review} />
      </div>
    </main>
  );
}
