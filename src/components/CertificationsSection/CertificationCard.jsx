import PropTypes from "prop-types";

export const CertificationCard = ({ title, description, imgUrl, certLink }) => {
  return (
    <div className="cert-card">
      <img src={imgUrl} alt={title} />
      <div className="cert-content">
        <h4>{title}</h4>
        <ul>
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <button
          onClick={() => window.open(certLink, "_blank")}
          className="view-cert-button"
        >
          View Certificate
        </button>
      </div>
    </div>
  );
};

CertificationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  imgUrl: PropTypes.string.isRequired,
  certLink: PropTypes.string.isRequired,
};
