// src/components/ProjectsSection/ProjectCard.jsx
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Projects.css";

export const ProjectCard = ({ title, short_description, imgUrl, onClick }) => (
  <Col size={12} sm={6} md={4}>
    <div className="proj-imgbx" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={imgUrl} alt={title} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <h5>{short_description}</h5>
      </div>
    </div>
  </Col>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  short_description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
