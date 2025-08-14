import { Container, Box, Typography } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import colorSharp from "../../assets/img/color-sharp2.png";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Site Reliability Engineer",
      company: "GTN Group",
      duration: "April 2024 - Present",
      responsibilities: [
        "Streamlined GitLab CI/CD pipelines, reducing deployment times and improving release efficiency.",
        "Implemented advanced Datadog monitoring and automated incident response strategies, reducing mean time to resolution (MTTR).",
        "Optimized cloud resource utilization, leading to cost savings and improved system reliability.",
        "Enhanced multi-region AWS infrastructure with disaster recovery solutions to ensure high availability and scalability.",
        "Led cross-functional teams and mentored junior engineers in best practices for system resilience.",
      ],
    },
    {
      role: "Site Reliability Engineer",
      company: "GTN Group",
      duration: "April 2021 - April 2024",
      responsibilities: [
        "Migrated servers from Ireland to North Virginia, optimizing AWS resources for better performance and security.",
        "Developed infrastructure as code (IaC) solutions using Terraform, Packer, and Ansible.",
        "Maintained GitLab CI/CD pipelines for Java applications, reducing deployment times.",
        "Configured Datadog for real-time monitoring, creating dashboards and alerts to enhance system reliability.",
        "Collaborated with development teams to troubleshoot infrastructure issues and conducted root cause analyses (RCA).",
      ],
    },
    {
      role: "Network Engineering Intern",
      company: "N-Able (Pvt) Ltd",
      duration: "June 2019 - December 2019",
      responsibilities: [
        "Contributed to the metro Ethernet project within the telco team.",
        "Enhanced base station functionality for the SON (Self-Organizing Network) project, focusing on self-optimization, configuration, and healing.",
      ],
    },
    {
      role: "Management Trainee",
      company: "People's Bank",
      duration: "December 2015 - August 2016",
      responsibilities: [
        "Developed strong customer relationships, addressing inquiries and providing excellent service.",
        "Contributed to increased customer satisfaction through effective communication and problem-solving.",
      ],
    },
  ];

  return (
    <Box component="section" id="experience" className="relative py-8 sm:py-12 px-4 sm:px-0">
      <Container maxWidth="lg">
        <Box className="space-y-4 sm:space-y-6">
          <Typography
            variant="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-white"
          >
            Work Experience
          </Typography>
          
          {experiences.map((exp, index) => (
            <Box key={index} className="mb-4 sm:mb-6">
              <ExperienceCard
                role={exp.role}
                company={exp.company}
                duration={exp.duration}
                responsibilities={exp.responsibilities}
              />
            </Box>
          ))}
        </Box>
      </Container>
      
      {/* Background Image */}
      <img
        className="absolute top-1/3 right-0 bottom-0 w-1/2 sm:w-2/5 -z-10"
        src={colorSharp}
        alt="background"
      />
    </Box>
  );
};

export default Experience;
