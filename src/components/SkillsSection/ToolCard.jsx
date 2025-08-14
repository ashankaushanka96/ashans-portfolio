import React from 'react';
import { Box, Typography } from '@mui/material';

export const ToolCard = ({ image, title }) => (
  <Box className="flex flex-col items-center p-2 sm:p-4">
    <img 
      src={image} 
      alt={title} 
      className="w-1/2 sm:w-1/3 mb-2 sm:mb-4 mx-auto"
    />
    <Typography
      variant="h5"
      className="text-sm sm:text-lg font-medium text-white text-center"
    >
      {title}
    </Typography>
  </Box>
);
