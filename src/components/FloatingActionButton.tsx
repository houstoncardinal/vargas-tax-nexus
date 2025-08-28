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

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: Phone,
      label: "Call Us",
      href: "tel:(555) 123-4567",
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
      href: "mailto:info@vargastax.com",
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
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20
      }
    },
    hover: { 
      scale: 1.05,
      rotate: 45,
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
      x: Math.cos(i * 90 * Math.PI / 180) * 80,
      y: Math.sin(i * 90 * Math.PI / 180) * 80,
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

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action Buttons */}
      <AnimatePresence>
        {isOpen && (
          <>
            {actions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                className={`absolute w-12 h-12 ${action.color} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
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
                <action.icon className="h-5 w-5" />
                <span className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {action.label}
                </span>
              </motion.a>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        className="relative w-14 h-14 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
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
              <X className="h-6 w-6" />
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
              <Plus className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingActionButton; 