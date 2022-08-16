import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export const MyNavbar = () => {
  const navigate = useNavigate();

  const Loginclick = () => {
    navigate("/Login");
  };

  const SignupClick = () => {
    navigate("/Signup");
  };

  const HomeClick = () => {
    navigate("/");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={HomeClick}>Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link onClick={HomeClick}>Home</Nav.Link>
          </Nav>

          <Button onClick={Loginclick} variant="outline-primary">
            Login
          </Button>
          <Button onClick={SignupClick} variant="outline-danger">
            Signup
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
