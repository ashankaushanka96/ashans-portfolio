import { useState, useEffect } from "react";
import { Container, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { CertificationCard } from "./CertificationCard";
import Divider from "../Divider/Divider";
import { CardsCarousel } from "../common/CardsCarousel";
import { certifications } from "../../config/certifications";

export const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box 
      component="section" 
      id="certifications" 
      className="relative px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center"
      style={{ scrollMarginTop: '96px', minHeight: 'min(80vh, 820px)' }}
    >
      <Container maxWidth="xl">
        <Box className={`w-full max-w-6xl mx-auto bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl text-center py-12 sm:py-16 px-6 sm:px-12 lg:px-16 border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 ${
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
            <CardsCarousel
              items={certifications}
              renderItem={(cert) => <CertificationCard {...cert} />}
            />
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



    </Box>
  );
};
