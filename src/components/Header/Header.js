import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, handleSignOut } = useFirebase();
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/order">Order</Link>

        <Link to="/about">About</Link>
        <Link to="/register">Register</Link>
        <span>{user?.displayName && user?.displayName}</span>

        {user ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
