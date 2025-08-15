'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'

const projects = [
  {
    id: 1,
    title: 'Infrastructure as Code Platform',
    description: 'Designed and implemented a comprehensive IaC platform using Terraform and AWS, reducing deployment time by 70% and improving infrastructure reliability.',
    image: null,
    tags: ['AWS', 'Terraform', 'Kubernetes', 'Jenkins'],
    github: 'https://github.com/ashankaushanka96/iac-platform',
    live: null,
    date: '2024',
    featured: true
  },
  {
    id: 2,
    title: 'Observability Platform',
    description: 'Built a comprehensive observability platform using Prometheus, Grafana, and custom metrics, providing real-time insights into system performance and reliability.',
    image: null,
    tags: ['Prometheus', 'Grafana', 'Python', 'Docker'],
    github: 'https://github.com/ashankaushanka96/observability-platform',
    live: null,
    date: '2023',
    featured: true
  },
  {
    id: 3,
    title: 'Automated Migration Platform',
    description: 'Developed an automated migration platform that streamlined the process of moving applications between environments with zero downtime.',
    image: null,
    tags: ['Python', 'Ansible', 'AWS', 'Shell'],
    github: 'https://github.com/ashankaushanka96/migration-platform',
    live: null,
    date: '2023',
    featured: true
  },
  {
    id: 4,
    title: 'Infrastructure Inventory System',
    description: 'Created a comprehensive inventory management system for tracking infrastructure components, dependencies, and compliance.',
    image: null,
    tags: ['Python', 'PostgreSQL', 'FastAPI', 'Docker'],
    github: 'https://github.com/ashankaushanka96/infrastructure-inventory',
    live: null,
    date: '2022',
    featured: false
  },
  {
    id: 5,
    title: 'SRE Operations Dashboard',
    description: 'Built a real-time SRE operations dashboard for monitoring system health, SLOs, and incident management.',
    image: null,
    tags: ['React', 'WebSocket', 'Prometheus', 'Node.js'],
    github: 'https://github.com/ashankaushanka96/sre-dashboard',
    live: null,
    date: '2022',
    featured: false
  },
  {
    id: 6,
    title: 'Cost Optimization Platform',
    description: 'Developed an automated cost optimization platform for AWS resources, reducing infrastructure costs by 40%.',
    image: null,
    tags: ['AWS Lambda', 'Python', 'CloudWatch', 'DynamoDB'],
    github: 'https://github.com/ashankaushanka96/cost-optimization',
    live: null,
    date: '2022',
    featured: false
  }
]

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">Featured Projects</h2>
          <p className="body-text max-w-3xl mx-auto">
            A selection of my recent work showcasing expertise in cloud infrastructure, 
            automation, monitoring, and reliability engineering. Each project demonstrates 
            problem-solving skills and operational excellence.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass-card overflow-hidden">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20 flex items-center justify-center">
                  <div className="text-6xl opacity-20">
                    {project.title.includes('Cloud') ? '☁️' : 
                     project.title.includes('Monitoring') ? '📊' :
                     project.title.includes('Migration') ? '🔄' :
                     project.title.includes('Inventory') ? '📦' :
                     project.title.includes('Operations') ? '⚙️' :
                     project.title.includes('Scheduler') ? '⏰' : '💻'}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="heading-3">{project.title}</h3>
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  </div>
                  
                  <p className="body-text mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="skill-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.github, '_blank')}
                      className="flex-1"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    {project.live && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.live, '_blank')}
                        className="flex-1"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="heading-3">Other Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass-card overflow-hidden">
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20 flex items-center justify-center">
                  <div className="text-4xl opacity-20">
                    {project.title.includes('Cloud') ? '☁️' : 
                     project.title.includes('Monitoring') ? '📊' :
                     project.title.includes('Migration') ? '🔄' :
                     project.title.includes('Inventory') ? '📦' :
                     project.title.includes('Operations') ? '⚙️' :
                     project.title.includes('Scheduler') ? '⏰' : '💻'}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-lg">{project.title}</h4>
                    <span className="text-xs text-muted-foreground">{project.date}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-200 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(project.github, '_blank')}
                    className="w-full"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
