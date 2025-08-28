import { motion } from "framer-motion";
import { Crown, Sparkles, Star } from "lucide-react";

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
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
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
        duration: 2,
        ease: "easeInOut" as const,
        delay: 0.8
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      rotate: [0, 180, 360]
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.7, 0.3]
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <motion.div
          className="mb-8"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-premium-gold to-premium-silver rounded-3xl flex items-center justify-center shadow-royal mx-auto"
              animate={{
                boxShadow: [
                  "0 0 30px rgba(255, 215, 0, 0.3)",
                  "0 0 60px rgba(255, 215, 0, 0.6)",
                  "0 0 30px rgba(255, 215, 0, 0.3)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" as const
              }}
            >
              <Crown className="h-12 w-12 text-white" />
            </motion.div>
            
            {/* Sparkles */}
            <motion.div
              className="absolute -top-2 -right-2"
              variants={sparkleVariants}
              animate="animate"
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut" as const
              }}
            >
              <Sparkles className="h-6 w-6 text-premium-gold" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-2 -left-2"
              variants={sparkleVariants}
              animate="animate"
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut" as const,
                delay: 0.5
              }}
            >
              <Star className="h-5 w-5 text-premium-diamond" />
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
            className="text-4xl md:text-6xl font-bold text-white mb-4 elite-gradient-text"
            animate={{
              textShadow: [
                "0 0 10px rgba(255, 255, 255, 0.5)",
                "0 0 20px rgba(255, 255, 255, 0.8)",
                "0 0 10px rgba(255, 255, 255, 0.5)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut" as const
            }}
          >
            Vargas Tax
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white/80 mb-8"
            animate={{
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut" as const
            }}
          >
            Elite Tax Preparation Services
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-premium-gold to-premium-silver rounded-full relative"
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
          className="text-white/60 text-sm"
          animate={{
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        >
          Loading Elite Experience...
        </motion.div>

        {/* Pulse Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-2 border-white/20 rounded-full"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`
              }}
              variants={pulseVariants}
              animate="animate"
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" as const,
                delay: i * 0.3
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 