import React from 'react';
import { X, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface WelcomeMessageProps {
  onDismiss: () => void;
  onContinue: () => void;
}

export function WelcomeMessage({ onDismiss, onContinue }: WelcomeMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 w-[300px] bg-white rounded-2xl shadow-2xl p-4"
    >
      <button
        onClick={onDismiss}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        <X className="h-5 w-5" />
      </button>
      
      <div className="flex items-center space-x-3 mb-3">
        <div className="bg-blue-600 rounded-full p-2">
          <MessageSquare className="h-5 w-5 text-white" />
        </div>
        <h3 className="font-semibold text-gray-800">Kaalmo Bot</h3>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">
        Ku soo dhawoow Somali Bot Master! Ma u baahan tahay caawimaad?
      </p>
      
      <div className="flex flex-col space-y-2">
        <button
          onClick={onContinue}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Haa, i caawi
        </button>
        <button
          onClick={onDismiss}
          className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
        >
          Maya, mahadsanid
        </button>
      </div>
    </motion.div>
  );
}