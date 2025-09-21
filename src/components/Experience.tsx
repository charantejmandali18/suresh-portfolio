'use client'

import { motion } from 'framer-motion'
import { Building, Calendar, MapPin } from 'lucide-react'
import Image from 'next/image'

const experiences = [
  {
    title: "Sr Manager / Associate General Manager – IT Operations & Projects",
    company: "WAISL Limited",
    period: "April 2023 - Present",
    location: "Hyderabad",
    logo: "/company-logos/waisl-logo.svg",
    responsibilities: [
      "Successfully executed APOC project (Airport Predictive Operation Centre) using AI powered digital twins",
      "Led as Interim Head – Service Delivery of IT for 1.5 years",
      "Increased revenue from 100 Cr to 126 Cr with concessionaires and stakeholders",
      "Completed projects: Main Car Park CCTV, Reserved Lounges, General Aviation Terminal, Cargo T2",
      "Participated in technical bidding for Apollo Hospitals, DIAL APOC, Cochin Airport, Singapore Shipping Corporation"
    ]
  },
  {
    title: "Operations Manager – IT Operations",
    company: "WAISL Limited",
    period: "April 2021 - March 2023",
    location: "Hyderabad",
    logo: "/company-logos/waisl-logo.svg",
    responsibilities: [
      "Led team with all domains in IT Operations",
      "Successfully handled 4 clients: GHIAL, GMR MRO, GMR Cargo & HDFRL",
      "Led DIGIYATRA implementation - first time in country within one year",
      "Executed Tech Refresh of Network, Servers, Application (UFIS to AMS)",
      "Attained new business opportunities from GMR Cargo & HDFRL"
    ]
  },
  {
    title: "Associate Manager / Operations In-Charge",
    company: "WAISL Limited",
    period: "October 2020 - March 2021",
    location: "Hyderabad",
    logo: "/company-logos/waisl-logo.svg",
    responsibilities: [
      "Led operations with team size of 120+ members",
      "Generated business revenue from new opportunities like GMR MRO IT services",
      "Improved operational efficiency with inter-departmental business models",
      "Contracts & Vendor Management - Technical and Capability reviews",
      "Building and motivating in-house talent to avoid outsource dependencies"
    ]
  },
  {
    title: "Senior Engineer / Duty Manager – IT Projects",
    company: "GMR Airport Developers Limited (GADL) & GHIAL",
    period: "November 2016 - September 2020",
    location: "Hyderabad",
    logo: "/company-logos/gmr-logo.svg",
    responsibilities: [
      "Led end-to-end E-Boarding solution deployment",
      "Achieved man-less operations at boarding gates",
      "Enhanced Security monitoring and reduced no-show process",
      "Delivered innovative solutions and business models",
      "Developed strategies driving technology solutions for business objectives"
    ]
  },
  {
    title: "Senior Engineer / Duty Manager – IT Operations",
    company: "GMR Airport Developers Limited (GADL) & GHIAL",
    period: "October 2012 - November 2016",
    location: "Hyderabad",
    logo: "/company-logos/gmr-logo.svg",
    responsibilities: [
      "Handled 24x7 shift operations with team of 30 members",
      "100% met all agreed SLAs & System Availability",
      "Achieved ASI Quality Certifications - World No.1 & 2 positions in 12-15 MPPA size airports",
      "Led IOT platform deployment for Smart Trolley project",
      "Driven process improvements to reduce costs and improve customer satisfaction"
    ]
  },
  {
    title: "Executive – IT Operations / Project Manager",
    company: "GMR Airport Developers Limited (GADL) & GHIAL/DIAL",
    period: "April 2009 - June 2010 (IGIA Delhi: June 2010 - October 2012)",
    location: "Hyderabad / New Delhi",
    logo: "/company-logos/gmr-logo.svg",
    responsibilities: [
      "Project Manager for T3 Terminal Delhi - Mega Infrastructure project (2010-2012)",
      "Handled EUS of IT Services & Support in Airport IT Operations",
      "Successfully attained ISO 20K certification",
      "Built CCV (Command Control Vehicle) for better incident visibility",
      "Implemented Terminal-2D & Terminal-3 with complete IT infrastructure"
    ]
  },
  {
    title: "Senior Technical Coordinator",
    company: "GMR Hyderabad International Airport Limited (GHIAL)",
    period: "April 2007 - March 2009",
    location: "Hyderabad",
    logo: "/company-logos/gmr-logo.svg",
    responsibilities: [
      "Successfully completed installation and testing of all IT systems",
      "Completed ORAT (Operational Readiness of Airport and Transfer)",
      "Implemented IT systems in AOCC and SOCC",
      "Deployed BMC Remedy solution for ITSM process",
      "Completed CUSS installations for better Passenger Experience"
    ]
  },
  {
    title: "Technical Coordinator",
    company: "GMR Hyderabad International Airport Limited (GHIAL)",
    period: "May 2006 - March 2007",
    location: "Hyderabad",
    logo: "/company-logos/gmr-logo.svg",
    responsibilities: [
      "Implementation of SCS works in Greenfield Airport",
      "Set up Check-in & Boarding Gate counters under Passenger Processing System",
      "Installed CCTV Surveillance, Access Control, IP Telephony systems",
      "Implemented FIDS, MATV, PAVA systems",
      "Transitioned from Lotus Notes to MS Exchange"
    ]
  },
  {
    title: "Coordinator - IT Project Management",
    company: "GMR Hyderabad International Airport Limited (GHIAL)",
    period: "May 2005 - April 2006",
    location: "Hyderabad",
    logo: "/company-logos/gmr-logo.svg",
    responsibilities: [
      "Survey of Airport IT Backbone for new Greenfield Airport Project",
      "Preparation of Network Backbone Architecture",
      "Involved in preparing IT Scope and Design of IT Systems",
      "Maintaining and Review of Airport peripheral drawings for IT FOC design",
      "Key member in Team for new Greenfield Airport Project"
    ]
  },
  {
    title: "Executive – IT Projects",
    company: "Madhucon Projects Limited",
    period: "2001 - 2005",
    location: "India",
    logo: null,
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
    <section id="experience" className="py-20 text-white relative">

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-400/30 hidden md:block"></div>
            
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
                <div className="absolute -left-20 top-6 w-4 h-4 bg-emerald-400 rounded-full border-4 border-slate-800 shadow-lg hidden md:block"></div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center text-emerald-400 font-semibold mb-2">
                        {exp.logo ? (
                          <div className="w-8 h-8 mr-3 flex items-center justify-center bg-white rounded-lg p-1">
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              width={24}
                              height={24}
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <Building className="w-4 h-4 mr-2" />
                        )}
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-col md:items-end text-sm text-gray-300 flex-shrink-0 min-w-[200px]">
                      <div className="flex items-center mb-1 whitespace-nowrap">
                        <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center whitespace-nowrap">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-300 leading-relaxed">{responsibility}</p>
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