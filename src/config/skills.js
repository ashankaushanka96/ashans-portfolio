import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import aws from "../assets/logo/aws.svg";
import gcp from "../assets/logo/gcp.svg";
import gitlab from "../assets/logo/gitlab.svg";
import terraform from "../assets/logo/terraform.svg";
import kubernetes from "../assets/logo/kubernetes.svg";
import docker from "../assets/logo/docker.svg";
import ansible from "../assets/logo/ansible.svg";
import jenkins from "../assets/logo/jenkins.svg";
import bamboo from "../assets/logo/bamboo.svg";
import packer from "../assets/logo/packer.svg";
import datadog from "../assets/logo/datadog.svg";
import python from "../assets/logo/python.svg";
import java from "../assets/logo/java.svg";

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
