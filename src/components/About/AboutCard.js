import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Christian Almayda </span>
            from <span className="purple"> Licab, Nueva Ecija, PH.</span>
            <br /> I'm a graduating student in BS Civil Engineering.
            <br />
            Graduate of Full-stack Web Development in <span className="purple">KodeGo</span> bootcamp.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Mobile Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Piano
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Biking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">xtianAlmyd</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
