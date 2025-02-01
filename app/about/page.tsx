'use client';
import { motion } from 'framer-motion';
import {Target, Calendar, Sprout, Building, GraduationCap } from 'lucide-react';

const milestones = [
    {
      date: 'March 2022',
      title: 'Founded at SSIT',
      description: 'Established with support from alumni and industry professionals',
      icon: <Building className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      date: '2022-2023',
      title: 'Educational Initiatives',
      description: 'Conducted 6-7 free webinars for SSIT students',
      icon: <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      date: 'Early 2024',
      title: 'Commercial Launch',
      description: 'Started receiving and delivering client projects',
      icon: <Target className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      date: 'November 13, 2024',
      title: 'Official Registration',
      description: 'Registered as Chaalanikraftsinfo LLP',
      icon: <Calendar className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      date: 'Present',
      title: 'Agri-Tech Focus',
      description: 'Developing innovative solutions for agricultural challenges',
      icon: <Sprout className="w-5 h-5 md:w-6 md:h-6" />
    }
  ];

export default function About(){
    return(
        <div className="container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">Our Journey</h2>
          <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto">
            From our humble beginnings at SSIT to becoming a forward-thinking agri-tech innovator, 
            our journey has been defined by continuous growth and adaptation.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/20" />

          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-4 md:gap-8`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white/10 backdrop-blur-lg p-4 md:p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-2 md:mb-3 justify-center md:justify-start">
                      <div className="text-white/60">{milestone.icon}</div>
                      <span className="text-white/60 text-sm md:text-base">{milestone.date}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                    <p className="text-white/80 text-sm md:text-base">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full" />
                <div className="w-full md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
}