import { useState, useEffect } from "react";
import { SkillCard } from './SkillCard';
import { ToolCard } from './ToolCard';
import { Container, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import aws from "../../assets/logo/aws.svg";
import gcp from "../../assets/logo/gcp.svg";
import gitlab from "../../assets/logo/gitlab.svg";
import terraform from "../../assets/logo/terraform.svg";
import kubernetes from "../../assets/logo/kubernetes.svg";
import docker from "../../assets/logo/docker.svg";
import ansible from "../../assets/logo/ansible.svg";
import jenkins from "../../assets/logo/jenkins.svg";
import bamboo from "../../assets/logo/bamboo.svg";
import packer from "../../assets/logo/packer.svg";
import datadog from "../../assets/logo/datadog.svg";
import python from "../../assets/logo/python.svg";
import java from "../../assets/logo/java.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../assets/img/color-sharp.png";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    { image: meter1, title: "Cloud Architecture", level: "Expert" },
    { image: meter3, title: "Infrastructure Automation", level: "Advanced" },
    { image: meter3, title: "CI/CD Pipelines", level: "Advanced" },
    { image: meter3, title: "Monitoring & Incident Management", level: "Advanced" },
    { image: meter3, title: "Programming & Frameworks", level: "Advanced" },
    { image: meter2, title: "Generative AI & Machine Learning", level: "Intermediate" },
    { image: meter3, title: "Database Management", level: "Advanced" },
    { image: meter2, title: "Network Administration", level: "Intermediate" },
  ];

  const toolsAndPlatforms = [
    { image: aws, title: "AWS", category: "Cloud" },
    { image: gcp, title: "GCP", category: "Cloud" },
    { image: gitlab, title: "GitLab", category: "DevOps" },
    { image: terraform, title: "Terraform", category: "IaC" },
    { image: kubernetes, title: "Kubernetes", category: "Container" },
    { image: docker, title: "Docker", category: "Container" },
    { image: ansible, title: "Ansible", category: "Automation" },
    { image: jenkins, title: "Jenkins", category: "CI/CD" },
    { image: bamboo, title: "Bamboo", category: "CI/CD" },
    { image: packer, title: "Packer", category: "IaC" },
    { image: datadog, title: "Datadog", category: "Monitoring" },
    { image: python, title: "Python", category: "Programming" },
    { image: java, title: "Java", category: "Programming" },
  ];

  return (
    <Box 
      component="section" 
      id="skills" 
      className="relative pt-0 sm:pt-2 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-start justify-center" 
      style={{ scrollMarginTop: '80px' }}
    >
      <Container maxWidth="xl" className="h-full flex items-start justify-center pt-2 sm:pt-4">
        <Box className="space-y-6 sm:space-y-8 w-full max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <Box className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Typography
              variant="h2"
              className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-bold mb-4 text-white"
              sx={{
                fontFamily: 'CentraNo2, sans-serif',
                background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #ffffff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 8px rgba(0,0,0,0.5)',
                textAlign: 'center',
              }}
            >
              Skills & Expertise
            </Typography>
            <Typography
              variant="body1"
              className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed text-center"
              sx={{ 
                fontFamily: 'CentraNo2, sans-serif',
                textAlign: 'center !important',
                display: 'block',
                width: '100%',
                margin: '0 auto',
              }}
            >
              A comprehensive overview of my technical skills and the tools I use to build robust, scalable solutions.
            </Typography>
          </Box>

          {/* Technical Skills Section */}
          <Box className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Box className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl py-8 sm:py-12 px-6 sm:px-12 lg:px-16 border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <Typography
                variant="h3"
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-bold mb-6 sm:mb-8 text-white"
                sx={{
                  fontFamily: 'CentraNo2, sans-serif',
                  background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textAlign: 'center',
                }}
              >
                Technical Skills
              </Typography>
              
              <Box className="w-full sm:w-4/5 mx-auto">
                <Carousel 
                  responsive={responsive} 
                  infinite={true} 
                  autoPlay={true} 
                  autoPlaySpeed={3000}
                  className="skills-carousel"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  {skills.map((skill, index) => (
                    <Box key={index} className="px-2">
                      <SkillCard 
                        image={skill.image} 
                        title={skill.title} 
                        level={skill.level}
                      />
                    </Box>
                  ))}
                </Carousel>
              </Box>
            </Box>
          </Box>

          {/* Tools & Technologies Section */}
          <Box className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Box className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl py-8 sm:py-12 px-6 sm:px-12 lg:px-16 border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <Typography
                variant="h3"
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl font-bold mb-6 sm:mb-8 text-white"
                sx={{
                  fontFamily: 'CentraNo2, sans-serif',
                  background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textAlign: 'center',
                }}
              >
                Tools & Technologies
              </Typography>
              
              <Box className="w-full sm:w-4/5 mx-auto">
                <Carousel 
                  responsive={responsive} 
                  infinite={true} 
                  autoPlay={true} 
                  autoPlaySpeed={2500}
                  className="tools-carousel"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  {toolsAndPlatforms.map((tool, index) => (
                    <Box key={index} className="px-2">
                      <ToolCard 
                        image={tool.image} 
                        title={tool.title} 
                        category={tool.category}
                      />
                    </Box>
                  ))}
                </Carousel>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      
      {/* Background Image with Animation */}
      <img 
        className="absolute top-1/4 bottom-0 w-1/2 sm:w-2/5 -z-10 animate-float-slow opacity-20" 
        src={colorSharp} 
        alt="Background" 
        style={{
          animation: 'floatSlow 8s ease-in-out infinite',
        }}
      />

      {/* Animated Background Elements */}
      <Box className="absolute inset-0 -z-10">
        <Box className="absolute top-20 right-10 w-2 h-2 bg-accent rounded-full animate-pulse opacity-40"></Box>
        <Box className="absolute bottom-20 left-10 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30"></Box>
        <Box className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-20"></Box>
        <Box className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-50"></Box>
        <Box className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-30"></Box>
      </Box>

      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
        .custom-dot-list-style {
          bottom: -30px;
        }
        .custom-dot-list-style li button {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          width: 10px;
          height: 10px;
          margin: 0 3px;
        }
        .custom-dot-list-style li.react-multi-carousel-dot--active button {
          background: #00d4ff;
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        }
        .carousel-item-padding-40-px {
          padding: 0 15px;
        }
        /* Force text centering for all Typography components in Skills section */
        #skills .MuiTypography-root {
          text-align: center !important;
          display: block !important;
          width: 100% !important;
        }
        #skills .MuiTypography-h2,
        #skills .MuiTypography-h3,
        #skills .MuiTypography-body1 {
          text-align: center !important;
          display: block !important;
          width: 100% !important;
        }
      `}</style>
    </Box>
  );
};
