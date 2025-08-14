import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

export const ToolCard = ({ image, title, category }) => (
  <Box className="flex flex-col items-center p-4 sm:p-6 group">
    <Box className="relative mb-4">
      {/* Glow effect */}
      <Box className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-accent/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100"></Box>
      
      {/* Image container */}
      <Box className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 shadow-lg group-hover:shadow-xl transition-all duration-500">
        <img 
          src={image} 
          alt={title} 
          className="w-16 sm:w-20 h-auto relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-lg"
        />
      </Box>
    </Box>
    
    {/* Title */}
    <Typography
      variant="h6"
      className="text-base sm:text-lg font-semibold text-white text-center mb-2 transition-all duration-300 group-hover:text-purple-400 group-hover:scale-105"
      sx={{ fontFamily: 'CentraNo2, sans-serif' }}
    >
      {title}
    </Typography>
    
    {/* Category Badge */}
    {category && (
      <Chip
        label={category}
        size="small"
        className="text-xs font-medium bg-gradient-to-r from-purple-500/20 to-accent/20 text-purple-300 border border-purple-500/30 transition-all duration-300"
        sx={{
          fontFamily: 'CentraNo2, sans-serif',
          '& .MuiChip-label': {
            px: 1,
          }
        }}
      />
    )}
  </Box>
);
