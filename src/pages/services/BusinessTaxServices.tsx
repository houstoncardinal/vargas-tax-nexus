import { motion } from "framer-motion";
import { 
  Building2, 
  Calculator, 
  Shield, 
  CheckCircle, 
  Users, 
  Star,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  TrendingUp,
  Award,
  Clock,
  Zap,
  FileText,
  DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LuxuryContactWidget from "@/components/LuxuryContactWidget";

const BusinessTaxServices = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Building2,
      title: "Corporate Tax Returns",
      description: "Complete preparation of C-Corp and S-Corp tax returns with strategic planning"
    },
    {
      icon: FileText,
      title: "Partnership Filings",
      description: "LLC, partnership, and multi-member entity tax preparation and filing"
    },
    {
      icon: Calculator,
      title: "Quarterly Estimates",
      description: "Accurate quarterly tax payment calculations and filing assistance"
    },
    {
      icon: TrendingUp,
      title: "Business Deductions",
      description: "Maximize business deductions and identify all eligible tax savings"
    }
  ];

  const entityTypes = [
    {
      type: "C-Corporations",
      description: "Form 1120 preparation with strategic tax planning",
      features: ["Corporate tax optimization", "Dividend planning", "Retained earnings management"]
    },
    {
      type: "S-Corporations", 
      description: "Form 1120S preparation with shareholder basis tracking",
      features: ["Pass-through taxation", "Shareholder basis calculations", "Reasonable compensation planning"]
    },
    {
      type: "LLCs",
      description: "Flexible entity taxation based on member elections",
      features: ["Single-member vs multi-member", "Partnership vs corporate election", "Self-employment tax planning"]
    },
    {
      type: "Partnerships",
      description: "Form 1065 preparation with partner allocations",
      features: ["Partner basis tracking", "Profit/loss allocations", "K-1 preparation"]
    }
  ];

  const benefits = [
    "Strategic tax planning to minimize business tax liability",
    "Expert knowledge of business deductions and credits",
    "Quarterly estimated tax payment planning",
    "Business structure optimization advice",
    "Audit protection and IRS representation",
    "Year-round business tax consulting"
  ];

  const documents = [
    "Financial statements (P&L, Balance Sheet)",
    "General ledger and trial balance",
    "Bank statements and reconciliation",
    "Asset purchase and depreciation records",
    "Employee payroll records and W-2s",
    "1099 forms for contractors",
    "Business expense receipts and invoices",
    "Vehicle and travel expense records",
    "Home office documentation (if applicable)",
    "Previous year's business tax returns"
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-100 border border-purple-200 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Building2 className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Business Tax Services</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Business Tax Services
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Comprehensive business tax preparation for corporations, partnerships, and LLCs. 
              Our experts help maximize deductions and minimize tax liability for your business.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span className="flex items-center gap-2">
                  Get Business Tax Quote
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg"
                onClick={() => window.location.href = 'tel:(832) 287-9056'}
              >
                <span className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (832) 287-9056
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Business Tax Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From small businesses to large corporations, we provide expert tax preparation 
              and strategic planning to optimize your business tax position.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Entity Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Business Entity Types We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert tax preparation for all business structures with specialized knowledge 
              of each entity type's unique tax requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {entityTypes.map((entity, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{entity.type}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{entity.description}</p>
                
                <div className="space-y-3">
                  {entity.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Business Tax Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our certified business tax professionals understand the complexities of business 
                taxation and help you navigate the ever-changing tax landscape.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-6 w-6 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Documents We'll Need
              </h3>
              <div className="space-y-3">
                {documents.map((document, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{document}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Competitive Business Tax Pricing
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Transparent pricing based on your business complexity and entity type.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">LLC/Partnership</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$350+</div>
                <p className="text-gray-600 mb-6">Starting price for basic partnership returns</p>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li>• Form 1065 preparation</li>
                  <li>• K-1 generation</li>
                  <li>• Basic tax planning</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-2xl shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-4">S-Corporation</h3>
                <div className="text-4xl font-bold mb-4">$450+</div>
                <p className="mb-6">Comprehensive S-Corp tax preparation</p>
                <ul className="text-left space-y-2 text-sm">
                  <li>• Form 1120S preparation</li>
                  <li>• Shareholder basis tracking</li>
                  <li>• Strategic tax planning</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">C-Corporation</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$550+</div>
                <p className="text-gray-600 mb-6">Advanced corporate tax services</p>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li>• Form 1120 preparation</li>
                  <li>• Corporate tax strategy</li>
                  <li>• Audit protection included</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Custom Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Optimize Your Business Taxes?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free business tax consultation and let our experts 
              help you minimize your tax liability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg"
                onClick={() => window.location.href = 'tel:(832) 287-9056'}
              >
                <span className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (832) 287-9056
                </span>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
                onClick={() => window.location.href = 'mailto:info@vargastaxservices.com'}
              >
                <span className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Send Email
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <LuxuryContactWidget onStartForm={(formType) => {
        const processSection = document.getElementById('process-section');
        if (processSection) {
          processSection.scrollIntoView({ behavior: 'smooth' });
        }
      }} />
    </>
  );
};

export default BusinessTaxServices; 