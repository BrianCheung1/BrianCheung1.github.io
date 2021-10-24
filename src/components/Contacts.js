import React from "react";
import { Container, Row, Col, Button, Toast } from "react-bootstrap";
import { AiFillLinkedin, AiOutlineGithub, AiFillMail } from "react-icons/ai";

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showA: false,
    };
  }
  toggleShowA = () => {
    this.setState({
      showA: false,
    });
  };

  render() {
    return (
      <Container
        fluid
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
        id="contacts"
      >
        <Row className="contacts" md={6}>
          <Col>
            <Button
              size="lg"
              href="https://www.linkedin.com/in/brian-cheung-a82a191a3/"
              target="_blank"
              className="contactButtons"
              style={{ marginRight: "10px" }}
            >
              <AiFillLinkedin></AiFillLinkedin>
            </Button>
            <Button
              size="lg"
              href="https://github.com/BrianCheung1"
              target="_blank"
              className="contactButtons"
              style={{ marginRight: "10px" }}
            >
              <AiOutlineGithub></AiOutlineGithub>
            </Button>
            <Button
              size="lg"
              onClick={() => {
                navigator.clipboard.writeText(
                  "brian.cheung1@baruchmail.cuny.edu"
                );
                this.setState({
                  showA: true,
                });
              }}
              className="contactButtons"
            >
              <AiFillMail></AiFillMail>
            </Button>

            <Toast
              show={this.state.showA}
              onClose={this.toggleShowA}
              delay={1000}
              autohide
              bg="dark"
            >
              <Toast.Body>Copied</Toast.Body>
            </Toast>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Contacts;
