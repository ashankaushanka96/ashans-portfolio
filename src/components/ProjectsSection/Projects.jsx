// src/components/ProjectsSection/Projects.jsx
import React, { useState } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
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
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Projects.css";

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
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Notable Projects</h2>
                  <p>Click on a project to learn more.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((proj, idx) => (
                            <ProjectCard
                              key={idx}
                              title={proj.title}
                              short_description={proj.short_description}
                              imgUrl={proj.imgUrl}
                              onClick={() => handleCardClick(proj)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <ProjectModal
        show={showModal}
        onHide={handleClose}
        title={selectedProject?.title}
        description={selectedProject?.description}
        images={selectedProject?.images}
        repoUrl={selectedProject?.repoUrl}
      />

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
