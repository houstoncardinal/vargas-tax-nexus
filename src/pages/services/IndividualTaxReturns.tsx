import { motion } from "framer-motion";
import { 
  FileText, 
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
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LuxuryContactWidget from "@/components/LuxuryContactWidget";

const IndividualTaxReturns = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: Calculator,
      title: "Complete 1040 Preparation",
      description: "Professional preparation of all Form 1040 variations including 1040, 1040A, and 1040EZ"
    },
    {
      icon: Shield,
      title: "Maximum Deductions",
      description: "Expert identification of all eligible deductions to minimize your tax liability"
    },
    {
      icon: TrendingUp,
      title: "Tax Credit Optimization",
      description: "Maximize refunds through child tax credits, earned income credits, and education credits"
    },
    {
      icon: Zap,
      title: "Electronic Filing",
      description: "Fast, secure e-filing for quicker refunds and IRS confirmation"
    }
  ];

  const documents = [
    "W-2 forms from all employers",
    "1099 forms (interest, dividends, etc.)",
    "Social Security cards for all family members",
    "Previous year's tax return",
    "Receipts for itemized deductions",
    "Mortgage interest statements (Form 1098)",
    "Property tax receipts",
    "Charitable donation receipts",
    "Medical expense receipts",
    "Education expense records"
  ];

  const benefits = [
    "Average 27% increase in refunds compared to DIY filing",
    "100% accuracy guarantee with audit protection",
    "Professional representation in case of IRS inquiries",
    "Year-round support and tax planning advice",
    "Secure document handling and storage",
    "Fast turnaround time (3-5 business days)"
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <FileText className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Individual Tax Services</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Individual Tax Returns
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Professional preparation of personal income tax returns with maximum deductions, 
              credits, and refunds. Our certified tax professionals ensure accuracy and compliance. 
              <span className="font-semibold text-primary">We serve individuals nationwide with virtual consultations - super easy!</span>
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
                  Get Started Today
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Individual Tax Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified tax professionals combine expertise with personalized service 
              to ensure you receive the maximum refund possible. <span className="font-semibold text-primary">Available nationwide with convenient virtual consultations!</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Consultations Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Virtual Consultations - Super Easy!
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We serve individuals nationwide with convenient virtual consultations. 
                No matter where you are in the United States, we can help you with your tax preparation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Video consultations from anywhere in the US</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Secure document sharing and uploads</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Same professional service, no travel required</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Flexible scheduling to fit your schedule</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nationwide Service</h3>
              <p className="text-gray-600 mb-6">
                From California to New York, Texas to Alaska, we serve clients across all 50 states with the same 
                professional expertise and personalized service.
              </p>
              <Button 
                size="lg"
                className="bg-blue-500 hover:bg-blue-600"
                onClick={() => window.location.href = 'tel:(832) 287-9056'}
              >
                <span className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Schedule Virtual Consultation
                </span>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Include Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What's Included in Your Tax Return
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our comprehensive individual tax return service includes everything you need 
                for a complete, accurate, and optimized tax filing. <span className="font-semibold text-primary">Virtual consultations make it easy to work with us from anywhere in the US!</span>
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
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Documents You'll Need
              </h3>
              <div className="space-y-3">
                {documents.map((document, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{document}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Professional tax preparation at competitive rates with no hidden fees.
            </p>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
              <div className="text-6xl font-bold mb-4">$295</div>
              <div className="text-xl mb-6">Starting Price for First-Time Filers</div>
              <div className="text-blue-100 mb-8">
                Includes complete 1040 preparation, e-filing, and audit protection
              </div>
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Your Free Quote
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
              Ready to Maximize Your Tax Refund?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and let our experts handle your tax preparation. 
              <span className="font-semibold">Virtual consultations available nationwide - super easy and convenient!</span>
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

export default IndividualTaxReturns; 