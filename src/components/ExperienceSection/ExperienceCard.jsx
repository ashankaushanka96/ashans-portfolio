import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const ExperienceCard = ({ role, company, duration, responsibilities }) => {
  return (
    <Box className="p-4 sm:p-6 border border-gray-700 rounded-xl bg-black/40 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
      <Typography
        variant="h4"
        className="text-xl sm:text-2xl font-semibold mb-2 text-white"
      >
        {role}
      </Typography>
      <Typography
        variant="h6"
        className="text-lg sm:text-xl font-medium mb-1 text-accent"
      >
        {company}
      </Typography>
      <Typography
        variant="body2"
        className="text-sm sm:text-base mb-3 sm:mb-4 text-gray-400"
      >
        {duration}
      </Typography>
      <Box component="ul" className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-lg leading-relaxed">
        {responsibilities.map((item, index) => (
          <Box component="li" key={index}>{item}</Box>
        ))}
      </Box>
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
