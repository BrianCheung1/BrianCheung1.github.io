import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { projects } from "./constants";
import { ProjectCards } from "./ProjectCards";

class Projects extends React.Component {
  getSkills = (listObj) => {
    return <ProjectCards {...listObj} />;
  };

  displayList = (list) => {
    return list.map((listObj) => this.getSkills(listObj));
  };
  render() {
    return (
      <Container
        fluid
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
        id="projects"
      >
          <Row className="projects">
            <Col>Latest Works</Col>
          </Row>
          <Row className="projectCards" lg={8}>
            {this.displayList(projects)}
          </Row>
      </Container>
    );
  }
}
export default Projects;
