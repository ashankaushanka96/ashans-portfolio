// src/components/ProjectsSection/Projects.jsx
import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import Divider from "../Divider/Divider";

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
        "Advanced AI-powered chat assistant leveraging LangChain framework for intelligent conversation management and context-aware responses.",
        "Implements custom tool integrations for system monitoring, log analysis, and infrastructure management capabilities.",
        "Features proactive system health monitoring with real-time diagnostics and automated alert generation.",
        "Utilizes machine learning models for natural language processing and intelligent response generation.",
        "Integrates with multiple data sources for comprehensive system insights and troubleshooting assistance.",
        "Provides RESTful API endpoints for seamless integration with existing monitoring and management systems.",
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
        "Executed comprehensive AWS infrastructure migration involving 50+ critical servers across multiple regions (Ireland to North Virginia).",
        "Implemented automated AMI optimization processes reducing instance startup times by 40% and improving resource utilization.",
        "Developed and deployed automated security hardening scripts ensuring compliance with industry standards and security best practices.",
        "Created disaster recovery procedures with automated failover mechanisms and data integrity validation.",
        "Established monitoring and alerting systems for migrated infrastructure with real-time performance tracking.",
        "Documented complete migration procedures and created runbooks for future infrastructure deployments.",
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
        "Implemented comprehensive Datadog monitoring solution covering Application Performance Monitoring (APM), centralized log management, and synthetic monitoring for 24/7 system visibility.",
        "Designed and deployed custom dashboards for different stakeholder groups including developers, operations teams, and management with role-based access controls.",
        "Configured intelligent alerting systems with escalation policies, reducing false positives by 60% and improving incident response times.",
        "Integrated Datadog with existing CI/CD pipelines for automated monitoring deployment and configuration management.",
        "Established log correlation and distributed tracing capabilities for enhanced troubleshooting and performance analysis.",
        "Created automated reporting systems for system health metrics, performance trends, and capacity planning insights.",
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
        "Successfully migrated complete CI/CD pipeline infrastructure from Bamboo/Bitbucket to GitLab, reducing deployment times by 50% and improving developer productivity.",
        "Implemented Infrastructure as Code using Terraform for automated environment provisioning and configuration management across multiple environments.",
        "Utilized Packer for automated AMI creation with standardized security configurations and application dependencies.",
        "Deployed Ansible playbooks for configuration management, ensuring consistent server configurations and reducing manual deployment errors.",
        "Established automated testing pipelines with unit tests, integration tests, and security scanning integrated into the CI/CD workflow.",
        "Created comprehensive documentation and training materials for development teams to ensure smooth transition and adoption of new CI/CD processes.",
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
        "Developed full-stack monitoring application using React frontend and Python FastAPI backend for real-time system component and port health monitoring.",
        "Implemented WebSocket connections for live data streaming and real-time dashboard updates without page refresh.",
        "Created comprehensive notification system supporting multiple channels including email, Slack, and SMS for critical system events.",
        "Designed responsive user interface with interactive charts, graphs, and status indicators for intuitive system monitoring.",
        "Built RESTful API endpoints for component management, health checks, and historical data retrieval with comprehensive error handling.",
        "Integrated with external monitoring systems and databases for centralized data collection and analysis capabilities.",
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
        "Built sophisticated Python automation tool for FTP file management with intelligent pattern recognition and automated download scheduling.",
        "Implemented advanced file comparison algorithms for detecting changes and ensuring data integrity across multiple file formats.",
        "Developed comprehensive ISIN validation system with real-time verification and error handling for financial data accuracy.",
        "Created automated backup systems with configurable retention policies and compression for efficient storage management.",
        "Established detailed logging system with log rotation, structured logging, and performance metrics tracking for operational transparency.",
        "Designed email notification system with customizable templates, multiple recipient support, and detailed status reporting for operational oversight.",
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
        "Developed advanced multi-threaded monitoring solution capable of monitoring 100+ components concurrently with efficient resource utilization and minimal performance impact.",
        "Implemented intelligent process management system with automatic restart capabilities, PID tracking, and comprehensive uptime metrics collection.",
        "Integrated with AWS Secrets Manager for secure credential management, AWS SES for email notifications, and Datadog for centralized metrics and alerting.",
        "Created flexible configuration system supporting both YAML and INI formats with dynamic reloading capabilities and environment-specific configurations.",
        "Built context-aware logging system with structured logging, log levels, and correlation IDs for enhanced troubleshooting and debugging capabilities.",
        "Established comprehensive health check mechanisms with customizable thresholds, escalation policies, and detailed reporting for system reliability.",
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
        "Built intelligent component detection system that automatically scans specified directories and identifies components based on configuration files and metadata analysis.",
        "Implemented on-demand component fetching from multiple remote sources including Git repositories, artifact repositories, and cloud storage with caching mechanisms.",
        "Developed advanced search functionality with flexible criteria including component name, version, dependencies, and metadata for efficient component discovery.",
        "Created unified interface for server configuration management with version control, rollback capabilities, and configuration validation.",
        "Established component dependency mapping and conflict resolution system for ensuring compatibility and preventing deployment issues.",
        "Built comprehensive reporting and analytics dashboard for component usage, deployment statistics, and system health monitoring.",
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
        "Developed serverless EC2 lifecycle automation solution using AWS Lambda functions triggered by CloudWatch events for cost optimization and resource management.",
        "Implemented cron-style tag expressions for granular scheduling control allowing precise timing for start/stop operations across different time zones and business hours.",
        "Established comprehensive logging system via CloudWatch for all automation actions, errors, and performance metrics with detailed audit trails and compliance reporting.",
        "Deployed scalable infrastructure across DEV, UAT, and PROD environments using Terraform with environment-specific configurations and security policies.",
        "Created cost optimization algorithms that analyze usage patterns and automatically adjust schedules to minimize costs while maintaining service availability.",
        "Built monitoring and alerting system for automation failures, cost anomalies, and compliance violations with escalation procedures and automated remediation.",
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
        "Component Management Section: Comprehensive component tracking system displaying IP addresses, versions, deployment paths, last execution times, and deployment history with advanced filtering capabilities by name, IP, version, and status.",
        "EC2 Instance Management: Real-time AWS EC2 instance monitoring and management interface with full filtering support, instance details, performance metrics, and bulk operations for efficient infrastructure management.",
        "EC2 Scheduling System: Advanced scheduling interface for viewing, creating, and managing EC2 start/stop schedules with cron expression support, timezone handling, and schedule conflict detection.",
        "Route53 DNS Management: Complete DNS record management system with primary/secondary failover capabilities, health checks, and automated DNS propagation monitoring for high availability.",
        "Developer Self-Service Portal: Secure web interface allowing developers to start/stop development servers without AWS console access, featuring role-based permissions, audit logging, and approval workflows.",
        "Real-time Monitoring Dashboard: Live system health monitoring with customizable alerts, performance metrics visualization, and automated incident response capabilities for proactive system management.",
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
      className="relative pt-4 sm:pt-6 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-start" 
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
