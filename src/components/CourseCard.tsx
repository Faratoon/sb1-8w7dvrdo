import React from 'react';
import { BookOpen, Clock, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

interface CourseCardProps {
  title: string;
  description: string;
  topics: string[];
  duration: string;
  price: string;
  instructors: string[];
}

export function CourseCard({ 
  title, 
  description, 
  topics, 
  duration, 
  price, 
  instructors 
}: CourseCardProps) {
  return (
    <motion.div 
      className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="p-6">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 -mx-6 -mt-6 p-6 mb-6">
          <h3 className="text-base sm:text-lg font-bold text-white line-clamp-2">{title}</h3>
          <p className="text-sm text-blue-100 mt-2 line-clamp-2">{description}</p>
        </div>
        
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center text-blue-300">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-blue-300">
            <DollarSign className="h-4 w-4 mr-1" />
            <span>{price}</span>
          </div>
        </div>

        <div className="mb-4 bg-slate-800/50 rounded-xl p-4">
          <h4 className="font-semibold text-blue-200 mb-2 text-sm">Maadooyinka:</h4>
          <ul className="space-y-1">
            {topics.slice(0, 3).map((topic, index) => (
              <li key={index} className="text-sm text-gray-200 flex items-center">
                <BookOpen className="h-3 w-3 mr-2 text-blue-400" />
                {topic}
              </li>
            ))}
            {topics.length > 3 && (
              <li className="text-sm text-blue-400 font-medium">+{topics.length - 3} more...</li>
            )}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-blue-200 mb-2 text-sm">Macalimiinta:</h4>
          <div className="flex flex-wrap gap-2">
            {instructors.map((instructor, index) => (
              <span 
                key={index}
                className="bg-blue-900/50 text-blue-200 px-2 py-1 rounded-full text-xs font-medium"
              >
                {instructor}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-slate-800/50 border-t border-slate-700/50">
        <motion.button 
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-2 px-4 rounded-xl text-sm font-medium transition-all shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Is Diiwaan Geli
        </motion.button>
      </div>
    </motion.div>
  );
}