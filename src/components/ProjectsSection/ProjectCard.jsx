// src/components/ProjectsSection/ProjectCard.jsx
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

export const ProjectCard = ({ title, short_description, imgUrl, onClick }) => (
  <Box 
    className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-4 sm:mb-6 cursor-pointer group"
    onClick={onClick}
  >
    <Box className="w-full flex items-center justify-center p-1 sm:p-2">
      <img 
        src={imgUrl} 
        alt={title} 
        className="w-full h-auto object-contain rounded-xl sm:rounded-2xl"
      />
    </Box>
    <Box className="absolute inset-0 bg-gradient-to-br from-pink-600/85 to-purple-600/85 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-in-out" />
    <Box className="absolute inset-0 flex flex-col justify-center items-start p-3 sm:p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-4 group-hover:translate-y-0">
      <Typography
        variant="h5"
        className="text-lg sm:text-xl font-bold tracking-wider mb-2"
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        className="text-sm sm:text-base leading-relaxed"
      >
        {short_description}
      </Typography>
    </Box>
  </Box>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  short_description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
