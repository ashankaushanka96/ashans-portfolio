// src/components/ProjectsSection/Projects.jsx
import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

import projImg1 from "../../assets/img/project-images/bruno-project.png";
import projImg2 from "../../assets/img/project-images/server-migration-project.png";
import projImg3 from "../../assets/img/project-images/datadog.png";
import projImg4 from "../../assets/img/project-images/gitlab-project.png";
import projImg5 from "../../assets/img/project-images/monitoring-tool.png";
import projImg6 from "../../assets/img/project-images/FTPFileDownloader.png";
import projImg7 from "../../assets/img/project-images/ComponentWatcher.png";
import projImg8 from "../../assets/img/project-images/ComponentInventory.png";
import projImg9 from "../../assets/img/project-images/InstanceScheduler.png";
import projImg10 from "../../assets/img/project-images/OperationsDashboard.png";
import projImg10_1 from "../../assets/img/project-images/ComponentsSection.png";
import projImg10_2 from "../../assets/img/project-images/EC2DetailsSection.png";
import projImg10_3 from "../../assets/img/project-images/EC2SchedulesSection.png";
import projImg10_4 from "../../assets/img/project-images/Route53Section.png";
import projImg10_5 from "../../assets/img/project-images/ServerStartStopSection.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "AI Bruno (Ongoing)",
      imgUrl: projImg1,
      description: [
        "A chat assistant built with LangChain and custom tool integrations.",
        "Proactively monitors and diagnoses system health.",
      ],
      short_description:
        "Advanced AI-powered chat assistant built with LangChain framework, featuring proactive system monitoring, custom tool integrations, and intelligent response generation for enhanced user experience.",
      images: [projImg1],
      category: "AI/ML",
      status: "In Progress"
    },
    {
      title: "Server Migration in AWS",
      imgUrl: projImg2,
      description: [
        "Migrated critical infrastructure across regions.",
        "Optimized AMIs and automated security hardening.",
      ],
      short_description:
        "Comprehensive AWS infrastructure migration project involving cross-region server transfers, AMI optimization for performance, and automated security hardening protocols to ensure data integrity and compliance.",
      images: [projImg2],
      category: "Cloud",
      status: "Completed"
    },
    {
      title: "Datadog Configuration",
      imgUrl: projImg3,
      description: [
        "End-to-end Datadog APM, logs, and synthetic monitoring.",
        "Custom dashboards and alerts for performance optimization.",
      ],
      short_description:
        "End-to-end Datadog monitoring implementation featuring Application Performance Monitoring (APM), centralized log management, synthetic monitoring checks, and custom dashboard creation for comprehensive system observability.",
      images: [projImg3],
      category: "Monitoring",
      status: "Completed"
    },
    {
      title: "GitLab Pipeline Migration",
      imgUrl: projImg4,
      description: [
        "Transitioned CI/CD from Bamboo/Bitbucket to GitLab.",
        "Leveraged Terraform, Packer, and Ansible.",
      ],
      short_description:
        "Complete CI/CD pipeline migration from Bamboo/Bitbucket to GitLab, leveraging Infrastructure as Code with Terraform, automated image building with Packer, and configuration management using Ansible for streamlined deployment processes.",
      images: [projImg4],
      category: "DevOps",
      status: "Completed"
    },
    {
      title: "Monitoring Tool",
      imgUrl: projImg5,
      description: [
        "React + Python app for real-time component and port health.",
        "Notification support for critical events.",
      ],
      short_description:
        "Full-stack monitoring solution built with React frontend and Python backend, providing real-time health monitoring for system components, port status tracking, and instant notification alerts for critical system events.",
      images: [projImg5],
      repoUrl: "https://github.com/ashankaushanka96/component-checker",
      category: "Full-Stack",
      status: "Completed"
    },
    {
      title: "FTP File Downloader",
      imgUrl: projImg6,
      description: [
        "Automates FTP file downloads, comparisons, and updates based on patterns.",
        "Performs ISIN validation, backups, and detailed logging with rotation.",
        "Sends email notifications summarizing the update status.",
      ],
      short_description:
        "Sophisticated Python automation tool for FTP file management featuring automated downloads, intelligent file comparison, ISIN validation, automated backup systems, and comprehensive email notification reporting for operational transparency.",
      images: [projImg6],
      repoUrl: "https://github.com/ashankaushanka96/ftp-file-downloader",
      category: "Automation",
      status: "Completed"
    },
    {
      title: "Component Watcher",
      imgUrl: projImg7,
      description: [
        "Monitors multiple components concurrently with thread-based parallelism.",
        "Automatically restarts processes, tracking PID and uptime metrics.",
        "Integrates with AWS Secrets Manager, SES, and Datadog for metrics and alerts.",
        "Offers YAML/INI configuration and dynamic context-aware logging.",
      ],
      short_description:
        "Advanced multi-threaded monitoring solution with Datadog integration, automatic process restart capabilities, PID tracking, uptime metrics, AWS Secrets Manager integration, and dynamic logging with YAML/INI configuration support.",
      images: [projImg7],
      repoUrl: "https://github.com/ashankaushanka96/component-watcher",
      category: "Monitoring",
      status: "Completed"
    },
    {
      title: "Component Inventory",
      imgUrl: projImg8,
      description: [
        "Automatically detects components in specified directories.",
        "Fetches components from remote sources on demand.",
        "Searches for components using flexible criteria.",
        "Manages server configurations and details with a unified interface.",
      ],
      short_description:
        "Comprehensive Python-based component management system featuring automatic component detection, remote source fetching, advanced search capabilities, server configuration management, and unified interface for complete component lifecycle control.",
      images: [projImg8],
      repoUrl: "https://github.com/ashankaushanka96/component-inventory",
      category: "Automation",
      status: "Completed"
    },
    {
      title: "Instance Scheduler",
      imgUrl: projImg9,
      description: [
        "Uses AWS Lambda and CloudWatch events to automate EC2 start/stop schedules.",
        "Supports cron-style tag expressions for granular timing control.",
        "Logs all actions and errors via CloudWatch for observability.",
        "Scales across DEV, UAT, and PROD environments through Terraform.",
      ],
      short_description:
        "Serverless EC2 lifecycle automation solution using AWS Lambda and CloudWatch events, featuring cron-style tag expressions for granular scheduling, comprehensive logging via CloudWatch, and scalable deployment across DEV, UAT, and PROD environments.",
      images: [projImg9],
      repoUrl: "https://github.com/ashankaushanka96/instance-scheduler",
      category: "Cloud",
      status: "Completed"
    },
    {
      title: "Operations Dashboard",
      imgUrl: projImg10,
      description: [
        "Component Section: shows component details (IP, version, path, last run time, last deployment date) with filters by name, IP or version.",
        "EC2 Details Section: lists all AWS EC2 instances in the configured account, with full filtering support.",
        "EC2 Schedules Section: view existing EC2 start/stop schedules or create new schedules.",
        "Route53 Section: view and toggle Route 53 records between primary and secondary.",
        "Server Start/Stop Section: let developers start/stop dev servers from the UI without logging into the AWS console.",
      ],
      short_description:
        "Enterprise-grade full-stack operations dashboard built with FastAPI backend and React frontend, providing comprehensive management of system components, EC2 inventory and scheduling, Route53 DNS management, and secure server start/stop functionality for development teams.",
      images: [projImg10_1, projImg10_2, projImg10_3, projImg10_4, projImg10_5],
      repoUrl: "https://github.com/ashankaushanka96/operations-dashboard",
      category: "Full-Stack",
      status: "Completed"
    },
  ];

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
      className="relative pt-0 sm:pt-2 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-start" 
      style={{ scrollMarginTop: '80px' }}
    >
      <Container maxWidth="xl">
        <Box className="space-y-2 sm:space-y-3">
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
        title={selectedProject?.title}
        description={selectedProject?.description}
        images={selectedProject?.images}
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

      <style jsx>{`
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
