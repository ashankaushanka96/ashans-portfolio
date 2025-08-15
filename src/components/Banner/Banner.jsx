import { useState, useEffect } from "react";
import { Container, Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { ArrowForward, KeyboardArrowDown } from "@mui/icons-material";
import headerImg from "../../assets/img/sre-png-4.png";
import bannerBg from "../../assets/img/banner-bg.jpg";
import Divider from "../Divider/Divider";

export const Banner = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  
  const toRotate = [
    "Site Reliability Engineer", 
    "DevOps Engineer",
    "Cloud Architect",
    "AI/ML Enthusiast"
  ];
  const period = 3000;
  const typingSpeed = 100;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isTyping) {
      const currentText = toRotate[currentTextIndex];
      let charIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (charIndex <= currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex));
          charIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    } else {
      const timeout = setTimeout(() => {
        setCurrentTextIndex(prev => (prev + 1) % toRotate.length);
        setIsTyping(true);
        setDisplayedText("");
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [currentTextIndex, isTyping, toRotate.length]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('connect');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box 
      component="section" 
      id="home"
      className="relative section-height-lg flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ scrollMarginTop: '20px' }}
      sx={{
        backgroundImage: `url(${bannerBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%)',
          zIndex: 1,
        }
      }}
    >
      {/* Animated Background Elements */}
      <Box className="absolute inset-0 z-0 pointer-events-none">
        {/* Floating particles */}
        <Box className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse opacity-30"></Box>
        <Box className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-20"></Box>
        <Box className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-25"></Box>
        <Box className="absolute top-60 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-35"></Box>
        <Box className="absolute top-80 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-20"></Box>
        <Box className="absolute bottom-60 right-10 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-25"></Box>
        
        {/* Grid pattern overlay */}
        <Box 
          className="absolute inset-0 opacity-5"
          sx={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}
        />
      </Box>

      <Container maxWidth="xl" className="relative z-10">
        <Box className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <Box 
            className={`text-center lg:text-left transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Welcome Badge */}
            <Box className="inline-flex items-center px-4 py-2 mb-6 sm:mb-8 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 border border-white/20 rounded-full backdrop-blur-sm animate-float">
              <Box className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse"></Box>
              <Typography
                component="span"
                className="text-sm sm:text-base font-medium tracking-wider text-white"
                sx={{ fontFamily: 'CentraNo2, sans-serif' }}
              >
                Welcome to my Portfolio
              </Typography>
            </Box>
            
            {/* Main Heading */}
            <Typography
              variant="h1"
              className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl 5xl:text-9xl font-black tracking-tight leading-none mb-4 sm:mb-6 text-white banner-main-heading"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                textShadow: '0 4px 8px rgba(0,0,0,0.5)',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Hi! I'm Ashan
            </Typography>
            
            {/* Animated Role Text */}
            <Box className="h-4 sm:h-6 md:h-8 lg:h-16 xl:h-20 2xl:h-24 3xl:h-28 4xl:h-32 5xl:h-36 mb-6 sm:mb-8 flex items-center justify-center lg:justify-start banner-typing-container">
              <Typography
                variant="h2"
                className="text-xs sm:text-sm md:text-base lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl font-black tracking-tight leading-tight text-accent banner-typing-text"
                sx={{
                  fontFamily: 'CentraNo2, sans-serif',
                  textShadow: '0 4px 8px rgba(0,0,0,0.5)',
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 50%, #00d4ff 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  minHeight: '1.2em',
                  display: 'flex',
                  alignItems: 'center',
                  '&::after': {
                    content: '""',
                    width: '2px',
                    height: '1em',
                    backgroundColor: '#00d4ff',
                    marginLeft: '4px',
                    animation: 'blink 1s step-end infinite',
                  }
                }}
              >
                {displayedText}
              </Typography>
            </Box>
            
            {/* Description */}
            <Typography
              variant="body1"
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-wide leading-relaxed mb-8 sm:mb-10 pb-4 sm:pb-6 text-gray-200 max-w-2xl mx-auto lg:mx-0"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                fontWeight: 400,
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                lineHeight: 1.8,
              }}
            >
              Highly motivated Site Reliability Engineer with extensive experience in optimizing system performance, 
              automating infrastructure, and developing innovative solutions using generative AI, machine learning (ML), 
              and deep learning (DL). Proven expertise in designing and managing cloud architectures, particularly on AWS, 
              and implementing robust monitoring tools to ensure system reliability and efficiency.
            </Typography>
            
            {/* CTA Buttons */}
            <Box className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Button
                variant="contained"
                size="large"
                href="https://www.linkedin.com/in/ashan-kaushanka/"
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<ArrowForward className="animate-bounce-x" />}
                className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-accent via-blue-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-accent text-white transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-105"
                sx={{
                  fontFamily: 'CentraNo2, sans-serif',
                  fontWeight: 700,
                  borderRadius: '50px',
                  textTransform: 'none',
                  boxShadow: '0 8px 25px rgba(0, 212, 255, 0.3)',
                  '&:hover': {
                    boxShadow: '0 12px 40px rgba(0, 212, 255, 0.8)',
                  }
                }}
              >
                Let's Connect
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                className="px-8 py-4 text-lg font-bold border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-500"
                onClick={() => window.open('/assets/Ashan_Pathiranage.pdf', '_blank')}
                sx={{
                  fontFamily: 'CentraNo2, sans-serif',
                  fontWeight: 700,
                  borderRadius: '50px',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                Download CV
              </Button>
            </Box>
          </Box>
          
          {/* Right Content - Image */}
          <Box className="flex justify-center lg:justify-end mt-12 lg:mt-0">
            <Box 
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Glow effect */}
              <Box className="absolute inset-0 bg-gradient-to-r from-accent/30 to-purple-600/30 rounded-full blur-3xl animate-pulse scale-110"></Box>
              
              {/* Image container with glass effect */}
              <Box className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-4 border border-white/10 shadow-2xl">
                <img 
                  src={headerImg} 
                  alt="Ashan Pathiranage - SRE Engineer"
                  className="w-64 sm:w-80 md:w-96 lg:w-full max-w-md h-auto drop-shadow-2xl animate-float-slow"
                  style={{
                    animation: 'floatSlow 4s ease-in-out infinite',
                  }}
                />
              </Box>
              
              {/* Floating tech badges */}
              <Box className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-float">
                AWS
              </Box>
              <Box className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-float" style={{ animationDelay: '1s' }}>
                DevOps
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <Box className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <KeyboardArrowDown 
          className="text-white/60 text-4xl cursor-pointer hover:text-accent transition-colors duration-300"
          onClick={() => {
            const nextSection = document.querySelector('#about') || document.querySelector('#skills');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      </Box>



      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
        .animate-float-slow {
          animation: floatSlow 4s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </Box>
  );
};
