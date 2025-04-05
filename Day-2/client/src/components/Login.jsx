import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("username and pasword are required");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });
      const role = response.data.user.role;
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", role);
      setSuccess(response.data.message);
      setTimeout(() => {
        if (role == "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }, 2000);
    } catch (err) {
      //handling different error status:
      switch (err.response?.status) {
        case 400:
          setError(err.response.data.message); //validation error
          break;
        case 401:
          setError(err.response.data.message); //invalid credentials
          break;
        case 404:
          setError("User not found ");
          break;
        case 500:
          setError("Server error. Please try again later");
          break;

        default:
          setError("Failed to login");
      }

      setTimeout(() => {
        setError("");
      }, 2000);
      // setError(err.response?.data?.message || "failed to login");
      // setTimeout(() => {
      //   setError("");
      // }, 2000);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Login Form</h2>
          <div className="card my-5">
            <form
              className="card-body cardbody-color p-lg-5"
              onSubmit={handleSubmit}
            >
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>
              {error && (
                <div className="alert alert-danger alert-dismissible fade show mb-3 ">
                  <strong>{error}</strong>
                </div>
              )}

              {success && (
                <div className="alert alert-success alert-dismissible fade show mb-3 ">
                  <strong>{success}</strong>
                </div>
              )}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Username"
                  aria-describedby="emailHelp"
                  value={username}
                  placeholder="User Name"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn text-light px-5 mb-5 w-100 bg-dark"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
