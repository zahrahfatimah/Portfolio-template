import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dessert from "../../Assets/Projects/1.png";
import lazada from "../../Assets/Projects/2.png";
import codin from "../../Assets/Projects/3.png";
import news from "../../Assets/Projects/4.png";
import homeshop from "../../Assets/Projects/5.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dessert}
              isBlog={false}
              title="Dessert Bites"
              description="A web-based application featuring AI integration to search for cafes around Jakarta that offer specific desserts. The app also includes a calorie checker for desserts, nutritional information, and dessert recipes. Additionally, it has a note-taking feature allowing users to save information about their favorite desserts"
              ghLink="https://github.com/zahrahfatimah/Dessert-Bites"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lazada}
              isBlog={false}
              title="E-commerce"
              description="A web-based application that mimics the features of popular e-commerce platforms like Lazada. This app allows users to browse products, add items to their cart, make purchases, and track orders. It includes a user-friendly interface, product filtering options, and secure payment integration to enhance the shopping experience."
              ghLink="https://github.com/zahrahfatimah/e-commerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codin}
              isBlog={false}
              title="Codin Connect"
              description="A social media for programmers, where users can create and solve challenges in the browser."
              ghLink="https://github.com/geraldsimanullang/codin-connect"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="NewsStation"
              description="A news portal website where news is distributed and can be read like a newspaper."
              ghLink="https://github.com/zahrahfatimah/news-portal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={homeshop}
              isBlog={false}
              title="Z-Homeshop"
              description="A simple e-commerce website for browsing and purchasing products online."
              ghLink="https://github.com/zahrahfatimah/BrandedThings"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
