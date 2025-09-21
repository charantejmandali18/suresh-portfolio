'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar } from 'lucide-react'

const educationData = [
  {
    degree: "MBA - IT",
    institution: "Indian Institute of Business Management & Studies",
    year: "2010",
    type: "Masters"
  },
  {
    degree: "B.Com",
    institution: "Nagarjuna University",
    year: "1993",
    type: "Bachelors"
  }
]

const certifications = [
  {
    title: "ITIL Certification",
    issuer: "APM Group",
    description: "IT Service Management Framework"
  },
  {
    title: "Technical Helpdesk",
    issuer: "Brainbench",
    description: "Technical Support Excellence"
  },
  {
    title: "MS Windows Vista Desktop Administration",
    issuer: "Brainbench",
    description: "Desktop Administration & Management"
  }
]

const Education = () => {
  return (
    <section id="education" className="py-20 text-white relative">

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {/* Education Section */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center"
            >
              <GraduationCap className="w-6 h-6 mr-3 text-emerald-400" />
              Academic Qualifications
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                      <p className="text-emerald-400 font-semibold mb-2">{edu.institution}</p>
                      <span className="inline-block bg-emerald-500/20 text-emerald-300 text-sm px-3 py-1 rounded-full">
                        {edu.type}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.year}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Certifications Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center"
            >
              <Award className="w-6 h-6 mr-3 text-emerald-400" />
              Professional Certifications
            </motion.h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/20 rounded-full mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                    <Award className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
                  <p className="text-emerald-400 font-semibold mb-3">{cert.issuer}</p>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Career Goals Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl p-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-white">Professional Aspirations</h3>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-emerald-400">Short Term (18-24 months)</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Optimize Service Delivery using ITSM/ITIL frameworks and Six Sigma
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Drive IT initiatives supporting organizational goals
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Team certification in ITIL, PMP, Azure, CCNA/CCNP/CCIE
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-teal-400">Long Term</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      IT Strategy & Digital Transformation Leadership
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Head independent and larger Airport function
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Build high performing teams and promote learning culture
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education