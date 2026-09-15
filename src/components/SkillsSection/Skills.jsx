import { useState, useEffect } from "react";
import { SkillCard } from './SkillCard';
import { ToolCard } from './ToolCard';
import { Container, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Divider from "../Divider/Divider";
import { CardsCarousel } from "../common/CardsCarousel";

const skillsBreakpoints = {
  480: { slidesPerView: 2 },
  768: { slidesPerView: 3 },
  1024: { slidesPerView: 4 },
  1280: { slidesPerView: 5 },
};
import colorSharp from "../../assets/skills/background-glow.png";
import { skills, toolsAndPlatforms } from "../../config/skills";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box 
      component="section" 
      id="skills" 
      className="relative px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center"
      style={{ scrollMarginTop: '96px', minHeight: 'calc(100vh - 88px)' }}
    >
      <Container maxWidth="xl" className="flex items-center justify-center">
        <Box className="space-y-2 sm:space-y-3 w-full max-w-6xl mx-auto text-center pt-5 sm:pt-6 pb-4 sm:pb-5">
          {/* Section Header */}
          <Box className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Typography
              variant="h2"
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-2xl 4xl:text-3xl font-bold mb-1 text-white"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #ffffff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 8px rgba(0,0,0,0.5)',
                textAlign: 'center',
              }}
            >
              Skills & Expertise
            </Typography>
            <Typography
              variant="body1"
              className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-tight text-center"
              sx={{ 
                fontFamily: 'CentraNo2, sans-serif',
                textAlign: 'center !important',
                display: 'block',
                width: '100%',
                margin: '0 auto',
              }}
            >
              A comprehensive overview of my technical skills and the tools I use to build robust, scalable solutions.
            </Typography>
          </Box>

          {/* Technical Skills Section */}
          <Box className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Box className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl pt-2 pb-2 px-6 sm:px-12 lg:px-16 border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 mb-2">
              <Typography
                variant="h3"
                className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg 3xl:text-lg 4xl:text-xl font-bold mb-1 text-white"
                sx={{
                  fontFamily: 'CentraNo2, sans-serif',
                  background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textAlign: 'center',
                }}
              >
                Technical Skills
              </Typography>
              
              <Box className="w-full mx-auto">
                <CardsCarousel
                  items={skills}
                  breakpoints={skillsBreakpoints}
                  slideMaxWidth="220px"
                  spaceBetween={8}
                  autoplayDelay={3000}
                  renderItem={(skill) => (
                    <SkillCard image={skill.image} title={skill.title} level={skill.level} />
                  )}
                />
              </Box>
            </Box>
          </Box>

          {/* Tools & Technologies Section */}
          <Box className={`transition-all duration-1000 delay-400 mt-2 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Box className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl pt-2 pb-2 px-6 sm:px-12 lg:px-16 border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
              <Typography
                variant="h3"
                className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg 3xl:text-lg 4xl:text-xl font-bold mb-1 text-white"
                sx={{
                  fontFamily: 'CentraNo2, sans-serif',
                  background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textAlign: 'center',
                }}
              >
                Tools & Technologies
              </Typography>
              
              <Box className="w-full mx-auto">
                <CardsCarousel
                  items={toolsAndPlatforms}
                  breakpoints={skillsBreakpoints}
                  slideMaxWidth="220px"
                  spaceBetween={8}
                  autoplayDelay={2500}
                  renderItem={(tool) => (
                    <ToolCard image={tool.image} title={tool.title} category={tool.category} />
                  )}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      
      {/* Background Image with Animation */}
      <img 
        className="absolute top-1/4 bottom-0 w-1/2 sm:w-2/5 -z-10 animate-float-slow opacity-20" 
        src={colorSharp} 
        alt="Background" 
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

        /* Force text centering for all Typography components in Skills section */
        #skills .MuiTypography-root {
          text-align: center !important;
          display: block !important;
          width: 100% !important;
        }
        #skills .MuiTypography-h2,
        #skills .MuiTypography-h3,
        #skills .MuiTypography-body1 {
          text-align: center !important;
          display: block !important;
          width: 100% !important;
        }
      `}</style>
    </Box>
  );
};
