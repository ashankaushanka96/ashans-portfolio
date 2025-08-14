import React from 'react';
import { Box, Typography } from '@mui/material';

export const SkillCard = ({ image, title }) => (
  <Box className="flex flex-col items-center p-2 sm:p-4 group">
    <Box className="relative">
      <Box className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-600/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></Box>
      <img 
        src={image} 
        alt={title} 
        className="w-1/2 sm:w-1/3 mb-2 sm:mb-4 mx-auto relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 drop-shadow-lg"
      />
    </Box>
    <Typography
      variant="h5"
      className="text-sm sm:text-lg font-medium text-white text-center transition-all duration-300 group-hover:text-accent group-hover:scale-105"
    >
      {title}
    </Typography>
  </Box>
);
