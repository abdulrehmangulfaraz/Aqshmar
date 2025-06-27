import { motion } from 'framer-motion';
import { Instagram, Mail, Heart, ExternalLink } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Footer = () => {
  const { openModal } = useModal();

  const quickLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'Collection', href: '#collection' },
    { label: 'Craftsmanship', href: '#craftsmanship' },
    { label: 'Contact', href: '#contact' },
  ];

  const supportLinks = [
    { label: 'Care Instructions', href: '#care' },
    { label: 'Custom Orders', href: '#contact' },
  ];

  return (
    <footer className="bg-midnight-plum text-pearl-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-center mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <img
                  src="/logo.jpg"
                  alt="Aqshmar Logo"
                  className="h-12 w-12 rounded-full object-cover shadow-lg border-2 border-kashmir-gold/30 mr-3"
                />
                <h3 className="text-3xl lg:text-4xl font-serif font-bold">
                  Aqshmar 
                </h3>
              </motion.div>
              <p className="text-rose-blush leading-relaxed mb-6 max-w-md">
                Three sisters preserving the timeless art of Pakistani embroidery, 
                creating wearable stories that connect hearts across cultures and generations.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <motion.a
                  href="https://instagram.com/aqs_hmar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-kashmir-gold/20 p-3 rounded-full hover:bg-kashmir-gold hover:text-midnight-plum transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:aqshmar.pk@gmail.com"
                  className="bg-kashmir-gold/20 p-3 rounded-full hover:bg-kashmir-gold hover:text-midnight-plum transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-serif font-bold mb-6 text-kashmir-gold">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-rose-blush hover:text-pearl-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-serif font-bold mb-6 text-kashmir-gold">
                Support
              </h4>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-rose-blush hover:text-pearl-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => openModal('shipping')}
                    className="text-rose-blush hover:text-pearl-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Shipping Policy
                    </span>
                  </button>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => openModal('return')}
                    className="text-rose-blush hover:text-pearl-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Returns Policy
                    </span>
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="border-t border-kashmir-gold/20 py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-2xl font-serif font-bold mb-4 text-kashmir-gold">
              Stay Connected
            </h4>
            <p className="text-rose-blush mb-6">
              Follow our journey on Instagram for behind-the-scenes glimpses, 
              new collection previews, and embroidery inspiration.
            </p>
            <motion.a
              href="https://instagram.com/aqs_hmar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-kashmir-gold text-midnight-plum px-6 py-3 rounded-full font-medium hover:bg-pearl-white transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-5 h-5" />
              <span>Follow @aqs_hmar</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-kashmir-gold/20 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              className="flex items-center space-x-2 text-rose-blush"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <span>© 2025 Aqshmar. Embroidered with love</span>
              <Heart className="w-4 h-4 text-kashmir-gold" />
              <span>by three sisters.</span>
            </motion.div>
            
            <div className="flex items-center space-x-6 text-sm text-rose-blush">
              <motion.button
                onClick={() => openModal('privacy')}
                className="hover:text-pearl-white transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.button>
              <motion.button
                onClick={() => openModal('terms')}
                className="hover:text-pearl-white transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-kashmir-gold via-rose-blush to-kashmir-gold opacity-50" />
    </footer>
  );
};

export default Footer;