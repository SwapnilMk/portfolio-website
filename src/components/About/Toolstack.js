import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillGithub, AiFillWindows } from "react-icons/ai";
import { SiLinux, SiVisualstudiocode, SiPostman } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillWindows />
      </Col>
    </Row>
  );
}

export default Toolstack;
