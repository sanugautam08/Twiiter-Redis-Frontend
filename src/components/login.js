import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";
import { authContext, toggleMenu, tokenContext } from "../App";
import { logIn } from "../utils";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const toggleHeader = useContext(toggleMenu);
  const navigate = useNavigate();
  const { token, setToken } = useContext(tokenContext);
  const { loggedIn, setLoggedIn } = useContext(authContext);

  // Handlers
  const handleLogin = (e) => {
    e.preventDefault();
    logIn({ username, password }).then(
      (res) => {
        if (!res.status) {
          setError(res.message);
          return;
        }
        localStorage.setItem("data", JSON.stringify(res.data));
        setToken(res.data.token);
        setLoggedIn(true);
        navigate("/");
      },
      (err) => {
        setError("Error: Try again!");
      }
    );
  };

  return (
    <div className="profile-conatiner d-flex align-items-center justify-content-center">
      <div className="box-2 ">
        <div className="img text-center">
          <FaTwitter className="icons logo" size={100} />
        </div>
        <h2 className="text-center">Login Page</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          {error ? <p>{error}</p> : null}
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Link to="/signup" className="card-link">
              Do you have an account? Register here
            </Link>
          </Form.Group>
          <Button variant="primary" type="button" onClick={handleLogin}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Login;
