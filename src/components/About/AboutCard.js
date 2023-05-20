import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arpita Mishra </span>
            from <span className="purple"> New York, US.</span>
            <br />I graduated with MS in Computer Engineering from New York University. 
            <br/>My GPA is <span className="purple">3.7/4</span>.
            <br /> 
           
            
            <br /> My grad curriculum :
            <br />
            <ul>
          
            <li className="Courses">
               Internet Architecture and Protocols
            </li>
            <li className="Courses">
               Computer System Architecture
            </li>
            <li className="Courses">
               Database Management Systems
            </li>
            <li className="Courses">
               Java Programming
            </li>
         
            <li className="Courses">
               Machine Learning
            </li>
            <li className="Courses">
               Network Security
            </li>
            <li className="Courses">
               Probability and Stochastic Processes
            </li>
          </ul>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Journaling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing blogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "It's the little details that matter and make the difference."{" "}
          </p>
          <footer className="blockquote-footer">Arpita Mishra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
