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
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
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
              className="text-2xl font-bold text-gray-900 mb-8 flex items-center"
            >
              <GraduationCap className="w-6 h-6 mr-3 text-emerald-600" />
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
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                      <p className="text-emerald-600 font-semibold mb-2">{edu.institution}</p>
                      <span className="inline-block bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full">
                        {edu.type}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
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
              className="text-2xl font-bold text-gray-900 mb-8 flex items-center"
            >
              <Award className="w-6 h-6 mr-3 text-emerald-600" />
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
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                    <Award className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h4>
                  <p className="text-emerald-600 font-semibold mb-3">{cert.issuer}</p>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
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
            className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-8 text-white"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Professional Aspirations</h3>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-emerald-100">Short Term (18-24 months)</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-200 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Optimize Service Delivery using ITSM/ITIL frameworks and Six Sigma
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-200 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Drive IT initiatives supporting organizational goals
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-200 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Team certification in ITIL, PMP, Azure, CCNA/CCNP/CCIE
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-teal-100">Long Term</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-teal-200 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      IT Strategy & Digital Transformation Leadership
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-teal-200 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Head independent and larger Airport function
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-teal-200 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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