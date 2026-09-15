import { useState, useEffect } from "react";
import { Container, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { CertificationCard } from "./CertificationCard";
import Divider from "../Divider/Divider";
import { CardsCarousel } from "../common/CardsCarousel";
import { certifications } from "../../config/certifications";
import { useColorMode } from "../../contexts/ColorModeContext";

const certificationsBreakpoints = {
  0: { slidesPerView: 1.15, spaceBetween: -60 },
  400: { slidesPerView: 1.3, spaceBetween: -50 },
  480: { slidesPerView: 2, spaceBetween: -20 },
  768: { slidesPerView: 3, spaceBetween: 20 },
  1024: { slidesPerView: 4, spaceBetween: 20 },
  1280: { slidesPerView: 5, spaceBetween: 20 },
};

export const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode } = useColorMode();
  const isDark = mode === 'dark';

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box 
      component="section" 
      id="certifications" 
      className="relative px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center"
      style={{ scrollMarginTop: 'var(--nav-height, 96px)', minHeight: 'calc(100vh - 88px)' }}
    >
      <Container maxWidth="xl">
        <Box className={`w-full mx-auto text-center py-8 sm:py-10 px-6 sm:px-12 lg:px-16 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <Box className="mb-4 sm:mb-6">
            <Typography
              variant="h2"
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-black tracking-tight mb-1 text-slate-900 dark:text-white"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                fontWeight: 900,
                background: isDark
                  ? 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #ffffff 100%)'
                  : 'linear-gradient(135deg, #0f172a 0%, #00a8d4 50%, #0f172a 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: isDark ? '0 4px 8px rgba(0,0,0,0.5)' : 'none',
              }}
            >
              Professional Certifications
            </Typography>
            <Typography
              variant="body1"
              className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-snug text-center"
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
              breakpoints={certificationsBreakpoints}
              spaceBetween={20}
              pagination
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
