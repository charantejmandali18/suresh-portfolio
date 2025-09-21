'use client'

import { motion } from 'framer-motion'
import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 text-white relative">

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Core summary */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Aviation IT Leader</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Senior IT Operations Manager with <span className="font-semibold text-emerald-600">30+ years</span> of 
                  comprehensive experience in aviation IT infrastructure and digital transformation.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Currently leading <span className="font-semibold text-emerald-600">24x7 IT Operations</span> at WAISL Limited, 
                  managing critical aviation systems and driving digital innovation across airport operations.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">12M → 30M</div>
                  <div className="text-sm text-gray-300">PAX Growth Supported</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-teal-400 mb-1">5+</div>
                  <div className="text-sm text-gray-300">ISO Certifications</div>
                </div>
              </div>
            </motion.div>
            
            {/* Right side - Key strengths */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                <div className="bg-emerald-500/20 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Veteran Aviation Expertise</h4>
                  <p className="text-gray-300 text-sm">Expert in commissioning both greenfield and brownfield airports with comprehensive understanding of aviation operations.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                <div className="bg-teal-500/20 p-3 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Digital Transformation</h4>
                  <p className="text-gray-300 text-sm">Leading implementation of cutting-edge technologies including APOC, Digital Twin, and Digi Yatra systems.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                <div className="bg-emerald-500/20 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Leadership Excellence</h4>
                  <p className="text-gray-300 text-sm">Managing 130+ team members with proven expertise in transitional, situational, and visionary leadership.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                <div className="bg-teal-500/20 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Business Impact</h4>
                  <p className="text-gray-300 text-sm">Achieved multiple ISO certifications and industry awards while maintaining operational excellence and cost optimization.</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Career Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl p-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Professional Vision</h3>
              <p className="text-gray-300">Driving the future of aviation technology and operations</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-emerald-400">Strategic Focus</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>IT Strategy & Digital Transformation Leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Service Delivery Optimization using ITSM/ITIL frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Independent Airport Function Leadership</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-teal-400">Team Development</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Building high-performing teams and learning culture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Team certification in ITIL, PMP, Azure, CCNA/CCNP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mentoring next generation of aviation IT leaders</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About