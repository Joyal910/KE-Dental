import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Calendar, Info, AlertTriangle, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

const Contact: React.FC = () => {
  React.useEffect(() => {
    document.title = "Contact Us - KE Dental Clinic";
  }, []);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create WhatsApp message template
    const whatsappMessage = `*Contact Form Submission - KE Dental Clinic*

👤 *Contact Details:*
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

🦷 *Inquiry Details:*
Service Interest: ${data.service || 'General Inquiry'}
${data.date ? `Preferred Date: ${data.date}` : ''}

💬 *Message:*
${data.message || 'No additional message provided'}

---
*Please respond to this inquiry at your earliest convenience.*

Thank you!`;

    // WhatsApp number (replace with actual clinic number)
    const whatsappNumber = '918089803112';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Reset form after successful submission
    reset();
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#2bafc5] opacity-10"></div>
          <img 
            src="https://images.pexels.com/photos/3952034/pexels-photo-3952034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Contact us" 
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 lg:mb-6 tracking-wide">Contact Us</h1>
            <div className="w-24 h-0.5 bg-[#2bafc5] mx-auto mb-4 lg:mb-6"></div>
            <p className="text-lg md:text-xl lg:text-2xl font-light opacity-90">Schedule your appointment or get in touch with our team</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
            <motion.div 
              className="bg-white p-4 lg:p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#2bafc5]/10 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-[#2bafc5]" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600 mb-2 lg:mb-3 text-sm lg:text-base">We're available during business hours</p>
              <div className="text-[#2bafc5] font-medium text-sm lg:text-base">
                <a href="tel:04812923112" className="block hover:text-[#249aad] transition-colors">
                  0481-2923112
                </a>
                <a href="tel:8089803112" className="block hover:text-[#249aad] transition-colors">
                  +91 8089803112 (Appointments)
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-4 lg:p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#2bafc5]/10 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-[#2bafc5]" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-2 lg:mb-3 text-sm lg:text-base">We'll respond as soon as possible</p>
              <a href="mailto:kedental18@gmail.com" className="text-[#2bafc5] font-medium hover:text-[#249aad] transition-colors text-sm lg:text-base">
               kedental18@gmail.com
              </a>
            </motion.div>

            <motion.div 
              className="bg-white p-4 lg:p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#2bafc5]/10 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-[#2bafc5]" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-600 mb-2 lg:mb-3 text-sm lg:text-base">Conveniently located</p>
              <address className="text-[#2bafc5] font-medium not-italic text-sm lg:text-base">
                Opp. MGEM School<br />
                Njaliakuzhy, Vakathanam<br />
                Kottayam – 686538
              </address>
            </motion.div>

            <motion.div 
              className="bg-white p-4 lg:p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#2bafc5]/10 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-[#2bafc5]" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-2">Hours</h3>
              <p className="text-gray-600 mb-2 lg:mb-3 text-sm lg:text-base">We're here for you</p>
              <div className="text-[#2bafc5] text-sm lg:text-base">
                <p>Mon-Sat: 9:30AM to 1:00PM & 3:30PM to 6:00PM</p>
                <p>Sun: Closed</p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-[#2bafc5] to-[#249aad] px-6 lg:px-8 py-4 lg:py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl lg:text-2xl font-bold text-white">Get in Touch</h2>
                      <p className="text-white/90 text-sm lg:text-base">We'll respond via WhatsApp</p>
                    </div>
                  </div>
                </div>

                {isSubmitSuccessful ? (
                  <motion.div 
                    className="p-8 lg:p-12 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-green-100 text-green-600 rounded-full mb-4 lg:mb-6">
                      <CheckCircle size={32} className="lg:w-10 lg:h-10" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-gray-900">Message Sent Successfully!</h3>
                    <p className="text-gray-700 mb-6 lg:mb-8 text-sm lg:text-base">
                      Your message has been forwarded to WhatsApp. Our team will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => window.location.reload()}
                      className="px-4 lg:px-6 py-2 lg:py-3 bg-[#2bafc5] hover:bg-[#249aad] text-white font-semibold rounded-xl transition-all duration-300 text-sm lg:text-base"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="p-6 lg:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          {...register("name", { required: "Name is required" })}
                          className={`w-full px-3 lg:px-4 py-2 lg:py-3 border-2 rounded-xl focus:ring-2 focus:ring-[#2bafc5]/20 focus:border-[#2bafc5] outline-none transition-all duration-200 text-sm lg:text-base ${
                            errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                          }`}
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                            <AlertTriangle className="w-4 h-4" />
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register("email", { 
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email address"
                            }
                          })}
                          className={`w-full px-3 lg:px-4 py-2 lg:py-3 border-2 rounded-xl focus:ring-2 focus:ring-[#2bafc5]/20 focus:border-[#2bafc5] outline-none transition-all duration-200 text-sm lg:text-base ${
                            errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                          }`}
                          placeholder="Enter your email address"
                        />
                        {errors.email && (
                          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                            <AlertTriangle className="w-4 h-4" />
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          {...register("phone")}
                          className="w-full px-3 lg:px-4 py-2 lg:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2bafc5]/20 focus:border-[#2bafc5] outline-none transition-all duration-200 hover:border-gray-300 text-sm lg:text-base"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                          Service of Interest
                        </label>
                        <select
                          id="service"
                          {...register("service")}
                          className="w-full px-3 lg:px-4 py-2 lg:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2bafc5]/20 focus:border-[#2bafc5] outline-none transition-all duration-200 hover:border-gray-300 text-sm lg:text-base"
                        >
                          <option value="">Select a service</option>
                          <option value="general">Dental Care enquiry</option>
                          <option value="emergency">Feedback</option>
                          <option value="emergency">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-4 lg:mb-6">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        {...register("message", { required: "Message is required" })}
                        rows={5}
                        className={`w-full px-3 lg:px-4 py-2 lg:py-3 border-2 rounded-xl focus:ring-2 focus:ring-[#2bafc5]/20 focus:border-[#2bafc5] outline-none transition-all duration-200 text-sm lg:text-base ${
                          errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Please share your questions, concerns, or how we can help you..."
                      ></textarea>
                      {errors.message && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                          <AlertTriangle className="w-4 h-4" />
                          {errors.message.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="border-t border-gray-100 pt-4 lg:pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 lg:py-4 px-6 lg:px-8 bg-gradient-to-r from-[#2bafc5] to-[#249aad] hover:from-[#249aad] hover:to-[#2bafc5] text-white font-bold rounded-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-sm lg:text-base"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 lg:w-5 lg:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Mail className="w-4 h-4 lg:w-5 lg:h-5" />
                            Send Message via WhatsApp
                          </>
                        )}
                      </button>
                      
                      <p className="text-center text-xs lg:text-sm text-gray-500 mt-3 lg:mt-4">
                        Your message will be forwarded to WhatsApp for quick response
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
            
           {/* Map and Office Info */}
<motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Visit Our Office</h2>
<div className="bg-gray-200 rounded-lg overflow-hidden h-[250px] lg:h-[300px] mb-6 lg:mb-8 relative flex items-center justify-center">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62958.20138710463!2d76.57295019762266!3d9.518495371109113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062eea169e168b%3A0x41fab59d8531c146!2sK.E%20Dental!5e0!3m2!1sen!2sin!4v1750163906065!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="absolute top-0 left-0 w-full h-full"
  />
</div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Answers to common questions about appointments and visits"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            <motion.div
              className="bg-white p-4 lg:p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3 text-neutral-900">How early should I arrive for my appointment?</h3>
              <p className="text-neutral-700 text-sm lg:text-base">
                For your first visit, we recommend arriving 15 minutes early to complete any necessary 
                paperwork. For follow-up appointments, arriving 5-10 minutes before your scheduled time 
                is sufficient.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-4 lg:p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3 text-neutral-900">What payment methods do you accept?</h3>
              <p className="text-neutral-700 text-sm lg:text-base">
                We accept Cash, Debit cards, UPI, Cheque. We also offer flexible payment plans for more extensive treatments. Please contact our reception team for details.
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-white text-[#2bafc5] font-bold px-6 lg:px-8 py-3 lg:py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-base lg:text-lg"
            >
              <span>Book Appointment</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Calendar className="w-5 h-5 lg:w-6 lg:h-6" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;