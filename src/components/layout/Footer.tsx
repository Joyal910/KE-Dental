import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#2bafc5]">KE Dental</h3>
            <p className="text-neutral-300 mb-4">
              Providing exceptional dental care since 1993 in Njaliakuzhy. Our state-of-the-art 
              facility offers premium services with experienced specialists.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-[#2bafc5] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-[#2bafc5] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-[#2bafc5] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#2bafc5]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-neutral-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-neutral-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/doctors" className="text-neutral-300 hover:text-white transition-colors">Our Doctors</Link></li>
              <li><Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#2bafc5]">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-neutral-300 hover:text-white transition-colors">General Dentistry</Link></li>
              <li><Link to="/services" className="text-neutral-300 hover:text-white transition-colors">Orthodontics</Link></li>
              <li><Link to="/services" className="text-neutral-300 hover:text-white transition-colors">Periodontics</Link></li>
              <li><Link to="/services" className="text-neutral-300 hover:text-white transition-colors">Oral Surgery</Link></li>
              <li><Link to="/services" className="text-neutral-300 hover:text-white transition-colors">Implantology</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#2bafc5]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-[#2bafc5] flex-shrink-0" />
                <span className="text-neutral-300">Opp. MGEM School, Njaliakuzhy, Vakathanam, Kottayam – 686538</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-[#2bafc5] flex-shrink-0" />
                <div className="text-neutral-300">
                  <div>0481-2923112</div>
                  <div>8089803112 (Appointments)</div>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-[#2bafc5] flex-shrink-0" />
                <span className="text-neutral-300">kedental18@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-2 mt-1 text-[#2bafc5] flex-shrink-0" />
                <span className="text-neutral-300">Mon-Sat: 9:30AM to 1:00PM & 3:30AM to 6:00PM<br />Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-neutral-800 text-center text-neutral-400 text-sm">
          <p>&copy; {currentYear} KE Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;