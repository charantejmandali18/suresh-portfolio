'use client'

import { motion } from 'framer-motion'
import { Building, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: "Sr Manager – IT Operations & Projects",
    company: "WAISL Limited",
    period: "July 2020 - Present",
    location: "Hyderabad",
    responsibilities: [
      "Leading & managing 24x7 IT Operations with 30+ FTEs and 100+ vendor engineers",
      "Managing technical domains: CCTV Cameras, Digi Yatra & Communication systems",
      "Heading IT Projects across GHIAL, GKEL (Power Plant) & BIRD Group",
      "SLA Management and Business development for new opportunities",
      "AOP Management (OPEX & CAPEX budget planning)"
    ]
  },
  {
    title: "Duty Manager – IT Operations / Project Manager",
    company: "GMR Airport Developers Limited (GADL) & GHIAL/DIAL",
    period: "May 2005 - June 2020",
    location: "Hyderabad / New Delhi",
    responsibilities: [
      "Project Manager for T3 Terminal Delhi (2009-2011)",
      "Sr Engineer – IT Operations at GHIAL (2005-2008)",
      "Duty Manager – IT Operations at GADL (2008-2020)",
      "Built IT infrastructure for greenfield airports",
      "Managed critical aviation systems and operations"
    ]
  },
  {
    title: "Executive – IT Projects",
    company: "Madhucon Projects Limited",
    period: "2001 - 2005",
    location: "India",
    responsibilities: [
      "Led IT project implementations",
      "Infrastructure development and management",
      "System integration and deployment"
    ]
  },
  {
    title: "Sr Assistant – Plant Operations",
    company: "Raasi Ceramic Industry Limited",
    period: "1996 - 2001",
    location: "India",
    responsibilities: [
      "Plant operations management",
      "Process optimization",
      "Team coordination"
    ]
  },
  {
    title: "Executive Assistant",
    company: "Sahney Paris Rhone Limited & General Motors",
    period: "1993 - 1996",
    location: "India",
    responsibilities: [
      "Executive support and administration",
      "Operations coordination",
      "Project assistance"
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200 hidden md:block"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-12 md:ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <div className="flex items-center text-emerald-600 font-semibold mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:items-end text-sm text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience