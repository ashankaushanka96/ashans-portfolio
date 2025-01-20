import React from "react";
import { Col } from "react-bootstrap";

export const CertificationCard = ({ title, description, imgUrl, certLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
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
