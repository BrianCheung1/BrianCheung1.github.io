import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoverPicture2 from "../images/CoverPicture2.svg";

class About extends React.Component {
  render() {
    return (
      <Container fluid style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <Row className="cover">
          <Col lg={6}>
            <img
              src={CoverPicture2}
              width="100%"
              height="auto"
              alt="placeholder"
            ></img>
          </Col>
          <Col lg={6}>
            <div className="about">About me</div>
            <div className="aboutDescription">
              Hello, I recent graduated from Hunter college as a with computer
              science degree. I enjoy working on applicaitons and website
              developement as well as exploring new ideas to work on. My goal is
              create applications that people enjoy and want to use on a daily
              basis. I want people to find my programs efficient and helpful to
              their daily lifesytles.
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default About;
