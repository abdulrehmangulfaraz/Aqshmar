import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Scissors, Sparkles, Clock } from 'lucide-react';

const Craftsmanship: React.FC = () => {
  const steps = [
    {
      icon: Palette,
      title: 'Pattern Discovery',
      description: 'Each design begins with a story, inspired by traditional Pakistani motifs passed down through generations.',
      details: [
        'Research heritage patterns',
        'Sketch initial concepts',
        'Refine cultural authenticity',
        'Create modern adaptations'
      ],
      image: '/pattern.jpg',
      color: 'from-kashmir-gold to-yellow-400',
    },
    {
      icon: Scissors,
      title: 'Thread & Color Curation',
      description: 'We select rich, earthy palettes reflecting cultural symbolism, choosing only the finest silk and cotton threads.',
      details: [
        'Source premium materials',
        'Color matching process',
        'Quality assessment',
        'Cultural significance review'
      ],
      image: '/fabrics.png',
      color: 'from-midnight-plum to-purple-600',
    },
    {
      icon: Sparkles,
      title: 'The Stitching Ritual',
      description: 'Over 15 hours of meticulous threadwork by hand, transforming simple fabric into wearable art with ancient techniques.',
      details: [
        'Hand embroidery techniques',
        'French knots & satin stitches',
        'Quality control checkpoints',
        'Final finishing touches'
      ],
      image: '/stiching.jpg',
      color: 'from-rose-400 to-pink-500',
    },
  ];

  return (
    <section id="craftsmanship" className="py-20 lg:py-32 bg-gradient-to-br from-rose-blush to-pearl-white">
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
            Our Craftsmanship
          </motion.h2>
          <motion.p
            className="text-lg text-warm-gray max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Every Aqshmar piece is born from a sacred process that honors tradition while embracing innovation. 
            Witness the journey from inspiration to masterpiece.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${step.color} mb-4`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center mb-4">
                    <h3 className="text-3xl font-serif font-bold text-midnight-plum mr-4">
                      {step.title}
                    </h3>
                    <div className="flex items-center text-kashmir-gold">
                      <Clock className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">Step {index + 1}</span>
                    </div>
                  </div>
                  <p className="text-lg text-warm-gray mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Process Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detail}
                        className="flex items-center text-deep-graphite"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: detailIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-kashmir-gold rounded-full mr-3" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Image */}
              <motion.div
                className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${step.color} opacity-20`} />
                  
                  {/* Floating Badge */}
                  <motion.div
                    className="absolute top-6 right-6 bg-pearl-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <step.icon className="w-6 h-6 text-midnight-plum" />
                  </motion.div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-kashmir-gold rounded-full opacity-60"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute -top-4 -right-4 w-6 h-6 border-2 border-midnight-plum rounded-full opacity-60"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Time Investment */}
        <motion.div
          className="mt-24 text-center bg-pearl-white rounded-3xl p-12 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { number: '15+', label: 'Hours per piece', sublabel: 'Hand embroidery time' },
              { number: '3', label: 'Quality checks', sublabel: 'Before completion' },
              { number: '100%', label: 'Handcrafted', sublabel: 'No machine work' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl lg:text-5xl font-serif font-bold text-midnight-plum mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-deep-graphite mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-warm-gray">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Craftsmanship;