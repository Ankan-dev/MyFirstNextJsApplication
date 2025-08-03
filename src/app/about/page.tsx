'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Code, 
  Brain, 
  ShoppingCart, 
  Zap, 
  Users, 
  Target, 
  TrendingUp,
  Award,
  Lightbulb,
  Rocket,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Briefcase
} from 'lucide-react';

const About = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [clientFocus, setClientFocus] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    
    // Animated counters
    const clientTimer = setInterval(() => {
      setClientFocus(prev => prev < 100 ? prev + 2 : 100);
    }, 30);

    return () => {
      clearInterval(clientTimer);
    };
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

  const solutions = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Web Applications",
      description: "Tailored web solutions built with modern frameworks like React, Next.js, and Node.js. From simple business websites to complex enterprise applications.",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Responsive Design", "SEO Optimized", "Performance Focused"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "SaaS Platforms",
      description: "Complete Software-as-a-Service solutions with subscription management, user authentication, and scalable architecture for growing businesses.",
      gradient: "from-purple-500 to-pink-500",
      features: ["Subscription Billing", "User Management", "Analytics Dashboard"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Features Integration",
      description: "Seamlessly integrate artificial intelligence into your existing applications or build new AI-powered solutions from scratch, including chatbots, recommendations, and intelligent automation.",
      gradient: "from-green-500 to-emerald-500",
      features: ["Smart Automation", "ML Analytics", "Custom AI Models"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Complete online store solutions with payment processing, inventory management, and customer analytics to boost your retail business.",
      gradient: "from-indigo-500 to-purple-500",
      features: ["Payment Integration", "Inventory Management", "Customer Analytics"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native iOS and Android applications with seamless user experience, offline capabilities, and integration with your existing systems.",
      gradient: "from-orange-500 to-red-500",
      features: ["Cross-Platform", "Offline Support", "Push Notifications"]
    }
  ];

  const stats = [
    {
      icon: <Zap className="w-8 h-8" />,
      value: "24/7",
      suffix: "",
      label: "Support Ready",
      description: "Dedicated technical assistance",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      value: "AI-Powered",
      suffix: "",
      label: "Development",
      description: "Intelligent solutions at core",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: clientFocus,
      suffix: "%",
      label: "Client-Focused",
      description: "Commitment to your success",
      gradient: "from-green-500 to-emerald-500"
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
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={isMounted ? { rotate: 360 } : {}}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center"
            >
              <Rocket className="w-10 h-10" />
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Innovating
              </span>
              <br />
              <span className="text-white">Tomorrow&apos;s Solutions</span>
            </h1>
          </motion.div>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            At Vironex Digital, we believe that{' '}
            <span className="text-purple-400 font-semibold">artificial intelligence</span>{' '}
            and <span className="text-cyan-400 font-semibold">modern development</span>{' '}
            can transform any business idea into reality.
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            <span className="text-pink-400 font-semibold">Our Mission:</span> To democratize AI-powered development and make cutting-edge technology accessible to businesses of all sizes.
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center"
              >
                <Lightbulb className="w-8 h-8" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
            </div>
            
            <div className="text-lg text-gray-300 leading-relaxed space-y-6">
              <p>
                Vironex Digital was born from a vision to bridge the gap between emerging AI technology and practical business solutions. 
                As a newly launched agency, we recognized that many businesses struggle to harness the power of artificial intelligence 
                and modern web technologies effectively.
              </p>
              
              <p>
                What drives us is the belief that every business deserves access to cutting-edge technology, regardless of size or budget. 
                We&apos;re not just developers – we&apos;re digital transformation partners who understand that behind every line of code is a 
                business goal, a user need, and a dream waiting to be realized.
              </p>
              
              <p className="text-purple-300 font-semibold">
                Our passion lies in turning complex AI concepts into simple, powerful solutions that drive real business growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Can Help Section - Part 1 */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                How We Can Help You
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual Element 1 */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-emerald-500/10"></div>
                
                {/* Digital Transformation Visualization */}
                <div className="relative z-10 h-96 flex items-center justify-center">
                  {/* Central Web Development Hub */}
                  <motion.div
                    animate={isMounted ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 flex items-center justify-center shadow-2xl"
                  >
                    <Globe className="w-16 h-16 text-white" />
                  </motion.div>

                  {/* Web Development Icons */}
                  <motion.div
                    animate={isMounted ? { rotate: 360 } : {}}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center"
                  >
                    <Code className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.div
                    animate={isMounted ? { y: [0, -20, 0] } : {}}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-16 right-12 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
                  >
                    <Users className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <motion.div
                    animate={isMounted ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 left-16 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center"
                  >
                    <TrendingUp className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <motion.div
                    animate={isMounted ? { rotate: [0, 180, 360] } : {}}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-12 right-8 w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center"
                  >
                    <Briefcase className="w-5 h-5 text-white" />
                  </motion.div>
                  
                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(6, 182, 212, 0.3)" />
                        <stop offset="100%" stopColor="rgba(168, 85, 247, 0.3)" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M 80 80 Q 200 150 320 100"
                      stroke="url(#lineGradient1)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                    <motion.path
                      d="M 320 180 Q 200 220 80 280"
                      stroke="url(#lineGradient1)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Content Part 1 */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="space-y-8 text-lg text-gray-300 leading-relaxed order-1 lg:order-2"
            >
              <p>
                Whether you&apos;re a startup with a groundbreaking idea, an established business looking to modernize, or an entrepreneur ready to disrupt your industry, 
                <span className="text-cyan-400 font-semibold"> we provide end-to-end digital transformation services</span> that turn your vision into reality. 
                Our expertise spans the entire development lifecycle, from initial concept and design to deployment and ongoing support.
              </p>

              <p>
                <span className="text-purple-400 font-semibold">For businesses seeking growth,</span> we develop custom web applications that streamline operations, 
                enhance customer engagement, and drive revenue. Our modern, responsive websites don&apos;t just look beautiful – they&apos;re built with performance, 
                SEO optimization, and user experience at their core, ensuring your online presence converts visitors into loyal customers.
              </p>

              <p>
                <span className="text-pink-400 font-semibold">For innovative companies,</span> we specialize in Software-as-a-Service (SaaS) platform development, 
                creating scalable solutions with subscription management, user authentication, analytics dashboards, and robust backend systems. 
                Whether you need a CRM, project management tool, or industry-specific platform, we build solutions that grow with your business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Can Help Section - Part 2 */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Part 2 */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="space-y-8 text-lg text-gray-300 leading-relaxed order-1 lg:order-1"
            >
              <p>
                <span className="text-emerald-400 font-semibold">For forward-thinking entrepreneurs,</span> we integrate artificial intelligence seamlessly into your applications. 
                From intelligent chatbots and recommendation engines to machine learning analytics and automated workflows, we make AI accessible and practical. 
                We specialize in creating sophisticated, user-friendly AI applications that solve real-world problems across various industries.
              </p>

              <p>
                <span className="text-indigo-400 font-semibold">For retail businesses,</span> we build comprehensive e-commerce solutions that handle everything from 
                product catalogs and inventory management to secure payment processing and customer analytics. Our platforms are designed to maximize conversions 
                and provide insights that drive business decisions.
              </p>

              <p className="text-xl pt-6 border-t border-gray-800">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                  What sets us apart is our commitment to understanding your unique challenges and delivering solutions that not only meet your immediate needs 
                  but position you for future growth in an AI-driven world.
                </span>
              </p>
            </motion.div>

            {/* Visual Element 2 */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative order-2 lg:order-2"
            >
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-purple-500/10"></div>
                
                {/* AI & E-commerce Solutions Visualization */}
                <div className="relative z-10 h-96 flex items-center justify-center">
                  {/* Central AI Brain */}
                  <motion.div
                    animate={isMounted ? { rotate: [0, 360] } : {}}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 flex items-center justify-center shadow-2xl"
                  >
                    <Brain className="w-16 h-16 text-white" />
                  </motion.div>

                  {/* AI & E-commerce Icons */}
                  <motion.div
                    animate={isMounted ? { rotate: -360 } : {}}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center"
                  >
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.div
                    animate={isMounted ? { x: [0, 15, 0] } : {}}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-16 left-12 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center"
                  >
                    <Zap className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <motion.div
                    animate={isMounted ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 right-16 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center"
                  >
                    <Smartphone className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <motion.div
                    animate={isMounted ? { y: [0, -15, 0] } : {}}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-12 left-8 w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center"
                  >
                    <Target className="w-5 h-5 text-white" />
                  </motion.div>
                  
                  <motion.div
                    animate={isMounted ? { rotate: [0, -180, 0] } : {}}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-32 left-32 w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center"
                  >
                    <Award className="w-4 h-4 text-white" />
                  </motion.div>
                  
                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(249, 115, 22, 0.3)" />
                        <stop offset="100%" stopColor="rgba(236, 72, 153, 0.3)" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M 100 300 Q 200 200 300 280"
                      stroke="url(#lineGradient2)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                    <motion.path
                      d="M 300 100 Q 200 180 100 120"
                      stroke="url(#lineGradient2)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Our Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From custom applications to AI-powered platforms, we deliver comprehensive digital solutions
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {solution.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-300">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Our Impact
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Building the future with measurable results and unwavering commitment
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group"
              >
                <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-green-400/50 transition-all duration-300">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        {stat.value}{stat.suffix}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-green-300 transition-colors duration-300">
                      {stat.label}
                    </h3>
                    
                    <p className="text-gray-400 text-sm">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            className="relative p-12 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Ready to Innovate?
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join us on our journey to transform businesses with AI-powered solutions. 
                Let&apos;s create something extraordinary together.
              </p>
              
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
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
