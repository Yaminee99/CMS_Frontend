
import { Container } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { NavigationBar } from "./NavigationBar";



export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8092/login",
        loginData
      );
      if (response.data.status) {
        sessionStorage.setItem("userId", response.data.userId);
        sessionStorage.setItem("name", response.data.name);
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "/services"; // Redirect using window.location
      } else {
        setErrorMessage(response.data.messageIfAny);
      }
    } catch (error) {
      console.error("Login error: ", error);
      setErrorMessage("An error occurred during login.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("name");
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/"; // Redirect to the login page or any desired page
  };

  const navigate = useNavigate();
  const handleSignup = () => {
    // Redirect the user to the Register component when Signup is clicked
    navigate('/register');
  };
  return (
    <>
      <NavigationBar/>
      <Container>
        {errorMessage && <h1>{errorMessage}</h1>}
        <h2>Login</h2>
        <div className="mt-3">
          <input
            type="text"
            placeholder="Email Address"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
        </div>

        <div className="mt-3">
          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
        </div>

        <div className="mt-3">
          <button onClick={handleSignup}>Signup</button>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </Container>
    </>
  );
}
