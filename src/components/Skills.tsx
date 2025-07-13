'use client'

import { motion } from 'framer-motion'
import { Plane, Server, FolderOpen, Users } from 'lucide-react'

const skillCategories = [
  {
    icon: Plane,
    title: "Aviation Expertise",
    skills: [
      "Airport Operations (APOC)",
      "Greenfield & Brownfield Airports",
      "Aviation Digital Twin",
      "AODB & UFIS Systems",
      "Airline Operations Support",
      "Airport Crisis Management",
      "PAX Experience Optimization"
    ]
  },
  {
    icon: Server,
    title: "IT Operations",
    skills: [
      "24x7 Operations Management",
      "CCTV & Surveillance Systems",
      "Network Infrastructure",
      "Data Center Management",
      "Service Desk Operations",
      "IP Telephony Systems",
      "System Integration"
    ]
  },
  {
    icon: FolderOpen,
    title: "Project Management",
    skills: [
      "Large Scale IT Projects",
      "Digital Transformation",
      "Vendor Management",
      "Budget & Financial Management",
      "Risk Management",
      "ITIL Processes",
      "Change Management"
    ]
  },
  {
    icon: Users,
    title: "Leadership",
    skills: [
      "Team Management (130+ members)",
      "Transitional Leadership",
      "Situational Leadership",
      "Visionary Leadership",
      "People Development",
      "Stakeholder Management",
      "Crisis Management"
    ]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Competencies</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-lg group-hover:bg-emerald-600 transition-colors duration-300">
                  <category.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 ml-3">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills