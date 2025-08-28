import { motion } from "framer-motion";
import { FileText, Calculator, Shield, CheckCircle } from "lucide-react";

const LoadingScreen = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        delay: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 2.5,
        ease: "easeInOut" as const,
        delay: 0.8
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        delay: 1.2 + i * 0.2
      }
    })
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.3, 0.6, 0.3]
    }
  };

  const icons = [
    { Icon: FileText, color: "text-blue-500" },
    { Icon: Calculator, color: "text-green-500" },
    { Icon: Shield, color: "text-purple-500" },
    { Icon: CheckCircle, color: "text-orange-500" }
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='https://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo */}
        <motion.div
          className="mb-8"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            <motion.div
              className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg mx-auto"
              animate={{
                boxShadow: [
                  "0 10px 25px rgba(59, 130, 246, 0.15)",
                  "0 20px 40px rgba(59, 130, 246, 0.25)",
                  "0 10px 25px rgba(59, 130, 246, 0.15)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" as const
              }}
            >
              <FileText className="h-10 w-10 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
            animate={{
              opacity: [0.9, 1, 0.9]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut" as const
            }}
          >
            Vargas Tax Services
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 mb-8 font-medium"
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut" as const
            }}
          >
            Professional Tax Preparation
          </motion.p>
        </motion.div>

        {/* Service Icons */}
        <motion.div 
          className="flex justify-center space-x-6 mb-8"
          initial="hidden"
          animate="visible"
        >
          {icons.map(({ Icon, color }, index) => (
            <motion.div
              key={index}
              className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border border-gray-100 ${color}`}
              custom={index}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
            >
              <Icon className="h-6 w-6" />
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden mx-auto mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full relative"
            variants={progressVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ["-100%", "100%"]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut" as const
              }}
            />
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="text-gray-500 text-sm font-medium"
          animate={{
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        >
          Loading your tax preparation experience...
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="mt-8 text-xs text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <p>Call us: (832) 287-9056</p>
          <p>Houston, Texas</p>
        </motion.div>

        {/* Subtle Pulse Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-gray-200 rounded-full"
              style={{
                width: `${300 + i * 100}px`,
                height: `${300 + i * 100}px`
              }}
              variants={pulseVariants}
              animate="animate"
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut" as const,
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 