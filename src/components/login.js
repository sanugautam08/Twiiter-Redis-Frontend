import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import { Form, Button } from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";
const Login = () => {
  return (
    <div className="profile-conatiner d-flex align-items-center justify-content-center">
      <div className="box-2 ">
        <div className="img text-center">
          <FaTwitter className="icons logo" size={100} />
        </div>
        <h2 className="text-center">Login Page</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Link to="/signup" className="card-link">
              Do you have an account? Register here
            </Link>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default Login;
