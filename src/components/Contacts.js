import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Toast,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
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
  renderLinkedin = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Linkedin Profile
    </Tooltip>
  );
  renderGithub = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Github Profile
    </Tooltip>
  );
  renderEmail = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Email
    </Tooltip>
  );

  render() {
    return (
      <Container
        fluid
        id="contacts"
      >
        <Row className="contacts" lg={6}>
          <Col>
            <OverlayTrigger
              placement="top"
              delay={{ show: 100, hide: 50 }}
              overlay={this.renderLinkedin}
            >
              <Button
                size="lg"
                href="https://www.linkedin.com/in/brian-cheung-a82a191a3/"
                target="_blank"
                className="contactButtons"
                style={{ marginRight: "10px" }}
              >
                <AiFillLinkedin></AiFillLinkedin>
              </Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              delay={{ show: 100, hide: 50 }}
              overlay={this.renderGithub}
            >
              <Button
                size="lg"
                href="https://github.com/BrianCheung1"
                target="_blank"
                className="contactButtons"
                style={{ marginRight: "10px" }}
              >
                <AiOutlineGithub></AiOutlineGithub>
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              delay={{ show: 100, hide: 50 }}
              overlay={this.renderEmail}
            >
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
            </OverlayTrigger>
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
