import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Calendar,
  X,
  Plus
} from "lucide-react";
import React from "react";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: Phone,
      label: "Call Us",
      href: "tel:(832) 287-9056",
      color: "bg-green-500 hover:bg-green-600",
      delay: 0.1
    },
    {
      icon: MessageCircle,
      label: "Live Chat",
      href: "#chat",
      color: "bg-blue-500 hover:bg-blue-600",
      delay: 0.2
    },
    {
      icon: Mail,
      label: "Email Us",
      href: "mailto:info@vargastaxservices.com",
      color: "bg-purple-500 hover:bg-purple-600",
      delay: 0.3
    },
    {
      icon: Calendar,
      label: "Schedule",
      href: "#schedule",
      color: "bg-orange-500 hover:bg-orange-600",
      delay: 0.4
    }
  ];

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20
      }
    },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    }
  };

  const actionVariants = {
    hidden: { 
      scale: 0, 
      opacity: 0,
      x: 0,
      y: 0
    },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      x: Math.cos(i * 90 * Math.PI / 180) * 70,
      y: Math.sin(i * 90 * Math.PI / 180) * 70,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        delay: i * 0.1
      }
    }),
    exit: {
      scale: 0,
      opacity: 0,
      x: 0,
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  // Only show on larger screens and after user interaction
  const [hasInteracted, setHasInteracted] = useState(false);

  // Show after 5 seconds of page load
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setHasInteracted(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!hasInteracted) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
      {/* Action Buttons */}
      <AnimatePresence>
        {isOpen && (
          <>
            {actions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                className={`absolute w-10 h-10 ${action.color} rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer`}
                custom={index}
                variants={actionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <action.icon className="h-4 w-4" />
                <span className="absolute right-full mr-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {action.label}
                </span>
              </motion.a>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        className="relative w-12 h-12 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <X className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <Plus className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingActionButton; 