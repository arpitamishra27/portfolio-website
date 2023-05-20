import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


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
              imgPath={hms}
              isBlog={false}
              title="Crime Data Analysis, Visualization and Prediction of Crime Events"
              description="Led a team of 4 people, created user interface using concept of neumorphism and worked on front end.
              Created a unified platform for crime data visualization, analysis and real-time prediction of future crime trends. 
              It is advanced as acomplete product and can be applied for any country's dataset.
               Formed backend through zingcharts, amcharts, anymap, folium and google maps embed 
               API to conduct data visualization.• Live prediction on dataset is carried out by 
               time series forecasting with Prophet library of python."
              ghLink="https://github.com/arpitamishra27/Crime-Data-Analysis"
              
            />
          </Col>
      </Row>
      </Container>
    </Container>
  );
}

export default Projects;
