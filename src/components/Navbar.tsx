import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { getTotalItems, toggleCart } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Our Story', href: '#story' },
    { label: 'Collection', href: '#collection' },
    { label: 'Craftsmanship', href: '#craftsmanship' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-pearl-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <img
              src="/logo.jpg"
              alt="Aqshmar Logo"
              className="h-12 w-12 lg:h-14 lg:w-14 rounded-full object-cover shadow-lg border-2 border-kashmir-gold/20"
            />
            <h1 className="ml-3 text-2xl lg:text-3xl font-serif font-bold text-midnight-plum">
              Aqshmar
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-deep-graphite hover:text-kashmir-gold transition-colors duration-300 font-medium tracking-wide text-sm uppercase"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {item.label}
              </motion.a>
            ))}
            
            {/* Cart Button */}
            <motion.button
              onClick={toggleCart}
              className="relative p-2 text-deep-graphite hover:text-kashmir-gold transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingBag size={24} />
              {getTotalItems() > 0 && (
                <motion.span
                  className="absolute -top-1 -right-1 bg-kashmir-gold text-pearl-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                  {getTotalItems()}
                </motion.span>
              )}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleCart}
              className="relative p-2 text-deep-graphite hover:text-kashmir-gold transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingBag size={20} />
              {getTotalItems() > 0 && (
                <motion.span
                  className="absolute -top-1 -right-1 bg-kashmir-gold text-pearl-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                  {getTotalItems()}
                </motion.span>
              )}
            </motion.button>
            
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-deep-graphite hover:text-kashmir-gold transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-pearl-white/95 backdrop-blur-md shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="block text-deep-graphite hover:text-kashmir-gold transition-colors duration-300 font-medium tracking-wide text-sm uppercase py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;