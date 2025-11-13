import { Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, SignIn, SignUp } from "@clerk/clerk-react";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";

export default function App() {
  return (
    <>
      {/* Show NavBar only when user is logged in */}
      <SignedIn>
        <NavBar />
      </SignedIn>

      <Routes>
        {/* Clerk Auth Screens */}
        <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />

        {/* Protected Pages */}
        <Route
          path="/"
          element={
            <SignedIn>
              <Home />
            </SignedIn>
          }
        />

        <Route
          path="/product"
          element={
            <SignedIn>
              <Product />
            </SignedIn>
          }
        />

        <Route
          path="/contact"
          element={
            <SignedIn>
              <Contact />
            </SignedIn>
          }
        />

        <Route
          path="/about"
          element={
            <SignedIn>
              <About />
            </SignedIn>
          }
        />

        {/* If logged out and tries any unknown page → Sign In */}
        <Route
          path="*"
          element={
            <SignedOut>
              <Navigate to="/sign-in" replace />
            </SignedOut>
          }
        />
      </Routes>
    </>
  );
}
