import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Users, Heart, Star, Trophy, Stethoscope, GraduationCap, Phone, MapPin, Calendar, User } from 'lucide-react';

const Doctors: React.FC = () => {
  React.useEffect(() => {
    document.title = "Our Doctors - KE Dental Clinic";
  }, []);

  const doctors = [
    {
      name: 'Dr. Binoy Sebastian',
      role: 'Chief Doctor & Founder',
      initials: 'BS',
      experience: '33 years',
      specialization: 'General Dentistry',
      education: 'B.Sc, BDS',
      bio: 'Dr. Binoy Sebastian founded KE Dental Clinic in 1993 with a vision to provide exceptional dental care to the community. With over three decades of experience, he specializes in comprehensive dental treatments and preventive care.',
      credentials: [
        'Member of the Indian Dental Association',
        'Pioneer in comprehensive dental care in the region'
      ],
      bgColor: 'bg-gradient-to-br from-[#2bafc5] to-[#249aad]'
    },
    {
      name: 'Dr. N. Suresh',
      role: 'Orthodontist',
      initials: 'NS',
      experience: '33 years',
      specialization: 'Orthodontics',
      education: 'MDS - Orthodontics',
      bio: 'Specializing in modern orthodontic treatments including traditional braces and clear aligners for patients of all ages.',
      credentials: ['Senior Orthodontist', 'Advanced Orthodontic Training'],
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      name: 'Dr. Jacob George',
      role: 'Periodontist',
      initials: 'JG',
      experience: '20 years',
      specialization: 'Periodontics',
      education: 'MDS - Periodontics',
      bio: 'Expert in prevention, diagnosis, and treatment of gum diseases using advanced microsurgical techniques.',
      bgColor: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      name: 'Dr. Eldhose George',
      role: 'Oral & Maxillofacial Surgeon',
      initials: 'EG',
      experience: '20 years',
      specialization: 'Oral & Maxillofacial Surgery',
      education: 'MDS - Oral & Maxillofacial Surgery',
      bio: 'Specialized in complex oral surgeries, extractions, and facial trauma management with extensive surgical experience.',
      credentials: ['Advanced Surgical Training', 'Trauma Management Specialist'],
      bgColor: 'bg-gradient-to-br from-red-500 to-red-600'
    },
    {
      name: 'Dr. Anie Susan',
      role: 'Implantologist',
      initials: 'AS',
      experience: '30 years',
      specialization: 'Implantology',
      education: 'MDS - Implantology',
      bio: 'Expert in surgical placement and restoration of dental implants with over 1,000 successful implant procedures.',
      credentials: ['Fellowship - International Congress of Oral Implantologists', 'Computer-Guided Surgery Specialist'],
      bgColor: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      name: 'Dr. Hexiba Abey',
      role: 'Pedodontist',
      initials: 'HA',
      experience: '6 years',
      specialization: 'Pediatric Dentistry',
      education: 'MDS - Pedodontics',
      bio: 'Specialized in providing gentle and comprehensive dental care for children and adolescents in a comfortable environment.',
      credentials: ['Pediatric Behavior Management', 'Child Psychology in Dentistry'],
      bgColor: 'bg-gradient-to-br from-pink-500 to-pink-600'
    }
  ];

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#2bafc5]/5">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={floatingVariants.float}
          className="absolute top-20 left-10 w-32 h-32 bg-[#2bafc5]/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ ...floatingVariants.float, transition: { ...floatingVariants.float.transition, delay: 2 } }}
          className="absolute top-40 right-20 w-24 h-24 bg-[#2bafc5]/15 rounded-full blur-lg"
        />
        <motion.div
          animate={{ ...floatingVariants.float, transition: { ...floatingVariants.float.transition, delay: 4 } }}
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#2bafc5]/8 rounded-full blur-2xl"
        />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#2bafc5] opacity-10"></div>
          <img 
            src="https://images.pexels.com/photos/4270371/pexels-photo-4270371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Dental team" 
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 lg:mb-6 tracking-wide">Meet Our Expert Doctors</h1>
            <div className="w-24 h-0.5 bg-[#2bafc5] mx-auto mb-4 lg:mb-6"></div>
            <p className="text-lg md:text-xl lg:text-2xl font-light opacity-90">Experienced professionals dedicated to transforming your smile</p>
          </motion.div>
        </div>
      </section>

      {/* Chief Doctor Profile */}
      <section className="py-12 lg:py-16 relative bg-gradient-to-br from-[#2bafc5]/3 via-white to-slate-50/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-6 lg:p-8 xl:p-12">
                <div className="flex items-center justify-center mb-6 lg:mb-8">
                  <div className="inline-flex items-center space-x-2 bg-[#2bafc5]/10 rounded-full px-4 py-2">
                    <Trophy className="w-4 h-4 text-[#2bafc5]" />
                    <span className="text-[#2bafc5] font-medium text-sm">Founder & Chief Doctor</span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="relative inline-block mb-4">
                      {/* Profile Icon */}
                      <div className={`w-32 h-32 lg:w-48 lg:h-48 rounded-2xl ${doctors[0].bgColor} flex items-center justify-center text-white shadow-lg mx-auto relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                        <div className="relative z-10 text-center">
                          <User className="w-12 h-12 lg:w-20 lg:h-20 mb-2 mx-auto" />
                          <div className="text-xl lg:text-3xl font-bold">{doctors[0].initials}</div>
                        </div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 lg:-bottom-3 lg:-right-3 w-8 h-8 lg:w-12 lg:h-12 bg-[#2bafc5] rounded-xl flex items-center justify-center shadow-lg">
                        <Star className="w-4 h-4 lg:w-6 lg:h-6 text-white fill-current" />
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="lg:col-span-2 space-y-4 lg:space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{doctors[0].name}</h3>
                      <p className="text-base lg:text-lg text-[#2bafc5] font-semibold mb-3 lg:mb-4">{doctors[0].role}</p>
                      <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                        {doctors[0].bio}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                      <div className="bg-gray-50 rounded-xl p-4 lg:p-5">
                        <div className="flex items-center space-x-3 mb-3">
                          <GraduationCap className="w-4 h-4 lg:w-5 lg:h-5 text-[#2bafc5]" />
                          <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Qualifications</h4>
                        </div>
                        <div className="space-y-2 text-xs lg:text-sm text-gray-600">
                          <p>{doctors[0].education}</p>
                          <p className="text-[#2bafc5] font-medium">{doctors[0].experience} Experience</p>
                          <p>{doctors[0].specialization}</p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-4 lg:p-5">
                        <div className="flex items-center space-x-3 mb-3">
                          <Award className="w-4 h-4 lg:w-5 lg:h-5 text-[#2bafc5]" />
                          <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Credentials</h4>
                        </div>
                        <ul className="space-y-1 text-xs lg:text-sm text-gray-600">
                          {doctors[0].credentials.map((credential, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-1 h-1 bg-[#2bafc5] rounded-full mt-2 flex-shrink-0" />
                              <span>{credential}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialist Doctors */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-[#2bafc5]/5 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 bg-[#2bafc5]/10 rounded-full px-4 py-2 mb-4 lg:mb-6">
                <Users className="w-4 h-4 text-[#2bafc5]" />
                <span className="text-[#2bafc5] font-medium text-sm">Our Specialists</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
                Expert Dental Specialists
              </h2>
              <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive care across all dental specialties
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {doctors.slice(1).map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-4 lg:p-6">
                  <div className="text-center mb-3 lg:mb-4">
                    {/* Profile Icon */}
                    <div className={`w-20 h-20 lg:w-24 lg:h-24 rounded-xl ${doctor.bgColor} flex items-center justify-center text-white shadow-md mb-3 lg:mb-4 mx-auto relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      <div className="relative z-10 text-center">
                        <User className="w-6 h-6 lg:w-8 lg:h-8 mb-1" />
                        <div className="text-xs lg:text-sm font-bold">{doctor.initials}</div>
                      </div>
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                    <p className="text-[#2bafc5] font-semibold text-xs lg:text-sm mb-2 lg:mb-3">{doctor.role}</p>
                    <p className="text-gray-600 text-xs lg:text-sm leading-relaxed mb-3 lg:mb-4">
                      {doctor.bio}
                    </p>
                  </div>
                  
                  <div className="space-y-2 lg:space-y-3">
                    <div className="flex items-center justify-between text-xs lg:text-sm">
                      <span className="text-gray-500">Experience</span>
                      <span className="font-medium text-gray-900">{doctor.experience}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs lg:text-sm">
                      <span className="text-gray-500">Education</span>
                      <span className="font-medium text-gray-900 text-right">{doctor.education}</span>
                    </div>
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-2">Specialization:</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-[#2bafc5]/10 text-[#2bafc5] px-2 py-1 rounded-full text-xs font-medium">
                          {doctor.specialization}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
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
              to="/contact"
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

export default Doctors;