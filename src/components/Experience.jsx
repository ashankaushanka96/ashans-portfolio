import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from './ExperienceCard';
import colorSharp from "../assets/img/color-sharp2.png";

const Experience = () => {
    const experiences = [
        {
            role: 'Senior Site Reliability Engineer',
            company: 'GTN Group',
            duration: 'April 2024 - Present',
            responsibilities: [
                'Streamlined GitLab CI/CD pipelines, reducing deployment times and improving release efficiency.',
                'Implemented advanced Datadog monitoring and automated incident response strategies, reducing mean time to resolution (MTTR).',
                'Optimized cloud resource utilization, leading to cost savings and improved system reliability.',
                'Enhanced multi-region AWS infrastructure with disaster recovery solutions to ensure high availability and scalability.',
                'Led cross-functional teams and mentored junior engineers in best practices for system resilience.',
            ],
        },
        {
            role: 'Site Reliability Engineer',
            company: 'GTN Group',
            duration: 'April 2021 - April 2024',
            responsibilities: [
                'Migrated servers from Ireland to North Virginia, optimizing AWS resources for better performance and security.',
                'Developed infrastructure as code (IaC) solutions using Terraform, Packer, and Ansible.',
                'Maintained GitLab CI/CD pipelines for Java applications, reducing deployment times.',
                'Configured Datadog for real-time monitoring, creating dashboards and alerts to enhance system reliability.',
                'Collaborated with development teams to troubleshoot infrastructure issues and conducted root cause analyses (RCA).',
            ],
        },
        {
            role: 'Network Engineering Intern',
            company: 'N-Able (Pvt) Ltd',
            duration: 'June 2019 - December 2019',
            responsibilities: [
                'Contributed to the metro Ethernet project within the telco team.',
                'Enhanced base station functionality for the SON (Self-Organizing Network) project, focusing on self-optimization, configuration, and healing.',
            ],
        },
        {
            role: 'Management Trainee',
            company: 'People\'s Bank',
            duration: 'December 2015 - August 2016',
            responsibilities: [
                'Developed strong customer relationships, addressing inquiries and providing excellent service.',
                'Contributed to increased customer satisfaction through effective communication and problem-solving.',
            ],
        },
    ];

    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col size={12}>
                        <div className="work-experience-section">
                            <h2>Work Experience</h2>
                            {experiences.map((exp, index) => (
                                <div key={index} className="experience-tile">
                                    <ExperienceCard
                                        role={exp.role}
                                        company={exp.company}
                                        duration={exp.duration}
                                        responsibilities={exp.responsibilities}
                                    />
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right-2" src={colorSharp} alt="background" />
        </section>
    );
};

export default Experience;
