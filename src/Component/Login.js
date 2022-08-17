import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export const Logincard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const HandelChange = (e) => {
    const { id, value } = e.target;

    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const HandelSubmit = (e) => {
    if (email || password) {
      var axios = require("axios");
      var data = JSON.stringify({
        email: email,
        password: password,
      });
      var config = {
        method: "post",
        url: "http://localhost:8000/Login",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
      });
      Dashboard().catch(function (error) {
        console.log(error);
      });
    } else {
      alert("please enter email or password");
    }
  };

  const Dashboard = () => {
    navigate("/Dashboard");
  };

  return (
    <div className="d-flex justify-content-center">
      <Card>
        <Card.Body>
          <Form onSubmit={(e) => HandelSubmit()}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={HandelChange}
                value={email}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={HandelChange}
                value={password}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {/* <a> Forget password</a> */}
        </Card.Body>
      </Card>
    </div>
  );
};
