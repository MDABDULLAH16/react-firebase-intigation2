import { getAuth } from "firebase/auth";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import app from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = getAuth(app);

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user] = useAuthState(auth);

  if (!user) {
    return <Navigate to="/register" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
