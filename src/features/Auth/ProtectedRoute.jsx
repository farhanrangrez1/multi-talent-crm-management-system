import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const userRole = localStorage.getItem("userRole");
  if (!userRole) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute; 