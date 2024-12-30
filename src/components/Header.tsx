import React from 'react';
import { Menu, X, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Bot className="h-8 w-8 mr-2 text-blue-600" />
            <span className="text-xl font-bold gradient-text">Somali Bot Master</span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {['Courses', 'Services', 'About', 'Contact'].map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="text-blue-600" /> : <Menu className="text-blue-600" />}
          </motion.button>
        </div>

        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {['Courses', 'Services', 'About', 'Contact'].map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
}