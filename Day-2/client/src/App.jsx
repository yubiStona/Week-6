import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./styles/profile.css";
import "./styles/register.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Admin from "./components/Admin";
import AdminRoute from "./components/AdminRoute";
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const ReAuth = ({ children }) => {
    const token = localStorage.getItem("token");
    if (!token == "") {
      return <Navigate to="/" replace />;
    }
    return children;
  };
  const ProtectedRoutes = ({ children }) => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (!token) {
      return <Navigate to="/login" replace />;
    }
    if (role == "admin") {
      return <Navigate to="/admin" />;
    }
    return (
      <>
        <Navbar />
        {children}
      </>
    );
  };
  return (
    <Router>
      <Routes>
        {/* public routes*/}
        <Route
          path="/login"
          element={
            <ReAuth>
              <Login />
            </ReAuth>
          }
        />
        {/*protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
        <Route
          path="*"
          element={
            <Navigate
              to={localStorage.getItem("role") === "admin" ? "/admin" : "/"}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
