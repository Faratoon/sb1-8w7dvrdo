import React from 'react';
import { Bot, BookOpen, Code } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      <div className="container mx-auto px-6 py-20 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Barashada AI iyo Programming
              </span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Baro xirfadaha casriga ah ee AI, Programming, iyo Automation. 
              Khibrad leh macalimiin ku hadla Af-Soomaali.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#courses" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                Koorsooyinka
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold backdrop-blur-sm transition-all"
              >
                La Xiriir
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { icon: Bot, title: "AI Integration", desc: "Baro AI-ga casriga ah" },
              { icon: BookOpen, title: "Tababar", desc: "Af-Soomaali" },
              { icon: Code, title: "Programming", desc: "Python & Automation" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-700/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="h-8 w-8 mb-4 text-blue-400" />
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-blue-200">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}