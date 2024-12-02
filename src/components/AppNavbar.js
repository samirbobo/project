import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function AppNavbar() {
  const cart = useSelector((state) => state.cart);
  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = () => {
    setExpanded(false); // إغلاق الـ Navbar بعد الضغط على الرابط
  };

  return (
    <Navbar fixed="top" bg="light" expand="lg" expanded={expanded}>
      <Container>
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          onClick={handleLinkClick}
        >
          <span className="navbar-brand">CartApp</span>
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ fontSize: "1rem", padding: "0.25rem 0.5rem" }}
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link" onClick={handleLinkClick}>
              Home
            </NavLink>
            <NavLink
              to="/Products"
              className="nav-link"
              onClick={handleLinkClick}
            >
              Products
            </NavLink>
            <NavLink to="/Cart" className="nav-link" onClick={handleLinkClick}>
              Cart-{cart.length}
            </NavLink>
            <NavLink to="/About" className="nav-link" onClick={handleLinkClick}>
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
