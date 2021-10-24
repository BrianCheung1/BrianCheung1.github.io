import {
  Col,
  Card,
  Button,
  Badge,
} from "react-bootstrap";
import { AiOutlineGithub } from "react-icons/ai";
import { BsBoxArrowInUpRight } from "react-icons/bs";

function ProjectCards({ image, title, description, link, link2, tech }) {
  const getSkills = ({ tech }) => {
    let all = [];
    for (let skill in tech) {
      all.push(
        <Badge bg="success" style={{ marginRight: "10px" }}>
          {tech[skill]}
        </Badge>
      );
    }
    return all;
  };
  return (
    <Col lg={8}>
      <Card bg="dark" style={{ width: "auto", marginBottom: "10px" }}>
        <Card.Header className="cardTech">{getSkills({ tech })}</Card.Header>
        <Card.Img variant="top" src={image} />
        <Card.Body className="projectCardsBody">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" href={link} target="_blank">
            <AiOutlineGithub></AiOutlineGithub>
          </Button>
          {link2 !== "" ? (
            <Button
              variant="primary"
              href={link2}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <BsBoxArrowInUpRight></BsBoxArrowInUpRight>
            </Button>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}
export { ProjectCards };
