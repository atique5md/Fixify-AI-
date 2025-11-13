import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

export default function NavBar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: '#a8dadc',
      padding: "12px 24px",
     
    }}>
      <h2 style={{ margin: 0 }}>Fixify AI</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/product" >Product</Link>
        <Link to="/contact" >Contact</Link>
        <Link to="/about" >About</Link>
      </div>

      <UserButton signOutRedirectUrl="/sign-in" />

    </nav>
  );
}

  
