import { useState, useEffect } from "react";
import { Container, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { CertificationCard } from "./CertificationCard";
import Divider from "../Divider/Divider";
import Carousel from "react-multi-carousel";
import { certifications } from "../../config/certifications";

export const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
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
  
  return (
    <Box 
      component="section" 
      id="certifications" 
      className="relative px-4 sm:px-6 lg:px-8 overflow-hidden section-height flex items-center justify-center"
      style={{ scrollMarginTop: '80px' }}
    >
      <Container maxWidth="xl">
        <Box className={`bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl text-center py-12 sm:py-16 px-6 sm:px-12 lg:px-20 border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <Box className="mb-8 sm:mb-12">
            <Typography
              variant="h2"
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl font-bold mb-6 text-white"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #ffffff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 8px rgba(0,0,0,0.5)',
              }}
            >
              Professional Certifications
            </Typography>
            <Typography
              variant="body1"
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-center"
              sx={{ 
                fontFamily: 'CentraNo2, sans-serif',
                textAlign: 'center !important',
                display: 'block',
                width: '100%',
                margin: '0 auto',
              }}
            >
              Validated expertise through industry-recognized certifications that demonstrate my commitment to continuous learning and professional development.
            </Typography>
          </Box>
          
          {/* Certifications Carousel */}
          <Box className="w-full">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              className="certifications-slider"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {certifications.map((cert, index) => (
                <Box key={index} className="px-2 h-full">
                  <CertificationCard 
                    {...cert} 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
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
        <Box className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-30"></Box>
      </Box>



      <style>{`
        .custom-dot-list-style {
          bottom: -40px;
        }
        .custom-dot-list-style li button {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          width: 12px;
          height: 12px;
          margin: 0 4px;
        }
        .custom-dot-list-style li.react-multi-carousel-dot--active button {
          background: #00d4ff;
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        }
        .carousel-item-padding-40-px {
          padding: 0 20px;
        }
        .certifications-slider {
          height: auto;
        }
        .certifications-slider .react-multi-carousel-item {
          height: auto;
          display: flex;
        }
        .certifications-slider .react-multi-carousel-item > div {
          height: 100%;
          width: 100%;
        }
      `}</style>
    </Box>
  );
};
