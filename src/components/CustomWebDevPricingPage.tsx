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
  Sparkles,
  Code,
  Zap,
  Star,
  Clock,
  Shield,
  Rocket
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const CustomWebDevPricingPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router =useRouter();
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
      title: "Custom development with React, Next.js, Vue & platforms like WordPress, Shopify, Framer",
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
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom web applications with modern libraries (TypeScript, Tailwind, APIs)",
      gradient: "from-violet-500 to-indigo-500"
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
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-32">
        {/* Floating Badge Elements */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute top-32 left-8 z-20 hidden lg:block"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Lightning Fast</p>
                <p className="text-xs text-gray-300">Performance Focused</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute top-40 right-8 z-20 hidden lg:block"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-400/30 rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Secure & Reliable</p>
                <p className="text-xs text-gray-300">SSL & Backups</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isMounted ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-40 left-12 z-20 hidden lg:block"
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Modern Tech</p>
                <p className="text-xs text-gray-300">Latest Frameworks</p>
              </div>
            </div>
          </div>
        </motion.div>

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
            We design and build websites that are fast, responsive, and tailored to your business — using 
            <span className="text-blue-400 font-semibold"> custom code, modern frameworks (React, Next.js, Vue), and platforms like WordPress, Shopify, and Framer</span>.
          </motion.p>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Whether you need custom-coded applications, dynamic storefronts, or sleek marketing sites, our team ensures a smooth, scalable, and SEO-friendly experience. We specialize in modern web technologies and can help you choose between custom development or the right platform for your needs.
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
                You&apos;ll only pay for what you need — no inflated packages, no hidden costs. Get the most affordable solution tailored to your goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-6 -mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Fresh</h3>
                <p className="text-gray-300 text-sm">Modern Approach</p>
              </motion.div>

              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">24-48h</h3>
                <p className="text-gray-300 text-sm">Fast Turnaround</p>
              </motion.div>

              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Code className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Latest</h3>
                <p className="text-gray-300 text-sm">Tech Stack</p>
              </motion.div>

              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Quality</h3>
                <p className="text-gray-300 text-sm">Assured Results</p>
              </motion.div>
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
                whileHover={{ y: -15, scale: 1.03 }}
                className="group"
              >
                <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 h-full text-center overflow-hidden shadow-xl hover:shadow-2xl">
                  {/* Glowing effect on hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
                  
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-20"
                    style={{ background: `linear-gradient(45deg, ${service.gradient.split(' ')[1]}, ${service.gradient.split(' ')[3]})` }}
                    animate={isMounted ? { rotate: 360 } : {}}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 5,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.3)" 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300 leading-relaxed">
                      {service.title}
                    </h3>
                    
                    {/* Subtle decorative element */}
                    <motion.div
                      className="w-12 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                🚀 Why Choose Us?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don&apos;t just build websites — we craft digital experiences that drive results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 h-full">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast Development</h3>
                <p className="text-gray-300 leading-relaxed">
                  Get your website live in days, not months. Our streamlined process and expertise ensure rapid delivery without compromising quality.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/20 hover:border-green-400/40 transition-all duration-300 h-full">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise-Grade Security</h3>
                <p className="text-gray-300 leading-relaxed">
                  SSL certificates, regular backups, security updates, and monitoring. Your website stays protected 24/7 with our comprehensive security measures.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 h-full">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">SEO & Performance Optimized</h3>
                <p className="text-gray-300 leading-relaxed">
                  Built with best practices from day one. Fast loading times, mobile optimization, and SEO-friendly structure to rank higher on Google.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            className="relative p-12 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden shadow-2xl"
          >
            {/* Enhanced background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20" />
            <motion.div
              className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-400/30 to-transparent rounded-full blur-3xl"
              animate={isMounted ? { 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              } : {}}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-cyan-400/30 to-transparent rounded-full blur-3xl"
              animate={isMounted ? { 
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6]
              } : {}}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl"
              >
                <Mail className="w-12 h-12" />
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  🚀 Ready to Launch?
                </span>
                <br />
                <span className="text-white text-3xl md:text-4xl">Let&apos;s Build Something Amazing Together</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your digital presence with fresh, modern development expertise and cutting-edge technology?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <motion.button
                  className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-lg overflow-hidden shadow-xl shadow-purple-500/25"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.6)",
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={()=>router.push('/schedule')}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-3">
                    💬 Free Consultation
                    <motion.div
                      animate={isMounted ? { x: [0, 8, 0] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </span>
                </motion.button>
                
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <motion.div 
                  className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-green-500/10 border border-green-400/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300 font-semibold">Free Consultation</span>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-blue-500/10 border border-blue-400/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-300 font-semibold">No Hidden Costs</span>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-purple-500/10 border border-purple-400/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-300 font-semibold">SEO Included</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomWebDevPricingPage;
