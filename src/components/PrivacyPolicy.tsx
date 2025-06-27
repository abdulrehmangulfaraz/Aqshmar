import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { User, Mail, Lock, Shield, Cookie, EyeOff, ChevronDown } from "lucide-react";

const privacySections = [
  {
    title: "Information We Collect",
    icon: <User className="w-5 h-5 text-maroon-600" />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Full name</li>
        <li>Email address</li>
        <li>Shipping/billing address</li>
        <li>Contact number</li>
        <li>Purchase and browsing history</li>
        <li>Feedback and communications</li>
      </ul>
    )
  },
  {
    title: "How We Use Your Information",
    icon: <Mail className="w-5 h-5 text-maroon-600" />,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Process and deliver your orders</li>
        <li>Provide customer support</li>
        <li>Improve your browsing and shopping experience</li>
        <li>Notify you of order updates or special offers (if opted in)</li>
        <li>Analyze website traffic and product trends</li>
      </ul>
    )
  },
  {
    title: "Sharing of Information",
    icon: <Shield className="w-5 h-5 text-maroon-600" />,
    content: (
      <div>
        <p className="mb-3">We never sell or trade your personal information.</p>
        <p>Your data may only be shared with trusted third-party partners like:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Payment gateways (e.g., Easypaisa, JazzCash)</li>
          <li>Delivery services (e.g., TCS, CallCourier)</li>
        </ul>
        <p className="mt-3">They are only given what is strictly necessary to complete your order.</p>
      </div>
    )
  },
  {
    title: "Cookies & Tracking",
    icon: <Cookie className="w-5 h-5 text-maroon-600" />,
    content: (
      <div>
        <p className="mb-3">We use cookies (small text files) to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Remember your preferences</li>
          <li>Keep your cart updated</li>
          <li>Analyze traffic anonymously</li>
        </ul>
        <p className="mt-3">You can control or disable cookies anytime from your browser settings.</p>
      </div>
    )
  },
  {
    title: "Security",
    icon: <Lock className="w-5 h-5 text-maroon-600" />,
    content: (
      <div>
        <p className="mb-3">Your information is protected using:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>SSL encryption on all transactions</li>
          <li>Secure server access control</li>
          <li>Trusted payment integrations</li>
        </ul>
        <p className="mt-3">Despite all efforts, no method is 100% secure — but we continuously update our systems to protect you.</p>
      </div>
    )
  },
  {
    title: "Your Rights",
    icon: <EyeOff className="w-5 h-5 text-maroon-600" />,
    content: (
      <div>
        <p className="mb-3">You may at any time:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Request a copy of your stored data</li>
          <li>Ask us to delete your account or data</li>
          <li>Unsubscribe from promotional emails</li>
        </ul>
        <p className="mt-3">
          To make such requests, email us at:
          <a href="mailto:aqshmar.pk@gmail.com" className="text-maroon-700 underline ml-2">aqshmar.pk@gmail.com</a>
        </p>
      </div>
    )
  }
];

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-maroon-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Last updated: June, 2025
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mt-4">
            At Aqshmar™, your privacy is sacred to us. This policy outlines how we collect, use, and protect your information.
          </p>
        </motion.div>

        <div className="space-y-4">
          {privacySections.map((section, index) => {
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
            Privacy Concerns?
          </h3>
          <p className="text-gray-600 mb-4">
            Contact us if you have any questions about our privacy practices.
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

export { privacySections };

export default PrivacyPolicy;