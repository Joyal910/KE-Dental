import React from 'react';
import { motion } from 'framer-motion';

interface DoctorCardProps {
  name: string;
  role: string;
  image: string;
  experience: string;
  specialization: string;
  education: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  role,
  image,
  experience,
  specialization,
  education,
}) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-[#2bafc5]">{role}</p>
        </div>
      </div>
      
      <div className="p-5">
        <div className="mb-3">
          <span className="text-sm text-neutral-500">Experience</span>
          <p className="font-medium text-neutral-800">{experience}</p>
        </div>
        
        <div className="mb-3">
          <span className="text-sm text-neutral-500">Specialization</span>
          <p className="font-medium text-neutral-800">{specialization}</p>
        </div>
        
        <div className="mb-3">
          <span className="text-sm text-neutral-500">Education</span>
          <p className="font-medium text-neutral-800">{education}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorCard;