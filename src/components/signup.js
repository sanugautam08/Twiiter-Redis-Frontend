import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import { Form, Button } from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";
import { signUp } from "../utils";
import { toggleMenu, tokenContext, authContext } from "../App";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { token, setToken } = useContext(tokenContext);
  const { loggedIn, setLoggedIn } = useContext(authContext);

  // Handlers
  const reset = () => {
    if ((username === "" || email === "" || password === "", fullName === ""))
      return;
    setUsername("");
    setPassword("");
    setEmail("");
    setFullName("");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if ((username === "" || email === "" || password === "", fullName === ""))
      return setError("empty fields");
    signUp({ username, email, password, fullName }).then(
      (res) => {
        if (!res.status) {
          setError(res.message);
          return;
        }
        localStorage.setItem("token", res.data);
        setToken(res.data.token);
        setLoggedIn(true);
        navigate("/");
        reset();
      },
      (error) => {
        setError("Error: Try Again!");
      }
    );
  };

  return (
    <div className="profile-conatiner d-flex align-items-center justify-content-center">
      <div className="box-2 ">
        <div className="img text-center">
          <FaTwitter className="icons logo" size={100} />
        </div>
        <h2 className="text-center">Sign Up Page</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Label>User name</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="email"
              placeholder="Enter username"
            />
            <Form.Text className="text-muted"></Form.Text>
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
            <Link to="/login" className="card-link">
              Already have an account? Signin now!!
            </Link>
          </Form.Group>
          <Button variant="primary" type="button" onClick={handleRegister}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Signup;
