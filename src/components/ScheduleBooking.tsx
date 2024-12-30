import React, { useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM',
  '2:00 PM', '3:00 PM', '4:00 PM'
];

export function ScheduleBooking() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <section className="py-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/20"
        >
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-center text-white mb-2">Qabso Balan</h2>
            <p className="text-blue-200 text-center mb-8">Dooro waqtiga kugu haboon</p>

            <form className="space-y-6">
              {/* Date Selection */}
              <div>
                <label className="flex items-center text-sm font-medium text-blue-200 mb-2">
                  <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                  Dooro Taariikhda
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Time Selection */}
              <div>
                <label className="flex items-center text-sm font-medium text-blue-200 mb-2">
                  <Clock className="w-4 h-4 mr-2 text-blue-400" />
                  Dooro Waqtiga
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {timeSlots.map((time, index) => (
                    <motion.button
                      key={index}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-3 text-sm rounded-xl border transition-all ${
                        selectedTime === time
                          ? 'bg-blue-600 text-white border-blue-500'
                          : 'bg-white/5 text-blue-200 border-white/10 hover:border-blue-400'
                      }`}
                    >
                      {time}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <label className="flex items-center text-sm font-medium text-blue-200 mb-2">
                  <Users className="w-4 h-4 mr-2 text-blue-400" />
                  Macluumaadkaaga
                </label>
                <div className="space-y-3">
                  {[
                    { placeholder: "Magacaaga", type: "text" },
                    { placeholder: "Lambarka Telefonka", type: "tel" },
                    { placeholder: "Emailka", type: "email" }
                  ].map((field, index) => (
                    <input
                      key={index}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-blue-200/70 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  ))}
                  <textarea
                    placeholder="Faahfaahin dheeraad ah..."
                    rows={3}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-blue-200/70 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-6 rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Qabso Balanta
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}