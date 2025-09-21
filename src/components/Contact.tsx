'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Building } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sureshkumar.mandali@gmail.com",
    href: "mailto:sureshkumar.mandali@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9949999015",
    href: "tel:+919949999015"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: null
  },
  {
    icon: Building,
    label: "Organization",
    value: "WAISL Limited",
    href: null
  }
]

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-white relative">

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to discuss aviation IT solutions, digital transformation, or potential collaborations? 
            Let&apos;s connect and explore opportunities together.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 ${
                  item.href ? 'cursor-pointer group' : ''
                }`}
                onClick={() => item.href && window.open(item.href, '_self')}
              >
                <div className="flex items-center">
                  <div className="bg-emerald-500/20 p-3 rounded-lg group-hover:bg-emerald-500 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white mb-1">{item.label}</h4>
                    <p className="text-gray-300 group-hover:text-emerald-400 transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Let&apos;s Build Something Amazing Together</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              With 30+ years of aviation IT expertise and proven leadership in digital transformation,
              I&apos;m always excited to discuss new opportunities and challenges in the aviation industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:sureshkumar.mandali@gmail.com"
                className="bg-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-600 hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919949999015"
                className="bg-transparent border-2 border-emerald-400 text-emerald-400 px-8 py-3 rounded-full font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-300">
            <p className="mb-4">
              © 2025 Mandali Suresh Kumar. All rights reserved.
            </p>
            <p className="text-sm">
              Senior IT Operations Manager | Aviation Expert | Digital Transformation Leader
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact