import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import note from "../../Assets/Projects/Notes.PNG";
import chat from "../../Assets/Projects/Chat.PNG";
import snake from "../../Assets/Projects/Snake.PNG";
import mmm from "../../Assets/Projects/MMM.PNG";
import weather from "../../Assets/Projects/Weather.PNG";
import hms from "../../Assets/Projects/hms.PNG";

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat Application"
              description="Developed a group chatting system in Java where multiple users can connect to a common server and send messages to each other."
              ghLink="https://github.com/vinitaparasrampuria/Chat-application-in-Java"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake Game"
              description="Developed Snake Game in Java with different levels which can be played online simultaneously by multiple users. Features such as login,
              highest score and best time implemented using database"
              ghLink="https://github.com/vinitaparasrampuria/Snake-Game-Java"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={note}
              isBlog={false}
              title="Notes App"
              description="Designed a web application for making notes, deleting and searching for notes, toggling dark mode and storing to local storage"
              ghLink="https://github.com/vinitaparasrampuria/Notes-Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Designed a weather application to get various temperature attributes from OpenWeatherMap API as per location entered by user."
              ghLink="https://github.com/vinitaparasrampuria/Weather-Application"
        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mmm}
              isBlog={false}
              title="Mentor mentee match app"
              description="Built a website for best possible mentor-mentee matching having interactive features and appointment scheduling for Tech Alpharetta."
              ghLink="https://github.com/vinitaparasrampuria/Mentor-Mentee-Match"
    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
