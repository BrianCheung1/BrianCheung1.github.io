import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoverPicture2 from "../images/CoverPicture2.svg";

class About extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className="aboutAll">
          <Col lg={6}>
            <img
              src={CoverPicture2}
              width="100%"
              height="auto"
              alt="placeholder"
              className="aboutPicture"
            ></img>
          </Col>
          <Col lg={6}>
            <div className="about">About me</div>
            <div className="aboutDescription">
              Hello, I recent graduated from Hunter college with computer
              science degree. I enjoy working on applications and website
              development. I am exploring new ideas to challenge myself. My goal
              is create applications that people enjoy and want to use on a
              daily basis. I want people to find my programs efficient and
              helpful to their daily lifesytles.
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default About;
