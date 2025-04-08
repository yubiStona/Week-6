import { useState } from "react";
import { useLoginUserMutation } from "../services/api";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/auth/authSlice";

import React from "react";
import { useReducer } from "react";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await loginUser({ username, password }).unwrap();
    console.log('login response',userData)
    dispatch(
      loginSuccess({
        user: userData,
        token: userData.token,
      })
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button type="submit">{isLoading ? "Logging in..." : "Login"}</button>
      {error && <p>Login Failed...</p>}
    </form>
  );
};

export default LoginForm;
