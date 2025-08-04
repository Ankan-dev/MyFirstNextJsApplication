'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  FileText, 
  Code,
  Shield,
  Cloud,
  Database,
  Link,
  DollarSign,
  TrendingUp
} from 'lucide-react';

const SaasDevPricingPage = () => {
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
      icon: <Code className="w-6 h-6" />,
      title: "Fullstack development (React, Node, Next.js, MongoDB)",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Role-based auth, billing, dashboards",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud deployment & CI/CD setup",
      gradient: "from-amber-500 to-yellow-500"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Scalable backend architecture",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "API design & third-party integration",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-500/30 to-red-500/30 rounded-full blur-3xl"
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
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Your SaaS Product,
              </span>
              <br />
              <span className="text-white">Built for Scale</span>
              <br />
              <span className="text-gray-300 text-3xl md:text-4xl">and Success</span>
            </h1>
          </motion.div>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            We design and build scalable, secure SaaS applications — with 
            <span className="text-orange-400 font-semibold"> clean code, modern tech stacks,</span> and future-ready infrastructure.
          </motion.p>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We're your tech partner from concept to launch. Whether you're building a productivity tool, marketplace, or analytics dashboard, our team delivers full-stack development, admin tools, and cloud deployments tailored to your business.
          </motion.p>

          {/* Pricing Highlight */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-400/20 max-w-2xl mx-auto">
              <motion.div
                initial={{ rotate: 0 }}
                animate={isMounted ? { rotate: 360 } : {}}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center"
              >
                <DollarSign className="w-8 h-8" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  💸 Custom Pricing, Pay-as-You-Grow
                </span>
              </h2>
              
              <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
                No bloated packages. Just modular, scalable pricing that grows with your product — perfect for startups, founders, and businesses that value smart spending.
              </p>
            </div>
          </motion.div>

          {/* SaaS Highlights */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Full-Stack
              </div>
              <div className="text-sm text-gray-400">React & Node.js</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Scalable
              </div>
              <div className="text-sm text-gray-400">Cloud-Ready</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Secure
              </div>
              <div className="text-sm text-gray-400">Enterprise-Grade</div>
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
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                ⚙️ What's Included:
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
                    
                    <h3 className="text-xl font-bold group-hover:text-orange-300 transition-colors duration-300 leading-relaxed">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SaaS Success Highlight Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/20"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={isMounted ? { rotate: 360 } : {}}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-600 to-orange-600 flex items-center justify-center"
            >
              <TrendingUp className="w-8 h-8" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Built for Growth & Success
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Every SaaS we build is designed to scale with your business. From day one architecture to enterprise-level features, we prepare your product for success.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>Multi-tenant architecture</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>Auto-scaling infrastructure</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>Advanced analytics & monitoring</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>Enterprise security standards</span>
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
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-amber-500/20 to-yellow-500/20" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center"
              >
                <FileText className="w-10 h-10" />
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  📩 Ready to build your SaaS product?
                </span>
                <br />
                <span className="text-white">Let's make it happen — on your terms.</span>
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <motion.button
                  className="group relative px-10 py-4 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl font-bold text-lg overflow-hidden shadow-xl shadow-orange-500/25"
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Start With a Free Quote
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
                  <span>Free SaaS consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Architecture planning included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Scalable pricing model</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SaasDevPricingPage;
