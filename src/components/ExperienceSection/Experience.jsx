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
    <Box component="section" id="experience" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Container maxWidth="lg">
        <Box className="space-y-8 sm:space-y-12">
          <Typography
            variant="h2"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-white animate-fade-in-up"
            sx={{
              background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #ffffff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'fadeInUp 1s ease-out',
              '@keyframes fadeInUp': {
                '0%': { transform: 'translateY(30px)', opacity: 0 },
                '100%': { transform: 'translateY(0)', opacity: 1 },
              }
            }}
          >
            Work Experience
          </Typography>
          
          {experiences.map((exp, index) => (
            <Box 
              key={index} 
              className="mb-8 sm:mb-12 animate-fade-in-up" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
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
      
      {/* Background Image with Animation */}
      <img
        className="absolute top-1/3 right-0 bottom-0 w-1/2 sm:w-2/5 -z-10 animate-float-slow opacity-30"
        src={colorSharp}
        alt="background"
        style={{
          animation: 'floatSlow 6s ease-in-out infinite',
        }}
      />

      {/* Animated Background Elements */}
      <Box className="absolute inset-0 -z-10">
        <Box className="absolute top-20 right-10 w-2 h-2 bg-accent rounded-full animate-pulse opacity-40"></Box>
        <Box className="absolute bottom-20 left-10 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30"></Box>
        <Box className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-20"></Box>
        <Box className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-50"></Box>
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

export default Experience;
