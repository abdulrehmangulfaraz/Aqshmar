import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Inquiry',
    message: '',
    customOrder: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Submit to Netlify
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formData,
          customOrder: formData.customOrder ? 'Yes' : 'No'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            subject: 'Inquiry',
            message: '',
            customOrder: false,
          });
          setSubmitStatus('idle');
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-pearl-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-serif font-bold text-midnight-plum mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's Create Together
          </motion.h2>
          <motion.p
            className="text-lg text-warm-gray max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Have a vision for a custom piece? Questions about our craft? Or simply want to say hello? 
            We'd love to hear from you and bring your embroidery dreams to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-rose-blush rounded-3xl p-8 lg:p-10 shadow-lg border border-dust-beige/50">
              <div className="flex items-center mb-8">
                <div className="bg-midnight-plum p-3 rounded-full mr-4">
                  <MessageSquare className="w-6 h-6 text-pearl-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-midnight-plum">
                  Send us a Message
                </h3>
              </div>

              {/* Netlify Form */}
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6" 
                name="contact" 
                method="POST" 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="customOrder" value={formData.customOrder ? 'Yes' : 'No'} />
                
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-midnight-plum mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-pearl-white border border-dust-beige rounded-lg focus:ring-2 focus:ring-kashmir-gold focus:border-transparent transition-all duration-300"
                      placeholder="Your beautiful name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-midnight-plum mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-pearl-white border border-dust-beige rounded-lg focus:ring-2 focus:ring-kashmir-gold focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </motion.div>
                </div>

                {/* Subject */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-midnight-plum mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-pearl-white border border-dust-beige rounded-lg focus:ring-2 focus:ring-kashmir-gold focus:border-transparent transition-all duration-300"
                  >
                    <option value="Inquiry">General Inquiry</option>
                    <option value="Custom Order">Custom Order Request</option>
                    <option value="Collaboration">Partnership/Collaboration</option>
                    <option value="Press">Press & Media</option>
                    <option value="Other">Other</option>
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-midnight-plum mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-pearl-white border border-dust-beige rounded-lg focus:ring-2 focus:ring-kashmir-gold focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your vision, questions, or simply say hello..."
                  />
                </motion.div>

                {/* Custom Order Checkbox */}
                <motion.div
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="checkbox"
                    id="customOrder"
                    name="customOrder"
                    checked={formData.customOrder}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-kashmir-gold bg-pearl-white border-dust-beige rounded focus:ring-kashmir-gold focus:ring-2"
                  />
                  <label htmlFor="customOrder" className="text-sm text-midnight-plum">
                    I'm interested in a custom embroidery piece
                  </label>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-3 ${
                    submitStatus === 'success'
                      ? 'bg-green-600 text-white'
                      : submitStatus === 'error'
                      ? 'bg-red-600 text-white'
                      : 'bg-midnight-plum text-pearl-white hover:bg-kashmir-gold'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-pearl-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      <span>Sending...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      <span>Failed to Send. Please Try Again.</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Direct Contact */}
            <motion.div
              className="bg-midnight-plum rounded-3xl p-8 text-pearl-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-kashmir-gold p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-midnight-plum" />
                </div>
                <h3 className="text-2xl font-serif font-bold">
                  Direct Contact
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-rose-blush mb-2">Email us directly:</p>
                  <a
                    href="mailto:aqshmar.pk@gmail.com"
                    className="text-xl font-medium hover:text-kashmir-gold transition-colors duration-300"
                  >
                    aqshmar.pk@gmail.com
                  </a>
                </div>
                
                <div>
                  <p className="text-rose-blush mb-2">Follow our journey:</p>
                  <a
                    href="https://instagram.com/aqs_hmar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-medium hover:text-kashmir-gold transition-colors duration-300"
                  >
                    @aqs_hmar
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Custom Orders */}
            <motion.div
              className="bg-rose-blush rounded-3xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold text-midnight-plum mb-4">
                Custom Orders
              </h3>
              <p className="text-warm-gray mb-4">
                Looking for something truly unique? We create bespoke embroidery pieces tailored to your vision.
              </p>
              <ul className="space-y-2 text-deep-graphite">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-kashmir-gold rounded-full mr-3" />
                  Personal design consultation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-kashmir-gold rounded-full mr-3" />
                  4-6 weeks creation time
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-kashmir-gold rounded-full mr-3" />
                  Progress updates with photos
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-kashmir-gold rounded-full mr-3" />
                  Worldwide shipping available
                </li>
              </ul>
            </motion.div>

            {/* Response Time */}
            <motion.div
              className="bg-kashmir-gold/10 rounded-3xl p-8 border border-kashmir-gold/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold text-midnight-plum mb-4">
                Response Promise
              </h3>
              <p className="text-warm-gray">
                We personally read and respond to every message within 24 hours. 
                Your inquiry matters to us, and we're excited to connect with you!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;