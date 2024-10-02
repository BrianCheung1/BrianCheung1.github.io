import { Col, Card, Button, Badge } from "react-bootstrap"
import { AiOutlineGithub } from "react-icons/ai"
import { BsBoxArrowInUpRight } from "react-icons/bs"

function ProjectCards({ image, title, description, link, link2, tech }) {
  const getSkills = ({ tech }) => {
    let all = []
    for (let skill in tech) {
      all.push(
        <Badge
          bg=""
          style={{
            marginRight: "10px",
            backgroundColor: "#b8ca88",
            color: "#000",
          }}
        >
          {tech[skill]}
        </Badge>
      )
    }
    return all
  }
  return (
    <Col lg={8}>
      <Card
        bg=""
        border="dark"
        style={{
          width: "auto",
          marginBottom: "20px",
          backgroundColor: "#282828",
        }}
        className="projectSlide"
      >
        <Card.Header className="cardTech">{getSkills({ tech })}</Card.Header>
        <Card.Img variant="top" src={image} />
        <Card.Body className="projectCardsBody">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button
            variant="primary"
            href={link}
            target="_blank"
            style={{
              marginLeft: "10px",
              backgroundColor: "#b8ca88",
              outline: "none",
              border: "0",
              color: "#000",
            }}
          >
            <AiOutlineGithub></AiOutlineGithub>
          </Button>
          {link2 !== "" ? (
            <Button
              variant="primary"
              href={link2}
              target="_blank"
              style={{
                marginLeft: "10px",
                backgroundColor: "#b8ca88",
                outline: "none",
                border: "0",
                color: "#000",
              }}
            >
              <BsBoxArrowInUpRight></BsBoxArrowInUpRight>
            </Button>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    </Col>
  )
}
export { ProjectCards }
