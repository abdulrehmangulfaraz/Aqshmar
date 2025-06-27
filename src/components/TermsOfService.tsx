import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Package, Check, RefreshCw, Copyright, User, Edit, ChevronDown, Mail } from "lucide-react";

const termsSections = [
  {
    title: "Product Accuracy",
    icon: <Package className="w-5 h-5 text-maroon-600" />,
    content: (
      <div>
        <p className="mb-3">We try our best to display all items as accurately as possible, but:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Colors may vary slightly due to lighting or screen settings</li>
          <li>Each piece is hand-embroidered, and slight natural variations may occur — these make your piece unique</li>
        </ul>
      </div>
    )
  },
  {
    title: "Orders & Availability",
    icon: <Check className="w-5 h-5 text-maroon-600" />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Orders are subject to availability</li>
        <li>We reserve the right to cancel/refund orders due to stock issues or suspected fraud</li>
        <li>You will be contacted if your item is unavailable</li>
      </ul>
    )
  },
  {
    title: "Returns & Exchanges",
    icon: <RefreshCw className="w-5 h-5 text-maroon-600" />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Please refer to our Return Policy</li>
        <li>No money-back refunds — only exchange for items of equal value</li>
        <li>Return requests must be made within 7 days of delivery</li>
      </ul>
    )
  },
  {
    title: "Intellectual Property",
    icon: <Copyright className="w-5 h-5 text-maroon-600" />,
    content: (
      <div>
        <p className="mb-3">All content (images, logos, text, designs) on this site belongs to Aqshmar™</p>
        <p>Reproduction, duplication, or commercial use without permission is strictly prohibited</p>
      </div>
    )
  },
  {
    title: "Account Usage",
    icon: <User className="w-5 h-5 text-maroon-600" />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>You're responsible for maintaining the confidentiality of your login credentials</li>
        <li>You agree to provide accurate and updated information when creating an account</li>
      </ul>
    )
  },
  {
    title: "Modifications",
    icon: <Edit className="w-5 h-5 text-maroon-600" />,
    content: (
      <div>
        <p className="mb-3">We may update or change these terms from time to time</p>
        <p>Continued use of our services after changes means you accept the new terms</p>
      </div>
    )
  }
];

const TermsOfService = () => {
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
            Terms of Service
          </h1>
          <div className="w-24 h-1 bg-maroon-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Last updated: June, 2025
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mt-4">
            Welcome to Aqshmar. By visiting or shopping from our platform, you agree to these terms.
          </p>
        </motion.div>

        <div className="space-y-4">
          {termsSections.map((section, index) => {
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
            Questions About Our Terms?
          </h3>
          <p className="text-gray-600 mb-4">
            We're happy to clarify any part of our terms of service.
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

// Export the sections for use in other components
export { termsSections };
export default TermsOfService;