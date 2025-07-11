import { Container, Row, Col } from "react-bootstrap";
import "./CVSection.css";

const CvSection = () => {
  const cvPath = "assets/Ashan_Pathiranage.pdf"; // Path to your CV file in the public folder

  return (
    <section className="cv-section-dark" id="cvsection">
      <Container>
        <Row>
          <Col size={12}>
            <div className="cv-content">
              <h2>My Resume</h2>
              <p>Preview my Resume below or download a copy.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size={12}>
            {/* CV Preview */}
            <div className="cv-preview-dark">
              <iframe
                src={cvPath}
                title="CV Preview"
                frameBorder="0"
                width="100%"
                height="500px"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col size={12} className="text-center">
            {/* Download Button */}
            <a href={cvPath} download className="cv-download-button-dark">
              Download My Resume
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CvSection;
