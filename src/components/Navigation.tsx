import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, FileText, Building2, Calculator, Shield, Clock, TrendingUp, Users, ArrowRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services", hasMegaMenu: true },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const servicesData = [
    {
      category: "Individual Services",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
      services: [
        { name: "Personal Tax Returns", description: "Complete 1040 preparation" },
        { name: "Itemized Deductions", description: "Maximize your deductions" },
        { name: "Tax Credits", description: "Child, education & more" }
      ]
    },
    {
      category: "Business Services",
      icon: Building2,
      color: "from-purple-500 to-pink-500",
      services: [
                            { name: "Business Tax Services", description: "C-Corp & S-Corp filing" },
        { name: "Partnership Filings", description: "LLC & partnership returns" },
        { name: "Quarterly Estimates", description: "Business tax planning" }
      ]
    },
    {
      category: "Specialized Services",
      icon: Calculator,
      color: "from-green-500 to-emerald-500",
      services: [
        { name: "Tax Planning & Strategy", description: "Year-round strategy" },
        { name: "Investment Taxes", description: "Capital gains & losses" },
        { name: "Retirement Planning", description: "IRA & 401(k) optimization" }
      ]
    },
    {
      category: "Resolution Services",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      services: [
        { name: "Tax Resolution Services", description: "Audit defense & support" },
        { name: "Payment Plans", description: "Installment agreements" },
        { name: "Penalty Abatement", description: "Reduce IRS penalties" }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
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

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring" as const,
        stiffness: 100
      }
    })
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      height: "auto",
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.h1 
              className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-2"
              whileHover={{ 
                color: "#1f2937",
                transition: { duration: 0.3 }
              }}
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              Vargas Tax
            </motion.h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link, i) => (
                <div key={link.label} className="relative">
                  <motion.a
                    href={link.href}
                    custom={i}
                    variants={linkVariants}
                    className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium relative group cursor-pointer"
                    whileHover={{ 
                      y: -1,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => link.hasMegaMenu && setServicesHovered(true)}
                    onMouseLeave={() => link.hasMegaMenu && setServicesHovered(false)}
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      {link.label}
                      {link.hasMegaMenu && (
                        <motion.div
                          animate={{ rotate: servicesHovered ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="h-3 w-3" />
                        </motion.div>
                      )}
                    </span>
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>

                  {/* Mega Menu */}
                  {link.hasMegaMenu && (
                    <AnimatePresence>
                      {servicesHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                          onMouseEnter={() => setServicesHovered(true)}
                          onMouseLeave={() => setServicesHovered(false)}
                        >
                          {/* Header */}
                          <div className="bg-gradient-to-r from-primary to-primary/90 p-4 text-white">
                            <div className="text-center">
                              <h3 className="text-lg font-bold">Our Services</h3>
                              <p className="text-primary-foreground/80 text-sm">
                                Professional tax preparation for individuals and businesses
                              </p>
                            </div>
                          </div>

                          {/* Services Grid */}
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-6">
                              {servicesData.map((category, index) => (
                                <motion.div
                                  key={category.category}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="group"
                                >
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                      <category.icon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-gray-900 text-sm">{category.category}</h4>
                                    </div>
                                  </div>
                                  
                                  <div className="space-y-3">
                                    {category.services.map((service, serviceIndex) => (
                                                                             <motion.div
                                         key={service.name}
                                         initial={{ opacity: 0, y: 10 }}
                                         animate={{ opacity: 1, y: 0 }}
                                         transition={{ delay: (index * 0.1) + (serviceIndex * 0.05) }}
                                         className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
                                         onClick={() => {
                                           // Navigate to specific service page based on service name
                                           const serviceRoutes = {
                                             'Personal Tax Returns': '/services/individual-tax-returns',
                                             'Business Tax Services': '/services/business-tax-services',
                                             'Tax Planning & Strategy': '/services/tax-planning-strategy',
                                             'Tax Resolution Services': '/services/tax-resolution-services'
                                           };
                                           
                                           const route = serviceRoutes[service.name as keyof typeof serviceRoutes];
                                           if (route) {
                                             window.location.href = route;
                                           } else {
                                             const contactSection = document.getElementById('contact');
                                             if (contactSection) {
                                               contactSection.scrollIntoView({ behavior: 'smooth' });
                                             }
                                           }
                                         }}
                                       >
                                         <div className="flex-1">
                                           <h5 className="font-medium text-gray-900 text-sm group-hover:text-primary transition-colors">
                                             {service.name}
                                           </h5>
                                           <p className="text-gray-500 text-xs">{service.description}</p>
                                         </div>
                                         <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                                       </motion.div>
                                    ))}
                                  </div>
                                </motion.div>
                              ))}
                            </div>

                            {/* Bottom CTA */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                              className="mt-4 pt-4 border-t border-gray-100"
                            >
                              <div className="text-center space-y-3">
                                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span className="font-medium">Filing fees start as low as</span>
                                  <span className="text-lg font-bold text-primary">$295</span>
                                  <span className="text-xs text-gray-500">for first-time filers</span>
                                </div>
                                <Button
                                  size="sm"
                                  className="bg-primary hover:bg-primary/90"
                                  onClick={() => {
                                    const processSection = document.getElementById('process-section');
                                    if (processSection) {
                                      processSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                  }}
                                >
                                  Get Started
                                </Button>
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.div 
              className="flex items-center space-x-6 text-sm text-gray-600"
              variants={linkVariants}
              custom={3}
            >
              <motion.div 
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <Phone className="h-4 w-4 text-primary" />
                <span className="font-medium">(832) 287-9056</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <Mail className="h-4 w-4 text-primary" />
                <span className="font-medium">info@vargastaxservices.com</span>
              </motion.div>
            </motion.div>
            <motion.div
              variants={linkVariants}
              custom={4}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="default" 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white font-semibold"
              >
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
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
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="bg-white border-t border-gray-200 rounded-b-lg p-4 space-y-3 shadow-lg">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-300 font-medium rounded-lg"
                    onClick={() => setIsOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div 
                  className="px-3 py-3 border-t border-gray-200 mt-3 space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-sm text-gray-600 space-y-1">
                    <motion.div 
                      className="flex items-center space-x-3 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => window.location.href = 'tel:(832) 287-9056'}
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      <span>(832) 287-9056</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => window.location.href = 'mailto:info@vargastaxservices.com'}
                    >
                      <Mail className="h-4 w-4 text-primary" />
                      <span>info@vargastaxservices.com</span>
                    </motion.div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => {
                        const processSection = document.getElementById('process-section');
                        if (processSection) {
                          processSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;