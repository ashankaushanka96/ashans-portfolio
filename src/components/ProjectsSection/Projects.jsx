// src/components/ProjectsSection/Projects.jsx
import React, { useState } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
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

  const projects = [
    {
      title: "AI Bruno (Ongoing)",
      imgUrl: projImg1,
      description: [
        "A chat assistant built with LangChain and custom tool integrations.",
        "Proactively monitors and diagnoses system health.",
      ],
      short_description:
        "LangChain-based chat assistant with proactive system monitoring.",
      images: [projImg1],
    },
    {
      title: "Server Migration in AWS",
      imgUrl: projImg2,
      description: [
        "Migrated critical infrastructure across regions.",
        "Optimized AMIs and automated security hardening.",
      ],
      short_description:
        "Cross-region AWS migration with AMI optimization and automatic security hardening.",
      images: [projImg2],
    },
    {
      title: "Datadog Configuration",
      imgUrl: projImg3,
      description: [
        "End-to-end Datadog APM, logs, and synthetic monitoring.",
        "Custom dashboards and alerts for performance optimization.",
      ],
      short_description:
        "Comprehensive Datadog setup including APM, logs, synthetic checks, and custom dashboards.",
      images: [projImg3],
    },
    {
      title: "GitLab Pipeline Migration",
      imgUrl: projImg4,
      description: [
        "Transitioned CI/CD from Bamboo/Bitbucket to GitLab.",
        "Leveraged Terraform, Packer, and Ansible.",
      ],
      short_description:
        "Migrated CI/CD pipelines to GitLab using Terraform, Packer, and Ansible.",
      images: [projImg4],
    },
    {
      title: "Monitoring Tool",
      imgUrl: projImg5,
      description: [
        "React + Python app for real-time component and port health.",
        "Notification support for critical events.",
      ],
      short_description:
        "Real-time health monitoring dashboard for components and ports built with React and Python.",
      images: [projImg5],
      repoUrl: "https://github.com/ashankaushanka96/component-checker",
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
        "Python tool for automated FTP file management with validation, backup, and notifications.",
      images: [projImg6],
      repoUrl: "https://github.com/ashankaushanka96/ftp-file-downloader",
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
        "Multi-threaded monitoring solution with datadog integration and automatic process management.",
      images: [projImg7],
      repoUrl: "https://github.com/ashankaushanka96/component-watcher",
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
        "Python-based solution for end-to-end component management with detection, fetching, and search capabilities.",
      images: [projImg8],
      repoUrl: "https://github.com/ashankaushanka96/component-inventory",
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
        "Terraform and AWS Lambda-driven scheduler automating EC2 lifecycles with cron tagging.",
      images: [projImg9],
      repoUrl: "https://github.com/ashankaushanka96/instance-scheduler",
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
        "Full-stack dashboard (FastAPI backend + React frontend) for managing components, EC2 inventory & schedules, Route53, and server start/stop.",
      images: [projImg10_1, projImg10_2, projImg10_3, projImg10_4, projImg10_5],
      repoUrl: "https://github.com/ashankaushanka96/operations-dashboard",
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
    <Box component="section" id="projects" className="relative py-16 sm:py-20 bg-black px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ scrollMarginTop: '20px' }}>
      <Container maxWidth="lg">
        <Box className="opacity-100 flex flex-col items-center">
          <Typography
            variant="h2"
            className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-white animate-fade-in-up"
            sx={{
              background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #ffffff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'fadeInUp 1s ease-out',
              fontSize: { xs: '36px', sm: '30px', md: '36px', lg: '48px' },
              '@keyframes fadeInUp': {
                '0%': { transform: 'translateY(30px)', opacity: 0 },
                '100%': { transform: 'translateY(0)', opacity: 1 },
              }
            }}
          >
            Projects
          </Typography>
          <Typography
            variant="body1"
            className="text-base sm:text-lg text-gray-400 mb-12 sm:mb-16 max-w-2xl leading-relaxed text-center animate-fade-in-up"
            sx={{
              animation: 'fadeInUp 1s ease-out 0.3s both',
              '@keyframes fadeInUp': {
                '0%': { transform: 'translateY(30px)', opacity: 0 },
                '100%': { transform: 'translateY(0)', opacity: 1 },
              }
            }}
          >
            Click on a project to learn more.
          </Typography>
          
          <Grid container spacing={{ xs: 3, sm: 4 }}>
            {projects.map((proj, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Box 
                  className="animate-fade-in-up" 
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <ProjectCard
                    title={proj.title}
                    short_description={proj.short_description}
                    imgUrl={proj.imgUrl}
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
      />

      {/* Animated Background Elements */}
      <Box className="absolute inset-0 -z-10">
        <Box className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse opacity-40"></Box>
        <Box className="absolute bottom-20 right-10 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30"></Box>
        <Box className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-20"></Box>
      </Box>

      <img
        className="absolute top-0 right-0 w-0 -z-10"
        src={colorSharp2}
        alt="background"
      />

      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out both;
        }
        @keyframes fadeInUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </Box>
  );
};
