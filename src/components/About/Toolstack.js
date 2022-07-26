import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiEclipse } from "react-icons/di";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJupyter,
  SiJirasoftware,
  SiGooglecloud,
  SiAmazons3,
  SiPostman 


} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiEclipse />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJirasoftware />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        < SiAmazons3/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        < SiGooglecloud/>
      </Col>




    </Row>
  );
}

export default Toolstack;
