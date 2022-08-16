import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export const SignupCard = () => {
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

  const Submit = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: password,
        confirmpassword: confirmpassword,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        "http://localhost:8000/Registration",
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
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="py-5">
            <div className="d-flex justify-content-center">
              <div className="p-2  d-sm-block">
                <img
                  src="Registration.jpg"
                  width={"90%"}
                  alt="Registration"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className=" p-3 bg-dark text-white">
            <Form>
              <Form.Group className="mb-3" controlId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  onChange={HandelChange}
                  value={firstname}
                  type="text"
                  placeholder="Enter Firstname"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="lastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  onChange={HandelChange}
                  value={lastname}
                  type="text"
                  placeholder="Enter lastname"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={HandelChange}
                  value={email}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  onChange={HandelChange}
                  value={username}
                  type="text"
                  placeholder="Username"
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
              <Form.Group className="mb-3" controlId="confirmpassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  onChange={HandelChange}
                  value={confirmpassword}
                  type="confirmpassword"
                  placeholder="Confirm Password"
                />
              </Form.Group>

              <Button onClick={() => Submit()} variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
