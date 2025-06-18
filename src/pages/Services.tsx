import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Stethoscope, Smile, Activity, ChevronFirst as FirstAid, Microscope, Heart, ChevronsRight, Clock, CheckCircle, ArrowRight, AlertTriangle, Scissors, Calendar, Baby, Shield, Zap } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  treatment: string;
  technology: string;
  aftercare: string;
}

// Card components for the service categories
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={className}>
    {children}
  </div>
);

const Services: React.FC = () => {
  React.useEffect(() => {
    document.title = "Our Services - KE Dental Clinic";
  }, []);

  // Service categories
  const serviceCategories = [
    {
  title: 'General Dentistry',
  description: 'Comprehensive oral health care for the whole family',
  image: 'https://luxedentalcaremd.com/wp-content/uploads/2020/09/General-Dentistry.jpg',
  services: ['Regular Cleanings', 'Fillings', 'Extractions (Simple)', 'Preventive Checkups'],
  href: '/services/general'
   },

    {
      title: 'Conservative Dentistry',
      description: 'Preserving natural teeth through advanced restorative techniques',
      image: 'https://asmed.dental/wp-content/uploads/2023/06/Conservative-and-Restorative-Dentistry-2.jpg',
      services: ['Composite Fillings', 'Inlays & Onlays', 'Dental Bonding', 'Tooth-Colored Restorations', 'Preventive Care'],
      href: '/services/conservative'
    },
    {
      title: 'Endodontics',
      description: 'Specialized root canal treatments to save your natural teeth',
      image: 'https://theerthastoothaffair.com/wp-content/uploads/2024/08/EndodontistCarlsbad.jpg',
      services: ['Root Canal Treatment', 'Pulp Therapy', 'Apicoectomy', 'Retreatment', 'Trauma Management'],
      href: '/services/endodontics'
    },
    {
      title: 'Emergency Care',
      description: 'Emergency dental services when you need them most, providing immediate relief and professional treatment',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80',
      services: ['Severe Toothache', 'Broken Teeth', 'Lost Fillings', '24/7 Availability', 'Immediate Pain Relief'],
      href: '/services/emergency'
    },
    {
      title: 'Orthodontics',
      description: 'Straighten your teeth for a perfect smile',
      image: 'https://tkcdental.co.uk/wp-content/uploads/2025/01/invisalign-vs-braces.jpg',
      services: ['Traditional Braces', 'Clear Aligners', 'Retainers', 'Early Treatment', 'Adult Orthodontics'],
      href: '/services/orthodontics'
    },
    {
      title: 'Periodontics',
      description: 'Specialized care for gums and supporting structures',
      image: 'https://www.dentulu.com/assets/img/dentalpedia/iner-page/img/Periodonist.png',
      services: ['Gum Disease Treatment', 'Scaling & Root Planing', 'Gum Surgery', 'Periodontal Maintenance', 'Gum Grafting'],
      href: '/services/periodontics'
    },
    {
      title: 'Oral Surgery',
      description: 'Expert surgical procedures for complex dental issues',
      image: 'https://oralsurgeonhouston.com/wp-content/uploads/AdobeStock_40267406-scaled-1.jpeg',
      services: ['Tooth Extractions', 'Wisdom Teeth Removal', 'Dental Implants', 'Bone Grafting', 'Oral Pathology'],
      href: '/services/oral-surgery'
    },
    {
      title: 'Implantology',
      description: 'Advanced dental implant solutions for missing teeth',
      image: 'https://www.yourmckinneydentist.com/wp-content/uploads/2024/01/what-are-the-new-trends-in-dental-implants.jpg',
      services: ['Single Implants', 'Multiple Implants', 'All-on-4', 'Implant Crowns', 'Bone Augmentation'],
      href: '/services/implantology'
    },
    {
      title: 'Pediatric Dentistry',
      description: 'Gentle dental care specially designed for children',
      image: 'https://www.dentevim.com/upload/pedodontii.jpg',
      services: ['Children\'s Cleanings', 'Fluoride Treatments', 'Sealants', 'Cavity Treatment', 'Behavior Management'],
      href: '/services/pediatric'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#2bafc5] opacity-10"></div>
          <img 
            src="https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Dental services" 
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 lg:mb-6 tracking-wide">Our Services</h1>
            <div className="w-24 h-0.5 bg-[#2bafc5] mx-auto mb-4 lg:mb-6"></div>
            <p className="text-lg md:text-xl lg:text-2xl font-light opacity-90">Comprehensive dental care with a focus on comfort and quality</p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Complete Dental Care Solutions</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              From routine cleanings to complex procedures, our experienced team of specialists provides personalized 
              treatment plans to help you achieve optimal oral health.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-4 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2 lg:mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base">{category.description}</p>
                  
                  <div className="space-y-1 lg:space-y-2 mb-4 lg:mb-6">
                    {category.services.slice(0, 3).map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center space-x-2">
                        <CheckCircle className="text-[#2bafc5] flex-shrink-0" size={14} />
                        <span className="text-xs lg:text-sm text-gray-600">{service}</span>
                      </div>
                    ))}
                    {category.services.length > 3 && (
                      <p className="text-xs lg:text-sm text-gray-500 italic">
                        +{category.services.length - 3} more services
                      </p>
                    )}
                  </div>
                  
                  <Link 
                    to="/contact"
                    className="w-full bg-[#2bafc5] hover:bg-[#249aad] text-white group py-2 lg:py-3 px-3 lg:px-4 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm lg:text-base"
                  >
                    Learn More 
                    <ArrowRight size={14} className="lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 lg:py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Why Choose Our Services" 
            subtitle="What sets our dental care apart"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <motion.div 
              className="bg-white p-4 lg:p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <Clock size={28} className="lg:w-9 lg:h-9 text-[#2bafc5] mb-3 lg:mb-4" />
              <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3 text-neutral-900">33+ Years of Experience</h3>
              <p className="text-neutral-700 text-sm lg:text-base">
                With over three decades of dental practice, we've refined our techniques and approach 
                to provide exceptional care that stands the test of time. Our experience allows us to 
                handle even the most complex cases with confidence.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-4 lg:p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Microscope size={28} className="lg:w-9 lg:h-9 text-[#2bafc5] mb-3 lg:mb-4" />
              <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3 text-neutral-900">Specialist Team</h3>
              <p className="text-neutral-700 text-sm lg:text-base">
                Our team includes six specialized consultants covering all major dental specialties. 
                From orthodontics to oral surgery, we provide comprehensive care under one roof with 
                experts in each field.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-4 lg:p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Heart size={28} className="lg:w-9 lg:h-9 text-[#2bafc5] mb-3 lg:mb-4" />
              <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3 text-neutral-900">Patient-Centered Approach</h3>
              <p className="text-neutral-700 text-sm lg:text-base">
                Your comfort and satisfaction are our top priorities. We take time to listen to your concerns, 
                explain procedures in detail, and create personalized treatment plans that address your unique 
                needs and preferences.
              </p>
            </motion.div>
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

export default Services;