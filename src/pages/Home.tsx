import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Smile, 
  Activity, 
  ChevronRight, 
  Clock, 
  Award, 
  UserCheck, 
  Star,
  Calendar,
  MapPin,
  Phone,
  Shield,
  Heart,
  CheckCircle,
  ArrowRight,
  Users,
  Microscope,
  Zap,
  Scissors,
  AlertTriangle
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

const PremiumDentalHomepage = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 500], [0, -100]);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormData>({
    mode: 'onBlur', // Change validation mode for better mobile experience
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      message: ''
    }
  });
  
  const onSubmit = async (data: FormData) => {
    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create WhatsApp message template
      const whatsappMessage = `*New Appointment Request - KE Dental Clinic*

👤 *Patient Details:*
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

🦷 *Appointment Details:*
Service: ${data.service}
Preferred Date: ${data.date}

💬 *Additional Information:*
${data.message || 'No additional information provided'}

---
*Please confirm this appointment and provide available time slots.*

Thank you!`;

      // WhatsApp number (replace with actual clinic number)
      const whatsappNumber = '918089803112';
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      
      // For iOS Safari, use window.location.href instead of window.open for better compatibility
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        window.location.href = whatsappURL;
      } else {
        window.open(whatsappURL, '_blank');
      }
      
      // Reset form after successful submission
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Get max date (3 months from now)
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    const year = maxDate.getFullYear();
    const month = String(maxDate.getMonth() + 1).padStart(2, '0');
    const day = String(maxDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    setIsVisible(true);
    document.title = "KE Dental Clinic - Premium Dental Care in Njaliankuzhy";
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Professional Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Hero Background Image */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroParallax }}
        >
          <img 
            src="https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Modern dental clinic interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-transparent" />
          <div className="absolute inset-0 bg-[#2bafc5]/10" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={containerVariants}
              className="space-y-6 lg:space-y-8"
            >
              {/* Premium Badge */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 lg:gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 lg:px-6 py-2 lg:py-3 border border-white/20">
                  <Award className="w-4 h-4 lg:w-5 lg:h-5 text-[#2bafc5]" />
                  <span className="text-white font-medium text-sm lg:text-base">Trusted for 33 Years</span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.div variants={itemVariants} className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Premium Dental Care
                  <span className="block text-[#2bafc5] text-2xl sm:text-3xl lg:text-3xl mt-2">
                    Since 1993
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl">
                  Experience exceptional dental services at our state-of-the-art facility in Njaliankuzhy. 
                  Three decades of excellence in comprehensive oral healthcare.
                </p>
              </motion.div>

              {/* Key Features - Mobile Optimized */}
              <motion.div variants={itemVariants}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                  {[
                    { icon: <Clock className="w-5 h-5 lg:w-6 lg:h-6" />, text: "33+ Years Experience" },
                    { icon: <Users className="w-5 h-5 lg:w-6 lg:h-6" />, text: "Trusted by Families" },
                    { icon: <Award className="w-5 h-5 lg:w-6 lg:h-6" />, text: "Premium Facility" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 lg:gap-3 text-white bg-white/5 rounded-lg p-3 lg:p-0 lg:bg-transparent">
                      <div className="text-[#2bafc5]">{item.icon}</div>
                      <span className="font-medium text-sm lg:text-base">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Buttons - Mobile Optimized */}
              <motion.div variants={itemVariants}>
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                  <button 
                    onClick={() => document.getElementById('appointment-booking')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-[#2bafc5] hover:bg-[#249aad] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4 lg:w-5 lg:h-5" />
                      Book Appointment
                    </span>
                  </button>
                  
                  <Link 
                    to="/services"
                    className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    View Services
                    <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#2bafc5]/10 text-[#2bafc5] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Stethoscope className="w-4 h-4" />
              Our Services
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Complete Dental Care Solutions
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From routine cleanings to complex procedures, our experienced team provides personalized 
              treatment plans to help you achieve optimal oral health.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {[
              {
                title: "General Dentistry",
                description: "Comprehensive oral health care for the whole family including regular cleanings, fillings, and preventive treatments.",
                services: ["Regular Cleanings", "Fillings", "Root Canal Treatment", "Extractions", "Gum Disease Treatment"],
                image: "https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg?_gl=1*17s4jx3*_ga*OTE2NDcyMTY4LjE3MzYzMjIzOTU.*_ga_8JE65Q40S6*czE3NTA3MDQ2ODUkbzMkZzEkdDE3NTA3MDUzNjMkajU5JGwwJGgw"
              },
              {
                title: "Cosmetic Dentistry", 
                description: "Transform your smile with aesthetic dental procedures including whitening, veneers, and complete smile makeovers.",
                services: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeovers", "Gum Contouring"],
                featured: true,
                image: "https://img.freepik.com/free-photo/woman-whitening-treatment_1232-185.jpg?ga=GA1.1.836884953.1735622152&semt=ais_items_boosted&w=740"
              },
              {
                title: "Emergency Care",
                description: "Emergency dental services when you need them most, providing immediate relief and professional treatment.",
                services: ["Severe Toothache", "Broken Teeth", "Lost Fillings", "Dental Trauma", "After-Hours Care"],
                image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className={`relative group ${service.featured ? 'lg:scale-105' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  {service.featured && (
                    <div className="absolute top-4 right-4 bg-[#2bafc5] text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                      POPULAR
                    </div>
                  )}
                  
                  {/* Service Image */}
                  <div className="relative overflow-hidden h-40 lg:h-48">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-4 lg:p-6">
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-3 lg:mb-4 leading-relaxed text-sm lg:text-base">{service.description}</p>

                    {/* Services List */}
                    <ul className="space-y-1 lg:space-y-2 mb-4 lg:mb-6">
                      {service.services.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 lg:gap-3 text-gray-700">
                          <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-[#2bafc5] flex-shrink-0" />
                          <span className="text-xs lg:text-sm">{item}</span>
                        </li>
                      ))}
                      {service.services.length > 3 && (
                        <li className="text-xs lg:text-sm text-gray-500 italic pl-5 lg:pl-7">
                          +{service.services.length - 3} more services
                        </li>
                      )}
                    </ul>

                    <Link 
                      to="/services"
                      className="w-full py-2 lg:py-3 px-4 lg:px-6 bg-[#2bafc5]/10 hover:bg-[#2bafc5] text-[#2bafc5] hover:text-white font-semibold rounded-lg transition-all duration-300 group-hover:shadow-md flex items-center justify-center gap-2 text-sm lg:text-base"
                    >
                      Learn More
                      <ArrowRight size={14} className="lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Explore More Services */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row justify-center gap-3 lg:gap-4">
              <Link 
                to="/services"
                className="px-6 py-3 bg-[#2bafc5] hover:bg-[#249aad] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button 
                onClick={() => document.getElementById('appointment-booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-white border border-gray-200 hover:border-[#2bafc5] text-gray-700 hover:text-[#2bafc5] font-semibold rounded-lg transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Excellence & Trust Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#2bafc5]/20 text-[#2bafc5] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Excellence & Trust
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">
                33 Years of Dental Excellence
                <span className="block text-[#2bafc5] text-2xl lg:text-3xl mt-2">
                  in Njaliankuzhy
                </span>
              </h2>
              
              <p className="text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8 leading-relaxed">
                Three decades of serving families with comprehensive dental care, combining time-tested 
                experience with modern technology in our comfortable, well-equipped facility.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {[
                  { icon: <Clock className="w-6 h-6 lg:w-7 lg:h-7" />, title: "33+ Years", subtitle: "Experience", number: "Since 1992" },
                  { icon: <Users className="w-6 h-6 lg:w-7 lg:h-7" />, title: "Trusted", subtitle: "by Community", number: "Smiles Built" },
                  { icon: <Award className="w-6 h-6 lg:w-7 lg:h-7" />, title: "Premium", subtitle: "Facility", number: "Modern Equipment" },
                  { icon: <Heart className="w-6 h-6 lg:w-7 lg:h-7" />, title: "Patient", subtitle: "Focused Care", number: "Comfort First" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-[#2bafc5] mb-2 lg:mb-3">
                      {item.icon}
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-xs lg:text-sm">{item.subtitle}</p>
                    <p className="text-[#2bafc5] text-xs mt-1">{item.number}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="KE Dental Clinic facility"
                  className="w-full h-64 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Floating Achievement Card */}
                <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 lg:p-4 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-900 font-bold text-sm lg:text-base">Patient Satisfaction</p>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-xs lg:text-sm text-gray-600">4.9/5 Rating</span>
                      </div>
                    </div>
                    <div className="text-[#2bafc5] font-bold text-xl lg:text-2xl">98%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#2bafc5]/10 text-[#2bafc5] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              Patient Testimonials
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              What Our Patients Say
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from families who have trusted us with their dental care
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Anju Thomas",
                role: "15-Year Patient",
                text: "For the last 10 years we have been driving to KE DENTAL CARE without any doubts for all our dental issues. Dr.Binoy is a very competent professional and his team is always welcoming. The clinical environment is high tech and sterile. Highly Recommended.",
                rating: 5,
                initials: "AT"
              },
              {
                name: "Actlab Casting",
                role: "Family Patient",
                text: "For years, our family has been receiving treatment at K.E. Dental Care in Njaliamkuzhi under Dr. Binoy. It is a 100% trustworthy clinic. Heartfelt thanks to Dr. Binoy Sir 🙏",
                rating: 5,
                initials: "AC"
              },
              {
                name: "JosephKutty Thomas",
                role: "Cosmetic Patient",
                text: "Highly Recommended!I had a great experience at K E Dental Clinic. The staff is friendly, professional, and made me feel completely at ease from the moment I walked in. Dr. Binoy was patient and explained everything clearly before starting the treatment. The clinic is very clean, modern, and well-equipped. I went in for a root canal and was surprised at how painless and smooth the entire process was. They also follow proper hygiene protocols, which is reassuring. Definitely one of the best dental clinics in the area!",
                rating: 5,
                initials: "JT"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4 lg:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#2bafc5] rounded-full flex items-center justify-center text-white font-semibold text-sm lg:text-base">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm lg:text-base">{testimonial.name}</h4>
                    <p className="text-gray-600 text-xs lg:text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section id="appointment-booking" className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-[#2bafc5]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#2bafc5]/10 text-[#2bafc5] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Calendar className="w-4 h-4" />
              Book Appointment
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Schedule Your Visit Today
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and we'll contact you via WhatsApp to confirm your appointment
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {isSubmitSuccessful ? (
              <motion.div 
                className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-12 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-green-100 text-green-600 rounded-full mb-4 lg:mb-6">
                  <CheckCircle size={32} className="lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 text-gray-900">Request Sent Successfully!</h3>
                <p className="text-base lg:text-lg text-gray-700 mb-6 lg:mb-8 max-w-2xl mx-auto">
                  Your appointment request has been forwarded to WhatsApp. Our team will contact you 
                  shortly to confirm your appointment details and available time slots.
                </p>
                <button 
                  onClick={() => window.location.reload()}
                  className="px-6 lg:px-8 py-3 lg:py-4 bg-[#2bafc5] hover:bg-[#249aad] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Book Another Appointment
                </button>
              </motion.div>
            ) : (
              <motion.div
                className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Form Header */}
                <div className="bg-gradient-to-r from-[#2bafc5] to-[#249aad] px-6 lg:px-8 py-4 lg:py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Calendar className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white">Book Your Appointment</h3>
                      <p className="text-white/90 text-sm lg:text-base">We'll reach out via WhatsApp to confirm</p>
                    </div>
                  </div>
                </div>

                {/* Form Content */}
                <form onSubmit={handleSubmit(onSubmit)} className="p-6 lg:p-8" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        className={`w-full px-3 lg:px-4 py-3 lg:py-4 border-2 rounded-xl focus:ring-2 focus:ring-[#2bafc5]/20 focus:border-[#2bafc5] outline-none transition-all duration-200 text-base ${
                          errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                        {...register("name", { 
                          required: "Name is required",
                          minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters"
                          }
                        })}
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        className={`w-full px-3 lg:px-4 py-3 lg:py-4 border-2 rounded-xl focus:ring-2 focus:ring-[#2bafc5]/20 focus:border-[#2bafc5] outline-none transition-all duration-200 text-base ${
                          errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Enter your email address"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid email address"
                          }
                        })}
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        className={`w-full px-3 lg:px-4 py-3 lg:py-4 border-2 rounded-xl focus:ring-2 focus:ring-[#2bafc5]/20 focus:border-[#2bafc5] outline-none transition-all duration-200 text-base ${
                          errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Enter your phone number"
                        {...register("phone", { 
                          required: "Phone number is required",
                          pattern: {
                            value: /^[+]?[\d\s\-\(\)]{10,}$/,
                            message: "Please enter a valid phone number"
                          }
                        })}
                      />
                      {errors.phone && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        className={`w-full px-3 lg:px-4 py-3 lg:py-4 border-2 rounded-xl focus:ring-2 focus:ring-[#2bafc5]/20 focus:border-[#2bafc5] outline-none transition-all duration-200 text-base bg-white ${
                          errors.service ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        {...register("service", { required: "Please select a service" })}
                      >
                        <option value="">Select a service</option>
                        <option value="general-checkup">General Check-up</option>
                        <option value="cleaning">Professional Cleaning</option>
                        <option value="cosmetic">Cosmetic Dentistry</option>
                        <option value="orthodontics">Orthodontics</option>
                        <option value="implants">Dental Implants</option>
                        <option value="root-canal">Root Canal Therapy</option>
                        <option value="emergency">Emergency Care</option>
                      </select>
                      {errors.service && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                          {errors.service.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        id="date"
                        type="date"
                        className={`w-full px-3 lg:px-4 py-3 lg:py-4 border-2 rounded-xl focus:ring-2 focus:ring-[#2bafc5]/20 focus:border-[#2bafc5] outline-none transition-all duration-200 text-base ${
                          errors.date ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        {...register("date", { required: "Please select a preferred date" })}
                        min={getTodayDate()}
                        max={getMaxDate()}
                      />
                      {errors.date && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                          {errors.date.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-3 lg:px-4 py-3 lg:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2bafc5]/20 focus:border-[#2bafc5] outline-none transition-all duration-200 hover:border-gray-300 text-base resize-none"
                        placeholder="Please share any specific concerns, preferred time, or questions you have..."
                        {...register("message")}
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4 lg:pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 lg:py-5 px-6 lg:px-8 bg-gradient-to-r from-[#2bafc5] to-[#249aad] hover:from-[#249aad] hover:to-[#2bafc5] text-white font-bold rounded-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-base lg:text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending Request...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5" />
                          Request Appointment via WhatsApp
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-sm text-gray-500 mt-4">
                      By submitting this form, you agree to be contacted via WhatsApp for appointment confirmation
                    </p>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="py-12 lg:py-20 bg-[#2bafc5] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">
              Get In Touch With Us
            </h2>

            <p className="text-lg lg:text-xl text-white/90 mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the difference of premium dental care at our modern facility in Njaliankuzhy. 
              Join thousands of satisfied patients who trust us with their oral health.
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12">
              {[
                { icon: <Phone className="w-5 h-5 lg:w-6 lg:h-6" />, title: "Call Us", info: "8089803112", desc: "Mon-Sat 9:30AM-6PM" },
                { icon: <MapPin className="w-5 h-5 lg:w-6 lg:h-6" />, title: "Visit Us", info: "Njaliankuzhy", desc: "Kottayam, Kerala" },
                { icon: <Calendar className="w-5 h-5 lg:w-6 lg:h-6" />, title: "Book Online", info: "Easy Scheduling", desc: "Available 24/7" }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20">
                  <div className="text-white mb-2 lg:mb-3 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-bold mb-1 lg:mb-2 text-sm lg:text-base">{item.title}</h3>
                  <p className="font-semibold text-sm lg:text-base">{item.info}</p>
                  <p className="text-white/80 text-xs lg:text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 lg:gap-4">
              <button 
                onClick={() => document.getElementById('appointment-booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 lg:px-8 py-3 lg:py-4 bg-white text-[#2bafc5] font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4 lg:w-5 lg:h-5" />
                  Book Appointment
                </span>
              </button>
              
              <a 
                href="tel:+918089803112"
                className="px-6 lg:px-8 py-3 lg:py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PremiumDentalHomepage;