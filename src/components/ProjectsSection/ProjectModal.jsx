// src/components/ProjectsSection/ProjectModal.jsx
import React, { useState, useEffect } from "react";
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  Box, 
  Typography,
  IconButton,
  Chip,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { Close as CloseIcon, Launch as LaunchIcon, GitHub as GitHubIcon } from "@mui/icons-material";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import PropTypes from "prop-types";

export const ProjectModal = ({
  open,
  onClose,
  title,
  description = [],
  images = [],
  repoUrl,
  category,
  status
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (open) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      className="project-modal"
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          color: 'white',
          maxHeight: '95vh',
          margin: isMobile ? '8px' : '24px',
          background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.98) 0%, rgba(31, 41, 55, 0.98) 50%, rgba(17, 24, 39, 0.98) 100%)',
          backdropFilter: 'blur(25px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          boxShadow: '0 32px 64px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.05)',
          overflow: 'hidden',
        }
      }}
      sx={{
        '& .MuiBackdrop-root': {
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(15px)',
        },
        '& .MuiDialog-paper': {
          transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }
      }}
    >
      {/* Header */}
      <DialogTitle className="relative bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 text-white border-b border-gray-700/30 p-4 sm:p-6 backdrop-blur-sm">
        {/* Animated Background */}
        <Box className="absolute inset-0 bg-gradient-to-r from-accent/10 via-purple-600/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></Box>
        
        <Box className="relative z-10 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <Box className="flex-1">
            <Typography 
              variant="h4" 
              className="font-bold text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent mb-2"
              sx={{ fontFamily: 'CentraNo2, sans-serif' }}
            >
              {title}
            </Typography>
            
            {/* Category and Status Badges */}
            <Box className="flex flex-wrap gap-2">
              {category && (
                <Chip
                  label={category}
                  size="small"
                  className="text-xs font-medium bg-gradient-to-r from-purple-500/20 to-accent/20 text-purple-300 border border-purple-500/30 backdrop-blur-sm"
                  sx={{
                    fontFamily: 'CentraNo2, sans-serif',
                    '& .MuiChip-label': { px: 1.5, py: 0.5 }
                  }}
                />
              )}
              {status && (
                <Chip
                  label={status}
                  size="small"
                  className={`text-xs font-medium backdrop-blur-sm ${
                    status === 'Completed' ? 'bg-gradient-to-r from-green-500/20 to-emerald-600/20 text-green-300 border border-green-500/30' :
                    status === 'In Progress' ? 'bg-gradient-to-r from-yellow-500/20 to-orange-600/20 text-yellow-300 border border-yellow-500/30' :
                    'bg-gradient-to-r from-blue-500/20 to-cyan-600/20 text-blue-300 border border-blue-500/30'
                  }`}
                  sx={{
                    fontFamily: 'CentraNo2, sans-serif',
                    '& .MuiChip-label': { px: 1.5, py: 0.5 }
                  }}
                />
              )}
            </Box>
          </Box>
          
          <IconButton
            onClick={onClose}
            className="text-white hover:text-accent transition-all duration-300 transform hover:scale-110 hover:rotate-90 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm"
            sx={{
              '&:hover': {
                boxShadow: '0 0 25px rgba(0, 212, 255, 0.6)',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      
      {/* Content */}
      <DialogContent className="bg-transparent text-white p-4 sm:p-6 overflow-y-auto">
        <Box className={`opacity-0 ${isVisible ? 'opacity-100' : ''} transition-all duration-700 delay-200`}>
          
          {/* Description Section */}
          {description && description.length > 0 && (
            <Box className="mb-6 sm:mb-8">
              <Typography 
                variant="h6" 
                className="text-white mb-4 text-lg sm:text-xl bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent font-semibold"
                sx={{ fontFamily: 'CentraNo2, sans-serif' }}
              >
                Project Overview
              </Typography>
              <Box component="ul" className="list-none space-y-3 sm:space-y-4">
                {description.map((point, i) => (
                  <Box 
                    component="li" 
                    key={i} 
                    className={`text-sm sm:text-base lg:text-lg leading-relaxed text-gray-300 transition-all duration-500 transform ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ 
                      animationDelay: `${i * 0.1}s`,
                      transitionDelay: `${i * 0.1}s`
                    }}
                    sx={{ fontFamily: 'CentraNo2, sans-serif' }}
                  >
                    <Box className="flex items-start gap-3">
                      <Box className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 animate-pulse"></Box>
                      <span className="hover:text-white transition-colors duration-300">{point}</span>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
          
          {/* Images Section */}
          {images && images.length > 0 && (
            <Box className="space-y-4 sm:space-y-6">
              <Typography 
                variant="h6" 
                className="text-white mb-4 text-lg sm:text-xl bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent font-semibold"
                sx={{ fontFamily: 'CentraNo2, sans-serif' }}
              >
                Project Screenshots
              </Typography>
              <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {images.map((src, idx) => (
                  <Box 
                    key={idx} 
                    className={`transform transition-all duration-700 hover:scale-105 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ 
                      animationDelay: `${idx * 0.2}s`,
                      transitionDelay: `${idx * 0.2}s`
                    }}
                  >
                    <Box className="relative group cursor-pointer overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
                      <img
                        src={src}
                        alt={`${title} screenshot ${idx + 1}`}
                        className="w-full h-48 sm:h-64 object-cover transition-all duration-500 group-hover:scale-110"
                      />
                      <Box className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                        <IconButton className="text-white bg-accent/80 hover:bg-accent backdrop-blur-sm">
                          <LaunchIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </DialogContent>
      
      {/* Footer Actions */}
      <DialogActions className="bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 p-4 sm:p-6 flex flex-col sm:flex-row justify-between gap-4 border-t border-gray-700/30 backdrop-blur-sm">
        <Box className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {repoUrl && (
            <Button
              variant="contained"
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-accent hover:from-accent hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-3 text-sm sm:text-base w-full sm:w-auto transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                '&:hover': {
                  boxShadow: '0 12px 30px rgba(0, 212, 255, 0.5)',
                }
              }}
            >
              <FaGithub size={20} />
              <span>View on GitHub</span>
            </Button>
          )}
        </Box>
        
        <Button
          variant="outlined"
          onClick={onClose}
          className="border-gray-400/50 text-gray-400 hover:border-accent hover:text-accent w-full sm:w-auto px-6 py-3 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm rounded-xl"
          sx={{
            fontFamily: 'CentraNo2, sans-serif',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 212, 255, 0.05) 100%)',
              boxShadow: '0 0 25px rgba(0, 212, 255, 0.4)',
            }
          }}
        >
          Close
        </Button>
      </DialogActions>

      {/* Animated Background Elements */}
      <Box className="absolute inset-0 pointer-events-none overflow-hidden">
        <Box className="absolute top-10 left-10 w-2 h-2 bg-accent rounded-full animate-pulse opacity-30"></Box>
        <Box className="absolute bottom-20 right-10 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-20"></Box>
        <Box className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-15"></Box>
      </Box>
    </Dialog>
  );
};

ProjectModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string),
  images: PropTypes.arrayOf(PropTypes.string),
  repoUrl: PropTypes.string,
  category: PropTypes.string,
  status: PropTypes.string,
};
