'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, Award } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Senior Site Reliability Engineer',
    company: 'GTN Group',
    location: 'Sri Lanka',
    period: 'Current',
    description: 'Leading site reliability engineering initiatives and ensuring high availability of critical systems.',
    achievements: [
      'Implementing SLO/SLI frameworks for service reliability',
      'Designing and maintaining scalable infrastructure',
      'Leading incident response and post-mortem processes',
      'Driving operational excellence and automation initiatives'
    ],
    technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Prometheus', 'Grafana']
  },
  {
    id: 2,
    title: 'Site Reliability Engineer',
    company: 'N-able',
    location: 'Sri Lanka',
    period: 'Previous',
    description: 'Focused on building reliable, scalable infrastructure and implementing DevOps best practices.',
    achievements: [
      'Implemented comprehensive monitoring and alerting systems',
      'Automated infrastructure provisioning and deployment processes',
      'Improved system reliability and reduced downtime',
      'Collaborated with development teams on CI/CD pipelines'
    ],
    technologies: ['AWS', 'Docker', 'Jenkins', 'Terraform', 'Prometheus', 'Python']
  }
]

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">Professional Experience</h2>
          <p className="body-text max-w-3xl mx-auto">
            My journey in Site Reliability Engineering and DevOps, from junior engineer to senior SRE, 
            has been marked by continuous learning, operational excellence, and impactful contributions 
            to various organizations.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800" />
              )}

              <div className="flex gap-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                    <Building className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="glass-card p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="heading-3 mb-2">{experience.title}</h3>
                        <div className="flex items-center space-x-4 text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Building className="h-4 w-4" />
                            <span>{experience.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="body-text mb-6">{experience.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-primary-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.1) + (achievementIndex * 0.05), duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-2"
                          >
                            <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (index * 0.1) + (techIndex * 0.05), duration: 0.6 }}
                            viewport={{ once: true }}
                            className="skill-badge"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="heading-3 mb-4">Career Highlights</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">15+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">3</div>
                <div className="text-muted-foreground">Companies Worked</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
