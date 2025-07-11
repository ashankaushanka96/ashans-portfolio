import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/img/logonew.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import { BrowserRouter as Router } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/ashans-portfolio/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#certifications"
                className={
                  activeLink === "certifications"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("certifications")}
              >
                Certifications
              </Nav.Link>
              <Nav.Link
                href="#experience"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#cvsection"
                className={
                  activeLink === "cvsection"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("cvsection")}
              >
                Resume
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/ashan-kaushanka/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon1} alt="" />
                </a>
                <a
                  href="https://www.facebook.com/ashan.kaushanka/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon2} alt="" />
                </a>
                <a
                  href="https://github.com/ashankaushanka96"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <a
                href="https://www.linkedin.com/in/ashan-kaushanka/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
