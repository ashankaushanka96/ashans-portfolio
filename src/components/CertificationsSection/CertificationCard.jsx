import PropTypes from "prop-types";
import { Box, Typography, Button, Chip } from "@mui/material";
import { Verified, School, Category } from "@mui/icons-material";
import { CertificateBadge } from "./CertificateBadge";

export const CertificationCard = ({ title, description, logo, certLink, issuer, level, category }) => {
  return (
    <Box className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center shadow-xl hover:shadow-2xl mx-1 sm:mx-2 border border-gray-700/50 transition-all duration-500 transform hover:-translate-y-3 group flex flex-col">
      {/* Animated Background Glow */}
      <Box className="absolute inset-0 bg-gradient-to-br from-accent/10 via-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></Box>

      <Box className="relative z-10 flex flex-col">
        {/* Badge Container */}
        <Box className="mb-4 sm:mb-6 flex-shrink-0">
          <CertificateBadge title={title} logo={logo} />
        </Box>

        {/* Content Container */}
        <Box className="cert-content flex flex-col">
          {/* Title */}
          <Box className="flex items-center justify-center min-h-[52px] sm:min-h-[58px] mb-3 flex-shrink-0">
            <Typography
              variant="h6"
              className="font-bold line-clamp-2 transition-all duration-300 group-hover:text-accent"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                fontSize: { xs: '1rem', sm: '1.125rem' },
                lineHeight: 1.3,
              }}
            >
              {title}
            </Typography>
          </Box>

          {/* Badges */}
          <Box className="flex flex-wrap justify-center gap-2 mb-4 min-h-[68px] flex-shrink-0">
            {issuer && (
              <Chip
                icon={<School />}
                label={issuer}
                size="small"
                className="text-xs font-medium bg-gradient-to-r from-blue-500/20 to-cyan-600/20 text-blue-300 border border-blue-500/30"
                sx={{
                  fontFamily: 'CentraNo2, sans-serif',
                  '& .MuiChip-label': { px: 1 }
                }}
              />
            )}
            {level && (
              <Chip
                icon={<Verified />}
                label={level}
                size="small"
                className="text-xs font-medium bg-gradient-to-r from-green-500/20 to-emerald-600/20 text-green-300 border border-green-500/30"
                sx={{
                  fontFamily: 'CentraNo2, sans-serif',
                  '& .MuiChip-label': { px: 1 }
                }}
              />
            )}
            {category && (
              <Chip
                icon={<Category />}
                label={category}
                size="small"
                className="text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-600/20 text-purple-300 border border-purple-500/30"
                sx={{
                  fontFamily: 'CentraNo2, sans-serif',
                  '& .MuiChip-label': { px: 1 }
                }}
              />
            )}
          </Box>

          {/* Description */}
          <Box
            component="ul"
            className="list-none p-0 m-0 mb-4 text-gray-400 text-xs sm:text-sm space-y-1 min-h-[40px] sm:min-h-[44px] flex-shrink-0"
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            {description.map((point, index) => (
              <Box
                component="li"
                key={index}
                className="transition-all duration-300 hover:text-gray-300"
                sx={{ fontFamily: 'CentraNo2, sans-serif' }}
              >
                {point}
              </Box>
            ))}
          </Box>

          {/* CTA Button */}
          <Button
            variant="contained"
            onClick={() => window.open(certLink, "_blank")}
            className="bg-gradient-to-r from-purple-600 to-accent hover:from-accent hover:to-purple-600 text-white font-semibold px-4 sm:px-6 py-2 rounded-xl transition-all duration-300 text-sm sm:text-base transform hover:scale-105 shadow-lg hover:shadow-xl flex-shrink-0"
            sx={{
              fontFamily: 'CentraNo2, sans-serif',
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
      <Box className="absolute top-3 right-3 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></Box>
      <Box className="absolute bottom-3 left-3 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping"></Box>
    </Box>
  );
};

CertificationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  logo: PropTypes.string.isRequired,
  certLink: PropTypes.string.isRequired,
  issuer: PropTypes.string,
  level: PropTypes.string,
  category: PropTypes.string,
};
