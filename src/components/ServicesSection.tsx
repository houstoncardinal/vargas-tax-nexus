import { 
  FileText, 
  Building2, 
  Calculator, 
  Shield, 
  Clock, 
  TrendingUp,
  Users,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Star,
  Crown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Individual Tax Returns",
      description: "Complete preparation of personal income tax returns with maximum deductions and credits.",
      features: ["Form 1040 Preparation", "Itemized Deductions", "Tax Credits Optimization", "E-filing Included"],
      gradient: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: Building2,
      title: "Business Tax Services",
      description: "Comprehensive business tax solutions for LLCs, corporations, and partnerships.",
      features: ["Corporate Returns", "Partnership Filings", "Quarterly Estimates", "Business Deductions"],
      gradient: "from-purple-500 to-pink-500",
      delay: 0.1
    },
    {
      icon: Calculator,
      title: "Tax Planning & Strategy",
      description: "Year-round tax planning to minimize liability and maximize savings.",
      features: ["Strategic Planning", "Investment Advice", "Retirement Planning", "Estate Planning"],
      gradient: "from-green-500 to-emerald-500",
      delay: 0.2
    },
    {
      icon: Shield,
      title: "Tax Resolution Services",
      description: "Expert assistance with IRS issues, audits, and tax debt resolution.",
      features: ["IRS Representation", "Audit Defense", "Payment Plans", "Penalty Abatement"],
      gradient: "from-red-500 to-orange-500",
      delay: 0.3
    },
    {
      icon: Clock,
      title: "Bookkeeping Services",
      description: "Professional bookkeeping to keep your finances organized year-round.",
      features: ["Monthly Reconciliation", "Financial Statements", "Payroll Services", "QuickBooks Setup"],
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.4
    },
    {
      icon: TrendingUp,
      title: "Financial Consulting",
      description: "Strategic financial advice to help grow your business and personal wealth.",
      features: ["Cash Flow Analysis", "Business Consulting", "Financial Projections", "Growth Strategies"],
      gradient: "from-yellow-500 to-orange-500",
      delay: 0.5
    }
  ];

  const { elementRef, isVisible, animatedItems } = useStaggeredAnimation(services, 150);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20
      }
    }
  };

  const iconVariants = {
    hidden: { rotate: -180, scale: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <section 
      id="services" 
      ref={elementRef}
      className="py-24 elite-section relative overflow-x-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 elite-pattern-dots opacity-5" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-cosmic rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-aurora rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 elite-glass px-6 py-3 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: 0.3, type: "spring" as const }}
          >
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">Comprehensive Services</span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 elite-gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Our Professional Services
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Comprehensive tax and financial services designed to meet your unique needs. 
            From individual returns to complex business strategies, we've got you covered.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group elite-card rounded-2xl p-8 relative overflow-hidden elite-hover-lift"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 elite-shimmer" />
              
              {/* Icon */}
              <motion.div 
                className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-elite group-hover:shadow-royal transition-all duration-300 relative z-10`}
                variants={iconVariants}
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.6 }
                }}
              >
                <service.icon className="h-10 w-10 text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <motion.h3 
                  className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={animatedItems[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={animatedItems[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 }}
                >
                  {service.description}
                </motion.p>

                {/* Features List */}
                <motion.ul 
                  className="space-y-3 mb-8"
                  initial={{ opacity: 0 }}
                  animate={animatedItems[index] ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={animatedItems[index] ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                    >
                      <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={animatedItems[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 relative overflow-hidden"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center elite-glass rounded-3xl p-12 shadow-royal border border-white/20 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 elite-shimmer" />
          
          <div className="relative z-10">
            <motion.div 
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mr-4 shadow-elite">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground elite-gradient-text">
                Questions About Our Services?
              </h3>
            </motion.div>
            
            <motion.p 
              className="text-muted-foreground mb-8 max-w-3xl mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.4 }}
            >
              Connect with our certified tax professionals to discuss your needs. 
              We're here to answer your questions and help you understand your options.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="elite-button px-8 py-4 text-lg"
                  onClick={() => {
                    const processSection = document.getElementById('process-section');
                    if (processSection) {
                      processSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Contact Us
                  </span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="elite-glass px-8 py-4 text-lg border-white/30 text-foreground hover:bg-white/10"
                  onClick={() => window.location.href = 'tel:(832) 287-9056'}
                >
                  <span className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    Call (832) 287-9056
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;