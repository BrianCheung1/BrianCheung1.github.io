import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { languages, technologies } from "./constants";
import { SkillCards } from "./SkillCards";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: true,
    };
  }

  getSkills = (listObj) => {
    return <SkillCards {...listObj} />;
  };

  displayList = (list) => {
    return list.map((listObj) => this.getSkills(listObj));
  };

  render() {
    return (
      <Container fluid style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <Row className="cover" id="skills">
          <Col span={10}>
            <div className="skills">Skills</div>
          </Col>
        </Row>
        <Row className="skillButtons">
          <Col span={12}>
            <Button
              variant="primary"
              onClick={() => {
                this.setState({
                  skills: true,
                });
              }}
              style={{marginRight:"10px"}}
            >
              Languages
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                this.setState({
                  skills: false,
                });
              }}
            >
              Technologies
            </Button>
          </Col>
        </Row>
        <Row className="skillNames">
          {this.displayList(this.state.skills ? languages : technologies)}
        </Row>
      </Container>
    );
  }
}
export default Skills;
