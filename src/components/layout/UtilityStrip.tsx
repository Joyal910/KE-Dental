import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const UtilityStrip: React.FC = () => {
  return (
    <div className="bg-[#2bafc5] text-white py-2 px-4 sm:px-6 lg:px-8 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
        <div className="flex items-center mb-2 sm:mb-0">
          <MapPin size={16} className="mr-1" />
          <span>Njaliankuzhy, Vakathanam, Kottayam</span>
        </div>
        <div className="flex items-center mb-2 sm:mb-0">
          <Clock size={16} className="mr-1" />
          <span>Mon-Sat: 9:30 AM - 1:00 PM | 3:30 PM - 6:00 PM</span>
        </div>
        <div className="flex items-center font-medium">
          <Phone size={16} className="mr-1" />
          <span>Appointments: +918089803112</span>
        </div>
      </div>
    </div>
  );
};

export default UtilityStrip;