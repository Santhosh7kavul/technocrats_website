/* eslint-disable @next/next/no-img-element */

'use client';
import Image from "next/image";
import { Target, Award, LineChart, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Newsletter from '@/components/newsletter';
import { Toaster } from '@/components/ui/sonner';
import img1 from '../resources/1.gif';

const achievements = [
  { number: '500+', label: 'Clients Served', icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-400" /> },
  { number: '98%', label: 'Client Satisfaction', icon: <Award className="w-6 h-6 md:w-8 md:h-8 text-green-400" /> },
  { number: '150+', label: 'Projects Completed', icon: <Target className="w-6 h-6 md:w-8 md:h-8 text-purple-400" /> },
  { number: '25M+', label: 'Revenue Generated', icon: <LineChart className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" /> },
];

export default function Home() {
  return (
    <div>
      <Toaster />
      <div className="container mx-auto px-4 pt-24 md:pt-32 mt-12">
        {/* <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12"> */}
        <div className="mb-12 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl "
          >
            <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold text-white leading-tight mb-4 md:mb-6">
              We deliver cutting-edge IT solutions that empower businesses to thrive in a digital world
            </h1>
            <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8">
              Our innovative approach ensures seamless integration and growth through technology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            // className="hidden lg:block"
            className="block lg:block"
          >
            <Image src={img1} alt="Animated GIF" width={300} height={200}
              className="w-72 md:w-96 h-72 md:h-96 object-cover rounded-full"
            />

          </motion.div>

        </div>
      </div>


      {/* Vision & Mission Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-lg"
          >
            <h2 className="text-xl md:text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              To be the global leader in innovative IT solutions, transforming businesses through cutting-edge technology
              and setting new standards in digital excellence. We envision a world where technology seamlessly empowers
              every organization to achieve its full potential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-lg"
          >
            <h2 className="text-xl md:text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              To deliver exceptional IT solutions that drive business growth and innovation. We are committed to
              providing our clients with reliable, scalable, and secure technology solutions while maintaining the
              highest standards of quality and customer service.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12"
        >
          Our Achievements
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg p-4 md:p-6 rounded-lg text-center"
            >
              <div className="flex justify-center mb-3 md:mb-4">{achievement.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{achievement.number}</h3>
              <p className="text-white/80 text-sm md:text-base">{achievement.label}</p>
            </motion.div>
          ))}
        </div>
      </div>



      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <Newsletter />
      </div>
    </div>
  );
}