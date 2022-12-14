import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

var axios = require("axios");

export const SignupCard = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

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

  const HandelSubmit = (e) => {
    if (
      firstname ||
      lastname ||
      email ||
      username ||
      password ||
      confirmpassword
    ) {
      var data = JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        username: username,
        password: password,
        confirmpassword: confirmpassword,
      });

      var config = {
        method: "post",
        url: "http://localhost:8000/Registration",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
      });
      login().catch(function (error) {
        console.log(error);
      });
    } else {
      alert("please enter all field correctly");
    }

    //------------------------------------------------------------------------------------------------------------------------------/////////////////////////
    // try {
    //   console.log("try");
    //   var myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");

    //   var raw = JSON.stringify({
    //     firstname: firstname,
    //     lastname: lastname,
    //     username: username,
    //     email: email,
    //     password: password,
    //     confirmpassword: confirmpassword,
    //   });

    //   var requestOptions = {
    //     method: "POST",
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: "follow",
    //   };

    //   const response = await fetch(
    //     "https://localhost:8000/Registration",
    //     requestOptions
    //   );
    //   if (!response.ok) {
    //     const err = await response.json();
    //     alert(err.error);
    //     return;
    //   }
    //   const result = await response.json();
    //   console.log(result);
    //   login();
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const login = () => {
    navigate("/Login");
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

              <Button onClick={HandelSubmit} variant="primary" type="submit">
                Submit
              </Button>
            </Form>

            <Button onClick={HandelSubmit} type="submit">
              {" "}
              Sub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
