import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const Cart: React.FC = () => {
  const { items, isOpen, toggleCart, updateQuantity, removeItem, getTotalItems, getTotalPrice } = useCartStore();

  const handleCheckout = () => {
    // In a real implementation, this would integrate with a payment system
    const orderDetails = items.map(item => 
      `${item.product.name} (${item.size}) x${item.quantity} - Rs. ${(item.product.price * item.quantity).toLocaleString()}`
    ).join('\n');
    
    const total = getTotalPrice().toLocaleString();
    const message = `Hi! I'd like to place an order:\n\n${orderDetails}\n\nTotal: Rs. ${total}\n\nPlease let me know the next steps. Thank you!`;
    const whatsappUrl = `https://wa.me/+923051352002?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-midnight-plum/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
          />

          {/* Cart Panel */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-md bg-pearl-white shadow-2xl z-50 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="bg-midnight-plum text-pearl-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <ShoppingBag className="w-6 h-6" />
                  <h2 className="text-xl font-serif font-bold">
                    Your Cart ({getTotalItems()})
                  </h2>
                </div>
                <motion.button
                  onClick={toggleCart}
                  className="p-2 hover:bg-kashmir-gold rounded-full transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 p-6">
              {items.length === 0 ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <ShoppingBag className="w-16 h-16 text-warm-gray mx-auto mb-4" />
                  <p className="text-warm-gray text-lg">Your cart is empty</p>
                  <p className="text-sm text-warm-gray mt-2">
                    Add some beautiful pieces to get started
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <motion.div
                      key={`${item.product.id}-${item.size}`}
                      className="bg-rose-blush rounded-2xl p-4 border border-dust-beige/50"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-serif font-semibold text-midnight-plum text-sm mb-1 truncate">
                            {item.product.name}
                          </h3>
                          <p className="text-xs text-warm-gray mb-2">
                            Size: {item.size}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-midnight-plum">
                              Rs. {(item.product.price * item.quantity).toLocaleString()}
                            </span>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-2">
                              <motion.button
                                onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                                className="w-6 h-6 bg-pearl-white rounded-full flex items-center justify-center hover:bg-kashmir-gold hover:text-pearl-white transition-colors duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Minus className="w-3 h-3" />
                              </motion.button>
                              
                              <span className="text-sm font-medium min-w-[1.5rem] text-center">
                                {item.quantity}
                              </span>
                              
                              <motion.button
                                onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                                className="w-6 h-6 bg-pearl-white rounded-full flex items-center justify-center hover:bg-kashmir-gold hover:text-pearl-white transition-colors duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Plus className="w-3 h-3" />
                              </motion.button>
                              
                              <motion.button
                                onClick={() => removeItem(item.product.id, item.size)}
                                className="w-6 h-6 bg-pearl-white rounded-full flex items-center justify-center hover:bg-red-500 hover:text-pearl-white transition-colors duration-300 ml-2"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Trash2 className="w-3 h-3" />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-dust-beige p-6 bg-pearl-white">
                {/* Total */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-serif font-bold text-midnight-plum">
                    Total:
                  </span>
                  <span className="text-2xl font-serif font-bold text-kashmir-gold">
                    Rs. {getTotalPrice().toLocaleString()}
                  </span>
                </div>

                {/* Checkout Button */}
                <motion.button
                  onClick={handleCheckout}
                  className="w-full bg-midnight-plum text-pearl-white py-4 rounded-xl font-medium hover:bg-kashmir-gold transition-colors duration-300 flex items-center justify-center space-x-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Proceed to Checkout</span>
                </motion.button>

                <p className="text-xs text-warm-gray text-center mt-3">
                  Secure checkout via WhatsApp • Free shipping on orders over Rs. 10,000
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;