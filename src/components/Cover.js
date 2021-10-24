import React from "react";
import { Container, Row, Col} from "react-bootstrap"
import CoverPicture from "../images/CoverPicture.svg"

class Cover extends React.Component {
  render() {
    return (
      <Container fluid style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <Row className="cover" id="home">
          <Col lg={6}>
            <div className="coverName">Brian Cheung</div>
            <div className="coverDescription">
              Software Engineer and Webdeveloper
            </div>
          </Col>
          <Col lg={6}>
            <img
              src={CoverPicture}
              alt="placeholder"
              width="100%"
              height="auto"
            ></img>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Cover;
