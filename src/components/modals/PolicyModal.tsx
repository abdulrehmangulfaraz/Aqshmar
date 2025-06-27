// src/components/modals/PolicyModal.tsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown, Mail } from "lucide-react";

interface PolicyModalProps {
  title: string;
  lastUpdated: string;
  introText: string;
  sections: Array<{
    title: string;
    icon: React.ReactNode;
    content: React.ReactNode;
  }>;
  onClose: () => void;
}

export const PolicyModal = ({
  title,
  lastUpdated,
  introText,
  sections,
  onClose,
}: PolicyModalProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal container */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>

          {/* Modal content */}
          <div className="p-6 md:p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-maroon-900 mb-2">
                {title}
              </h2>
              <div className="w-20 h-0.5 bg-maroon-400 mx-auto mb-3" />
              <p className="text-sm text-gray-500">{lastUpdated}</p>
              {introText && (
                <p className="text-gray-600 mt-4 text-sm md:text-base">
                  {introText}
                </p>
              )}
            </div>

            <div className="space-y-3">
              {sections.map((section, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-maroon-600">
                          {section.icon}
                        </div>
                        <span className="font-medium text-maroon-800">
                          {section.title}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-maroon-600 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 pl-11 text-gray-700 text-sm">
                            {section.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-gray-600 mb-3">
                Need further assistance?
              </p>
              <a
                href="mailto:aqshmar.pk@gmail.com"
                className="inline-flex items-center px-4 py-2 bg-maroon-600 hover:bg-maroon-700 text-white rounded-lg text-sm transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};