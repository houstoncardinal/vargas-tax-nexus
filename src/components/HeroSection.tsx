import { Calculator, Shield, TrendingUp, Users, ArrowRight, CheckCircle, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HeroSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: Calculator,
      text: "Expert Tax Calculations",
      description: "Precise calculations with maximum deductions"
    },
    {
      icon: Shield,
      text: "100% Secure & Confidential",
      description: "Bank-level security for your data"
    },
    {
      icon: TrendingUp,
      text: "Maximize Your Refund",
      description: "Average 27% increase in refunds"
    },
    {
      icon: Users,
      text: "Personalized Service",
      description: "Dedicated tax professional assigned"
    }
  ];

  const stats = [
    { label: "Years of Excellence", value: "25+", icon: Star },
    { label: "Satisfied Clients", value: "10,000+", icon: Users },
    { label: "Average Refund Increase", value: "27%", icon: TrendingUp },
    { label: "Success Rate", value: "99.8%", icon: CheckCircle }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section 
      ref={elementRef}
      className="relative min-h-screen bg-white flex items-center justify-center pt-20"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='https://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Subtle Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Left Column - Main Content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={itemVariants}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-sm font-medium text-gray-600">Established 1998</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              variants={itemVariants}
            >
              Professional
              <span className="block text-primary">Tax Preparation</span>
              <span className="block text-gray-600 text-4xl md:text-5xl lg:text-6xl font-light">Services</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              Trusted by thousands of individuals and businesses for expert tax preparation. 
              Our certified professionals ensure accuracy, compliance, and maximum refunds.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span className="flex items-center gap-2">
                    Schedule Consultation
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    (832) 287-9056
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Features Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={itemVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">
                        {feature.text}
                      </h3>
                      <p className="text-gray-500 text-xs">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Card */}
          <motion.div 
            className="lg:justify-self-end"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -2 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Why Choose Vargas Tax?
              </motion.h3>
              
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center justify-between group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <stat.icon className="h-4 w-4 text-gray-600 group-hover:text-primary transition-colors" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">{stat.label}</span>
                    </div>
                    <span className="text-2xl font-bold text-primary">
                      {stat.value}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
              >
                <motion.p 
                  className="text-gray-700 text-center font-medium mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 }}
                >
                  "Professional, reliable, and got me the biggest refund ever!"
                </motion.p>
                <motion.p 
                  className="text-gray-500 text-center text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.9 }}
                >
                  — Satisfied Client, Houston
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;