import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import kelogo from '../../assets/logo/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Primary color
  const primaryColor = '#2bafc5';

  // Helper function to check if current path is active
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Contact', path: '/contact' },
  ];

  const scrollToAppointment = () => {
    if (location.pathname === '/') {
      // If on home page, scroll to appointment section
      document.getElementById('appointment-booking')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on other pages, navigate to home and then scroll
      window.location.href = '/#appointment-booking';
    }
  };

  return (
    <header className={`sticky top-0 z-30 w-full transition-all duration-300 bg-white shadow-sm border-b ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
         <a href="/" className="flex items-center">
            <img 
              src={kelogo} 
              alt="KE Dental Clinic" 
              className={`transition-all duration-300 ${
                isScrolled ? 'h-10' : 'h-14'
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'font-medium border-b-2'
                    : 'text-gray-700 hover:opacity-80'
                }`}
                style={{
                  color: isActive(item.path) ? primaryColor : undefined,
                  borderColor: isActive(item.path) ? primaryColor : undefined,
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.color = primaryColor;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.color = '#374151'; // text-gray-700
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Book Appointment Button */}
            <button
              onClick={scrollToAppointment}
              className="ml-6 text-white px-6 py-2 rounded-md font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:opacity-90"
              style={{ backgroundColor: primaryColor }}
            >
              Book Appointment
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 pt-2 pb-4 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-3 px-4 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  style={{
                    backgroundColor: isActive(item.path) ? `${primaryColor}15` : undefined,
                    color: isActive(item.path) ? primaryColor : undefined,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.path)) {
                      e.currentTarget.style.color = primaryColor;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.path)) {
                      e.currentTarget.style.color = '#374151'; // text-gray-700
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Book Appointment Button */}
              <button
                onClick={scrollToAppointment}
                className="block w-full mt-4 text-white px-4 py-3 rounded-md font-medium text-center transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: primaryColor }}
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;