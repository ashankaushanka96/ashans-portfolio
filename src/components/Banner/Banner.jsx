import { useState, useEffect } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import headerImg from "../../assets/img/sre-png-4.png";
import bannerBg from "../../assets/img/banner-bg.jpg";

export const Banner = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Site Reliability Engineer", "DevOPS Engineer"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting ? fullText.slice(0, text.length - 1) : fullText.slice(0, text.length + 1);
      
      setText(updatedText);
      
      if (isDeleting) {
        setDelta(prev => prev / 2);
      }
      
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
        setDelta(500);
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [text, loopNum, isDeleting, delta]);

  return (
    <Box 
      component="section" 
      id="home"
      className="relative min-h-screen flex items-center pt-16 pb-12 sm:pb-24 px-4 sm:px-0"
      sx={{
        backgroundImage: `url(${bannerBg})`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="lg">
        <Box className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <Box className="opacity-100 translate-x-0 text-center lg:text-left">
            <Typography
              component="span"
              className="inline-block px-3 sm:px-4 py-2 sm:py-3 mb-4 sm:mb-6 text-sm sm:text-lg lg:text-xl font-black tracking-widest bg-gradient-to-r from-purple-600/80 to-blue-600/80 border-2 border-white/30 rounded-full shadow-lg backdrop-blur-sm"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                letterSpacing: '0.15em'
              }}
            >
              Welcome to my Portfolio
            </Typography>
            
            <Typography
              variant="h1"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-3 sm:mb-4 text-white"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                textShadow: '0 4px 8px rgba(0,0,0,0.5)',
                fontWeight: 900
              }}
            >
              Hi! I'm Ashan,
            </Typography>
            
            <Typography
              variant="h1"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4 sm:mb-6 text-accent"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                textShadow: '0 4px 8px rgba(0,0,0,0.5)',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {text}
            </Typography>
            
            <Typography
              variant="body1"
              className="text-base sm:text-lg lg:text-xl tracking-wide leading-relaxed mb-6 sm:mb-8 text-gray-200 max-w-4xl mx-auto lg:mx-0"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                fontWeight: 400,
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                lineHeight: 1.8
              }}
            >
              Highly motivated Site Reliability Engineer with extensive experience in optimizing system performance, automating infrastructure, and developing innovative solutions using generative AI, machine learning (ML), and deep learning (DL). Proven expertise in designing and managing cloud architectures, particularly on AWS, and implementing robust monitoring tools to ensure system reliability and efficiency. Seeking a challenging role in a forward-thinking organization where I can leverage my skills to drive operational excellence and advance my career.
            </Typography>
            
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg lg:text-xl font-black tracking-wider bg-gradient-to-r from-accent to-blue-500 hover:from-blue-500 hover:to-accent text-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={() => console.log('connect')}
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                fontWeight: 900,
                borderRadius: '50px',
                textTransform: 'none',
                boxShadow: '0 8px 25px rgba(0, 212, 255, 0.3)'
              }}
            >
              Let's Connect
            </Button>
          </Box>
          
          <Box className="flex justify-center lg:justify-end opacity-100 translate-x-0 mt-8 lg:mt-0">
            <Box className="animate-bounce">
              <img 
                src={headerImg} 
                alt="Header Img"
                className="w-64 sm:w-80 md:w-96 lg:w-full max-w-md h-auto drop-shadow-2xl"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
