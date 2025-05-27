import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/project-images/bruno-project.png";
import projImg2 from "../../assets/img/project-images/server-migration-project.png";
import projImg3 from "../../assets/img/project-images/datadog.png";
import projImg4 from "../../assets/img/project-images/gitlab-project.png";
import projImg5 from "../../assets/img/project-images/monitoring-tool.png";
import projImg6 from "../../assets/img/project-images/inav-tool.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useState } from "react";
import "./Projects.css";
export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "AI Bruno (Ongoing)",
      description: [
        "Developing AI Bruno, a project utilizing generative AI, Machine Learning (ML), and Deep Learning (DL) to predict future system failures.",
        "Integrating a chatbot feature powered by generative AI to provide user support and interact with systems for diagnostics.",
      ],
      imgUrl: projImg1,
    },
    {
      title: "Server Migration in AWS",
      description: [
        "Actively participated in AWS server migration from Ireland to North Virginia and Singapore.",
        "Gained expertise in managing AWS infrastructure and security.",
        "Migrated operating systems from CentOS to Amazon Linux 2023 for improved performance and support.",
      ],
      imgUrl: projImg2,
    },
    {
      title: "Datadog Configuration",
      description: [
        "Implemented Datadog for comprehensive monitoring, including Application Performance Monitoring (APM), Server Health, synthetic monitoring, and centralized log management.",
        "Configured custom dashboards, alerts, and monitors to optimize application performance and efficiently troubleshoot issues.",
      ],
      imgUrl: projImg3,
    },
    {
      title: "GitLab Pipeline Migration",
      description: [
        "Successfully migrated pipelines from Bamboo-Bitbucket to GitLab.",
        "Utilized Terraform and Packer for infrastructure creation and Ansible for configuration management.",
        "Implemented AWS Auto Scaling for the pipeline components.",
      ],
      imgUrl: projImg4,
    },
    {
      title: "Monitoring Tool using React.js and Python",
      description: [
        "Developed a monitoring tool using React.js and Python to monitor component, process state, port state, and uptime.",
        "Configured notifications as well.",
        "Repository: https://github.com/ashankaushanka96/component-checker",
      ],
      imgUrl: projImg5,
    },
    {
      title: "iNAV Uploader Tool",
      description: [
        "Designed and developed an iNAV file uploader tool using JavaFX.",
        "Implemented the tool to upload new iNAV files to multiple servers and backup their old files and restarts the components.",
      ],
      imgUrl: projImg6,
    },
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
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
                  <h2>Projects</h2>
                  {!selectedProject ? (
                    <>
                      <p>Click on a project to view details.</p>
                      <Tab.Container
                        id="projects-tabs"
                        defaultActiveKey="first"
                      >
                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <Row>
                              {projects.map((project, index) => (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  onClick={() => handleCardClick(project)}
                                />
                              ))}
                            </Row>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </>
                  ) : (
                    <div className="project-details">
                      <h3>{selectedProject.title}</h3>
                      <ul>
                        {selectedProject.description.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                      <img
                        src={selectedProject.imgUrl}
                        alt={selectedProject.title}
                      />
                      <button onClick={() => setSelectedProject(null)}>
                        Back
                      </button>
                    </div>
                  )}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
