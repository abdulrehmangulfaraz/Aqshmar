import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Truck, Tag, MapPin, AlertTriangle, Mail, CheckCircle, ChevronDown } from "lucide-react";

const shippingSections = [
  {
    title: "Processing Time",
    icon: <Clock className="w-5 h-5 text-maroon-600" />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Orders are processed within 1-2 business days after confirmation</li>
        <li>Orders placed on weekends or public holidays will be processed the next working day</li>
      </ul>
    )
  },
  {
    title: "Delivery Timeframes",
    icon: <Truck className="w-5 h-5 text-maroon-600" />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Within Pakistan: 3-7 business days depending on your location</li>
        <li>International Shipping: Currently not available</li>
      </ul>
    )
  },
  {
    title: "Shipping Charges",
    icon: <Tag className="w-5 h-5 text-maroon-600" />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Flat Rate Shipping: PKR 250</li>
        <li>Free Shipping: On orders above PKR 3,500</li>
      </ul>
    )
  },
  {
    title: "Order Tracking",
    icon: <CheckCircle className="w-5 h-5 text-maroon-600" />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Once shipped, you will receive a tracking number via SMS or email</li>
        <li>You can track your parcel through the courier's official tracking system</li>
      </ul>
    )
  },
  {
    title: "Delivery Partners",
    icon: <Truck className="w-5 h-5 text-maroon-600" />,
    content: "We use reliable services such as TCS, Leopards, and Call Courier for safe and fast deliveries."
  },
  {
    title: "Incorrect Addresses",
    icon: <MapPin className="w-5 h-5 text-maroon-600" />,
    content: "Please ensure your delivery address is correct. Aqshmar is not responsible for orders delivered to incorrectly provided addresses."
  },
  {
    title: "Lost or Damaged Parcels",
    icon: <AlertTriangle className="w-5 h-5 text-maroon-600" />,
    content: (
      <div>
        <ul className="list-disc pl-5 space-y-2 mb-3">
          <li>If your parcel is lost or arrives damaged, contact us within 24 hours of delivery</li>
          <li>Provide your order number and photos of the issue</li>
        </ul>
        <p>We will work with the courier to resolve the issue promptly.</p>
      </div>
    )
  }
];

const ShippingPolicy = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="relative bg-gradient-to-b from-[#faf5f3] to-[#f9f1ee] min-h-screen px-6 py-20 text-gray-800 font-sans overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] left-[-60px] w-[400px] h-[400px] bg-maroon-100/30 rounded-full filter blur-3xl" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-maroon-100/20 rounded-full filter blur-3xl" />
        <div className="absolute top-1/3 right-[-50px] w-[300px] h-[300px] bg-amber-100/20 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-maroon-900 mb-4">
            Shipping Policy
          </h1>
          <div className="w-24 h-1 bg-maroon-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Effective Date: June, 2025
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mt-4">
            At Aqshmar™, every order is carefully packed and shipped to deliver handcrafted elegance right to your doorstep.
          </p>
        </motion.div>

        <div className="space-y-4">
          {shippingSections.map((section, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.005 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="mt-0.5">
                      {section.icon}
                    </div>
                    <span className="text-lg font-medium text-maroon-800">{section.title}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-maroon-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-16 text-gray-700 leading-relaxed">
                        {section.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-100 shadow-sm text-center"
        >
          <h3 className="text-xl font-serif font-medium text-maroon-800 mb-4">
            Need shipping assistance?
          </h3>
          <p className="text-gray-600 mb-4">
            Our team is here to help with any questions about your order delivery.
          </p>
          <a
            href="mailto:aqshmar.pk@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-maroon-600 hover:bg-maroon-700 text-white rounded-lg transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Support
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export { shippingSections };
export default ShippingPolicy;