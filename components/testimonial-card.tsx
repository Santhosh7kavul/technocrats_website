'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  delay?: number;
}

export default function TestimonialCard({ name, role, company, content, rating, image, delay = 0 }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
    >
      <div className="flex items-start gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-white/60 text-sm">{role} at {company}</p>
        </div>
      </div>
      <div className="flex gap-1 my-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'}`}
          />
        ))}
      </div>
      <p className="text-white/80 text-sm leading-relaxed">{content}</p>
    </motion.div>
  );
}