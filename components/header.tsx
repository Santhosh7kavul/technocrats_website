'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Solutions', href: '/solutions' },
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-r from-indigo-950/95 to-blue-900/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <motion.div 
              initial={{ opacity: 0, x: -20  }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-xl md:text-2xl font-bold transition-colors  ${
                scrolled ? 'text-black' : 'text-white/90 hover:text-white'
              }`}
            >
              Technocrats_info
            </motion.div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 md:gap-4">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/10 text-sm md:text-base transition-colors hover:text-black hover:font-bold"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            {/* <Button 
              variant="secondary" 
              className="text-sm md:text-base bg-blue-500 hover:bg-blue-600 text-white ml-2"
            >
              Get Started
            </Button> */}
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 bg-gradient-to-b from-indigo-950/95 to-blue-900/95 backdrop-blur-lg md:hidden border-b border-white/10"
              >
                <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                  {menuItems.map((item) => (
                    <Link key={item.label} href={item.href}>
                      <Button 
                        variant="ghost" 
                        className="w-full text-white hover:text-white/80 hover:bg-white/10 text-sm md:text-base justify-start"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                  {/* <Button 
                    variant="secondary" 
                    className="w-full text-sm md:text-base bg-blue-500 hover:bg-blue-600 text-white mt-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Button> */}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}