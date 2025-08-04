'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Mail, 
  Smartphone,
  Search,
  Settings,
  Wrench,
  Globe,
  DollarSign,
  Sparkles
} from 'lucide-react';

const CustomWebDevPricingPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "WordPress / Shopify / Framer development",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "CMS setup (e.g., Contentful, Sanity)",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Custom themes and plugin development",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-responsive design",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO & performance optimization",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Maintenance and update support",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          animate={isMounted ? {
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          } : {}}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
          animate={isMounted ? {
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          } : {}}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Launch Beautiful,
              </span>
              <br />
              <span className="text-white">High-Performing Websites</span>
              <br />
              <span className="text-gray-300 text-3xl md:text-4xl">— Without the Tech Headache</span>
            </h1>
          </motion.div>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            We design and build websites that are fast, responsive, and tailored to your business — using tools like 
            <span className="text-blue-400 font-semibold"> WordPress, Shopify, and Framer</span>.
          </motion.p>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Whether you're building a dynamic storefront or a sleek marketing site, our team ensures a smooth, scalable, and SEO-friendly experience. We'll help you pick the right platform, set up your CMS, and launch with confidence.
          </motion.p>

          {/* Pricing Highlight */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/20 max-w-2xl mx-auto">
              <motion.div
                initial={{ rotate: 0 }}
                animate={isMounted ? { rotate: 360 } : {}}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center"
              >
                <DollarSign className="w-8 h-8" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  💸 Flexible, Pay-As-You-Go Pricing
                </span>
              </h2>
              
              <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
                You'll only pay for what you need — no inflated packages, no hidden costs. Get the most affordable solution tailored to your goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                🔧 Services Include:
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 h-full text-center">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold group-hover:text-purple-300 transition-colors duration-300 leading-relaxed">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            className="relative p-12 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center"
              >
                <Mail className="w-10 h-10" />
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  📩 Let's build your website
                </span>
                <br />
                <span className="text-white">— affordably and efficiently.</span>
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <motion.button
                  className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-lg overflow-hidden shadow-xl shadow-purple-500/25"
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Us to Get a Custom Quote
                    <motion.div
                      animate={isMounted ? { x: [0, 5, 0] } : {}}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                </motion.button>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-400 flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No hidden costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>SEO optimization included</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomWebDevPricingPage;
