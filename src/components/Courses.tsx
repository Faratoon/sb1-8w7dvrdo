import React from 'react';
import { motion } from 'framer-motion';
import { CourseCard } from './CourseCard';
import { courses } from '../data/courses';

export function Courses() {
  return (
    <section id="courses" className="py-12 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Koorsooyinkeena
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CourseCard {...course} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}