import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  featured = false,
}) => {
  return (
    <motion.div 
      className={`rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${
        featured ? 'bg-[#2bafc5]/5 border border-[#2bafc5]/20' : 'bg-white'
      }`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className={`inline-block p-3 rounded-full mb-4 ${
          featured ? 'bg-[#2bafc5]/20 text-[#2bafc5]' : 'bg-neutral-100 text-[#2bafc5]'
        }`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-neutral-900">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        <Link 
          to={link} 
          className={`inline-flex items-center font-medium ${
            featured ? 'text-[#2bafc5]' : 'text-[#2bafc5]'
          } hover:text-[#249aad] transition-colors`}
        >
          Learn more <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;