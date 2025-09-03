'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Rocket, Shield, CheckCircle, Award, Clock, Target, Brain, Smartphone, Briefcase } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  function Navigate(route: string) {
    router.push(`/${route}`)
  }

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

  const projects = [
    {
      title: "SaaS Applications",
      description: "Complete SaaS solutions for any industry - from CRM and project management to fintech and healthcare platforms with subscription billing.",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      gradient: "from-blue-400 to-cyan-400",
      feature: "Full-Stack"
    },
    {
      title: "Business Portfolios",
      description: "Professional business websites and portfolios that showcase your brand, services, and achievements with modern design and SEO optimization.",
      tech: ["React", "Tailwind", "CMS"],
      gradient: "from-green-400 to-emerald-400",
      feature: "Professional"
    },
    {
      title: "AI-Powered Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android with seamless user experience and robust backend integration.",
      tech: ["React Native", "Flutter", "Firebase"],
      gradient: "from-purple-400 to-pink-400",
      feature: "Cross-Platform"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and customer analytics for modern retail businesses.",
      tech: ["React", "Node.js", "Stripe"],
      gradient: "from-indigo-400 to-purple-400",
      feature: "Full-Featured"
    }
  ];

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Rapid Development",
      description: "Modern development practices and proven frameworks for faster time-to-market.",
      highlight: "Quick Launch"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Industry-standard security practices, encryption, and compliance from day one.",
      highlight: "Secure by Design"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Integration Specialists",
      description: "Add intelligent features to existing apps or build AI-first applications from scratch.",
      highlight: "AI-First"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expert Craftsmanship",
      description: "Senior developers with deep experience in modern web technologies.",
      highlight: "Quality First"
    }
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom web applications built with React, Next.js, and modern frameworks"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Integration",
      description: "Add AI features to existing apps or build intelligent applications from scratch"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Business Solutions",
      description: "Professional portfolios, SaaS platforms, and complete business applications"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "MVP Development",
      description: "Rapid prototyping and MVP development to validate your ideas quickly"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Digital Strategy",
      description: "Technical consulting and architecture planning for your project"
    }
  ];
  return (
    <>
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


              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Your Vision,
                </span>
                <br />
                <span className="text-white">Our Code</span>
              </h1>
            </motion.div>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              We&apos;re a new software development agency ready to bring your ideas to life with
              <span className="text-blue-400 font-semibold"> AI-powered solutions</span> and modern technology.
            </motion.p>

            {/* Key Highlights */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI-First
                </div>
                <div className="text-sm text-gray-400">Development</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Modern
                </div>
                <div className="text-sm text-gray-400">Tech Stack</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Fast
                </div>
                <div className="text-sm text-gray-400">Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Fair
                </div>
                <div className="text-sm text-gray-400">Pricing</div>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold text-lg overflow-hidden shadow-xl shadow-purple-500/25 cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => Navigate("contact")}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}

                />
                <span className="relative z-10 flex items-center gap-2">
                  Let&apos;s Build Together
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>

              <motion.button
                className="px-8 py-4 border border-gray-700 hover:border-purple-400 rounded-2xl font-semibold text-lg backdrop-blur-xl bg-white/5 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => Navigate("services")}
              >
                View Our Capabilities
              </motion.button>
            </motion.div>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-sm text-gray-500 mt-6"
            >
              🚀 Early bird pricing available • Free consultation • Let&apos;s grow together
            </motion.p>
          </div>
        </section>

        {/* AI Specialty Highlight */}
        <section className="relative z-10 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              {...fadeInUp}
              className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={isMounted ? { rotate: 360 } : {}}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center"
              >
                <Brain className="w-8 h-8" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Integration Specialists
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                Transform your existing applications with intelligent features or build AI-first solutions from the ground up.
                From chatbots to machine learning analytics, we make AI accessible for your business.
              </p>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Add AI to existing apps</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Custom AI solutions</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Machine learning integration</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Intelligent automation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What We Build Section */}
        <section className="relative z-10 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              {...fadeInUp}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  What We Build
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From business portfolios to AI-powered SaaS platforms, we create digital solutions that drive growth
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                    <div className="absolute top-6 right-6 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-bold">
                      {project.feature}
                    </div>

                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center`}>
                        {project.title === "AI-Powered Solutions" ? <Brain className="w-6 h-6 text-white" /> :
                          project.title === "Mobile Applications" ? <Smartphone className="w-6 h-6 text-white" /> :
                            project.title === "Business Portfolios" ? <Briefcase className="w-6 h-6 text-white" /> :
                              <Code className="w-6 h-6 text-white" />}
                      </div>

                      <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-sm bg-white/10 rounded-full text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Services */}
        <section className="relative z-10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              {...fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Services We Offer
                </span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                From concept to deployment, we handle every aspect of your project with modern technology and AI integration
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="relative p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-green-400/30 transition-all duration-300 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>

                    <h3 className="text-lg font-bold mb-3 group-hover:text-green-300 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative z-10 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              {...fadeInUp}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  Why Start With Us
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Fresh energy, AI expertise, and dedication to making your project a success
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="text-center group"
                >
                  <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>

                      <div className="text-lg font-bold text-purple-400 mb-2">{feature.highlight}</div>

                      <h3 className="text-xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-300">
                        {feature.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA / Contact Section */}
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
                  <Rocket className="w-10 h-10" />
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Ready to Launch
                  </span>
                  <br />
                  <span className="text-white">Something Amazing?</span>
                </h2>

                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Let&apos;s discuss your project and build something incredible together.
                  Whether you need AI integration or a complete solution, we&apos;re excited to help.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <motion.button
                    className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-lg overflow-hidden shadow-xl shadow-purple-500/25"
                    whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => Navigate("contact")}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      Start Our Journey
                      <motion.div
                        animate={isMounted ? { x: [0, 5, 0] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </motion.button>


                </div>

                <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Competitive pricing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>AI expertise included</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
