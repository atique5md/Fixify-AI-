import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import "./App.css";

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function Root() {
  if (!clerkKey) {
    // Visible warning instead of a blank page
    return (
      <div style={{ padding: 20, fontFamily: "system-ui" }}>
        <h2>Missing Clerk key</h2>
        <p>
          Set <code>VITE_CLERK_PUBLISHABLE_KEY</code> in your <code>.env.local</code>, then restart the dev server.
        </p>
      </div>
    );
  }

  return (
    <ClerkProvider publishableKey={clerkKey}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
