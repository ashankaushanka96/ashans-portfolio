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
      className="relative py-16 sm:py-20 bg-black text-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ scrollMarginTop: '20px' }}
    >
      <Container maxWidth="lg">
        <Box className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl text-center py-12 sm:py-20 px-6 sm:px-12 lg:px-16 border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          <Typography
            variant="h2"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-white animate-fade-in-up"
            sx={{
              background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #ffffff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'fadeInUp 1s ease-out',
              '@keyframes fadeInUp': {
                '0%': { transform: 'translateY(30px)', opacity: 0 },
                '100%': { transform: 'translateY(0)', opacity: 1 },
              }
            }}
          >
            Certifications
          </Typography>
          <Typography
            variant="body1"
            className="text-base sm:text-lg text-gray-400 mb-10 sm:mb-16 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            sx={{
              animation: 'fadeInUp 1s ease-out 0.3s both',
              '@keyframes fadeInUp': {
                '0%': { transform: 'translateY(30px)', opacity: 0 },
                '100%': { transform: 'translateY(0)', opacity: 1 },
              }
            }}
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
                <Box key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CertificationCard {...cert} />
                </Box>
              ))}
            </Carousel>
          </Box>
        </Box>
      </Container>

      {/* Animated Background Elements */}
      <Box className="absolute inset-0 -z-10">
        <Box className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse opacity-40"></Box>
        <Box className="absolute bottom-20 right-10 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30"></Box>
        <Box className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-20"></Box>
        <Box className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-50"></Box>
      </Box>

      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out both;
        }
        @keyframes fadeInUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </Box>
  );
};
