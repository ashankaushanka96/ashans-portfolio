// src/components/ProjectsSection/ProjectCard.jsx
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

export const ProjectCard = ({ title, short_description, imgUrl, onClick }) => (
  <Box 
    className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-4 sm:mb-6 cursor-pointer group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
    onClick={onClick}
  >
    {/* Animated Background Glow */}
    <Box className="absolute inset-0 bg-gradient-to-br from-accent/10 via-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></Box>
    
    <Box className="w-full flex items-center justify-center p-1 sm:p-2 relative z-10">
      <img 
        src={imgUrl} 
        alt={title} 
        className="w-full h-auto object-contain rounded-xl sm:rounded-2xl transition-all duration-500 group-hover:scale-105 drop-shadow-lg"
      />
    </Box>
    
    {/* Enhanced Hover Overlay */}
    <Box className="absolute inset-0 bg-gradient-to-br from-pink-600/90 via-purple-600/90 to-blue-600/90 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out backdrop-blur-sm" />
    
    <Box className="absolute inset-0 flex flex-col justify-center items-start p-3 sm:p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-4 group-hover:translate-y-0">
      <Typography
        variant="h5"
        className="text-lg sm:text-xl font-bold tracking-wider mb-2 drop-shadow-lg"
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        className="text-sm sm:text-base leading-relaxed drop-shadow-lg"
      >
        {short_description}
      </Typography>
    </Box>

    {/* Floating Elements */}
    <Box className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></Box>
    <Box className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping"></Box>
  </Box>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  short_description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
