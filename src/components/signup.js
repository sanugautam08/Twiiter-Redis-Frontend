import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import { Form, Button } from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";
const Signup = () => {
  return (
    <div className="profile-conatiner d-flex align-items-center justify-content-center">
      <div className="box-2 ">
        <div className="img text-center">
          <FaTwitter className="icons logo" size={100} />
        </div>
        <h2 className="text-center">Sign Up Page</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Label>User name</Form.Label>
            <Form.Control type="email" placeholder="Enter username" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Link to="/login" className="card-link">
              Already have an account? Signin now!!
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
export default Signup;
