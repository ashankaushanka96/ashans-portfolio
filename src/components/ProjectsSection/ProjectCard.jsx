// src/components/ProjectsSection/ProjectCard.jsx
import PropTypes from "prop-types";
import { Box, Typography, Chip } from "@mui/material";

export const ProjectCard = ({ title, short_description, imgUrl, category, status, onClick }) => (
  <Box 
    className="relative rounded-3xl overflow-hidden cursor-pointer group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full flex flex-col min-h-[400px] sm:min-h-[450px] md:min-h-[500px]"
    onClick={onClick}
  >
    {/* Animated Background Glow */}
    <Box className="absolute inset-0 bg-gradient-to-br from-accent/10 via-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></Box>
    
    {/* Image Container */}
    <Box className="w-full flex items-center justify-center p-4 sm:p-6 relative z-0">
      <Box className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 shadow-lg group-hover:shadow-xl transition-all duration-500">
        <img 
          src={imgUrl} 
          alt={title} 
          className="w-full h-32 sm:h-40 object-contain rounded-xl transition-all duration-500 group-hover:scale-105 drop-shadow-lg"
        />
      </Box>
    </Box>
    
    {/* Content Container */}
    <Box className="p-4 sm:p-6 relative z-0 flex-1 flex flex-col">
      {/* Title and Badges */}
      <Box className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <Typography
          variant="h5"
          className="text-lg sm:text-xl font-bold text-white group-hover:text-accent transition-all duration-300"
          sx={{ fontFamily: 'CentraNo2, sans-serif' }}
        >
          {title}
        </Typography>
        
        {/* Status and Category Badges */}
        <Box className="flex flex-wrap gap-2">
          {category && (
            <Chip
              label={category}
              size="small"
              className="text-xs font-medium bg-gradient-to-r from-purple-500/20 to-accent/20 text-purple-300 border border-purple-500/30"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                '& .MuiChip-label': { px: 1 }
              }}
            />
          )}
          {status && (
            <Chip
              label={status}
              size="small"
              className={`text-xs font-medium ${
                status === 'Completed' ? 'bg-gradient-to-r from-green-500/20 to-emerald-600/20 text-green-300 border border-green-500/30' :
                status === 'In Progress' ? 'bg-gradient-to-r from-yellow-500/20 to-orange-600/20 text-yellow-300 border border-yellow-500/30' :
                'bg-gradient-to-r from-blue-500/20 to-cyan-600/20 text-blue-300 border border-blue-500/30'
              }`}
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                '& .MuiChip-label': { px: 1 }
              }}
            />
          )}
        </Box>
      </Box>
      
      {/* Description */}
      <Typography
        variant="body2"
        className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-all duration-300 flex-1"
        sx={{ fontFamily: 'CentraNo2, sans-serif' }}
      >
        {short_description}
      </Typography>
    </Box>
    
    {/* Enhanced Hover Overlay */}
    <Box className="absolute inset-0 bg-gradient-to-br from-pink-600/90 via-purple-600/90 to-blue-600/90 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out backdrop-blur-sm z-20" />
    
    {/* Hover Content */}
    <Box className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-4 group-hover:translate-y-0 z-30">
      <Typography
        variant="h5"
        className="text-xl sm:text-2xl font-bold tracking-wider mb-4 drop-shadow-lg text-center"
        sx={{ fontFamily: 'CentraNo2, sans-serif' }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        className="text-sm sm:text-base leading-relaxed drop-shadow-lg text-center"
        sx={{ fontFamily: 'CentraNo2, sans-serif' }}
      >
        Click to learn more
      </Typography>
    </Box>

    {/* Floating Elements */}
    <Box className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></Box>
    <Box className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping"></Box>
  </Box>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  short_description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  category: PropTypes.string,
  status: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
