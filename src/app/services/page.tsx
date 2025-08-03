'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Brain, 
  Rocket, 
  ShoppingCart, 
  Palette, 
  Target, 
  Headphones,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Map,
  Cog,
  TestTube,
  Users
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Web & Mobile App Development",
      description: "We build modern, scalable web and mobile applications tailored to your needs — using both custom coding (MERN, Next.js, etc.) and platforms like WordPress for fast, flexible delivery based on your goals and budget.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Application Development",
      description: "We develop AI-driven applications across platforms — from chatbots and recommendation systems to data analysis tools and automation workflows. Whether mobile or web, we bring intelligence to your product.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "SaaS Product Development",
      description: "We help you launch your SaaS product from the ground up — including planning, development, deployment, and scaling. Built to perform, built to last.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Development",
      description: "Grow your online store with fully customized Shopify or WooCommerce (WordPress) solutions. From store setup to advanced features — we ensure a seamless shopping experience that converts.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design & Prototyping",
      description: "Attractive. Intuitive. User-first. Our design team crafts wireframes, prototypes, and high-fidelity UI that reflect your brand and engage your users.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Product Strategy & Technical Consulting",
      description: "We assist with project planning, technical architecture, feature prioritization, and choosing the right tech stack — helping you build smarter from day one.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Ongoing Maintenance & Support",
      description: "Our partnership continues post-launch with regular updates, bug fixes, performance improvements, and support — until you decide to discontinue.",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  const approachSteps = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Clarity First",
      description: "We begin by understanding your business — not just the project. Every successful product starts with clear intent, strong goals, and mutual alignment.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Map className="w-10 h-10" />,
      title: "Strategy & Planning",
      description: "We turn insights into a roadmap. From user journeys to tech architecture, every element is thoughtfully designed to support long-term scalability and performance.",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: <Cog className="w-10 h-10" />,
      title: "Build with Purpose",
      description: "Whether it's a web app, mobile app, or AI-powered solution, we focus on clean code, smart integrations, and seamless user experience. Fast, flexible, and future-ready.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <TestTube className="w-10 h-10" />,
      title: "Test, Improve, Repeat",
      description: "Rigorous testing meets iterative refinement. We don't just deliver — we fine-tune, optimize, and polish until it performs at its best.",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Support that Scales",
      description: "Post-launch, we stay in. From feature upgrades to maintenance, we partner with you as your product evolves — because success doesn't end at delivery.",
      gradient: "from-cyan-400 to-blue-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const stepVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 pt-32 pb-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20 px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into digital reality with cutting-edge technology and expert craftsmanship
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-6 mb-32"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                             <motion.div
                 key={index}
                 variants={itemVariants}
                 transition={{ duration: 0.6, ease: "easeOut" }}
                 whileHover={{ y: -10, scale: 1.02 }}
                 className="group relative"
               >
                <div className="relative h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl shadow-black/20 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 shadow-lg`}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Hover arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute bottom-6 right-6"
                  >
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Approach Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-6"
        >
          {/* Section Header */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Approach
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that turns vision into exceptional digital products
            </p>
          </motion.div>

          {/* Approach Steps */}
          <div className="space-y-16">
            {approachSteps.map((step, index) => (
                             <motion.div
                 key={index}
                 variants={stepVariants}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                 className="flex flex-col lg:flex-row items-center gap-12"
               >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative w-32 h-32 mx-auto lg:mx-0"
                  >
                    {/* Step number background */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-xl border border-white/10" />
                    
                    {/* Animated ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className={`absolute inset-2 rounded-full bg-gradient-to-br ${step.gradient} opacity-20`}
                    />
                    
                    {/* Icon container */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`p-4 rounded-full bg-gradient-to-br ${step.gradient} text-white shadow-lg`}
                      >
                        {step.icon}
                      </motion.div>
                    </div>
                    
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.h3
                    whileHover={{ scale: 1.02 }}
                    className="text-3xl font-bold text-white mb-4 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300"
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>

                {/* Connecting line (except for last item) */}
                {index < approachSteps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                    className="hidden lg:block absolute left-16 top-32 w-0.5 h-16 bg-gradient-to-b from-purple-400/50 to-cyan-400/50"
                    style={{ transformOrigin: 'top' }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-32 px-6"
        >
          <div className="max-w-4xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-xl shadow-black/20">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Ready to Transform Your Ideas?
              </span>
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Let&apos;s discuss your project and see how we can bring your vision to life with our expert development and design services.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(168, 85, 247, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-lg overflow-hidden shadow-lg shadow-purple-500/25"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
