import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import CoverPicture2 from "../images/CoverPicture2.svg"

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
              My passion lies in creating applications and developing websites
              that people love using every day. I’m constantly exploring new
              ideas to challenge myself and grow as a developer. My goal is to
              build programs that are not only efficient and reliable but also
              enhance users' daily lives, making their experiences more
              streamlined and enjoyable.
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default About
