import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, PackageCheck, RefreshCw, Shield, Tag, AlertTriangle, Calendar } from "lucide-react";

const policySections = [
  {
    title: "Return Period",
    icon: <Calendar className="w-5 h-5 text-maroon-600" />,
    content: "We offer a 7-day return window starting from the day your order is delivered."
  },
  {
    title: "Return Eligibility",
    icon: <PackageCheck className="w-5 h-5 text-maroon-600" />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Item must be unused, unworn, unwashed, and in original packaging with all tags intact</li>
        <li>Proof of purchase (order receipt or confirmation email) is required</li>
        <li>Returns requested after 7 days of delivery will not be accepted</li>
      </ul>
    )
  },
  {
    title: "No Money-Back Guarantee",
    icon: <RefreshCw className="w-5 h-5 text-maroon-600" />,
    content: "We do not offer cash or bank refunds. Instead of a refund, you can choose an alternative shirt of equal value as a replacement."
  },
  {
    title: "Exchange Process",
    icon: <Shield className="w-5 h-5 text-maroon-600" />,
    content: (
      <>
        <p className="mb-2">Once your returned item is received and inspected, we'll contact you to confirm its eligibility.</p>
        <p>Upon approval, we will help you choose a new item for exchange.</p>
      </>
    )
  },
  {
    title: "Non-Returnable Items",
    icon: <AlertTriangle className="w-5 h-5 text-maroon-600" />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Items purchased during sales or promotions</li>
        <li>Custom or personalized orders</li>
        <li>Damaged products caused by mishandling after delivery</li>
      </ul>
    )
  },
  {
    title: "Shipping Costs",
    icon: <Tag className="w-5 h-5 text-maroon-600" />,
    content: (
      <>
        <p className="mb-2">Customers are responsible for return shipping costs unless the item was defective or incorrect.</p>
        <p>Re-shipping charges for exchanged items will be communicated during the process.</p>
      </>
    )
  },
  {
    title: "How to Initiate a Return",
    icon: <Mail className="w-5 h-5 text-maroon-600" />,
    content: (
      <div>
        <p className="mb-3">Email us at <a href="mailto:aqshmar.pk@gmail.com" className="text-maroon-700 underline">aqshmar.pk@gmail.com</a> within the return period including:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Your order number</li>
          <li>Reason for return</li>
          <li>Photos (if needed for damage claims)</li>
        </ul>
      </div>
    )
  }
];

const ReturnPolicy = () => {
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
            Return & Exchange Policy
          </h1>
          <div className="w-24 h-1 bg-maroon-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Effective Date: June, 2025
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mt-4">
            At Aqshmar™, we take great pride in the quality and care behind every handcrafted piece.
          </p>
        </motion.div>

        <div className="space-y-4">
          {policySections.map((section, index) => {
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
            Need further assistance?
          </h3>
          <p className="text-gray-600 mb-4">
            Our customer care team is here to help with any questions about returns or exchanges.
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

export { policySections };

export default ReturnPolicy;