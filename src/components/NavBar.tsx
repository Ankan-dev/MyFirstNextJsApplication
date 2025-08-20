'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Logo from '../../public/logo.png'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();
  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-4 shadow-xl shadow-black/20">
          {/* Gradient overlay for extra visual appeal */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
          
          <div className="relative flex items-center justify-between">
            {/* Logo/Brand */}
            <Link href={"/"} >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
             
              <div className="hidden sm:block">
                <Image src='/logo.png' width={100} height={100} alt={''}/>
                  
                
              </div>
            </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link key={item.name} href={item.href}>
                <motion.div
                  key={item.name}
                  className="relative group px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <span className="relative z-10 font-medium">{item.name}</span>
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId="navbar-hover"
                  />
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full group-hover:left-0 transition-all duration-300"
                  />
                </motion.div></Link>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* CTA Button - Hidden on mobile */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="hidden lg:flex group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-sm overflow-hidden shadow-lg shadow-purple-500/25"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={()=>router.push('/services')}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <X className="w-5 h-5 text-white" />
                  ) : (
                    <Menu className="w-5 h-5 text-white" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden overflow-hidden mt-2"
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl shadow-black/20">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block group relative px-4 py-3 text-gray-300 hover:text-white rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    x: isMenuOpen ? 0 : -20,
                  }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 font-medium flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item.name}
                  </span>
                </motion.a>
              ))}
              
              {/* Mobile CTA */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  y: isMenuOpen ? 0 : 20,
                }}
                transition={{ delay: 0.4 }}
                className="w-full group relative px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold overflow-hidden shadow-lg shadow-purple-500/25 mt-4"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
