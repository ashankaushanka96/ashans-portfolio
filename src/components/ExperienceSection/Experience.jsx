import { useState, useEffect } from "react";
import { Container, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import colorSharp from "../../assets/img/color-sharp2.png";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      role: "Senior Site Reliability Engineer",
      company: "GTN Group",
      duration: "April 2024 - Present",
      location: "London, UK",
      responsibilities: [
        "Streamlined GitLab CI/CD pipelines, reducing deployment times and improving release efficiency.",
        "Implemented advanced Datadog monitoring and automated incident response strategies, reducing mean time to resolution (MTTR).",
        "Optimized cloud resource utilization, leading to cost savings and improved system reliability.",
        "Enhanced multi-region AWS infrastructure with disaster recovery solutions to ensure high availability and scalability.",
        "Led cross-functional teams and mentored junior engineers in best practices for system resilience.",
      ],
      technologies: ["AWS", "GitLab", "Datadog", "Terraform", "Kubernetes"],
      achievements: ["Reduced deployment time by 40%", "Improved system uptime to 99.9%", "Mentored 3 junior engineers"]
    },
    {
      role: "Site Reliability Engineer",
      company: "GTN Group",
      duration: "April 2021 - April 2024",
      location: "London, UK",
      responsibilities: [
        "Migrated servers from Ireland to North Virginia, optimizing AWS resources for better performance and security.",
        "Developed infrastructure as code (IaC) solutions using Terraform, Packer, and Ansible.",
        "Maintained GitLab CI/CD pipelines for Java applications, reducing deployment times.",
        "Configured Datadog for real-time monitoring, creating dashboards and alerts to enhance system reliability.",
        "Collaborated with development teams to troubleshoot infrastructure issues and conducted root cause analyses (RCA).",
      ],
      technologies: ["AWS", "Terraform", "Ansible", "GitLab", "Datadog", "Java"],
      achievements: ["Successfully migrated 50+ servers", "Reduced infrastructure costs by 25%", "Implemented automated monitoring"]
    },
    {
      role: "Network Engineering Intern",
      company: "N-Able (Pvt) Ltd",
      duration: "June 2019 - December 2019",
      location: "Colombo, Sri Lanka",
      responsibilities: [
        "Contributed to the metro Ethernet project within the telco team.",
        "Enhanced base station functionality for the SON (Self-Organizing Network) project, focusing on self-optimization, configuration, and healing.",
      ],
      technologies: ["Ethernet", "SON", "Network Optimization"],
      achievements: ["Improved network efficiency by 15%", "Contributed to metro Ethernet deployment"]
    },
    {
      role: "Management Trainee",
      company: "People's Bank",
      duration: "December 2015 - August 2016",
      location: "Colombo, Sri Lanka",
      responsibilities: [
        "Developed strong customer relationships, addressing inquiries and providing excellent service.",
        "Contributed to increased customer satisfaction through effective communication and problem-solving.",
      ],
      technologies: ["Customer Service", "Banking Systems", "Communication"],
      achievements: ["Achieved 95% customer satisfaction", "Processed 200+ transactions daily"]
    },
  ];

  return (
    <Box 
      component="section" 
      id="experience" 
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" 
      style={{ scrollMarginTop: '20px' }}
    >
      <Container maxWidth="xl">
        <Box className="space-y-12 sm:space-y-16">
          {/* Section Header */}
          <Box className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
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
              Professional Experience
            </Typography>
            <Typography
              variant="body1"
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              sx={{ fontFamily: 'CentraNo2, sans-serif' }}
            >
              My journey through various roles, each contributing to my growth as a Site Reliability Engineer and technology professional.
            </Typography>
          </Box>
          
          {/* Experience Timeline */}
          <Box className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <Box 
                key={index} 
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ExperienceCard
                  role={exp.role}
                  company={exp.company}
                  duration={exp.duration}
                  location={exp.location}
                  responsibilities={exp.responsibilities}
                  technologies={exp.technologies}
                  achievements={exp.achievements}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
      
      {/* Background Image with Animation */}
      <img
        className="absolute top-1/3 right-0 bottom-0 w-1/2 sm:w-2/5 -z-10 animate-float-slow opacity-20"
        src={colorSharp}
        alt="background"
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
      `}</style>
    </Box>
  );
};

export default Experience;
