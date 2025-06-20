import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, Globe, Sparkles } from 'lucide-react';

const WhyChoose: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'One of a Kind',
      description: 'Every shirt is truly unique, with slight variations that make your piece exclusively yours.',
      color: 'from-rose-400 to-pink-500',
    },
    {
      icon: Clock,
      title: 'Crafted with Patience',
      description: 'Hours of careful attention and skilled artistry go into each piece, never rushed, always perfect.',
      color: 'from-kashmir-gold to-yellow-400',
    },
    {
      icon: Globe,
      title: 'Cultural Legacy',
      description: 'A wearable piece of Pakistani heritage that connects you to centuries of artistic tradition.',
      color: 'from-midnight-plum to-purple-600',
    },
    {
      icon: Sparkles,
      title: 'Meaningful Fashion',
      description: 'Not fast fashion, but slow, soulful art that tells stories and creates lasting memories.',
      color: 'from-emerald-400 to-teal-500',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-rose-blush via-pearl-white to-rose-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
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
            Why Choose Handcrafted
          </motion.h2>
          <motion.p
            className="text-lg text-warm-gray max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            In a world of mass production, we believe in the power of human touch, 
            cultural preservation, and the beauty of imperfection that makes each piece special.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-pearl-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-dust-beige/50 relative overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 relative z-10`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-serif font-bold text-midnight-plum mb-4 group-hover:text-deep-graphite transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed group-hover:text-deep-graphite transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-kashmir-gold rounded-full opacity-60"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-1 h-1 bg-midnight-plum rounded-full opacity-40"
                  animate={{ scale: [1, 2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          className="mt-20 text-center bg-pearl-white rounded-3xl p-12 shadow-lg border border-dust-beige/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.blockquote
            className="text-2xl lg:text-3xl font-serif italic text-midnight-plum max-w-4xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            "When you choose handcrafted, you choose to honor the artist, preserve tradition, 
            and carry a piece of cultural soul with you wherever you go."
          </motion.blockquote>
          <motion.cite
            className="text-kashmir-gold font-medium text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            — Philosophy of Aqshmar
          </motion.cite>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: '500+', label: 'Happy Customers' },
            { number: '1000+', label: 'Pieces Created' },
            { number: '15+', label: 'Hours per Piece' },
            { number: '3', label: 'Sister Artisans' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-3xl lg:text-4xl font-serif font-bold text-midnight-plum mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-warm-gray uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;