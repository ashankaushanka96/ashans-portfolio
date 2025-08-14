import PropTypes from "prop-types";
import { Box, Typography, Button } from "@mui/material";

export const CertificationCard = ({ title, description, imgUrl, certLink }) => {
  return (
    <Box className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-3 sm:p-5 text-center shadow-xl hover:shadow-2xl mx-1 sm:mx-2 border border-gray-700/50 transition-all duration-500 transform hover:-translate-y-2 group h-full flex flex-col min-h-[350px] sm:min-h-[400px]">
      {/* Animated Background Glow */}
      <Box className="absolute inset-0 bg-gradient-to-br from-accent/10 via-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></Box>
      
      <Box className="relative z-10 flex flex-col h-full">
        <Box className="relative overflow-hidden rounded-lg mb-3 sm:mb-4 flex-shrink-0">
          <img 
            src={imgUrl} 
            alt={title} 
            className="w-full h-28 sm:h-36 object-cover rounded-lg transition-all duration-500 group-hover:scale-105 drop-shadow-lg"
          />
          <Box className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></Box>
        </Box>
        
        <Box className="cert-content flex flex-col flex-grow">
          <Typography
            variant="h6"
            className="text-sm sm:text-lg font-bold mb-2 sm:mb-3 line-clamp-2 leading-tight transition-all duration-300 group-hover:text-accent flex-shrink-0"
          >
            {title}
          </Typography>
          <Box component="ul" className="list-none p-0 m-0 mb-3 sm:mb-4 text-gray-400 text-xs sm:text-base space-y-1 flex-grow">
            {description.map((point, index) => (
              <Box 
                component="li" 
                key={index}
                className="transition-all duration-300 hover:text-gray-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {point}
              </Box>
            ))}
          </Box>
          <Button
            variant="contained"
            onClick={() => window.open(certLink, "_blank")}
            className="bg-gradient-to-r from-purple-600 to-accent hover:from-accent hover:to-purple-600 text-white font-semibold px-3 sm:px-5 py-2 rounded-lg transition-all duration-300 text-sm sm:text-base transform hover:scale-105 shadow-lg hover:shadow-xl flex-shrink-0 mt-auto"
            sx={{
              '&:hover': {
                boxShadow: '0 8px 25px rgba(0, 212, 255, 0.4)',
              }
            }}
          >
            View Certificate
          </Button>
        </Box>
      </Box>

      {/* Floating Elements */}
      <Box className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></Box>
      <Box className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping"></Box>
    </Box>
  );
};

CertificationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  imgUrl: PropTypes.string.isRequired,
  certLink: PropTypes.string.isRequired,
};
