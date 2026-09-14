import certImg1 from "../assets/img/certificates/cert1.png";
import certImg2 from "../assets/img/certificates/cert2.png";
import certImg3 from "../assets/img/certificates/cert3.png";
import certImg4 from "../assets/img/certificates/cert4.png";

export const certifications = [
  {
    title: "AWS Certified Solution Architect Associate",
    description: ["Credential ID: AWS04794799", "Issued: Dec 2024"],
    imgUrl: certImg1,
    certLink:
      "https://www.credly.com/badges/d2a269c5-b8d8-4e1e-8511-45eef4e8279a/linked_in_profile",
    issuer: "AWS",
    level: "Associate",
    category: "Cloud",
  },
  {
    title: "RedHat Certified System Administrator",
    description: ["Credential ID: 220-087-555", "Issued: June 2022"],
    imgUrl: certImg2,
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
    imgUrl: certImg3,
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
    imgUrl: certImg4,
    certLink:
      "https://www.udemy.com/certificate/UC-ce22178a-b424-41fa-970d-a44b594f51ff/",
    issuer: "Udemy",
    level: "Advanced",
    category: "Frontend Development",
  },
];
