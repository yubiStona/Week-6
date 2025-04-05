import React from "react";
import { Navigate } from "react-router-dom";
const AdminRoute = ({ children }) => {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default AdminRoute;
