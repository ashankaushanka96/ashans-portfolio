import { useState, useEffect } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import headerImg from "../../assets/img/sre-png-4.png";
import bannerBg from "../../assets/img/banner-bg.jpg";

export const Banner = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  const toRotate = [
    "Site Reliability Engineer", 
    "DevOPS Engineer"
  ];
  const period = 3000; // Time to show each text
  const typingSpeed = 100; // Speed of typing animation



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
      // Wait before starting to type the next text
      const timeout = setTimeout(() => {
        setCurrentTextIndex(prev => (prev + 1) % toRotate.length);
        setIsTyping(true);
        setDisplayedText("");
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [currentTextIndex, isTyping, toRotate.length]);

  return (
    <Box 
      component="section" 
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ scrollMarginTop: '20px' }}
      sx={{
        backgroundImage: `url(${bannerBg})`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)',
          zIndex: 1,
        }
      }}
    >
      {/* Animated Background Elements */}
      <Box className="absolute inset-0 z-0 pointer-events-none">
        <Box className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse opacity-30"></Box>
        <Box className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-20"></Box>
        <Box className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-25"></Box>
        <Box className="absolute top-60 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-35"></Box>
      </Box>

      <Container maxWidth="lg" className="relative z-10">
        <Box className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <Box className="opacity-100 translate-x-0 text-center lg:text-left animate-fade-in-up overflow-hidden relative z-10">
            <Typography
              component="span"
              className="inline-block px-3 sm:px-4 py-2 sm:py-3 mb-6 sm:mb-8 text-sm sm:text-lg lg:text-xl font-black tracking-widest bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-blue-600/90 border border-white/30 rounded-full shadow-2xl backdrop-blur-sm animate-float relative z-10"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                letterSpacing: '0.15em',
                animation: 'float 3s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0px)' },
                  '50%': { transform: 'translateY(-10px)' },
                }
              }}
            >
              Welcome to my Portfolio
            </Typography>
            
            <Typography
              variant="h1"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4 sm:mb-6 text-white animate-slide-in-left relative z-10"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                textShadow: '0 4px 8px rgba(0,0,0,0.5)',
                fontWeight: 900,
                animation: 'slideInLeft 1s ease-out',
                '@keyframes slideInLeft': {
                  '0%': { transform: 'translateX(-100px)', opacity: 0 },
                  '100%': { transform: 'translateX(0)', opacity: 1 },
                }
              }}
            >
              Hi! I'm Ashan,
            </Typography>
            
            <Box style={{ height: '20em', minHeight: '20em', maxHeight: '20em', overflow: 'hidden' }}>
              <Typography
                variant="h1"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6 sm:mb-8 text-accent animate-slide-in-right relative z-10"
                sx={{
                  fontFamily: 'CentraNo2, sans-serif',
                  textShadow: '0 4px 8px rgba(0,0,0,0.5)',
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 50%, #00d4ff 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'slideInRight 1s ease-out 0.3s both',
                  '@keyframes slideInRight': {
                    '0%': { transform: 'translateX(100px)', opacity: 0 },
                    '100%': { transform: 'translateX(0)', opacity: 1 },
                  },
                  whiteSpace: 'pre-line',
                  lineHeight: 1.1,
                  color: '#00d4ff', // Fallback color
                  textAlign: 'left'
                }}
              >
                {displayedText}
              </Typography>
            </Box>
            
            <Typography
              variant="body1"
              className="text-base sm:text-lg lg:text-xl tracking-wide leading-relaxed mb-8 sm:mb-10 text-gray-200 max-w-4xl mx-auto lg:mx-0 animate-fade-in-up"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                fontWeight: 400,
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                lineHeight: 1.8,
                animation: 'fadeInUp 1s ease-out 0.6s both',
                '@keyframes fadeInUp': {
                  '0%': { transform: 'translateY(30px)', opacity: 0 },
                  '100%': { transform: 'translateY(0)', opacity: 1 },
                }
              }}
            >
              Highly motivated Site Reliability Engineer with extensive experience in optimizing system performance, automating infrastructure, and developing innovative solutions using generative AI, machine learning (ML), and deep learning (DL). Proven expertise in designing and managing cloud architectures, particularly on AWS, and implementing robust monitoring tools to ensure system reliability and efficiency. Seeking a challenging role in a forward-thinking organization where I can leverage my skills to drive operational excellence and advance my career.
            </Typography>
            
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward className="animate-bounce-x" />}
              className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg lg:text-xl font-black tracking-wider bg-gradient-to-r from-accent via-blue-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-accent text-primary transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-110 animate-fade-in-up"
              onClick={() => console.log('connect')}
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                fontWeight: 900,
                borderRadius: '50px',
                textTransform: 'none',
                boxShadow: '0 8px 25px rgba(0, 212, 255, 0.3)',
                animation: 'fadeInUp 1s ease-out 0.9s both, glow 2s ease-in-out infinite alternate',
                '@keyframes glow': {
                  '0%': { boxShadow: '0 8px 25px rgba(0, 212, 255, 0.3)' },
                  '100%': { boxShadow: '0 8px 35px rgba(0, 212, 255, 0.6)' },
                },
                '&:hover': {
                  boxShadow: '0 12px 40px rgba(0, 212, 255, 0.8)',
                }
              }}
            >
              Let's Connect
            </Button>
          </Box>
          
          <Box className="flex justify-center lg:justify-end opacity-100 translate-x-0 mt-12 lg:mt-0 animate-fade-in-up">
            <Box className="animate-float-slow relative">
              <Box className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></Box>
              <img 
                src={headerImg} 
                alt="Header Img"
                className="w-64 sm:w-80 md:w-96 lg:w-full max-w-md h-auto drop-shadow-2xl relative z-10 animate-float-slow"
                style={{
                  animation: 'floatSlow 4s ease-in-out infinite',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>

      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
        .animate-float-slow {
          animation: floatSlow 4s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out both;
        }
        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out both;
        }
        .animate-slide-in-right {
          animation: slideInRight 1s ease-out 0.3s both;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          from, to { color: transparent; }
          50% { color: currentColor; }
        }
      `}</style>
    </Box>
  );
};
