import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, Globe, Sparkles } from 'lucide-react';
import CountUp from 'react-countup';

const WhyChoose: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'One of a Kind',
      description: 'Every shirt is truly unique, with slight variations that make your piece exclusively yours.',
      color: 'bg-gradient-to-br from-rose-400 to-pink-500',
      borderColor: 'hover:border-pink-400',
      iconBg: 'bg-pink-100/20'
    },
    {
      icon: Clock,
      title: 'Crafted with Patience',
      description: 'Hours of careful attention and skilled artistry go into each piece, never rushed, always perfect.',
      color: 'bg-gradient-to-br from-kashmir-gold to-amber-400',
      borderColor: 'hover:border-kashmir-gold',
      iconBg: 'bg-amber-100/20'
    },
    {
      icon: Globe,
      title: 'Cultural Legacy',
      description: 'A wearable piece of Pakistani heritage that connects you to centuries of artistic tradition.',
      color: 'bg-gradient-to-br from-midnight-plum to-purple-600',
      borderColor: 'hover:border-midnight-plum',
      iconBg: 'bg-purple-100/20'
    },
    {
      icon: Sparkles,
      title: 'Meaningful Fashion',
      description: 'Not fast fashion, but slow, soulful art that tells stories and creates lasting memories.',
      color: 'bg-gradient-to-br from-emerald-400 to-teal-500',
      borderColor: 'hover:border-emerald-400',
      iconBg: 'bg-teal-100/20'
    },
  ];

  const stats = [
    { number: 500, label: 'Happy Customers', icon: '❤️' },
    { number: 1000, label: 'Pieces Created', icon: '🧵' },
    { number: 15, label: 'Hours per Piece', icon: '⏳' },
    { number: 3, label: 'Sister Artisans', icon: '👭' },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-rose-blush overflow-hidden">
      {/* Decorative embroidery pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://img.icons8.com/ios/50/000000/embroidery.png')] bg-repeat bg-[size:25px] pointer-events-none" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-kashmir-gold/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-midnight-plum/10 rounded-full blur-xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-serif font-bold text-midnight-plum mb-6 relative inline-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why Choose Handcrafted
            <span className="absolute bottom-0 left-0 w-full h-1 bg-kashmir-gold/40 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
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
              {/* Floating decorative elements */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-midnight-plum rounded-full opacity-20 animate-float" />
              <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-kashmir-gold rounded-full opacity-30 animate-float-delay" />
              
              <motion.div
                className={`bg-pearl-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border-b-4 border-transparent ${feature.borderColor} h-full flex flex-col relative overflow-hidden`}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Background pattern */}
                <div className={`absolute inset-0 ${feature.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  className={`inline-flex p-4 rounded-2xl ${feature.color} mb-6 shadow-md self-start relative z-10`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <h3 className="text-xl font-serif font-bold text-midnight-plum mb-4 group-hover:text-deep-graphite transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed group-hover:text-deep-graphite transition-colors">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          className="mt-20 text-center bg-pearl-white rounded-3xl p-12 shadow-lg border border-dust-beige/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Decorative background */}
          <div className="absolute inset-0 bg-[#FDF6F2] opacity-95" />
          
          {/* Decorative quote marks */}
          <span className="absolute top-6 left-8 text-6xl text-kashmir-gold opacity-20 font-serif">"</span>
          <span className="absolute bottom-6 right-8 text-6xl text-kashmir-gold opacity-20 font-serif">"</span>
          
          <motion.blockquote
            className="text-2xl lg:text-3xl font-serif italic text-midnight-plum max-w-4xl mx-auto mb-6 leading-relaxed relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            "When you choose handcrafted, you choose to honor the artist, preserve tradition, 
            and carry a piece of cultural soul with you wherever you go."
          </motion.blockquote>
          <motion.cite
            className="text-kashmir-gold font-medium text-lg relative z-10"
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
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl lg:text-4xl font-serif font-bold text-midnight-plum mb-2">
                <CountUp 
                  end={stat.number} 
                  duration={2} 
                  delay={index * 0.2}
                  suffix={stat.label === 'Hours per Piece' ? '+' : '+'}
                />
              </div>
              <div className="text-sm text-warm-gray uppercase tracking-wider font-medium">
                {stat.label}
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-px bg-gradient-to-b from-transparent via-dust-beige to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;