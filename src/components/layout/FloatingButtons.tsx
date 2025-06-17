import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      <motion.a
        href="https://wa.me/918089803112"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.a>
      
      <motion.a
        href="tel:+918089803112"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2bafc5] text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        aria-label="Call"
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;