import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

export const SkillCard = ({ image, title, level }) => (
  <Box className="flex flex-col items-center p-1.5 sm:p-2 group h-[152px] sm:h-[176px]">
          <Box className="relative mb-1.5">
      {/* Glow effect */}
      <Box className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-600/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100"></Box>

      {/* Image container */}
      <Box className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/10 shadow-lg group-hover:shadow-xl transition-all duration-500">
        <img
          src={image}
          alt={title}
          className="w-16 sm:w-[72px] h-auto relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 drop-shadow-lg"
        />
      </Box>
    </Box>

    {/* Title */}
    <Box className="flex items-center justify-center min-h-[28px] sm:min-h-[30px] mb-1">
      <Typography
        variant="h6"
        className="font-semibold text-white text-center line-clamp-2 transition-all duration-300 group-hover:text-accent group-hover:scale-105"
        sx={{
          fontFamily: 'CentraNo2, sans-serif',
          fontSize: { xs: '0.8125rem', sm: '0.875rem' },
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>
    </Box>

    {/* Level Badge */}
    {level && (
      <Chip
        label={level}
        size="small"
        className={`text-xs font-medium transition-all duration-300 ${
          level === 'Expert' ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' :
          level === 'Advanced' ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white' :
          'bg-gradient-to-r from-yellow-500 to-orange-600 text-white'
        }`}
        sx={{
          fontFamily: 'CentraNo2, sans-serif',
          height: 22,
          fontSize: '0.6875rem',
          '& .MuiChip-label': {
            px: 1,
          }
        }}
      />
    )}
  </Box>
);
