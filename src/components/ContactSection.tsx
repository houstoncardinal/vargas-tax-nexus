import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  Send,
  MessageSquare,
  Shield,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(832) 287-9056",
      subtitle: "Call us during business hours"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@vargastaxservices.com",
      subtitle: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Main Street, Suite 200",
      subtitle: "Downtown Financial District"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 9AM-6PM",
      subtitle: "Sat: 9AM-2PM (Tax Season)"
    }
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
      id="contact" 
      ref={elementRef}
      className="py-24 bg-white overflow-x-hidden"
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
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-medium text-gray-600">Contact Us</span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Get in Touch
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Have questions about your tax situation? We're here to help. 
            Reach out to discuss your needs and learn how we can assist you.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Left Column - Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <div>
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.8 }}
              >
                <MessageSquare className="h-6 w-6 text-primary mr-2" />
                Contact Information
              </motion.h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-primary font-medium mb-1">
                      {info.details}
                    </p>
                    <p className="text-sm text-gray-600">
                      {info.subtitle}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Schedule Appointment CTA */}
            <motion.div 
              className="bg-gray-50 rounded-xl p-8 border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.3 }}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Let's Discuss Your Needs
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Schedule a complimentary consultation to review your tax situation. 
                We'll answer your questions and provide guidance on the best path forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 flex-1">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Schedule Consultation
                  </span>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 flex-1">
                  <span className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </span>
                </Button>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.4 }}
              whileHover={{ y: -2 }}
            >
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                Business Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday (Tax Season)</span>
                  <span className="text-gray-900 font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-900 font-medium">Closed</span>
                </div>
                <div className="pt-2 mt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    * Extended hours available during tax season (January - April)
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            variants={itemVariants}
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 1 }}
          >
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;