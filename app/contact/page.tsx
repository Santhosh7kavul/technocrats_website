'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';
// import Header from '@/components/header';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900">
      {/* <Header /> */}
      
      <div className="container mx-auto px-4 pt-24 md:pt-32">
        {/* Contact Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-16"
          >
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6">Let's talk business.</h1>
            <p className="text-base md:text-xl text-white/80">
              Ready to transform your business with cutting-edge technology? We're here to help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 md:space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-lg p-4 md:p-6 rounded-lg">
                <div className="flex items-center gap-3 md:gap-4 mb-2">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                  <h3 className="text-lg md:text-xl font-semibold text-white">Phone</h3>
                </div>
                <a 
                  href="tel:+919731067126" 
                  className="text-white/80 hover:text-white transition-colors block ml-8 md:ml-10 text-sm md:text-base"
                >
                  +91 97310 67126
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-lg p-4 md:p-6 rounded-lg">
                <div className="flex items-center gap-3 md:gap-4 mb-2">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                  <h3 className="text-lg md:text-xl font-semibold text-white">Email</h3>
                </div>
                <a 
                  href="mailto:technocratsinfo14@gmail.com" 
                  className="text-white/80 hover:text-white transition-colors block ml-8 md:ml-10 text-sm md:text-base break-all"
                >
                  technocratsinfo14@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg p-4 md:p-8 rounded-lg"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">Connect With Us</h3>
              <div className="space-y-3 md:space-y-4">
                {[
                  { icon: <Linkedin className="w-4 h-4 md:w-5 md:h-5" />, label: 'LinkedIn', href: '#' },
                  { icon: <Twitter className="w-4 h-4 md:w-5 md:h-5" />, label: 'Twitter', href: '#' },
                  { icon: <Github className="w-4 h-4 md:w-5 md:h-5" />, label: 'GitHub', href: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center gap-3 md:gap-4 text-white/80 hover:text-white transition-colors p-2 md:p-3 rounded-lg hover:bg-white/5 text-sm md:text-base"
                  >
                    {social.icon}
                    <span>{social.label}</span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-auto" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-sm md:text-base">
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </div>
    </main>
  );
}