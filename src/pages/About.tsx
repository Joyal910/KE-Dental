import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Users, Heart, Clock, Landmark, BookOpen, CheckCircle, Calendar, Coffee, Shield, Stethoscope, Car } from 'lucide-react';
import front from '../assets/clinic_pic/front.png';

const SectionTitle = ({ title, subtitle, className = "" }) => (
  <div className={`text-center mb-8 lg:mb-16 ${className}`}>
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 text-gray-900">{title}</h2>
    {subtitle && (
      <div className="w-16 h-0.5 bg-[#2bafc5] mx-auto mb-4"></div>
    )}
    {subtitle && <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const About = () => {
  React.useEffect(() => {
    document.title = "About Us - KE Dental Clinic";
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#2bafc5] opacity-10"></div>
          <img 
            src="https://5.imimg.com/data5/SELLER/Default/2024/4/406473649/AB/UZ/DS/58743858/dental-clinic-interior-designing-service.jpg" 
            alt="Professional dental facility" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 lg:px-6 py-16 lg:py-24 xl:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 lg:mb-6 tracking-wide">Excellence in Dental Care</h1>
            <div className="w-24 h-0.5 bg-[#2bafc5] mx-auto mb-4 lg:mb-6"></div>
            <p className="text-lg md:text-xl lg:text-2xl font-light opacity-90">Three decades of unwavering commitment to dental excellence</p>
          </motion.div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 lg:mb-8 text-gray-900">Our Legacy of Excellence</h2>
              <div className="w-16 h-0.5 bg-[#2bafc5] mb-6 lg:mb-8"></div>
              
              <div className="space-y-4 lg:space-y-6 text-gray-700 leading-relaxed">
                <p className="text-base lg:text-lg">
                  Since our establishment in 1993, KE Dental has been the cornerstone of premium dental care in Njaliakuzhy and the greater Kottayam region. Founded by Dr. Binoy Sebastian with an unwavering vision to merge clinical excellence with compassionate patient care.
                </p>
                <p className="text-base lg:text-lg">
                  Over three transformative decades, we have evolved from a single practitioner clinic into a comprehensive dental center with six specialized consultants, consistently setting new benchmarks in quality, innovation, and patient satisfaction while preserving our foundational values of integrity and excellence.
                </p>
                <p className="text-base lg:text-lg">
                  Today, our distinguished team of specialists and support professionals continues this legacy, seamlessly integrating cutting-edge dental technology with time-honored principles of personalized care.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#2bafc5] to-teal-600 opacity-10 rounded-lg"></div>
              <img 
                src={front} 
                alt="Professional dental practice" 
                className="relative w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <SectionTitle 
            title="Our Philosophy" 
            subtitle="The principles that define our approach to exceptional dental care"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Users,
                title: "Patient-Centric Excellence",
                description: "We prioritize understanding each patient's unique needs, concerns, and aspirations, crafting personalized treatment plans that deliver exceptional outcomes while ensuring comfort and satisfaction throughout the journey."
              },
              {
                icon: Award,
                title: "Uncompromising Quality",
                description: "Every aspect of our practice reflects our commitment to excellence—from premium materials and advanced techniques to meticulous attention to detail, ensuring treatments that exceed expectations and endure over time."
              },
              {
                icon: Heart,
                title: "Compassionate Care",
                description: "We recognize that exceptional dental care extends beyond clinical expertise to encompass empathy, understanding, and creating a supportive environment where patients feel valued, respected, and completely at ease."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="group p-6 lg:p-8 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#2bafc5] hover:border-opacity-20 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <item.icon size={32} className="lg:w-10 lg:h-10 text-[#2bafc5] mb-4 lg:mb-6" />
                <h3 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm lg:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <SectionTitle 
            title="Premium Facility Design" 
            subtitle="Every detail crafted for your comfort, privacy, and therapeutic experience"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                icon: Users,
                title: "Modern Reception Area",
                description: "Welcoming reception area designed for comfort and efficiency, featuring modern amenities and a peaceful atmosphere for our patients.",
                bgColor: "bg-blue-50",
                iconColor: "text-blue-600"
              },
              {
                icon: Coffee,
                title: "Comfortable Waiting Areas",
                description: "Sophisticated waiting areas featuring premium furnishings, complimentary refreshments, and curated reading materials, designed for discretion and comfort.",
                bgColor: "bg-amber-50",
                iconColor: "text-amber-600"
              },
              {
                icon: Stethoscope,
                title: "Advanced Treatment Suites",
                description: "State-of-the-art clinical environments equipped with cutting-edge technology, featuring optimal lighting and acoustic privacy for superior patient experience.",
                bgColor: "bg-emerald-50",
                iconColor: "text-emerald-600"
              },
              {
                icon: Car,
                title: "Convenient Parking",
                description: "Dedicated parking facilities with easy access, ensuring convenience and safety for our valued patients and their vehicles.",
                bgColor: "bg-purple-50",
                iconColor: "text-purple-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 lg:p-8 bg-white hover:bg-gray-50 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#2bafc5] hover:border-opacity-20 rounded-lg"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 ${item.iconColor} mb-4 lg:mb-6 rounded-full ${item.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={24} className="lg:w-8 lg:h-8" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm lg:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Transform Your Smile Section */}
      <section className="py-12 lg:py-20 bg-[#2bafc5] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-6 lg:mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our expert doctors and experience the difference of premium dental care
            </p>
             <Link
              to="/#appointment-booking"
              className="inline-flex items-center space-x-3 bg-white text-[#2bafc5] font-bold px-6 lg:px-8 py-3 lg:py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-base lg:text-lg hover:scale-105"
            >
              <span>Book Appointment</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Calendar className="w-5 h-5 lg:w-6 lg:h-6" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;