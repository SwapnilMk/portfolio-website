import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import newshunt from "../../Assets/Projects/news-hunt.png";
import quicknote from "../../Assets/Projects/quick-notes.png";
import textutils from "../../Assets/Projects/text-utils.png";
import feedback from "../../Assets/Projects/feedback-system.png";
import "../../css/project.css"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newshunt}
              isBlog={false}
              title="News Hunt"
              description="Welcome to my news website, where you can find the latest updates on current events and important issues. I strive to bring you accurate and unbiased coverage of the stories that matter most. Whether you're interested in politics, sports, entertainment, or something else entirely, you'll find something of interest on my site. Thank you for visiting, and I hope you enjoy your stay!"
              ghLink="https://github.com/SwapnilMk/news-hunt"
              demoLink="https://news-huntweb.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isBlog={false}
              title="Text Utils"
              description="Welcome to my text utilities website, where you can find a range of tools to help you manipulate and analyze text data. Whether you're a researcher, writer, or just someone who works with a lot of text, you'll find something useful here. Some of the tools you'll find on my site include a word count tool, Convert to uppercase lowercase, and a text diff tool to help you compare changes between different versions of a document. Thank you for visiting, and I hope you find my text utilities website helpful!"
              ghLink="https://github.com/SwapnilMk/text-utils"
              demoLink="https://text-utilsweb.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quicknote}
              isBlog={false}
              title="Quick Notes"
              description="Simple Notes taking application using Bootstrap, Tailwind and Venila Javascript !"
              ghLink="https://github.com/SwapnilMk/Quick-notes"
              demoLink="https://swapnilmk.github.io/Quick-notes/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={feedback}
              isBlog={false}
              title="Student Feedback System"
              description="About
              The Student Feedback System is a management information system for education establishments to manage student data. Student Feedback Systems provide capabilities for selecting particular subject for feedback and generate the report automatically, build student details, student-related data needs in a college"
              ghLink="https://github.com/SwapnilMk/Student-feedback-system"
              // demoLink="https://text-utilsweb.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
