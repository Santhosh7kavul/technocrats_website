'use client';
import { motion } from 'framer-motion';
import { Monitor, Server, Shield, Smartphone, Target, Award, LineChart, Users, Calendar, Sprout, Building, GraduationCap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import TestimonialCard from '@/components/testimonial-card';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";


// const testimonials = [
//     {
//       name: "Alex Thompson",
//       role: "CTO",
//       company: "TechVision Inc",
//       content: "Technocrats.info transformed our digital infrastructure. Their innovative solutions helped us achieve 40% better performance.",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
//     },
//     {
//       name: "Sarah Chen",
//       role: "Operations Director",
//       company: "AgriTech Solutions",
//       content: "Their expertise in agri-tech solutions is unmatched. They helped us implement IoT sensors that revolutionized our farming practices.",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
//     },
//     {
//       name: "Michael Rodriguez",
//       role: "CEO",
//       company: "Digital Dynamics",
//       content: "The team's dedication to excellence and innovative approach to problem-solving sets them apart. Highly recommended!",
//       rating: 4,
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
//     }
//   ];

  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  
export default function About(){
    return(
        <div>
            {/* Services Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              icon: <Monitor className="w-8 h-8 md:w-10 md:h-10 mb-4" />,
              title: "Digital Transformation",
              description: "Transform your business with cutting-edge digital solutions"
            },
            {
              icon: <Server className="w-8 h-8 md:w-10 md:h-10 mb-4" />,
              title: "Cloud Solutions",
              description: "Scalable and secure cloud infrastructure for your needs"
            },
            {
              icon: <Shield className="w-8 h-8 md:w-10 md:h-10 mb-4" />,
              title: "Cybersecurity",
              description: "Protect your business with advanced security measures"
            },
            {
              icon: <Smartphone className="w-8 h-8 md:w-10 md:h-10 mb-4" />,
              title: "Mobile Solutions",
              description: "Custom mobile applications for your business"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-4 md:p-6 bg-white/10 backdrop-blur-lg border-none text-white hover:bg-white/20 transition-colors">
                {service.icon}
                <h3 className="text-lg md:text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-white/80 text-sm md:text-base">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12"
        >
          What Our Clients Say
        </motion.h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
              delay={index * 0.1}
            />
          ))}
        </div> */}
        <div>
        <AnimatedTestimonials testimonials={testimonials} />
        </div>

      </div>
        </div>
    );
}