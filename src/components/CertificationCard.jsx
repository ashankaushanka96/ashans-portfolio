import React from "react";
import { Col } from "react-bootstrap";

export const CertificationCard = ({ title, description, imgUrl, certLink }) => {
  return (
    <Col sm={12} md={6} lg={4} className="mb-4"> {/* Responsive column */}
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
    </Col>
  );
};
