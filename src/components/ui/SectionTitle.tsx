import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  alignment = 'center',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div 
      className={`max-w-3xl mb-12 ${alignmentClasses[alignment]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-600">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-[#2bafc5] mt-4 rounded ${alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''}`}></div>
    </motion.div>
  );
};

export default SectionTitle;