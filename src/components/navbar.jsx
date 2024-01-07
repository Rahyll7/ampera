import { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../components/assests/logoampera.jpg";

const NavbarComponents = () => {
  const [selectedTab, setSelectedTab] = useState("aboutUs");

  const renderSelectedTab = () => {
    switch (selectedTab) {
      case "aboutUs":
        return window.scrollTo({ top: 100, behavior: "smooth" });
      case "opportunity":
        return window.scrollTo({ top: 700, behavior: "smooth" });
      case "Services":
        return window.scrollTo({ top: 1400, behavior: "smooth" });
      case "contactUs":
        return window.scrollTo({ top: 1900, behavior: "smooth" });
      default:
        return null;
    }
  };

  const renderNavbars = () => {
    return (
      <Navbar bg="light" data-bs-theme="light" fixed="top">
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "15px",
              marginRight: "100px",
            }}
          >
            <Nav style={{ display: "flex", gap: "40px" }}>
              <Nav.Link
                className="navBar"
                href="#aboutUs"
                onClick={() => setSelectedTab("aboutUs")}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                className="navBar"
                href="#opportunity"
                onClick={() => setSelectedTab("opportunity")}
              >
                Opportunity
              </Nav.Link>
              <Nav.Link
                className="navBar"
                href="#Services"
                onClick={() => setSelectedTab("Services")}
              >
                Services
              </Nav.Link>
              <Nav.Link
                className="navBar"
                href="#contactUs"
                onClick={() => setSelectedTab("contactUs")}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    );
  };

  return (
    <div style={{ border: "1px hidden black", backgroundColor: "white" }}>
      <div style={{ position: "absolute", marginLeft: "5%", marginTop: "0" }}>
        <img src={Logo} alt="" width="125px" height="50px" />
      </div>

      {renderNavbars()}
      {renderSelectedTab()}
    </div>
  );
};

export default NavbarComponents;
