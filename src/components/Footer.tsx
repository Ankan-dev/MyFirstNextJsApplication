'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Mail, 
  Phone, 
  MapPin
} from 'lucide-react';
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaXTwitter 
} from 'react-icons/fa6';

import Link from 'next/link';

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const quickLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Web Development', href: '#web-dev' },
    { name: 'Mobile Apps', href: '#mobile' },
    { name: 'AI Integration', href: '#ai' },
    { name: 'SAAS Application Development', href: '#mvp' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook className="w-5 h-5" />, href: '#' },
    { name: 'Instagram', icon: <FaInstagram className="w-5 h-5" />, href: '#' },
    { name: 'LinkedIn', icon: <FaLinkedin className="w-5 h-5" />, href: '#' },
    { name: 'X', icon: <FaXTwitter className="w-5 h-5" />, href: '#' },
  ];

  return (
    <footer className="relative z-10 bg-[#0f0f0f] text-white overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={isMounted ? {
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          } : {}}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={isMounted ? {
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          } : {}}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>



      {/* Main Footer Content */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Section */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <motion.div
                    animate={isMounted ? { rotate: 360 } : {}}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center"
                  >
                    <Code className="w-5 h-5 text-white" />
                  </motion.div>
                  <motion.div
                    animate={isMounted ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full"
                  />
                </div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Vironex
                  </span>
                  <div className="text-xs text-gray-400 -mt-1">Where AI Meets Development Excellence</div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Building the future with AI-powered solutions and modern technology. 
                Your vision, our expertise.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                                         className="w-10 h-10 rounded-lg backdrop-blur-xl bg-white/10 border border-white/20 hover:border-purple-400/50 flex items-center justify-center transition-all duration-300 group"
                     whileHover={{ scale: 1.1, y: -2 }}
                     initial={{ opacity: 0, y: 20 }}
                     animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                     transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <Link  href={link.href}>
                    <motion.div
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </motion.div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={service.name}>
                    <motion.a
                      href={service.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-purple-400 mt-0.5" />
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <a href="mailto:hello@vironex.dev" className="text-white hover:text-purple-400 transition-colors duration-300">
                      hello@vironex.dev
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-purple-400 mt-0.5" />
                  <div>
                    <div className="text-gray-400 text-sm">Phone</div>
                    <a href="tel:+1234567890" className="text-white hover:text-purple-400 transition-colors duration-300">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400 mt-0.5" />
                  <div>
                    <div className="text-gray-400 text-sm">Location</div>
                    <span className="text-white">Remote & Global</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
