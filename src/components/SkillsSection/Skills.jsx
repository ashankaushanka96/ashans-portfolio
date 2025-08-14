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
    <Box component="section" id="skills" className="relative py-8 sm:py-12 px-4 sm:px-0">
      <Container maxWidth="lg">
        <Box className="space-y-6 sm:space-y-8">
          {/* Skills Section */}
          <Box className="bg-gray-900 rounded-2xl sm:rounded-3xl text-center py-8 sm:py-16 px-6 sm:px-12 -mt-8 sm:-mt-16">
            <Typography
              variant="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-white"
            >
              Skills
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
                  <SkillCard key={index} image={skill.image} title={skill.title} />
                ))}
              </Carousel>
            </Box>
          </Box>

          {/* Tools and Cloud Platforms Section */}
          <Box className="bg-gray-900 rounded-2xl sm:rounded-3xl text-center py-8 sm:py-16 px-6 sm:px-12">
            <Typography
              variant="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-white"
            >
              Tools & Platforms
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
                  <ToolCard key={index} image={tool.image} title={tool.title} />
                ))}
              </Carousel>
            </Box>
          </Box>
        </Box>
      </Container>
      
      {/* Background Image */}
      <img 
        className="absolute top-1/4 bottom-0 w-1/2 sm:w-2/5 -z-10" 
        src={colorSharp} 
        alt="Background" 
      />
    </Box>
  );
};
