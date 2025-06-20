import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Eye, X, Heart } from 'lucide-react';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';
import { Product } from '../types';

const Collection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [filter, setFilter] = useState<string>('All');
  const { addItem } = useCartStore();

  const categories = ['All', 'Floral', 'Traditional', 'Contemporary', 'Heritage', 'Spiritual', 'Whimsical'];
  
  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(product => product.category === filter);

  const handleAddToCart = (product: Product, size: string) => {
    addItem(product, size);
    setSelectedProduct(null);
  };

  return (
    <section id="collection" className="py-20 lg:py-32 bg-pearl-white">
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
            Our Collection
          </motion.h2>
          <motion.p
            className="text-lg text-warm-gray max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Each piece in our collection tells a unique story, blending traditional Pakistani embroidery 
            with contemporary fashion sensibilities.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-midnight-plum text-pearl-white shadow-lg'
                  : 'bg-rose-blush text-midnight-plum hover:bg-kashmir-gold hover:text-pearl-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -8 }}
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-plum/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Featured Badge */}
                  {product.featured && (
                    <motion.div
                      className="absolute top-4 left-4 bg-kashmir-gold text-pearl-white px-3 py-1 rounded-full text-sm font-medium"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Featured
                    </motion.div>
                  )}

                  {/* Action Buttons */}
                  <motion.div
                    className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: 20 }}
                    whileInView={{ x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.button
                      onClick={() => setSelectedProduct(product)}
                      className="bg-pearl-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-pearl-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye className="w-5 h-5 text-midnight-plum" />
                    </motion.button>
                    <motion.button
                      className="bg-pearl-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-rose-blush transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart className="w-5 h-5 text-midnight-plum" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-serif font-bold text-midnight-plum mb-2 group-hover:text-kashmir-gold transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {product.name}
                  </motion.h3>
                  
                  <motion.p
                    className="text-warm-gray text-sm mb-4 line-clamp-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {product.description.substring(0, 100)}...
                  </motion.p>

                  <div className="flex items-center justify-between">
                    <motion.div
                      className="text-2xl font-serif font-bold text-midnight-plum"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Rs. {product.price.toLocaleString()}
                    </motion.div>
                    
                    <motion.button
                      onClick={() => setSelectedProduct(product)}
                      className="bg-midnight-plum text-pearl-white px-4 py-2 rounded-lg hover:bg-kashmir-gold transition-colors duration-300 flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm font-medium">View</span>
                      <Eye className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Product Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              className="fixed inset-0 bg-midnight-plum/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                className="bg-pearl-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Product Image */}
                  <div className="relative">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-96 md:h-full object-cover rounded-2xl"
                    />
                    <motion.button
                      onClick={() => setSelectedProduct(null)}
                      className="absolute top-4 right-4 bg-pearl-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-pearl-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="w-5 h-5 text-midnight-plum" />
                    </motion.button>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-serif font-bold text-midnight-plum mb-2">
                        {selectedProduct.name}
                      </h3>
                      <div className="text-2xl font-serif font-bold text-kashmir-gold mb-4">
                        Rs. {selectedProduct.price.toLocaleString()}
                      </div>
                      <p className="text-warm-gray leading-relaxed">
                        {selectedProduct.description}
                      </p>
                    </div>

                    {/* Size Selection */}
                    <div>
                      <h4 className="text-lg font-medium text-midnight-plum mb-3">
                        Select Size
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProduct.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-4 py-2 rounded-lg border-2 font-medium transition-all duration-300 ${
                              selectedSize === size
                                ? 'border-midnight-plum bg-midnight-plum text-pearl-white'
                                : 'border-dust-beige text-midnight-plum hover:border-kashmir-gold'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Add to Cart */}
                    <motion.button
                      onClick={() => handleAddToCart(selectedProduct, selectedSize)}
                      className="w-full bg-midnight-plum text-pearl-white py-4 rounded-lg font-medium hover:bg-kashmir-gold transition-colors duration-300 flex items-center justify-center space-x-3"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ShoppingBag className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </motion.button>

                    {/* Care Instructions */}
                    <div className="border-t border-dust-beige pt-6">
                      <h4 className="text-lg font-medium text-midnight-plum mb-3">
                        Care Instructions
                      </h4>
                      <ul className="space-y-2 text-warm-gray">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-kashmir-gold rounded-full mr-3" />
                          Hand wash in cold water
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-kashmir-gold rounded-full mr-3" />
                          Lay flat to dry
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-kashmir-gold rounded-full mr-3" />
                          Store away from direct sunlight
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Collection;