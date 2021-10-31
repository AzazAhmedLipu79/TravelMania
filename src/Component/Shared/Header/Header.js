import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  const { displayName, photoURL } = user;

  return (
    <div id="header" className="py-2 pt-4">
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <h1 className="logo">
            <Navbar.Brand>
              <Link to="/">
                {" "}
                <span>Travel Mania</span>
              </Link>
            </Navbar.Brand>
          </h1>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="header-nav me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                {" "}
                <Link to="/Services">
                  {" "}
                  <span>Services</span>
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link to="/MyJourney">
                  <span>My Journey</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/ManageAllJourney">
                  <span>Manage All Journey</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/AddNewService">
                  <span>Add New Service</span>
                </Link>
              </Nav.Link>
            </Nav>
            <div className="mx-5 d-flex align-items-center justify-content-center">
              {/* {console.log(user)} */}
              {user.email ? (
                <img
                  src={photoURL}
                  className="rounded-circle"
                  width="32"
                  height="32"
                  alt=""
                />
              ) : (
                ""
              )}

              <h6 className="ms-2">{displayName}</h6>
            </div>

            {user.email ? (
              <Button onClick={logout} variant="outline-danger">
                TravelOut😭
              </Button>
            ) : (
              <Link to="/GetStarted">
                <Button variant="outline-success">Get Started</Button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
