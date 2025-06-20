import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Award, Sparkles } from 'lucide-react';

const Story: React.FC = () => {
  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Three sisters discovered their grandmother\'s embroidery chest, filled with patterns and stories from generations past.',
      icon: Heart,
    },
    {
      year: '2021',
      title: 'Learning the Craft',
      description: 'Months of practice, following Nani\'s handwritten notes and perfecting the traditional stitches she had mastered.',
      icon: Sparkles,
    },
    {
      year: '2022',
      title: 'First Collection',
      description: 'Launch of our inaugural collection with just 12 pieces, each taking weeks to complete by hand.',
      icon: Award,
    },
    {
      year: '2024',
      title: 'Global Recognition',
      description: 'Today, Aqshmar pieces are cherished by women worldwide, carrying our heritage across continents.',
      icon: Users,
    },
  ];

  return (
    <section id="story" className="py-20 lg:py-32 bg-pearl-white">
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
            The Sisters' Legacy
          </motion.h2>
          <motion.p
            className="text-lg text-warm-gray max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Maryam, Aqsa, and Ayesha discovered more than just fabric and thread in their grandmother's sewing box—
            they found a calling to preserve and celebrate the timeless art of Pakistani embroidery.
          </motion.p>
        </motion.div>

        {/* Sisters Introduction */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            {
              name: 'Maryam',
              role: 'Design & Heritage',
              description: 'The keeper of traditional patterns, Maryam ensures every design honors our cultural legacy while speaking to modern hearts.',
              image: '/infinity.png',
            },
            {
              name: 'Aqsa',
              role: 'Craftsmanship & Quality',
              description: 'With the steadiest hands and keenest eye, Aqsa oversees the intricate embroidery process that makes each piece extraordinary.',
              image: '/aqsa.png',
            },
            {
              name: 'Ayesha',
              role: 'Vision & Connection',
              description: 'The storyteller of the trio, Ayesha connects our heritage with the world, sharing the soul behind every stitch.',
              image: '/ayesha.png',
            },
          ].map((sister, index) => (
            <motion.div
              key={sister.name}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <img
                  src={sister.image}
                  alt={sister.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-plum/20 to-transparent" />
              </motion.div>
              <h3 className="text-2xl font-serif font-bold text-midnight-plum mb-2">
                {sister.name}
              </h3>
              <p className="text-kashmir-gold font-medium mb-3 uppercase tracking-wider text-sm">
                {sister.role}
              </p>
              <p className="text-warm-gray leading-relaxed">
                {sister.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-kashmir-gold via-midnight-plum to-kashmir-gold hidden lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                  <motion.div
                    className="bg-rose-blush p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                      <div className="bg-midnight-plum p-3 rounded-full mr-4">
                        <item.icon className="w-6 h-6 text-pearl-white" />
                      </div>
                      <div className="text-3xl font-serif font-bold text-kashmir-gold">
                        {item.year}
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-midnight-plum mb-3">
                      {item.title}
                    </h3>
                    <p className="text-warm-gray leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex lg:w-2/12 justify-center">
                  <motion.div
                    className="w-6 h-6 bg-kashmir-gold rounded-full border-4 border-pearl-white shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Spacer */}
                <div className="hidden lg:block lg:w-5/12" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Heritage Quote */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-2xl lg:text-3xl font-serif italic text-midnight-plum max-w-4xl mx-auto">
            "Every thread carries the wisdom of generations, every stitch tells a story of love, 
            and every piece connects us to the beautiful tapestry of our heritage."
          </blockquote>
          <cite className="block mt-6 text-kashmir-gold font-medium">
            — The Aqshmar Sisters
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;