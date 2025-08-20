'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  MessageSquare, 
  Smartphone,
  Palette,
  Database,
  Store,
  RefreshCw,
  DollarSign,
  Zap
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const MobileDevPricingPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
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
      icon: <Smartphone className="w-6 h-6" />,
      title: "Native & cross-platform development",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX design optimized for mobile",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "API & backend integration",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Store className="w-6 h-6" />,
      title: "Play Store / App Store deployment",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Versioning & feature update support",
      gradient: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-500/30 to-teal-500/30 rounded-full blur-3xl"
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
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Bring Your App Idea
              </span>
              <br />
              <span className="text-white">to Life</span>
              <br />
              <span className="text-gray-300 text-3xl md:text-4xl">— Across All Platforms</span>
            </h1>
          </motion.div>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            From MVPs to feature-rich platforms, we build smooth, secure mobile apps for 
            <span className="text-blue-400 font-semibold"> Android, iOS, or both</span> — with a focus on performance and user experience.
          </motion.p>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Whether you&apos;re launching your first product or scaling your tech stack, we guide you through the entire mobile development process with clear communication, technical expertise, and ongoing support.
          </motion.p>

          {/* Pricing Highlight */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-400/20 max-w-2xl mx-auto">
              <motion.div
                initial={{ rotate: 0 }}
                animate={isMounted ? { rotate: 360 } : {}}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center"
              >
                <DollarSign className="w-8 h-8" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  💸 Affordable & Flexible Pricing That Fits You
                </span>
              </h2>
              
              <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
                With our pay-as-you-go approach, you only pay for the features and effort you need — keeping your investment lean and efficient.
              </p>
            </div>
          </motion.div>

          {/* Platform Highlights */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Native
              </div>
              <div className="text-sm text-gray-400">iOS & Android</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Cross-Platform
              </div>
              <div className="text-sm text-gray-400">React Native & Flutter</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                MVP Ready
              </div>
              <div className="text-sm text-gray-400">Fast Launch</div>
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
                📱 What We Offer:
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
                    
                    <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors duration-300 leading-relaxed">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Highlight Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-400/20"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={isMounted ? { rotate: 360 } : {}}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"
            >
              <Zap className="w-8 h-8" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                From Concept to App Store
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              We handle the entire mobile development lifecycle, from initial wireframes to store deployment and beyond.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <CheckCircle className="w-4 h-4 text-indigo-400" />
                <span>MVP development & testing</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <CheckCircle className="w-4 h-4 text-indigo-400" />
                <span>Performance optimization</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <CheckCircle className="w-4 h-4 text-indigo-400" />
                <span>Store submission support</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <CheckCircle className="w-4 h-4 text-indigo-400" />
                <span>Post-launch maintenance</span>
              </div>
            </div>
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center"
              >
                <MessageSquare className="w-10 h-10" />
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  📩 Let&apos;s talk about your app idea
                </span>
                <br />
                <span className="text-white">— and get you a tailored quote.</span>
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <motion.button
                  className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-bold text-lg overflow-hidden shadow-xl shadow-blue-500/25"
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={()=>router.push('/schedule')}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Get a Free Consultation
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
                  <span>Free app consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Custom quote included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>MVP planning support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MobileDevPricingPage;
