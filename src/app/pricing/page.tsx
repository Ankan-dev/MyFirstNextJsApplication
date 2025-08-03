'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Smartphone, 
  Brain, 
  Cloud,
  CheckCircle,
  ArrowRight,
  Zap
} from 'lucide-react';

const PricingPage = () => {
  const services = [
    {
      id: 'website',
      title: 'Custom Website Development',
      subtitle: 'Business Portfolios, E-commerce, CMS, WordPress Design, Updates and Maintenance',
      description: 'Fully responsive and fast-loading websites tailored to your business goals',
      icon: Monitor,
      features: [
        'WordPress development (custom themes or using builders)',
        'Custom-coded sites using HTML/CSS/JavaScript or frameworks like React/Next.js',
        'E-commerce functionality via Shopify, WooCommerce, or custom solutions',
        'CMS integration for easy content management',
        'Ongoing updates, bug fixes, and performance improvements'
      ],
      gradient: 'from-purple-600 to-pink-600',
      accentGradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      subtitle: 'Cross-Platform Apps, Single Platform Apps, Responsive Design, Updates and Maintenance',
      description: 'Native and cross-platform mobile applications for all your business needs',
      icon: Smartphone,
      features: [
        'Cross-platform development using Flutter or React Native',
        'Native iOS or Android development as per project requirements',
        'UI/UX-focused design optimized for all screen sizes',
        'API integrations and scalable backend support',
        'Post-launch maintenance, version updates, and performance monitoring'
      ],
      gradient: 'from-blue-600 to-cyan-600',
      accentGradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 'ai',
      title: 'AI Integration',
      subtitle: 'Adding intelligence to your apps and workflows',
      description: 'Cutting-edge AI solutions to automate and enhance your business processes',
      icon: Brain,
      features: [
        'Integration of GPT-based chatbots, content generators, or support assistants',
        'Image, video, and audio recognition capabilities',
        'Custom-trained AI models for your business-specific needs',
        'AI-powered automation tools (recommendation engines, predictive analytics)',
        'Seamless API integrations with OpenAI, Gemini, Google AI, and more'
      ],
      gradient: 'from-emerald-600 to-teal-600',
      accentGradient: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      id: 'saas',
      title: 'SAAS Applications',
      subtitle: 'Scalable software products for startups and enterprises',
      description: 'Complete SaaS solutions from concept to deployment with enterprise-grade infrastructure',
      icon: Cloud,
      features: [
        'Complete SaaS architecture design and development (frontend + backend)',
        'Web-based and mobile-accessible platforms with user authentication',
        'Multi-tenant infrastructure setup for managing multiple customers',
        'Admin dashboards, analytics, payment systems, and more',
        'Scalable cloud hosting and DevOps support included'
      ],
      gradient: 'from-orange-600 to-red-600',
      accentGradient: 'from-orange-500/20 to-red-500/20'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-20 px-6">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-600 mb-6 mx-auto"
          >
            <Zap className="w-8 h-8 text-white" />
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of digital solutions designed to transform your business and drive growth in the digital landscape.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                {/* Card Background with Glassmorphism */}
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/20 overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.accentGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10">
                    {/* Service Icon */}
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Service Title */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>

                    {/* Service Subtitle */}
                    <p className="text-sm text-purple-300 mb-4 font-medium">
                      {service.subtitle}
                    </p>

                    {/* Service Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.1 * featureIndex + 0.3 * index 
                          }}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* View Price Button */}
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 px-6 rounded-2xl bg-gradient-to-r ${service.gradient} text-white font-semibold text-lg shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 flex items-center justify-center space-x-2 group`}
                    >
                      <span>View Price</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    delay: index * 0.5 
                  }}
                  className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} opacity-60`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss your project requirements and create a custom solution that drives results.
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              className="py-4 px-8 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-lg shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto group"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;
