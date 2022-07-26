import React from "react";
import Card from "react-bootstrap/Card";

function Certification() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}> 
          <br />
          <br />
          <br />
          <br />
                    Below are some of my Certifications!
                    <br />
                    <br />
                    <br />

          </p>
          <ul style={{textAlign:"left"}}>
          <li className="certification" >
              2022: "How to create a Jira SCRUM project" completed on Jul 12, by Coursera
              <br/>  
              <br />
            </li>
          <li className="certification" >
              2022: "Git Essential Training: The Basics" completed on Jan 03, by LinkedIn Learning
                    <br/> 
                    <br />
            </li>

            <li className="certification" >
              2022: "Learning SQL Programming" completed on Jan 06, by LinkedIn Learning
              <br/> 
              <br />
            </li>
                  
          </ul>
          <br />
          <br />
          <br />
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Certification;