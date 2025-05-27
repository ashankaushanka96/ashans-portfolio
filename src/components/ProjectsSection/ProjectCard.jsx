import { Col } from "react-bootstrap";
import PropTypes from "prop-types";

export const ProjectCard = ({ title, description, imgUrl, onClick }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div
        className="proj-imgbx"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <ul>
            {description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </Col>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  imgUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
