'use client'

import { motion } from 'framer-motion'
import { Award, Rocket, Star, TrendingUp, RotateCw, Shield } from 'lucide-react'

const achievements = [
  {
    icon: Shield,
    title: "ISO Certifications",
    description: "Successfully led WAISL to achieve ISO 9K1, 20K, 27K, 22301, and CMMi L3 certifications",
    highlight: "Multiple Standards"
  },
  {
    icon: Rocket,
    title: "Digital Projects",
    description: "Successfully executed E-Boarding, Digi Yatra, and APOC Infrastructure project go-lives",
    highlight: "Digital Innovation"
  },
  {
    icon: Award,
    title: "ACI Recognition",
    description: "Received multiple Awards & Recognitions from Airports Council International year-on-year",
    highlight: "Industry Recognition"
  },
  {
    icon: Star,
    title: "Skytrax Award",
    description: "Contributed to achieving BEST Airport Award from Skytrax for passenger experience",
    highlight: "Excellence Award"
  },
  {
    icon: TrendingUp,
    title: "Growth Impact",
    description: "Supported airport growth from 12 million to 30 million PAX movement per year",
    highlight: "150% Growth"
  },
  {
    icon: RotateCw,
    title: "System Migration",
    description: "Successfully completed IP Telephony migration from Siemens to Avaya System",
    highlight: "Zero Downtime"
  }
]

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Achievements</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                  <achievement.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <span className="inline-block bg-emerald-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                  {achievement.highlight}
                </span>
              </div>
              
              <p className="text-gray-700 text-center leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Additional metrics section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Impact Metrics</h3>
            <p className="text-emerald-100">Quantifiable results from leadership and operations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm text-emerald-100">Operations Coverage</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">130+</div>
              <div className="text-sm text-emerald-100">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm text-emerald-100">Years at GMR</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-sm text-emerald-100">Major Certifications</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements