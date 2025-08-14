import PropTypes from "prop-types";
import { Box, Typography, Button } from "@mui/material";

export const CertificationCard = ({ title, description, imgUrl, certLink }) => {
  return (
    <Box className="bg-gray-900 rounded-xl p-3 sm:p-5 text-center shadow-lg mx-1 sm:mx-2">
      <img 
        src={imgUrl} 
        alt={title} 
        className="w-full rounded-lg mb-3 sm:mb-4"
      />
      <Box className="cert-content">
        <Typography
          variant="h6"
          className="text-sm sm:text-lg font-bold mb-2 sm:mb-3 line-clamp-2 leading-tight"
        >
          {title}
        </Typography>
        <Box component="ul" className="list-none p-0 m-0 mb-3 sm:mb-4 text-gray-400 text-xs sm:text-base space-y-1">
          {description.map((point, index) => (
            <Box component="li" key={index}>{point}</Box>
          ))}
        </Box>
        <Button
          variant="contained"
          onClick={() => window.open(certLink, "_blank")}
          className="bg-purple-600 hover:bg-pink-600 text-white font-semibold px-3 sm:px-5 py-2 rounded transition-colors duration-300 text-sm sm:text-base"
        >
          View Certificate
        </Button>
      </Box>
    </Box>
  );
};

CertificationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  imgUrl: PropTypes.string.isRequired,
  certLink: PropTypes.string.isRequired,
};
