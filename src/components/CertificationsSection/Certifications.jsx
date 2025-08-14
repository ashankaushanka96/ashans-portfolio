import { Container, Box, Typography } from "@mui/material";
import { CertificationCard } from "./CertificationCard";
import certImg1 from "../../assets/img/certificates/cert1.png";
import certImg2 from "../../assets/img/certificates/cert2.png";
import certImg3 from "../../assets/img/certificates/cert3.png";
import certImg4 from "../../assets/img/certificates/cert4.png";
import Carousel from "react-multi-carousel";

export const Certifications = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  const certifications = [
    {
      title: "AWS Certified Solution Architect Associate",
      description: ["Credential ID: AWS04794799", "Issued: Dec 2024"],
      imgUrl: certImg1,
      certLink:
        "https://www.credly.com/badges/d2a269c5-b8d8-4e1e-8511-45eef4e8279a/linked_in_profile",
    },
    {
      title: "RedHat Certified System Administrator",
      description: ["Credential ID: 220-087-555", "Issued: June 2022"],
      imgUrl: certImg2,
      certLink: "https://rhtapps.redhat.com/verify?certId=220-087-555",
    },
    {
      title: "The Complete Python Bootcamp from Zero to Hero in Python",
      description: [
        "Credential ID: UC-fa837d7d-dea8-416a-B617-taBe4431db0b",
        "Issued: Jan 2025",
      ],
      imgUrl: certImg3,
      certLink:
        "https://www.udemy.com/certificate/UC-fa837d7d-dca8-416a-86f7-1a8e4431db0b/",
    },
    {
      title: "React - The Complete Guide 2025 (incl Next.js, Redux)",
      description: [
        "Credential ID: UC-ce22178a-b424-4f1a-970d-a44b594f51ff",
        "Issued: Jan 2025",
      ],
      imgUrl: certImg4,
      certLink:
        "https://www.udemy.com/certificate/UC-ce22178a-b424-41fa-970d-a44b594f51ff/",
    },
  ];

  return (
    <Box 
      component="section" 
      id="certifications" 
      className="relative py-8 sm:py-12 bg-black text-center px-4 sm:px-0"
    >
      <Container maxWidth="lg">
        <Box className="bg-gray-900 rounded-2xl sm:rounded-3xl text-center py-8 sm:py-12 px-6 sm:px-12">
          <Typography
            variant="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Certifications
          </Typography>
          <Typography
            variant="body1"
            className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Browse through my professional certifications.
          </Typography>
          
          <Box className="w-full">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              className="certifications-slider"
            >
              {certifications.map((cert, index) => (
                <CertificationCard key={index} {...cert} />
              ))}
            </Carousel>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
