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
      className="pt-8 sm:pt-10 pb-4 px-4 sm:px-0"
      sx={{
        backgroundImage: `url(${footerBg})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="lg">
        <Box className="flex flex-col md:flex-row items-center justify-between">
          <Box className="mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="w-1/3 sm:w-1/4" />
          </Box>
          
          <Box className="text-center md:text-right">
            <Box className="flex justify-center md:justify-end space-x-3 sm:space-x-4 mb-4">
              <IconButton
                href="https://www.linkedin.com/in/ashan-kaushanka/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-10 border border-white border-opacity-50 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="text-white text-lg sm:text-xl" />
              </IconButton>
              <IconButton
                href="https://www.facebook.com/ashan.kaushanka/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-10 border border-white border-opacity-50 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="text-white text-lg sm:text-xl" />
              </IconButton>
              <IconButton
                href="https://github.com/ashankaushanka96"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-10 border border-white border-opacity-50 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                aria-label="GitHub"
              >
                <GitHubIcon className="text-white text-lg sm:text-xl" />
              </IconButton>
            </Box>
            
            <Typography
              variant="body2"
              className="text-xs sm:text-sm text-gray-400 tracking-wider"
            >
              Copyright 2022. All Rights Reserved
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
