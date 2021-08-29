import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "20px",
        background: "black",
        color: "#fff",
        height: "60px",
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Link to="/">
        <h1>FAKE SHOP</h1>
      </Link>
    </div>
  );
};

export default Header;
