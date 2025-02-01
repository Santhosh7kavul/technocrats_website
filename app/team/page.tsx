'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import bhargavImg from "../../resources/bhargav.jpg";
import vedaImg from "../../resources/veda.jpg";
import santhoshImg from "../../resources/santhosh.jpg";
import harshithaImg from "../../resources/harshittha.jpeg";
import poojaImg from "../../resources/pooja.webp";

const teamMembers = [
  {
    name: 'Bhargava NS',
    role: 'CEO & Founder',
    image: bhargavImg,
    bio: 'Experienced in tech leadership, Bhargav drives our vision forward.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Vedhasree HS',
    role: 'Devops Engineer',
    image: vedaImg,
    bio: 'Expert in cloud architecture and digital transformation with a passion for innovation.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Santhosh Kavul',
    role: 'Software Developer',
    image: santhoshImg,
    bio: 'Full-stack developer with expertise in modern web technologies and architectures.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Harshitha',
    role: 'Head of Design',
    image: harshithaImg,
    bio: 'Leading our design team in creating beautiful and intuitive user experiences.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Pooja Birdar',
    role: 'Software Developer',
    image: poojaImg,
    bio: 'Full-stack developer with expertise in modern web technologies and architectures.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  }
];

export default function TeamPage() {
  return (

    <div>
      <div className="container mx-auto px-4 pt-24 md:pt-32">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">Our Team</h1>
          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto">
            Meet the talented individuals who make our vision a reality through innovation, dedication, and expertise.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden"
            >
              {/* <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 md:h-64 object-cover"
              /> */}

              <Image src={member.image} alt={member.name} width={300} height={200}
                className="w-96 md:w-96 h-72 md:h-96 object-cover"
              />
              <div className="p-4 md:p-6 ">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-white/60 text-sm md:text-base mb-3">{member.role}</p>
                <p className="text-white/80 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.social.linkedin} className="text-white/60 hover:text-white">
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a href={member.social.twitter} className="text-white/60 hover:text-white">
                    <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a href={member.social.github} className="text-white/60 hover:text-white">
                    <Github className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}