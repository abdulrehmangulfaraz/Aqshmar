import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pearl-white via-rose-blush to-pearl-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-embroidery-pattern opacity-50" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <motion.div
          className="w-8 h-8 border-2 border-kashmir-gold rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <div className="absolute bottom-32 right-16 opacity-20">
        <motion.div
          className="w-6 h-6 bg-midnight-plum rounded-full"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-midnight-plum/10 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Heart className="w-4 h-4 text-kashmir-gold" />
              <span className="text-sm font-medium text-midnight-plum uppercase tracking-wider">
                Handcrafted with Love
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-midnight-plum leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Aqshmar
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl text-deep-graphite font-light mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Timeless Hand-Embroidered Tees
            </motion.h2>

            <motion.p
              className="text-lg text-warm-gray mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Crafted by tradition. Reimagined for today. Each piece tells a story 
              of heritage, patience, and the timeless art of hand embroidery.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.a
                href="#collection"
                className="group inline-flex items-center justify-center px-8 py-4 bg-midnight-plum text-pearl-white font-medium rounded-lg hover:bg-kashmir-gold transition-all duration-300 transform"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Collection
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              
              <motion.a
                href="#story"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-midnight-plum text-midnight-plum font-medium rounded-lg hover:bg-midnight-plum hover:text-pearl-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                The Sisters' Story
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Embroidery Hoop Visual */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main Hoop */}
            <motion.div
              className="relative"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Outer Hoop */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full border-8 border-kashmir-gold/30 relative">
                {/* Inner Hoop */}
                <div className="absolute inset-4 rounded-full border-4 border-midnight-plum/20" />
                
                {/* Product Image */}
                <motion.div
                  className="absolute inset-8 rounded-full overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <img
                    src='/logo.jpg/logo.jpg'
                    alt="Hand-embroidered tee"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-plum/20 to-transparent" />
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-kashmir-gold rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-midnight-plum rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              {/* Thread Lines */}
              <motion.div
                className="absolute top-1/2 -left-16 w-16 h-0.5 bg-gradient-to-r from-kashmir-gold to-transparent"
                animate={{ width: [64, 80, 64] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute top-1/2 -right-16 w-16 h-0.5 bg-gradient-to-l from-midnight-plum to-transparent"
                animate={{ width: [64, 80, 64] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              />
            </motion.div>

            {/* Quality Badge */}
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-bottom-8 lg:-right-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="bg-pearl-white rounded-full p-4 shadow-lg border border-dust-beige">
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold text-midnight-plum">15+</div>
                  <div className="text-xs text-warm-gray uppercase tracking-wider">Hours</div>
                  <div className="text-xs text-warm-gray">Per Piece</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-midnight-plum rounded-full flex justify-center">
          <div className="w-1 h-3 bg-midnight-plum rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;