import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export async function reviewCodeAPI({ code, language }) {
  const res = await api.post("/ai/get-response", { code, language });
  return res.data?.review || res.data;
}
