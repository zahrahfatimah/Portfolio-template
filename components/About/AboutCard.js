import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ST Fatimah Zahrah </span>
            from <span className="purple"> Indonesia </span>
            <br />
            I recently graduated from a Full-Stack Developer Bootcamp at
            Hacktiv8.
            <br />
            Before that, I completed my Bachelor's degree in Education.
            <br />
            My passion for technology grew, leading me to switch careers and
            dive into the tech industry.
            <br />
            <br />
            Here are a few other activities that I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Creating value through code."
          </p>

          <footer className="blockquote-footer">zah</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
