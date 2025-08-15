import { useState, useEffect } from "react";
import { Container, Box, Typography, IconButton, useTheme, useMediaQuery } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { KeyboardArrowUp, Email, Phone } from '@mui/icons-material';
import logo from "../../assets/img/logonew.svg";
import footerBg from "../../assets/img/footer-bg.png";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/in/ashan-kaushanka/",
      label: "LinkedIn",
      color: "hover:shadow-blue-500/50",
      delay: "0s"
    },
    {
      icon: <FacebookIcon />,
      href: "https://www.facebook.com/ashan.kaushanka/",
      label: "Facebook",
      color: "hover:shadow-blue-600/50",
      delay: "0.1s"
    },
    {
      icon: <GitHubIcon />,
      href: "https://github.com/ashankaushanka96",
      label: "GitHub",
      color: "hover:shadow-purple-500/50",
      delay: "0.2s"
    },
  ];

  return (
    <Box 
      component="footer" 
      className="pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
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
          background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.9) 100%)',
          zIndex: 1,
        }
      }}
    >
      <Container maxWidth="xl" className="relative z-10">
        <Box className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Main Footer Content */}
          <Box className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
            
            {/* Logo & Description */}
            <Box className="text-center md:text-left">
              <Box className="mb-6">
                <img 
                  src={logo} 
                  alt="Ashan Pathiranage" 
                  className="w-24 sm:w-32 mx-auto md:mx-0 transition-all duration-300 hover:scale-110 hover:rotate-3 drop-shadow-lg" 
                />
              </Box>
              <Typography
                variant="body1"
                className="text-gray-300 leading-relaxed mb-6"
                sx={{ fontFamily: 'CentraNo2, sans-serif' }}
              >
                Site Reliability Engineer passionate about building robust, scalable systems and driving operational excellence through automation and innovation.
              </Typography>
            </Box>

            {/* Quick Links */}
            <Box className="text-center md:text-left">
              <Typography
                variant="h6"
                className="text-xl font-bold mb-6 text-white"
                sx={{ fontFamily: 'CentraNo2, sans-serif' }}
              >
                Quick Links
              </Typography>
              <Box className="space-y-3">
                {[
                  { label: "Skills & Tools", href: "#skills" },
                  { label: "Experience", href: "#experience" },
                  { label: "Projects", href: "#projects" },
                  { label: "Certifications", href: "#certifications" },
                  { label: "Resume", href: "#cvsection" }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-300 hover:text-accent transition-all duration-300 transform hover:translate-x-2"
                    sx={{ fontFamily: 'CentraNo2, sans-serif' }}
                  >
                    {link.label}
                  </a>
                ))}
              </Box>
            </Box>

            {/* Contact & Social */}
            <Box className="text-center md:text-left">
              <Typography
                variant="h6"
                className="text-xl font-bold mb-6 text-white"
                sx={{ fontFamily: 'CentraNo2, sans-serif' }}
              >
                Connect With Me
              </Typography>
              
              {/* Contact Info */}
              <Box className="space-y-3 mb-6">
                <Box className="flex items-center justify-center md:justify-start gap-3">
                  <Email className="text-accent text-lg" />
                  <Typography
                    variant="body2"
                    className="text-gray-300"
                    sx={{ fontFamily: 'CentraNo2, sans-serif' }}
                  >
                    ashankaushanka96@gmail.com
                  </Typography>
                </Box>
                <Box className="flex items-center justify-center md:justify-start gap-3">
                  <Phone className="text-accent text-lg" />
                  <Typography
                    variant="body2"
                    className="text-gray-300"
                    sx={{ fontFamily: 'CentraNo2, sans-serif' }}
                  >
                    +94717584677
                  </Typography>
                </Box>
              </Box>

              {/* Social Links */}
              <Box className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:rotate-12 backdrop-blur-sm ${social.color}`}
                    aria-label={social.label}
                    style={{ animationDelay: social.delay }}
                    sx={{
                      '&:hover': {
                        boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Divider */}
          <Box className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></Box>

          {/* Bottom Section */}
          <Box className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Typography
              variant="body2"
              className="text-sm text-gray-400 tracking-wider"
              sx={{ fontFamily: 'CentraNo2, sans-serif' }}
            >
              © 2024 Ashan Pathiranage. All Rights Reserved.
            </Typography>
            
            <Typography
              variant="body2"
              className="text-sm text-gray-400"
              sx={{ fontFamily: 'CentraNo2, sans-serif' }}
            >
              Built with ❤️ using React & Material-UI
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Scroll to Top Button */}
      <Box className="fixed bottom-8 right-8 z-50">
        <IconButton
          onClick={scrollToTop}
          className="w-12 h-12 bg-gradient-to-r from-accent to-purple-600 text-white hover:from-purple-600 hover:to-accent transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
          sx={{
            '&:hover': {
              boxShadow: '0 8px 25px rgba(0, 212, 255, 0.4)',
            }
          }}
        >
          <KeyboardArrowUp />
        </IconButton>
      </Box>

      {/* Animated Background Elements */}
      <Box className="absolute inset-0 z-0">
        <Box className="absolute top-10 left-10 w-2 h-2 bg-accent rounded-full animate-pulse opacity-40"></Box>
        <Box className="absolute bottom-10 right-10 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30"></Box>
        <Box className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-20"></Box>
        <Box className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-50"></Box>
        <Box className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-30"></Box>
      </Box>
    </Box>
  );
};
