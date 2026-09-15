import awsLogo from "../assets/logo/certifications/aws-solutions-architect-associate.svg";
import redhatLogo from "../assets/logo/certifications/redhat.svg";
import pythonLogo from "../assets/logo/python.svg";
import reactLogo from "../assets/logo/certifications/react.svg";
import ckaLogo from "../assets/logo/certifications/cka.png";

export const certifications = [
  {
    title: "Certified Kubernetes Administrator (CKA)",
    description: ["Credential ID: LF-d8tg2awomg", "Issued: Aug 2026"],
    logo: ckaLogo,
    certLink:
      "https://www.credly.com/badges/b4ba04ad-714d-4bba-8ba0-ed0c845e3631/linked_in_profile",
    issuer: "The Linux Foundation",
    level: "Professional",
    category: "Kubernetes",
  },
  {
    title: "AWS Certified Solution Architect Associate",
    description: ["Credential ID: AWS04794799", "Issued: Dec 2024"],
    logo: awsLogo,
    certLink:
      "https://www.credly.com/badges/d2a269c5-b8d8-4e1e-8511-45eef4e8279a/linked_in_profile",
    issuer: "AWS",
    level: "Associate",
    category: "Cloud",
  },
  {
    title: "RedHat Certified System Administrator",
    description: ["Credential ID: 220-087-555", "Issued: June 2022"],
    logo: redhatLogo,
    certLink: "https://rhtapps.redhat.com/verify?certId=220-087-555",
    issuer: "Red Hat",
    level: "Professional",
    category: "System Administration",
  },
  {
    title: "The Complete Python Bootcamp from Zero to Hero in Python",
    description: [
      "Credential ID: UC-fa837d7d-dea8-416a-B617-taBe4431db0b",
      "Issued: Jan 2025",
    ],
    logo: pythonLogo,
    certLink:
      "https://www.udemy.com/certificate/UC-fa837d7d-dca8-416a-86f7-1a8e4431db0b/",
    issuer: "Udemy",
    level: "Advanced",
    category: "Programming",
  },
  {
    title: "React - The Complete Guide 2025 (incl Next.js, Redux)",
    description: [
      "Credential ID: UC-ce22178a-b424-4f1a-970d-a44b594f51ff",
      "Issued: Jan 2025",
    ],
    logo: reactLogo,
    certLink:
      "https://www.udemy.com/certificate/UC-ce22178a-b424-41fa-970d-a44b594f51ff/",
    issuer: "Udemy",
    level: "Advanced",
    category: "Frontend Development",
  },
];
