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
        backgroundColor: '#1f2937',
        color: 'white',
        maxHeight: '90vh',
        margin: '16px',
      }
    }}
  >
    <DialogTitle className="flex justify-between items-center bg-gray-900 text-white border-b border-gray-700 p-4 sm:p-6">
      <Typography variant="h5" className="font-bold text-lg sm:text-xl">
        {title}
      </Typography>
      <IconButton
        onClick={onClose}
        className="text-white hover:text-gray-300"
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    
    <DialogContent className="bg-gray-900 text-white p-4 sm:p-6">
      <Box className="opacity-100">
        {description && description.length > 0 && (
          <Box component="ul" className="list-disc pl-4 sm:pl-6 space-y-2 mb-4 sm:mb-6 text-gray-300">
            {description.map((point, i) => (
              <Box component="li" key={i} className="text-sm sm:text-lg leading-relaxed">
                {point}
              </Box>
            ))}
          </Box>
        )}
        
        {images && images.length > 0 && (
          <Box className="space-y-3 sm:space-y-4">
            <Typography variant="h6" className="text-white mb-2 text-base sm:text-lg">
              Screenshots:
            </Typography>
            {images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${title} screenshot ${idx + 1}`}
                className="w-full rounded border border-gray-700 shadow-lg"
                style={{ maxHeight: '300px', objectFit: 'contain' }}
              />
            ))}
          </Box>
        )}
      </Box>
    </DialogContent>
    
    <DialogActions className="bg-gray-900 p-3 sm:p-4 flex flex-col sm:flex-row justify-between border-t border-gray-700 space-y-2 sm:space-y-0">
      <Box className="flex items-center w-full sm:w-auto">
        {repoUrl && (
          <Button
            variant="contained"
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-pink-600 text-white font-semibold px-3 sm:px-4 py-2 rounded flex items-center space-x-2 text-sm sm:text-base w-full sm:w-auto"
          >
            <FaGithub size={18} />
            <span>View on GitHub</span>
          </Button>
        )}
      </Box>
      <Button
        variant="outlined"
        onClick={onClose}
        className="border-gray-400 text-gray-400 hover:border-white hover:text-white w-full sm:w-auto"
      >
        Close
      </Button>
    </DialogActions>
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
