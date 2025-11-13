import { useState } from "react";
import { reviewCodeAPI } from "../services/api";

export function useCodeReview() {
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  async function runReview({ code, language }) {
    setLoading(true);
    setReview("");
    try {
      const data = await reviewCodeAPI({ code, language });
      setReview(data);
    } catch (e) {
      console.error("Error fetching review:", e);
      setReview("⚠️ Failed to fetch review from AI backend.");
    } finally {
      setLoading(false);
    }
  }

  return { review, loading, runReview };
}
