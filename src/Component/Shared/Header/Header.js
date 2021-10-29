import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <div id="header" className="py-2 pt-4">
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <h1 className="logo">
            <Navbar.Brand href="#">
              <span>Travel Mania</span>
            </Navbar.Brand>
          </h1>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="header-nav me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>

              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>

            <Button variant="outline-success">Get Started</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
