'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Wrench } from 'lucide-react'
import Image from 'next/image'

const skillCategories = [
  {
    title: 'Infrastructure & Cloud',
    icon: Code,
    skills: [
      { name: 'AWS', proficiency: 90 },
      { name: 'Kubernetes', proficiency: 85 },
      { name: 'Docker', proficiency: 90 },
      { name: 'Terraform', proficiency: 85 },
      { name: 'Linux', proficiency: 90 },
      { name: 'CI/CD', proficiency: 95 }
    ]
  },
  {
    title: 'Monitoring & Observability',
    icon: Database,
    skills: [
      { name: 'Prometheus', proficiency: 85 },
      { name: 'Grafana', proficiency: 80 },
      { name: 'Datadog', proficiency: 85 },
      { name: 'ELK Stack', proficiency: 75 },
      { name: 'Jaeger', proficiency: 70 },
      { name: 'Alerting', proficiency: 90 }
    ]
  },
  {
    title: 'DevOps & Automation',
    icon: Cloud,
    skills: [
      { name: 'Jenkins', proficiency: 85 },
      { name: 'GitLab CI/CD', proficiency: 90 },
      { name: 'Ansible', proficiency: 80 },
      { name: 'Python', proficiency: 85 },
      { name: 'Shell Scripting', proficiency: 90 },
      { name: 'Git', proficiency: 95 }
    ]
  },
  {
    title: 'Programming & Scripting',
    icon: Wrench,
    skills: [
      { name: 'Python', proficiency: 85 },
      { name: 'Bash', proficiency: 90 },
      { name: 'JavaScript', proficiency: 75 },
      { name: 'YAML', proficiency: 90 },
      { name: 'JSON', proficiency: 90 },
      { name: 'Go', proficiency: 70 }
    ]
  }
]

const toolBadges = [
  { name: 'AWS', icon: '☁️' },
  { name: 'Kubernetes', icon: '⚓' },
  { name: 'Docker', icon: '🐳' },
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Python', icon: '🐍' },
  { name: 'Java', icon: '☕' },
  { name: 'Terraform', icon: '🏗️' },
  { name: 'Jenkins', icon: '🤖' },
  { name: 'GitLab', icon: '🦊' },
  { name: 'Datadog', icon: '📊' },
  { name: 'Ansible', icon: '⚙️' }
]

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">Skills & Technologies</h2>
          <p className="body-text max-w-3xl mx-auto">
            A comprehensive set of skills across cloud infrastructure, DevOps practices, 
            monitoring, and reliability engineering. Continuously learning and adapting to new technologies.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                  <category.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="heading-3">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-primary-600 dark:text-primary-400">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3, duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tool Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="heading-3 mb-8">Technologies I Work With</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {toolBadges.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center text-2xl">
                  {tool.icon}
                </div>
                <span className="text-xs font-medium text-center">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
