// src/components/ProjectsSection/ProjectModal.jsx
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import "animate.css";
import "./Projects.css";
import PropTypes from "prop-types";

export const ProjectModal = ({
  show,
  onHide,
  title,
  description = [],
  images = [],
  repoUrl,
}) => (
  <Modal
    show={show}
    onHide={onHide}
    centered
    size="lg"
    dialogClassName="project-modal-dialog"
  >
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body className="project-modal-body">
      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={
              isVisible
                ? "animate__animated animate__fadeIn project-modal-content"
                : "project-modal-content"
            }
          >
            <ul className="project-description">
              {description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="project-images">
              {images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`${title} screenshot ${idx + 1}`}
                  className="project-image"
                />
              ))}
            </div>
          </div>
        )}
      </TrackVisibility>
    </Modal.Body>
    <Modal.Footer>
      <div className="project-modal-footer">
        {repoUrl && (
          <Button
            variant="dark"
            as="a"
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            <FaGithub size={18} />
            <span style={{ marginLeft: 8 }}>View on GitHub</span>
          </Button>
        )}
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </div>
    </Modal.Footer>
  </Modal>
);

ProjectModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string),
  images: PropTypes.arrayOf(PropTypes.string),
  repoUrl: PropTypes.string,
};
