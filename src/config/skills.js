import meter1 from "../assets/skills/meter-expert.svg";
import meter2 from "../assets/skills/meter-intermediate.svg";
import meter3 from "../assets/skills/meter-advanced.svg";
import aws from "../assets/logos/tools/aws.svg";
import gcp from "../assets/logos/tools/gcp.svg";
import gitlab from "../assets/logos/tools/gitlab.svg";
import terraform from "../assets/logos/tools/terraform.svg";
import kubernetes from "../assets/logos/tools/kubernetes.svg";
import docker from "../assets/logos/tools/docker.svg";
import ansible from "../assets/logos/tools/ansible.svg";
import jenkins from "../assets/logos/tools/jenkins.svg";
import bamboo from "../assets/logos/tools/bamboo.svg";
import packer from "../assets/logos/tools/packer.svg";
import datadog from "../assets/logos/tools/datadog.svg";
import python from "../assets/logos/tools/python.svg";
import java from "../assets/logos/tools/java.svg";

export const skills = [
  { image: meter1, title: "Cloud Architecture", level: "Expert" },
  { image: meter3, title: "Infrastructure Automation", level: "Advanced" },
  { image: meter3, title: "CI/CD Pipelines", level: "Advanced" },
  { image: meter3, title: "Monitoring & Incident Management", level: "Advanced" },
  { image: meter3, title: "Programming & Frameworks", level: "Advanced" },
  { image: meter2, title: "Generative AI & Machine Learning", level: "Intermediate" },
  { image: meter3, title: "Database Management", level: "Advanced" },
  { image: meter2, title: "Network Administration", level: "Intermediate" },
];

export const toolsAndPlatforms = [
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
