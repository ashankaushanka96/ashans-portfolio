import PropTypes from "prop-types";
import { Box, Typography, Chip } from "@mui/material";
import { LocationOn, Work, Star } from "@mui/icons-material";

const ExperienceCard = ({ role, company, duration, location, responsibilities, technologies, achievements }) => {
  return (
    <Box className="p-6 sm:p-8 border border-gray-700/50 rounded-2xl bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
      {/* Animated Background Glow */}
      <Box className="absolute inset-0 bg-gradient-to-br from-accent/5 via-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></Box>
      
      <Box className="relative z-10">
        {/* Header Section */}
        <Box className="mb-6">
          <Typography
            variant="h4"
            className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-white transition-all duration-300 group-hover:text-accent"
            sx={{ fontFamily: 'CentraNo2, sans-serif' }}
          >
            {role}
          </Typography>
          
          <Box className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-4">
            <Box className="flex items-center gap-2">
              <Work className="text-accent text-lg" />
              <Typography
                variant="h6"
                className="text-lg sm:text-xl font-semibold text-accent transition-all duration-300 group-hover:text-purple-400"
                sx={{ fontFamily: 'CentraNo2, sans-serif' }}
              >
                {company}
              </Typography>
            </Box>
            
            {location && (
              <Box className="flex items-center gap-2">
                <LocationOn className="text-gray-400 text-sm" />
                <Typography
                  variant="body2"
                  className="text-sm text-gray-400 transition-all duration-300 group-hover:text-gray-300"
                  sx={{ fontFamily: 'CentraNo2, sans-serif' }}
                >
                  {location}
                </Typography>
              </Box>
            )}
          </Box>
          
          <Typography
            variant="body1"
            className="text-base sm:text-lg font-medium text-gray-300 transition-all duration-300 group-hover:text-gray-200"
            sx={{ fontFamily: 'CentraNo2, sans-serif' }}
          >
            {duration}
          </Typography>
        </Box>

        {/* Technologies Section */}
        {technologies && technologies.length > 0 && (
          <Box className="mb-6">
            <Typography
              variant="h6"
              className="text-base sm:text-lg font-semibold mb-3 text-white"
              sx={{ fontFamily: 'CentraNo2, sans-serif' }}
            >
              Technologies & Tools
            </Typography>
            <Box className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  size="small"
                  className="text-xs font-medium bg-gradient-to-r from-accent/20 to-purple-600/20 text-accent border border-accent/30 transition-all duration-300"
                  sx={{
                    fontFamily: 'CentraNo2, sans-serif',
                    '& .MuiChip-label': { px: 1 }
                  }}
                />
              ))}
            </Box>
          </Box>
        )}

        {/* Achievements Section */}
        {achievements && achievements.length > 0 && (
          <Box className="mb-6">
            <Typography
              variant="h6"
              className="text-base sm:text-lg font-semibold mb-3 text-white flex items-center gap-2"
              sx={{ fontFamily: 'CentraNo2, sans-serif' }}
            >
              <Star className="text-yellow-400 text-lg" />
              Key Achievements
            </Typography>
            <Box component="ul" className="list-disc pl-4 space-y-1 text-gray-300 text-sm sm:text-base leading-relaxed">
              {achievements.map((achievement, index) => (
                <Box 
                  component="li" 
                  key={index}
                  className="transition-all duration-300 hover:text-white"
                  sx={{ fontFamily: 'CentraNo2, sans-serif' }}
                >
                  {achievement}
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* Responsibilities Section */}
        <Box>
          <Typography
            variant="h6"
            className="text-base sm:text-lg font-semibold mb-3 text-white"
            sx={{ fontFamily: 'CentraNo2, sans-serif' }}
          >
            Key Responsibilities
          </Typography>
          <Box component="ul" className="list-disc pl-4 space-y-2 text-gray-300 text-sm sm:text-base leading-relaxed">
            {responsibilities.map((item, index) => (
              <Box 
                component="li" 
                key={index}
                className="transition-all duration-300 hover:text-white"
                sx={{ fontFamily: 'CentraNo2, sans-serif' }}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Floating Elements */}
      <Box className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></Box>
      <Box className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping"></Box>
    </Box>
  );
};

export default ExperienceCard;

ExperienceCard.propTypes = {
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  location: PropTypes.string,
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
  achievements: PropTypes.arrayOf(PropTypes.string),
};
