import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { 
  FileText, 
  Calculator, 
  CheckCircle, 
  TrendingUp,
  FileCheck,
  Users,
  Calendar,
  Shield
} from "lucide-react";
import DocumentCollectionForm from "./DocumentCollectionForm";
import TaxPreparationChecklist from "./TaxPreparationChecklist";
import { useState } from "react";

const ProcessSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const processSteps = [
    {
      id: 1,
      title: "Initial Consultation",
      description: "Schedule a free consultation to discuss your tax situation and needs.",
      details: ["Free 30-minute consultation", "Tax situation assessment", "Service recommendations", "Pricing discussion"],
      duration: "30 minutes",
      type: "Consultation",
      color: "from-blue-500 to-blue-600",
      icon: Users,
      form: "DocumentCollectionForm"
    },
    {
      id: 2,
      title: "Document Collection",
      description: "Use our comprehensive document collection system to gather all necessary tax documents.",
      details: ["Interactive document checklist", "Progress tracking", "Document organization", "Missing document alerts"],
      duration: "Self-paced",
      type: "Preparation",
      color: "from-green-500 to-green-600",
      icon: FileText,
      form: "DocumentCollectionForm"
    },
    {
      id: 3,
      title: "Tax Preparation",
      description: "Our certified professionals prepare your returns with meticulous attention to detail.",
      details: ["Professional review and preparation", "Maximum deduction identification", "Error checking & validation", "Compliance verification"],
      duration: "3-5 business days",
      type: "Professional",
      color: "from-purple-500 to-purple-600",
      icon: Calculator,
      form: "TaxPreparationChecklist"
    },
    {
      id: 4,
      title: "Review & Filing",
      description: "We review your completed return with you and file it electronically for faster refunds.",
      details: ["Return review meeting", "Electronic filing", "Refund tracking", "Audit protection"],
      duration: "1-2 business days",
      type: "Final",
      color: "from-orange-500 to-orange-600",
      icon: CheckCircle,
      form: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const [selectedForm, setSelectedForm] = useState<string | null>(null);

  const renderForm = (formType: string | null) => {
    switch (formType) {
      case "DocumentCollectionForm":
        return <DocumentCollectionForm />;
      case "TaxPreparationChecklist":
        return <TaxPreparationChecklist />;
      default:
        return null;
    }
  };

  return (
    <section ref={elementRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Tax Preparation Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've streamlined our process to make tax preparation simple, efficient, and stress-free. 
            From initial consultation to final filing, we guide you through every step.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className={`flex flex-col lg:flex-row gap-8 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mr-4`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Step {step.id}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>

                <div className="space-y-3 mb-6">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {step.duration}
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 mr-1" />
                      {step.type}
                    </div>
                  </div>
                  
                  {step.form && (
                    <button
                      onClick={() => setSelectedForm(selectedForm === step.form ? null : step.form)}
                      className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                    >
                      {selectedForm === step.form ? 'Hide Form' : 'Start Process'}
                    </button>
                  )}
                </div>
              </div>

              {/* Visual Element */}
              <div className="lg:w-80 lg:flex-shrink-0">
                <div className={`w-full h-64 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                  <step.icon className="h-16 w-16 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Forms */}
        {selectedForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {renderForm(selectedForm)}
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center bg-white rounded-2xl p-12 shadow-sm border border-gray-200"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Begin your tax preparation journey today. Our family-owned business is here to help you 
            maximize your refund and ensure your taxes are prepared accurately and on time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Schedule Free Consultation
            </a>
            <a
              href="tel:(832) 287-9056"
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Call (832) 287-9056
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;