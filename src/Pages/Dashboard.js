import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

export const Dashboard = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const HandelChange = (e) => {
    const { id, value } = e.target;

    if (id === "firstname") {
      setFirstname(value);
    }
    if (id === "lastname") {
      setLastname(value);
    }
    if (id === "username") {
      setUsername(value);
    }

    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmpassword") {
      setConfirmPassword(value);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h3> Books and author </h3>
          <div className=" p-2  text-white">
            <Form>
              <Form.Group className="mb-3" controlId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  onChange={(e) => HandelChange(e)}
                  value={firstname}
                  type="text"
                  placeholder="Enter Firstname"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="lastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  onChange={(e) => HandelChange(e)}
                  value={lastname}
                  type="text"
                  placeholder="Enter lastname"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={(e) => HandelChange(e)}
                  value={email}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  onChange={(e) => HandelChange(e)}
                  value={username}
                  type="text"
                  placeholder="Username"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) => HandelChange(e)}
                  value={password}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="confirmpassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  onChange={(e) => HandelChange(e)}
                  value={confirmpassword}
                  type="password"
                  placeholder="Confirm Password"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
