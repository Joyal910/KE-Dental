import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  image?: string;
  date?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  text,
  rating,
  image,
  date,
}) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 bg-[#2bafc5]/10 text-[#2bafc5] rounded-full flex items-center justify-center mr-4">
            <span className="text-lg font-medium">{name.charAt(0)}</span>
          </div>
        )}
        <div>
          <h4 className="font-bold text-neutral-900">{name}</h4>
          {date && <p className="text-sm text-neutral-500">{date}</p>}
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            size={18} 
            className={`${i < rating ? 'text-amber-400 fill-amber-400' : 'text-neutral-300'} mr-1`} 
          />
        ))}
      </div>
      
      <p className="text-neutral-700 italic">"{text}"</p>
    </motion.div>
  );
};

export default TestimonialCard;