import "../App.css";

import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

const CollapsibleExample = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
        <Container>
          <Link to="/">
            <img src="../logo.png" style={{ width: 150 }} alt="" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto link">
              <Link to="/" style={{ textDecoration: "none" }}>
                Home{" "}
              </Link>
              <Link to="/event" style={{ textDecoration: "none" }}>
                Event{" "}
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                About Us
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                Gallery
              </Link>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                Contact Us
              </Link>
              <Link to="/blog" style={{ textDecoration: "none" }}>
                Blog
              </Link>

              {isAuthenticated && (
                <p>
                  Welcome,{" "}
                  <span style={{ backgroundColor: "greenyellow" }}>
                    {user.name}
                  </span>
                </p>
              )}
              {isAuthenticated ? (
                <Link
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                  style={{ textDecoration: "none" }}
                >
                  Logout
                </Link>
              ) : (
                <Link
                  onClick={() => loginWithRedirect()}
                  style={{ textDecoration: "none" }}
                >
                  Login
                </Link>
              )}
              <Link to="/admin">Upload Event</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CollapsibleExample;
