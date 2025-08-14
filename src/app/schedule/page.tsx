"use client"

import React,{useState} from 'react';
import { Calendar } from 'primereact/calendar';
import { motion } from 'framer-motion';
import { Mail, Calendar as CalendarIcon } from 'lucide-react';


const Schedulepage:React.FC = () => {

  const [date, setDate] = useState<Date | null>(null);
  const [emails, setEmails] = useState({
    primaryEmail: '',
    secondaryEmail: '',
    additionalEmail: ''
  });

  const handleEmailChange = (field: string, value: string) => {
    setEmails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSchedule = () => {
    if (!emails.primaryEmail) {
      alert('Primary email is required!');
      return;
    }
    if (!date) {
      alert('Please select a date!');
      return;
    }
    
    console.log('Scheduling with:', {
      date,
      emails: Object.entries(emails).filter(([_, email]) => email.trim() !== '')
    });
    
    // Here you would typically send the data to your API
    alert('Meeting scheduled successfully!');
  };

  return (
    <div className="w-full min-h-[80vh] py-[10vh] md:py-[15vh] px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center justify-center">
          
          {/* Calendar Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-auto flex justify-center"
          >
            <Calendar value={date} onChange={(e) => setDate(e.value as Date)} inline showWeek />
          </motion.div>
          
          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[30rem] xl:w-[32rem] min-h-[20rem] backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl shadow-black/20"
          >
        {/* Gradient overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-white/10">
              <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-white">Schedule Meeting</h2>
          </div>

          {/* Form */}
          <div className="space-y-3 sm:space-y-4">
            {/* Primary Email (Required) */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-medium text-gray-300">
                Primary Email <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  value={emails.primaryEmail}
                  onChange={(e) => handleEmailChange('primaryEmail', e.target.value)}
                  required
                  placeholder="Enter primary email"
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg 
                           text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 
                           focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Secondary Email (Optional) */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-medium text-gray-300">
                Secondary Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  value={emails.secondaryEmail}
                  onChange={(e) => handleEmailChange('secondaryEmail', e.target.value)}
                  placeholder="Enter secondary email (optional)"
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg 
                           text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 
                           focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Additional Email (Optional) */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-medium text-gray-300">
                Additional Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  value={emails.additionalEmail}
                  onChange={(e) => handleEmailChange('additionalEmail', e.target.value)}
                  placeholder="Enter additional email (optional)"
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg 
                           text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 
                           focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Schedule Button */}
            <motion.button
              onClick={handleSchedule}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 sm:mt-6 group relative px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 
                       rounded-xl font-semibold text-sm sm:text-base text-white overflow-hidden shadow-lg shadow-purple-500/25
                       transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 
                         group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                Schedule Meeting
              </span>
            </motion.button>

            {/* Status Message */}
            {date && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 sm:mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg"
              >
                <p className="text-xs sm:text-sm text-green-400">
                  Selected Date: {date.toLocaleDateString()}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
      
        </div>
      </div>
    </div>
  )
}

export default Schedulepage