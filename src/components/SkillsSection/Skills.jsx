import { SkillCard } from './SkillCard';
import { ToolCard } from './ToolCard';
import { Container, Box, Typography } from "@mui/material";
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
    { image: meter1, title: "Cloud Architecture" },
    { image: meter3, title: "Infrastructure Automation" },
    { image: meter3, title: "CI/CD Pipelines" },
    { image: meter3, title: "Monitoring & Incident Management" },
    { image: meter3, title: "Programming & Frameworks" },
    { image: meter2, title: "Generative AI & Machine Learning" },
    { image: meter3, title: "Database Management" },
    { image: meter2, title: "Network Administration" },
  ];

  const toolsAndPlatforms = [
    { image: aws, title: "AWS" },
    { image: gcp, title: "GCP" },
    { image: gitlab, title: "GitLab" },
    { image: terraform, title: "Terraform" },
    { image: kubernetes, title: "Kubernetes" },
    { image: docker, title: "Docker" },
    { image: ansible, title: "Ansible" },
    { image: jenkins, title: "Jenkins" },
    { image: bamboo, title: "Bamboo" },
    { image: packer, title: "Packer" },
    { image: datadog, title: "Datadog" },
    { image: python, title: "Python" },
    { image: java, title: "Java" },
  ];

  return (
    <Box component="section" id="skills" className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ scrollMarginTop: '20px' }}>
      <Container maxWidth="lg">
        <Box className="space-y-6 sm:space-y-8">
          {/* Technical Skills Section */}
          <Box className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl text-center py-8 sm:py-12 px-6 sm:px-12 lg:px-16 border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <Typography
              variant="h2"
              className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-10 text-white animate-fade-in-up"
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
              Technical Skills
            </Typography>
            <Box className="w-full sm:w-4/5 mx-auto">
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                autoPlay={true} 
                autoPlaySpeed={2000}
                className="skills-carousel"
              >
                {skills.map((skill, index) => (
                  <Box key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <SkillCard image={skill.image} title={skill.title} />
                  </Box>
                ))}
              </Carousel>
            </Box>
          </Box>

          {/* Tools & Technologies Section */}
          <Box className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl text-center py-8 sm:py-12 px-6 sm:px-12 lg:px-16 border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <Typography
              variant="h2"
              className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-10 text-white animate-fade-in-up"
              sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #ffffff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'fadeInUp 1s ease-out 0.3s both',
                fontSize: { xs: '36px', sm: '30px', md: '36px', lg: '48px' },
                '@keyframes fadeInUp': {
                  '0%': { transform: 'translateY(30px)', opacity: 0 },
                  '100%': { transform: 'translateY(0)', opacity: 1 },
                }
              }}
            >
              Tools & Tech
            </Typography>
            <Box className="w-full sm:w-4/5 mx-auto">
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                autoPlay={true} 
                autoPlaySpeed={2000}
                className="tools-carousel"
              >
                {toolsAndPlatforms.map((tool, index) => (
                  <Box key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ToolCard image={tool.image} title={tool.title} />
                  </Box>
                ))}
              </Carousel>
            </Box>
          </Box>
        </Box>
      </Container>
      
      {/* Background Image with Animation */}
      <img 
        className="absolute top-1/4 bottom-0 w-1/2 sm:w-2/5 -z-10 animate-float-slow opacity-30" 
        src={colorSharp} 
        alt="Background" 
        style={{
          animation: 'floatSlow 6s ease-in-out infinite',
        }}
      />

      {/* Animated Background Elements */}
      <Box className="absolute inset-0 -z-10">
        <Box className="absolute top-20 right-10 w-2 h-2 bg-accent rounded-full animate-pulse opacity-40"></Box>
        <Box className="absolute bottom-20 left-10 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30"></Box>
        <Box className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-20"></Box>
      </Box>

      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
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
