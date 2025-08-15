'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, GraduationCap, Award, Heart, Zap, Target } from 'lucide-react'
import Image from 'next/image'

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'Deep love for technology and continuous learning'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Always exploring new technologies and approaches'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Striving for the highest quality in everything I do'
  }
]

const timeline = [
  {
    year: 'Current',
    title: 'Senior Site Reliability Engineer',
    company: 'GTN Group',
    description: 'Leading site reliability engineering initiatives'
  },
  {
    year: 'Previous',
    title: 'Site Reliability Engineer',
    company: 'N-able',
    description: 'Building reliable, scalable infrastructure'
  }
]

export function About() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">About Me</h2>
          <p className="body-text max-w-3xl mx-auto">
            A passionate Site Reliability Engineer and DevOps Engineer with expertise in cloud infrastructure, 
            automation, monitoring, and reliability engineering. I love solving complex operational problems 
            and building reliable, scalable systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    AP
                  </span>
                </div>
                                  <div>
                    <h3 className="heading-3">Ashan Pathiranage</h3>
                    <p className="text-primary-600 dark:text-primary-400">Site Reliability Engineer & DevOps Engineer</p>
                  </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary-500" />
                  <span>Colombo, Sri Lanka</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary-500" />
                  <span>Available for opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-primary-500" />
                  <span>BSc in Computer Science</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-primary-500" />
                  <span>5+ years of experience</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="heading-3 mb-6">My Values</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="heading-3 mb-6">Experience Timeline</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 bg-primary-500 rounded-full -translate-x-[9px]" />
                    <div className="mb-2">
                      <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-primary-600 dark:text-primary-400 mb-2">{item.company}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="heading-3 mb-6">What I Do</h3>
              <div className="space-y-4">
                <p className="body-text">
                  I specialize in building and maintaining reliable, scalable infrastructure 
                  using AWS, Kubernetes, and modern DevOps practices. My expertise includes:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Cloud infrastructure design and implementation</li>
                  <li>• CI/CD pipeline automation and optimization</li>
                  <li>• Monitoring, alerting, and observability</li>
                  <li>• Infrastructure as code and automation</li>
                  <li>• Incident response and reliability engineering</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
