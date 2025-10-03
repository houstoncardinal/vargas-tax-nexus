import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  FileText, 
  Calendar,
  X,
  ChevronUp,
  ChevronDown,
  Clock,
  MapPin,
  Star,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface LuxuryContactWidgetProps {
  onStartForm?: (formType: string) => void;
}

const LuxuryContactWidget: React.FC<LuxuryContactWidgetProps> = ({ onStartForm }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleContact = (method: string) => {
    switch (method) {
      case 'phone':
        window.location.href = 'tel:(832) 287-9056';
        break;
      case 'email':
        window.location.href = 'mailto:info@vargastaxservices.com';
        break;
      case 'intake':
        onStartForm?.('TaxIntakeForm');
        break;
      case 'organizer':
        onStartForm?.('TaxOrganizerForm');
        break;
      case 'documents':
        onStartForm?.('DocumentCollectionForm');
        break;
      case 'checklist':
        onStartForm?.('TaxPreparationChecklist');
        break;
    }
  };

  const widgetVariants = {
    collapsed: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.3, ease: "easeInOut" as const }
    },
    expanded: {
      scale: 1.05,
      rotate: 0,
      transition: { duration: 0.3, ease: "easeInOut" as const }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2, ease: "easeInOut" as const }
    }
  };

  const popupVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: { duration: 0.2, ease: "easeInOut" as const }
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" as const }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: { duration: 0.2, ease: "easeInOut" as const }
    }
  };

  const optionVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" as const }
    })
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Widget Button */}
      <motion.div
        className="relative"
        variants={widgetVariants}
        animate={isExpanded ? "expanded" : isHovered ? "hover" : "collapsed"}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative w-16 h-16 bg-gradient-to-br from-primary via-primary to-primary/90 rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300 group"
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full animate-pulse" />
          
          {/* Icon */}
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center w-full h-full"
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="expand"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center w-full h-full"
              >
                <MessageSquare className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating notification badge */}
          <motion.div
            className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 500 }}
          >
            <span className="text-xs text-white font-bold">3</span>
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Expanded Popup */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="absolute bottom-20 right-0 w-[90vw] max-w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary/90 p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Professional Service</span>
                </div>
                <h3 className="text-xl font-bold mb-1">How can we assist you?</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Learn more about our tax preparation services
                </p>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="p-6 space-y-4">
              {/* Phone Contact */}
              <motion.div
                custom={0}
                variants={optionVariants}
                initial="hidden"
                animate="visible"
                className="group"
              >
                <button
                  onClick={() => handleContact('phone')}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-green-100/50 hover:from-green-100 hover:to-green-200/50 transition-all duration-300 group-hover:shadow-lg border border-green-200/50"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-gray-900">Call Now</h4>
                    <p className="text-sm text-gray-600">(832) 287-9056</p>
                    <p className="text-xs text-green-600 font-medium">Available Now</p>
                  </div>
                  <ChevronUp className="w-4 h-4 text-gray-400 group-hover:text-green-500 transition-colors" />
                </button>
              </motion.div>

              {/* Email Contact */}
              <motion.div
                custom={1}
                variants={optionVariants}
                initial="hidden"
                animate="visible"
                className="group"
              >
                <button
                  onClick={() => handleContact('email')}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 transition-all duration-300 group-hover:shadow-lg border border-blue-200/50"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-gray-900">Send Email</h4>
                    <p className="text-sm text-gray-600">info@vargastaxservices.com</p>
                    <p className="text-xs text-blue-600 font-medium">24hr Response</p>
                  </div>
                  <ChevronUp className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </button>
              </motion.div>

              {/* Form Options */}
              <div className="space-y-3">
                <motion.div
                  custom={2}
                  variants={optionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Start Your Process
                  </h4>
                </motion.div>

                {/* Tax Intake Form */}
                <motion.div
                  custom={3}
                  variants={optionVariants}
                  initial="hidden"
                  animate="visible"
                  className="group"
                >
                  <button
                    onClick={() => handleContact('intake')}
                    className="w-full flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-purple-100/50 hover:from-purple-100 hover:to-purple-200/50 transition-all duration-300 group-hover:shadow-md border border-purple-200/50"
                  >
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <h5 className="font-medium text-gray-900 text-sm">Tax Intake Form</h5>
                      <p className="text-xs text-gray-600">Complete initial assessment</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">15 min</Badge>
                  </button>
                </motion.div>

                {/* Document Collection */}
                <motion.div
                  custom={4}
                  variants={optionVariants}
                  initial="hidden"
                  animate="visible"
                  className="group"
                >
                  <button
                    onClick={() => handleContact('documents')}
                    className="w-full flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100/50 hover:from-orange-100 hover:to-orange-200/50 transition-all duration-300 group-hover:shadow-md border border-orange-200/50"
                  >
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <h5 className="font-medium text-gray-900 text-sm">Document Collection</h5>
                      <p className="text-xs text-gray-600">Track your documents</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">Self-paced</Badge>
                  </button>
                </motion.div>

                {/* Tax Organizer */}
                <motion.div
                  custom={5}
                  variants={optionVariants}
                  initial="hidden"
                  animate="visible"
                  className="group"
                >
                  <button
                    onClick={() => handleContact('organizer')}
                    className="w-full flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-teal-50 to-teal-100/50 hover:from-teal-100 hover:to-teal-200/50 transition-all duration-300 group-hover:shadow-md border border-teal-200/50"
                  >
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <h5 className="font-medium text-gray-900 text-sm">Tax Organizer</h5>
                      <p className="text-xs text-gray-600">Organize your finances</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">30 min</Badge>
                  </button>
                </motion.div>
              </div>

              {/* Footer Info */}
              <motion.div
                custom={6}
                variants={optionVariants}
                initial="hidden"
                animate="visible"
                className="pt-4 border-t border-gray-100"
              >
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    <span>Mon-Fri: 9AM-6PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    <span>Houston, TX</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LuxuryContactWidget; 