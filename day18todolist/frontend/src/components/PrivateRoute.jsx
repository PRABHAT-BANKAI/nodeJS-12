import React from "react";

import { useAuth } from "../context/Authcontext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/" />; // ternary operator
};

export default PrivateRoute;
