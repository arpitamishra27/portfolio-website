import React from "react";
import Card from "react-bootstrap/Card";

function Achievement() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}> 
          <br />
          <br />
          <br />
                    Below are some of my achievements!
          </p>
          <ul style={{textAlign:"left"}}>
          <li className="achievement" >
              2022: Awarded First prize in Morgan Stanley "Code to Give" Hackathon.
            </li>
            <li className="achievement" >
              2021: Merit based scholarship at New York University.
            </li>
            
                    
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Achievement is not about ‘doing something.’ Rather, it’s about ‘being someone."{" "}
          </p>
          <footer className="blockquote-footer">Craig D. Lounsbrough</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Achievement;