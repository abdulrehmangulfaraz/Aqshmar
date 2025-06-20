import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 lg:py-32 bg-midnight-plum">
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
            className="text-4xl lg:text-5xl font-serif font-bold text-pearl-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Stories from Our Community
          </motion.h2>
          <motion.p
            className="text-lg text-rose-blush max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Every customer becomes part of our extended family, and their stories inspire us to continue our craft with love and dedication.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-pearl-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-dust-beige/20"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <div className="text-center">
                {/* Quote Icon */}
                <motion.div
                  className="inline-flex p-3 bg-kashmir-gold/10 rounded-full mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Quote className="w-8 h-8 text-kashmir-gold" />
                </motion.div>

                {/* Stars */}
                <motion.div
                  className="flex justify-center mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Star className="w-6 h-6 text-kashmir-gold fill-current" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Quote */}
                <motion.blockquote
                  className="text-xl lg:text-2xl font-serif italic text-midnight-plum mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  "{testimonials[currentIndex].quote}"
                </motion.blockquote>

                {/* Customer Info */}
                <motion.div
                  className="flex items-center justify-center space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-gradient-to-br from-kashmir-gold to-rose-blush rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-pearl-white">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Name and Location */}
                  <div className="text-left">
                    <div className="text-lg font-medium text-midnight-plum">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-warm-gray">
                      {testimonials[currentIndex].location}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pearl-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-pearl-white transition-colors duration-300 lg:-left-16"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <ChevronLeft className="w-6 h-6 text-midnight-plum" />
          </motion.button>

          <motion.button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pearl-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-pearl-white transition-colors duration-300 lg:-right-16"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <ChevronRight className="w-6 h-6 text-midnight-plum" />
          </motion.button>

          {/* Pagination Dots */}
          <motion.div
            className="flex justify-center mt-8 space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-kashmir-gold scale-125'
                    : 'bg-pearl-white/50 hover:bg-pearl-white/80'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { icon: '⭐', value: '4.9/5', label: 'Average Rating' },
            { icon: '❤️', value: '98%', label: 'Customer Satisfaction' },
            { icon: '🔄', value: '85%', label: 'Repeat Customers' },
            { icon: '🌍', value: '25+', label: 'Countries Shipped' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-pearl-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-serif font-bold text-kashmir-gold mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-rose-blush">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;