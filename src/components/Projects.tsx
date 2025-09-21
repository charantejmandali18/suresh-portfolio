'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerFadeIn, addHoverScale } from '@/utils/simpleAnimations'

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  impact: string[]
  technologies: string[]
  logo: string
  gradient: string
}

const projects: Project[] = [
  {
    id: 'digi-yatra',
    title: 'Digi Yatra',
    subtitle: 'Facial Recognition Based Seamless Travel',
    description: 'Revolutionary biometric-based seamless travel experience enabling paperless and contactless passenger processing at airports.',
    impact: [
      'Reduced passenger processing time by 70%',
      'Enhanced security with biometric authentication',
      'Improved passenger satisfaction scores'
    ],
    technologies: ['Biometrics', 'AI/ML', 'Cloud Infrastructure', 'API Integration'],
    logo: '/project-logos/digi-yatra.svg',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'e-boarding',
    title: 'E-Boarding System',
    subtitle: 'Digital Boarding Pass Management',
    description: 'Comprehensive digital boarding solution integrating mobile apps, self-service kiosks, and automated gate systems.',
    impact: [
      'Eliminated paper boarding passes',
      'Reduced boarding time by 40%',
      'Real-time passenger tracking and analytics'
    ],
    technologies: ['Mobile Apps', 'QR/Barcode', 'RFID', 'Real-time Systems'],
    logo: '/project-logos/e-boarding.svg',
    gradient: 'from-emerald-400 to-teal-600'
  },
  {
    id: 'apoc',
    title: 'APOC',
    subtitle: 'Airport Operational Control Centre',
    description: 'Centralized command center for real-time airport operations management, integrating multiple stakeholder systems.',
    impact: [
      'Unified operational view across departments',
      'Reduced incident response time by 60%',
      'Predictive analytics for resource optimization'
    ],
    technologies: ['IoT Sensors', 'Big Data', 'Dashboard Systems', 'Predictive Analytics'],
    logo: '/project-logos/apoc.svg',
    gradient: 'from-teal-500 to-emerald-600'
  },
  {
    id: 'digital-twin',
    title: 'Airport Digital Twin',
    subtitle: '3D Virtual Airport Simulation',
    description: 'Advanced 3D digital replica of airport infrastructure for simulation, planning, and optimization.',
    impact: [
      'Virtual testing of operational scenarios',
      'Optimized resource allocation',
      'Enhanced emergency response planning'
    ],
    technologies: ['3D Modeling', 'Simulation', 'Digital Twin', 'VR/AR'],
    logo: '/project-logos/digital-twin.svg',
    gradient: 'from-teal-400 to-emerald-500'
  }
]

export default function Projects() {
  useEffect(() => {
    // Add stagger fade-in animation to project cards
    staggerFadeIn('.project-card', 150)
    
    // Add hover scale effect to project cards
    addHoverScale('.project-card', 1.03)
    
    // Add stagger fade-in for tech tags
    staggerFadeIn('.tech-tag', 50)
    
    // Add fade-in for impact items
    staggerFadeIn('.impact-item', 80)
  }, [])

  return (
    <section id="projects" className="py-20 text-white relative">

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Major Projects
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-300">
            Transformative aviation IT solutions that revolutionized airport operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Spotlight effect container */}
              <div className="spotlight absolute inset-0 rounded-2xl pointer-events-none" />
              
              {/* Card content */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                {/* Featured badge for first two projects */}
                {index < 2 && (
                  <div className="featured-badge absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-full">
                    FEATURED
                  </div>
                )}

                {/* Project logo with gradient background */}
                <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${project.gradient} p-2.5 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  <Image
                    src={project.logo}
                    alt={`${project.title} logo`}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Project title and subtitle */}
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-emerald-400 font-semibold mb-4">
                  {project.subtitle}
                </p>

                {/* Project description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                    Key Impact
                  </h4>
                  <ul className="space-y-2">
                    {project.impact.map((item, i) => (
                      <li key={i} className="impact-item flex items-start text-sm text-gray-300">
                        <span className="text-emerald-400 mr-2 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="tech-tag px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Decorative gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}