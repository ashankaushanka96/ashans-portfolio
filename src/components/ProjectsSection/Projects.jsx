// src/components/ProjectsSection/Projects.jsx
import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import Divider from "../Divider/Divider";
import colorSharp2 from "../../assets/shared/background-glow-secondary.png";
import { projects } from "../../config/projects";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <Box 
      component="section" 
      id="projects" 
      className="relative px-4 sm:px-6 lg:px-8 overflow-hidden section-height flex items-center justify-center"
      style={{ scrollMarginTop: '96px' }}
    >
      <Container maxWidth="xl">
        <Box className="space-y-2 sm:space-y-3 px-6 sm:px-10 lg:px-16">
          {/* Section Header */}
          <Box className="text-center mb-0">
            <Typography
              variant="h2"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #ffffff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 8px rgba(0,0,0,0.5)',
              }}
            >
              Featured Projects
            </Typography>
            <Typography
              variant="body1"
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-center"
              sx={{ 
                fontFamily: 'CentraNo2, sans-serif',
                textAlign: 'center !important',
                display: 'block',
                width: '100%',
                margin: '0 auto',
              }}
            >
              Explore my portfolio of innovative solutions and technical implementations. Click on any project to learn more about the technologies used and the challenges solved.
            </Typography>
          </Box>
          
          {/* Projects Grid */}
          <Grid container spacing={{ xs: 3, sm: 4, lg: 5 }}>
            {projects.map((proj, idx) => (
              <Grid item xs={12} sm={6} lg={4} key={idx} className="h-full">
                <Box 
                  className={`h-full transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <ProjectCard
                    title={proj.title}
                    short_description={proj.short_description}
                    imgUrl={proj.imgUrl}
                    category={proj.category}
                    status={proj.status}
                    onClick={() => handleCardClick(proj)}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <ProjectModal
        open={showModal}
        onClose={handleClose}
        title={selectedProject?.title || "Project Details"}
        description={selectedProject?.description || []}
        images={selectedProject?.images || []}
        repoUrl={selectedProject?.repoUrl}
        category={selectedProject?.category}
        status={selectedProject?.status}
      />

      {/* Animated Background Elements */}
      <Box className="absolute inset-0 -z-10">
        <Box className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse opacity-40"></Box>
        <Box className="absolute bottom-20 right-10 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30"></Box>
        <Box className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-20"></Box>
        <Box className="absolute top-1/3 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-50"></Box>
        <Box className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-30"></Box>
      </Box>

      {/* Background Image */}
      <img
        className="absolute top-0 right-0 w-1/3 sm:w-1/4 -z-10 animate-float-slow opacity-20"
        src={colorSharp2}
        alt="background"
        style={{
          animation: 'floatSlow 10s ease-in-out infinite',
        }}
      />



      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float-slow {
          animation: floatSlow 10s ease-in-out infinite;
        }
      `}</style>
    </Box>
  );
};
