// src/components/ProjectsSection/ProjectModal.jsx
import React from "react";
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  Box, 
  Typography,
  IconButton
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

export const ProjectModal = ({
  open,
  onClose,
  title,
  description = [],
  images = [],
  repoUrl,
}) => (
  <Dialog
    open={open}
    onClose={onClose}
    maxWidth="md"
    fullWidth
    className="project-modal"
    PaperProps={{
      style: {
        backgroundColor: 'transparent',
        color: 'white',
        maxHeight: '90vh',
        margin: '16px',
        background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.95) 0%, rgba(17, 24, 39, 0.95) 100%)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.8)',
      }
    }}
    sx={{
      '& .MuiBackdrop-root': {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
      }
    }}
  >
    <DialogTitle className="flex justify-between items-center bg-gradient-to-r from-gray-900/90 to-gray-800/90 text-white border-b border-gray-700/50 p-4 sm:p-6 backdrop-blur-sm">
      <Typography variant="h5" className="font-bold text-lg sm:text-xl bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
        {title}
      </Typography>
      <IconButton
        onClick={onClose}
        className="text-white hover:text-accent transition-all duration-300 transform hover:scale-110 hover:rotate-90"
        sx={{
          '&:hover': {
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
          }
        }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    
    <DialogContent className="bg-transparent text-white p-4 sm:p-6">
      <Box className="opacity-100 animate-fade-in">
        {description && description.length > 0 && (
          <Box component="ul" className="list-disc pl-4 sm:pl-6 space-y-2 mb-4 sm:mb-6 text-gray-300">
            {description.map((point, i) => (
              <Box 
                component="li" 
                key={i} 
                className="text-sm sm:text-lg leading-relaxed transition-all duration-300 hover:text-white"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {point}
              </Box>
            ))}
          </Box>
        )}
        
        {images && images.length > 0 && (
          <Box className="space-y-3 sm:space-y-4">
            <Typography variant="h6" className="text-white mb-2 text-base sm:text-lg bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
              Screenshots:
            </Typography>
            {images.map((src, idx) => (
              <Box 
                key={idx} 
                className="transform transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <img
                  src={src}
                  alt={`${title} screenshot ${idx + 1}`}
                  className="w-full rounded-lg border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300"
                  style={{ maxHeight: '300px', objectFit: 'contain' }}
                />
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </DialogContent>
    
    <DialogActions className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 p-3 sm:p-4 flex flex-col sm:flex-row justify-between border-t border-gray-700/50 backdrop-blur-sm">
      <Box className="flex items-center w-full sm:w-auto">
        {repoUrl && (
          <Button
            variant="contained"
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-accent hover:from-accent hover:to-purple-600 text-white font-semibold px-3 sm:px-4 py-2 rounded-lg flex items-center space-x-2 text-sm sm:text-base w-full sm:w-auto transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            sx={{
              '&:hover': {
                boxShadow: '0 8px 25px rgba(0, 212, 255, 0.4)',
              }
            }}
          >
            <FaGithub size={18} />
            <span>View on GitHub</span>
          </Button>
        )}
      </Box>
      <Button
        variant="outlined"
        onClick={onClose}
        className="border-gray-400/50 text-gray-400 hover:border-accent hover:text-accent w-full sm:w-auto transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
        sx={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 212, 255, 0.05) 100%)',
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
          }
        }}
      >
        Close
      </Button>
    </DialogActions>

    <style jsx>{`
      .animate-fade-in {
        animation: fadeIn 0.5s ease-out;
      }
      @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
    `}</style>
  </Dialog>
);

ProjectModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string),
  images: PropTypes.arrayOf(PropTypes.string),
  repoUrl: PropTypes.string,
};
