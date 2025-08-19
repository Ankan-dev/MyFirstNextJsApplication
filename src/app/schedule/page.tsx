"use client"

import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { motion } from 'framer-motion';
import { Mail, Calendar as CalendarIcon, Clock } from 'lucide-react';
import axios from 'axios';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { ClipLoader } from "react-spinners";

const Schedulepage: React.FC = () => {

  const [date, setDate] = useState<Date | null>(null);
  const [selectedHour, setSelectedHour] = useState<string>('');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('');
  const [email, setEmail] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);

  const handleEmailChange: any = (value: string) => {
    setEmail(value)
  };

  // Generate hour options (12-hour format with minutes)
  const generateHourOptions = () => {
    const hours = [];
    for (let hour = 1; hour <= 12; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeValue = `${hour}:${minute.toString().padStart(2, '0')}`;
        hours.push(timeValue);
      }
    }
    return hours;
  };

  const hourOptions = generateHourOptions();
  const periodOptions = ['AM', 'PM'];

  const handleSchedule = async () => {
    if (!email) {
      toast.error('Please Enter Your Email', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      return;
    }
    if (!date) {
      toast.error('Please Select Date for the meeting', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      return;
    }
    if (!selectedHour || !selectedPeriod) {
      toast.error('Please Select the Period', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      return;
    }

    setLoader(true);

    try {
      const response = await axios.post('/api/schedule', {
        scheduledDate: date,
        scheduledTime: `${selectedHour} ${selectedPeriod}`,
        email: email
      })

      if (response) {
        toast.success('Meeting Scheduled Successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
        });
      }
    } catch (error) {
      toast.error('Failed To Schedule meeting. Please contact Us through email', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    }
    finally {
      setDate(null);
      setSelectedHour("");
      setSelectedPeriod("")
      setEmail("");
      setLoader(false)
    }

    // Here you would typically send the data to your API
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
            className="w-full lg:w-auto flex flex-col gap-6 items-center"
          >
            <Calendar value={date} onChange={(e) => setDate(e.value as Date)} inline showWeek />

            {/* Time Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-sm backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 shadow-xl shadow-black/20"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 pointer-events-none" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">Select Time</h3>
                </div>

                {/* Dropdown Container */}
                <div className="flex gap-2">
                  {/* Hour Dropdown */}
                  <div className="flex-1">
                    <select
                      value={selectedHour}
                      onChange={(e) => setSelectedHour(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-white 
                               focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 
                               transition-all duration-300 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.5rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em'
                      }}
                    >
                      <option value="" className="bg-gray-800 text-white">Hour</option>
                      {hourOptions.map((hour) => (
                        <option key={hour} value={hour} className="bg-gray-800 text-white">
                          {hour}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* AM/PM Dropdown */}
                  <div className="w-20">
                    <select
                      value={selectedPeriod}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-white 
                               focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 
                               transition-all duration-300 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.5rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em'
                      }}
                    >
                      <option value="" className="bg-gray-800 text-white">--</option>
                      {periodOptions.map((period) => (
                        <option key={period} value={period} className="bg-gray-800 text-white">
                          {period}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Selected Time Display */}
                {selectedHour && selectedPeriod && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 p-2 bg-green-500/10 border border-green-500/20 rounded-lg"
                  >
                    <p className="text-xs text-green-400">
                      Selected: {selectedHour} {selectedPeriod}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
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
                    Enter Your Email <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      required
                      placeholder="Enter primary email"
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg 
                           text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 
                           focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Secondary Email (Optional) */}





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
                    {
                      !loader ? <><CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        <p>Schedule Meeting</p></> : <ClipLoader color="#ffffff" />
                    }
                  </span>
                </motion.button>

                {/* Status Message */}
                {(date || (selectedHour && selectedPeriod)) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 sm:mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg"
                  >
                    <div className="space-y-1">
                      {date && (
                        <p className="text-xs sm:text-sm text-green-400">
                          Selected Date: {date.toLocaleDateString()}
                        </p>
                      )}
                      {selectedHour && selectedPeriod && (
                        <p className="text-xs sm:text-sm text-green-400">
                          Selected Time: {selectedHour} {selectedPeriod}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </div>
  )
}

export default Schedulepage