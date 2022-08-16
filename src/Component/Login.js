import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export const Logincard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandelChange = (e) => {
    const { id, value } = e.target;

    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const HandelSubmit = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        email: email,
        password: password,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        "http://localhost:8000/Login",
        requestOptions
      );
      if (!response.ok) {
        const err = await response.json();
        alert(err.error);
        return;
      }

      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <Card>
        <Card.Body>
          <Form>
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

            <Button
              onClick={() => HandelSubmit()}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
          <a href=""> Forget password</a>
        </Card.Body>
      </Card>
    </div>
  );
};
