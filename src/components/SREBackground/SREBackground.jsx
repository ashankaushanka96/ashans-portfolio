import React from 'react';
import { Box } from '@mui/material';
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

// Star-like Logo Component
const StarLogo = ({ image, title, position, delay, isAWS = false }) => {
  return (
    <Box
      className="absolute w-8 h-8 lg:w-12 lg:h-12 opacity-0 animate-star-shine"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        animationDelay: `${delay}s`,
        filter: isAWS 
          ? 'drop-shadow(0 0 15px rgba(255, 153, 0, 0.6)) brightness(1.3) contrast(1.2)' 
          : 'drop-shadow(0 0 12px rgba(0, 212, 255, 0.4))',
      }}
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-contain"
        title={title}
        style={isAWS ? { filter: 'brightness(1.5) contrast(1.3)' } : {}}
      />
    </Box>
  );
};

const SREBackground = () => {
  const toolsAndPlatforms = [
    { image: aws, title: "AWS", category: "Cloud", isAWS: true },
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

  // Star-like positions in free spaces only - avoiding content areas
  const starPositions = [
    // Top corners - far from content
    { x: '8%', y: '12%' },
    { x: '92%', y: '8%' },
    
    // Top edges - avoiding center content
    { x: '25%', y: '15%' },
    { x: '75%', y: '12%' },
    
    // Side edges - far from text areas
    { x: '5%', y: '35%' },
    { x: '95%', y: '40%' },
    { x: '3%', y: '65%' },
    { x: '97%', y: '70%' },
    
    // Bottom corners - avoiding footer content
    { x: '12%', y: '88%' },
    { x: '88%', y: '92%' },
    
    // Bottom edges - avoiding scroll indicator
    { x: '30%', y: '85%' },
    { x: '70%', y: '88%' },
    
    // Far side areas - completely away from content
    { x: '15%', y: '75%' },
  ];

  return (
    <Box className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Star-like Tool Logos */}
      {toolsAndPlatforms.map((tool, index) => (
        <StarLogo
          key={tool.title}
          image={tool.image}
          title={tool.title}
          position={starPositions[index]}
          delay={index * 0.3}
          isAWS={tool.isAWS}
        />
      ))}
      
      {/* SRE Text Elements */}
      <Box className="absolute top-1/3 left-1/6 text-xs text-white/5 font-mono animate-float-slow" style={{ animationDelay: '3s' }}>
        SRE
      </Box>
      <Box className="absolute bottom-1/3 right-1/6 text-xs text-white/5 font-mono animate-float" style={{ animationDelay: '1.8s' }}>
        DevOps
      </Box>
      <Box className="absolute top-2/3 left-1/8 text-xs text-white/5 font-mono animate-float-slow" style={{ animationDelay: '2.2s' }}>
        Monitoring
      </Box>

      {/* Circuit-like patterns */}
      <Box className="absolute top-1/4 right-1/6 w-32 h-32 opacity-3">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full text-accent">
          <path d="M10 50h20M70 50h20M50 10v20M50 70v20" strokeWidth="1"/>
          <circle cx="30" cy="50" r="3" fill="currentColor"/>
          <circle cx="70" cy="50" r="3" fill="currentColor"/>
          <circle cx="50" cy="30" r="3" fill="currentColor"/>
          <circle cx="50" cy="70" r="3" fill="currentColor"/>
        </svg>
      </Box>

      {/* Network nodes */}
      <Box className="absolute bottom-1/4 left-1/6 w-24 h-24 opacity-4">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full text-purple-400">
          <circle cx="20" cy="20" r="8" fill="currentColor" opacity="0.3"/>
          <circle cx="80" cy="20" r="8" fill="currentColor" opacity="0.3"/>
          <circle cx="20" cy="80" r="8" fill="currentColor" opacity="0.3"/>
          <circle cx="80" cy="80" r="8" fill="currentColor" opacity="0.3"/>
          <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3"/>
          <line x1="20" y1="20" x2="80" y2="20" stroke="currentColor" opacity="0.2"/>
          <line x1="20" y1="20" x2="20" y2="80" stroke="currentColor" opacity="0.2"/>
          <line x1="80" y1="20" x2="80" y2="80" stroke="currentColor" opacity="0.2"/>
          <line x1="20" y1="80" x2="80" y2="80" stroke="currentColor" opacity="0.2"/>
        </svg>
      </Box>

      <style>{`
        @keyframes starShine {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
            filter: drop-shadow(0 0 0px rgba(0, 212, 255, 0));
          }
          20% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.2);
            filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.8));
          }
          40% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(1);
            filter: drop-shadow(0 0 12px rgba(0, 212, 255, 0.4));
          }
          60% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.1);
            filter: drop-shadow(0 0 16px rgba(0, 212, 255, 0.6));
          }
          80% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(0.9);
            filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.3));
          }
          100% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1);
            filter: drop-shadow(0 0 12px rgba(0, 212, 255, 0.4));
          }
        }
        
        .animate-star-shine {
          animation: starShine 4s ease-in-out infinite;
        }
      `}</style>
    </Box>
  );
};

export default SREBackground;
