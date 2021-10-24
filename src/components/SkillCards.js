import {Col,} from "react-bootstrap";

function SkillCards({ name, icon }) {
  return (
    <Col>
      <div className="skillIcons">{icon}</div>
      {name}
    </Col>
  );
}
export { SkillCards };
