import React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faChartArea, faLock } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <Nav className="flex-column bg-light sidebar">
      <Nav.Item>
        <Nav.Link href="Login.html">
          <FontAwesomeIcon /> Menu utama
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="About.html" active>
          <FontAwesomeIcon /> About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="Quiz.html" active>
          <FontAwesomeIcon /> Quiz
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default SideBar;
