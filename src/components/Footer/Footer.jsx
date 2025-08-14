import { Container, Box, Typography, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from "../../assets/img/logonew.svg";
import footerBg from "../../assets/img/footer-bg.png";

export const Footer = () => {
  return (
    <Box 
      component="footer" 
      className="pt-8 sm:pt-10 pb-4 px-4 sm:px-0 overflow-hidden"
      sx={{
        backgroundImage: `url(${footerBg})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
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
      <Container maxWidth="lg" className="relative z-10">
        <Box className="flex flex-col md:flex-row items-center justify-between">
          <Box className="mb-4 md:mb-0 animate-fade-in-up">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-1/3 sm:w-1/4 transition-transform duration-300 hover:scale-110 drop-shadow-lg" 
            />
          </Box>
          
          <Box className="text-center md:text-right animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Box className="flex justify-center md:justify-end space-x-3 sm:space-x-4 mb-4">
              <IconButton
                href="https://www.linkedin.com/in/ashan-kaushanka/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:rotate-12 backdrop-blur-sm animate-float"
                aria-label="LinkedIn"
                sx={{
                  '&:hover': {
                    boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
                  }
                }}
              >
                <LinkedInIcon className="text-white text-lg sm:text-xl" />
              </IconButton>
              <IconButton
                href="https://www.facebook.com/ashan.kaushanka/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:-rotate-12 backdrop-blur-sm animate-float"
                style={{ animationDelay: '0.1s' }}
                aria-label="Facebook"
                sx={{
                  '&:hover': {
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                  }
                }}
              >
                <FacebookIcon className="text-white text-lg sm:text-xl" />
              </IconButton>
              <IconButton
                href="https://github.com/ashankaushanka96"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:rotate-12 backdrop-blur-sm animate-float"
                style={{ animationDelay: '0.2s' }}
                aria-label="GitHub"
                sx={{
                  '&:hover': {
                    boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)',
                  }
                }}
              >
                <GitHubIcon className="text-white text-lg sm:text-xl" />
              </IconButton>
            </Box>
            
            <Typography
              variant="body2"
              className="text-xs sm:text-sm text-gray-400 tracking-wider animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              Copyright 2022. All Rights Reserved
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Animated Background Elements */}
      <Box className="absolute inset-0 z-0">
        <Box className="absolute top-10 left-10 w-2 h-2 bg-accent rounded-full animate-pulse opacity-40"></Box>
        <Box className="absolute bottom-10 right-10 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30"></Box>
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
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </Box>
  );
};
