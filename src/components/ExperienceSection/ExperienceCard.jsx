import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const ExperienceCard = ({ role, company, duration, responsibilities }) => {
  return (
    <Box className="p-4 sm:p-6 border border-gray-700/50 rounded-xl bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
      {/* Animated Background Glow */}
      <Box className="absolute inset-0 bg-gradient-to-br from-accent/5 via-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></Box>
      
      <Box className="relative z-10">
        <Typography
          variant="h4"
          className="text-xl sm:text-2xl font-semibold mb-2 text-white transition-all duration-300 group-hover:text-accent"
        >
          {role}
        </Typography>
        <Typography
          variant="h6"
          className="text-lg sm:text-xl font-medium mb-1 text-accent transition-all duration-300 group-hover:text-purple-400"
        >
          {company}
        </Typography>
        <Typography
          variant="body2"
          className="text-sm sm:text-base mb-3 sm:mb-4 text-gray-400 transition-all duration-300 group-hover:text-gray-300"
        >
          {duration}
        </Typography>
        <Box component="ul" className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-lg leading-relaxed">
          {responsibilities.map((item, index) => (
            <Box 
              component="li" 
              key={index}
              className="transition-all duration-300 hover:text-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Floating Elements */}
      <Box className="absolute top-3 right-3 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></Box>
      <Box className="absolute bottom-3 left-3 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping"></Box>
    </Box>
  );
};

export default ExperienceCard;

ExperienceCard.propTypes = {
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
};
