import { 
  Calendar, 
  FileText, 
  Calculator, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Shield,
  Send,
  Users,
  Star,
  TrendingUp,
  FileCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ProcessSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const processSteps = [
    {
      step: "01",
      icon: Calendar,
      title: "Initial Consultation",
      description: "Schedule your free 30-minute consultation to discuss your tax situation and goals.",
      details: ["Review previous tax returns", "Identify potential deductions", "Discuss tax strategies", "Answer all your questions"],
      duration: "30 minutes",
      type: "Free",
      image: "/1.jpg",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02", 
      icon: FileText,
      title: "Document Collection",
      description: "We'll provide a comprehensive checklist of documents needed for your tax preparation.",
      details: ["Secure document portal access", "Organized checklist provided", "Photo upload capability", "Real-time progress tracking"],
      duration: "1-3 days",
      type: "Guided",
      image: "/2.jpg",
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "03",
      icon: Calculator,
      title: "Expert Preparation",
      description: "Our certified professionals prepare your returns with meticulous attention to detail.",
      details: ["CPA review and preparation", "Maximum deduction identification", "Error checking & validation", "Compliance verification"],
      duration: "3-5 business days",
      type: "Professional",
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "Review & Filing",
      description: "Final review with you before secure electronic filing and confirmation.",
      details: ["Line-by-line review session", "E-filing with IRS", "Refund tracking setup", "Document storage & backup"],
      duration: "Same day",
      type: "Secure",
      color: "from-orange-500 to-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-medium text-gray-600">Our Process</span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Our Professional Process
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            A streamlined, secure process designed to maximize your refund while ensuring 
            accuracy and compliance. Here's how we work together to optimize your tax situation.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div 
          className="space-y-16 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {processSteps.map((step, index) => (
            <motion.div 
              key={index} 
              className="group"
              variants={itemVariants}
            >
              <div className={`grid lg:grid-cols-12 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Step Number & Icon */}
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start">
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white text-primary text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center border-2 border-primary">
                      {step.step}
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block w-px h-20 bg-gray-300 mt-8" />
                  )}
                </div>

                {/* Content */}
                <div className="lg:col-span-5">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 group-hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {step.duration}
                        </div>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {step.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image or Visual Element */}
                <div className="lg:col-span-5">
                  {step.image ? (
                    <motion.div 
                      className="relative rounded-2xl overflow-hidden shadow-lg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>
                  ) : (
                    <motion.div 
                      className={`relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br ${step.color} h-80 flex items-center justify-center`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-center text-white p-8">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <step.icon className="h-12 w-12 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                        <p className="text-white/90 text-lg leading-relaxed">
                          {step.description}
                        </p>
                        <div className="mt-6 flex justify-center">
                          <div className="bg-white/20 rounded-full px-4 py-2 text-sm font-medium">
                            {step.duration} • {step.type}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </motion.div>
                  )}
                </div>

                {/* Arrow (Desktop only) */}
                <div className="lg:col-span-3 hidden lg:flex justify-center">
                  {index < processSteps.length - 1 ? (
                    <ArrowRight className="h-8 w-8 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                  ) : (
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Send className="h-8 w-8 text-white" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center bg-white rounded-3xl p-12 shadow-sm border border-gray-200"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{ y: -2 }}
        >
          <motion.div 
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.2 }}
          >
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              Ready to Get Started?
            </h3>
          </motion.div>
          
          <motion.p 
            className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.4 }}
          >
            Join thousands of satisfied clients who trust us with their tax preparation. 
            Schedule your free consultation today and discover how much you could save.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Start Free Consultation
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
                  <Users className="h-5 w-5" />
                  Learn About Our Services
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;