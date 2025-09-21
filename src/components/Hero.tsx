'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Building, Plane } from 'lucide-react'
import { fadeIn, slideInLeft, slideInRight, animateNumber, addHoverScale } from '@/utils/simpleAnimations'

const Hero = () => {
  useEffect(() => {
    // Add simple anime.js animations
    setTimeout(() => {
      // Fade in main content
      fadeIn('.anime-fade-in', 100);
      
      // Slide in animations
      slideInLeft('.anime-slide-left', 200);
      slideInRight('.anime-slide-right', 400);
      
      // Animate numbers
      const counters = document.querySelectorAll('.counter');
      counters.forEach((counter, index) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        setTimeout(() => {
          animateNumber(counter as HTMLElement, target, 2000);
        }, 800 + index * 100);
      });
      
      // Add hover effects to buttons
      addHoverScale('.hover-scale');
    }, 100);
  }, [])

  return (
    <section className="min-h-screen text-white flex items-center justify-center relative">

      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium anime-fade-in"
              >
                <Plane className="w-4 h-4" />
                Aviation IT Expert
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold leading-tight anime-slide-left"
              >
                <span className="text-white">Mandali</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Suresh Kumar
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 font-medium"
              >
                Senior Manager - IT Operations & Projects
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-gray-400 leading-relaxed max-w-lg"
>                Leading digital transformation in aviation with 30+ years of expertise in airport operations and IT infrastructure.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 hover-scale"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Experience
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:sureshkumar.mandali@gmail.com"
                className="border border-gray-600 hover:border-emerald-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover-scale"
              >
                Get In Touch
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>sureshkumar.mandali@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Hyderabad, India</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side - Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 anime-slide-right hover-scale"
              >
                <div className="text-3xl font-bold text-emerald-400 mb-2 counter" data-target="30">0</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 anime-slide-right hover-scale"
              >
                <div className="text-3xl font-bold text-teal-400 mb-2 counter" data-target="130">0</div>
                <div className="text-gray-300 text-sm">Team Members</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 anime-slide-right hover-scale"
              >
                <div className="text-3xl font-bold text-emerald-400 mb-2">30M</div>
                <div className="text-gray-300 text-sm">PAX Capacity</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 anime-slide-right hover-scale"
              >
                <div className="text-3xl font-bold text-teal-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Operations</div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-xl p-6 anime-fade-in hover-scale"
            >
              <div className="flex items-center gap-3 mb-3">
                <Building className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">WAISL Limited</span>
              </div>
              <p className="text-gray-300 text-sm">
                Leading IT Operations & Projects for one of India&apos;s premier aviation infrastructure companies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-emerald-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero