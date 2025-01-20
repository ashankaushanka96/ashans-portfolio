import { Container, Row, Col } from "react-bootstrap";
import { CertificationCard } from "./CertificationCard";
import certImg1 from "../assets/img/certificates/cert1.png";
import certImg2 from "../assets/img/certificates/cert2.png";
import certImg3 from "../assets/img/certificates/cert3.png";


export const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solution Architect Associate",
      description: ["Credential ID: AWS04794799", "Issued: Dec 2024"],
      imgUrl: certImg1,
      certLink: "https://www.credly.com/badges/d2a269c5-b8d8-4e1e-8511-45eef4e8279a/linked_in_profile",
    },
    {
      title: "RedHat Certified System Administrator",
      description: ["Credential ID: 220-087-555", "Issued: June 2022"],
      imgUrl: certImg2,
      certLink: "https://rhtapps.redhat.com/verify?certId=220-087-555",
    },
    {
        title: "The Complete Python Bootcamp from Zero to Hero in Python",
        description: ["Credential ID: UC-fa837d7d-dea8-416a-B617-taBe4431db0b", "Issued: Jan 2025"],
        imgUrl: certImg3,
        certLink: "https://www.udemy.com/certificate/UC-fa837d7d-dca8-416a-86f7-1a8e4431db0b/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
      },
  ];

  return (
    <section className="certifications" id="certifications">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Certifications</h2>
            <p>Browse through my professional certifications.</p>
            <Row>
              {certifications.map((cert, index) => (
                <CertificationCard key={index} {...cert} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
