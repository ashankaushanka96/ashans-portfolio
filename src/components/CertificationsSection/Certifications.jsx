import { Container, Row, Col } from "react-bootstrap";
import { CertificationCard } from "./CertificationCard";
import certImg1 from "../../assets/img/certificates/cert1.png";
import certImg2 from "../../assets/img/certificates/cert2.png";
import certImg3 from "../../assets/img/certificates/cert3.png";
import Carousel from 'react-multi-carousel';
import './Certifications.css'


export const Certifications = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
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
    }
  ];

  return (
    <section className="certifications" id="certifications">
      <Container>
        <Col>
          <Row className="certifications-bx">
            <h2>Certifications</h2>
            <p>Browse through my professional certifications.</p>
            <Carousel responsive={responsive} infinite={true} autoPlay={false} autoPlaySpeed={2000}  className="certifications-slider">
              {certifications.map((cert, index) => (
                <CertificationCard key={index} {...cert} />
              ))}
            </Carousel>
          </Row>
        </Col>
      </Container>
    </section>
  );
};
