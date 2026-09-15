import { useState, useEffect } from "react";
import { Container, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ExperienceCarousel from "./ExperienceCarousel";
import colorSharp from "../../assets/shared/background-glow-secondary.png";
import { experiences } from "../../config/experience";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box
      component="section"
      id="experience"
      className="relative px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center"
      style={{ scrollMarginTop: 'var(--nav-height, 96px)', minHeight: 'calc(100vh - 88px)' }}
    >
      <Container maxWidth="xl" className="flex items-center justify-center h-full">
        <Box
          className="w-full max-w-5xl mx-auto flex flex-col"
          style={{ height: 'calc(100vh - 88px - 2rem)', maxHeight: 'calc(100vh - 88px - 2rem)' }}
        >
          {/* Section Header */}
          <Box className={`text-center flex-shrink-0 mb-1.5 sm:mb-3 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Typography
              variant="h2"
              className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-black tracking-tight mb-0.5 sm:mb-1 text-white"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #ffffff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 8px rgba(0,0,0,0.5)',
              }}
            >
              Professional Experience
            </Typography>
            <Typography
              variant="body1"
              className="text-xs sm:text-sm text-gray-300 max-w-3xl mx-auto leading-snug text-center"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                textAlign: 'center !important',
                display: { xs: 'none', sm: 'block' },
                width: '100%',
                margin: '0 auto',
              }}
            >
              My journey through various roles, each contributing to my growth as a Site Reliability Engineer and technology professional.
            </Typography>
          </Box>

          {/* Experience Carousel */}
          <Box className={`flex-1 min-h-0 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <ExperienceCarousel items={experiences} />
          </Box>
        </Box>
      </Container>

      {/* Background Image with Animation */}
      <img
        className="absolute top-1/3 right-0 bottom-0 w-1/2 sm:w-2/5 -z-10 animate-float-slow opacity-20"
        src={colorSharp}
        alt="background"
        style={{
          animation: 'floatSlow 8s ease-in-out infinite',
        }}
      />

      {/* Animated Background Elements */}
      <Box className="absolute inset-0 -z-10">
        <Box className="absolute top-20 right-10 w-2 h-2 bg-accent rounded-full animate-pulse opacity-40"></Box>
        <Box className="absolute bottom-20 left-10 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30"></Box>
        <Box className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-20"></Box>
        <Box className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-50"></Box>
        <Box className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-30"></Box>
      </Box>



      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
      `}</style>
    </Box>
  );
};

export default Experience;
