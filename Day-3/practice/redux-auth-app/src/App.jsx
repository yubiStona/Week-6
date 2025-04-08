import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import ProductList from "./components/ProductList";
import { logout } from "./features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div>
      {auth.isAuthenticated ? (
        <>
          <p>Welcome, {auth.user.username}!</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
          <ProductList />
        </>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default App;
