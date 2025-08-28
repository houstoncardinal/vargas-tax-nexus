import { motion } from "framer-motion";
import { 
  Shield, 
  Calculator, 
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
  DollarSign,
  AlertTriangle,
  Gavel
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LuxuryContactWidget from "@/components/LuxuryContactWidget";

const TaxResolutionServices = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Shield,
      title: "IRS Representation",
      description: "Professional representation during audits and IRS communications"
    },
    {
      icon: Gavel,
      title: "Audit Defense",
      description: "Comprehensive audit support and documentation preparation"
    },
    {
      icon: Calendar,
      title: "Payment Plans",
      description: "Negotiate installment agreements and payment arrangements"
    },
    {
      icon: TrendingUp,
      title: "Penalty Abatement",
      description: "Reduce or eliminate IRS penalties and interest charges"
    }
  ];

  const resolutionTypes = [
    {
      title: "Installment Agreements",
      description: "Set up manageable monthly payment plans with the IRS",
      features: [
        "Streamlined installment agreements",
        "Partial payment installment agreements",
        "Guaranteed installment agreements",
        "Direct debit payment options"
      ]
    },
    {
      title: "Offer in Compromise",
      description: "Settle tax debt for less than the full amount owed",
      features: [
        "Doubt as to collectibility",
        "Doubt as to liability",
        "Effective tax administration",
        "Lump sum and periodic payment options"
      ]
    },
    {
      title: "Currently Not Collectible",
      description: "Temporarily suspend collection activities due to hardship",
      features: [
        "Financial hardship documentation",
        "Collection suspension",
        "Regular financial reviews",
        "Future collection planning"
      ]
    },
    {
      title: "Penalty Abatement",
      description: "Remove or reduce penalties for reasonable cause",
      features: [
        "First-time penalty abatement",
        "Reasonable cause abatement",
        "Administrative waiver requests",
        "Interest abatement assistance"
      ]
    }
  ];

  const benefits = [
    "95% success rate in resolving IRS issues",
    "Professional representation throughout the process",
    "Stop wage garnishments and bank levies",
    "Reduce or eliminate penalties and interest",
    "Negotiate affordable payment arrangements",
    "Protect your assets and financial future"
  ];

  const situations = [
    "Unfiled tax returns (multiple years)",
    "IRS audit notices and examinations",
    "Wage garnishments and bank levies",
    "Tax liens and collection actions",
    "Penalty and interest accumulation",
    "Inability to pay tax debt in full",
    "Business tax debt and payroll issues",
    "State tax resolution assistance"
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-100 border border-red-200 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Shield className="h-4 w-4 text-red-600" />
              <span className="text-sm font-medium text-red-700">Tax Resolution Services</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Tax Resolution Services
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Expert assistance with IRS issues, audits, and tax debt resolution. 
              Our experienced professionals help you resolve tax problems and get back on track.
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
                  Get Tax Resolution Help
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
              Comprehensive Tax Resolution Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced tax resolution specialists help you navigate complex IRS issues 
              and find the best solution for your unique situation.
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
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Resolution Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tax Resolution Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer multiple resolution options to help you resolve your tax issues 
              and get back on track with the IRS.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {resolutionTypes.map((resolution, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{resolution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{resolution.description}</p>
                
                <div className="space-y-3">
                  {resolution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
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
                Why Choose Our Tax Resolution Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our experienced tax resolution specialists have helped thousands of clients 
                resolve their IRS issues and get back on track financially.
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
                    <CheckCircle className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0" />
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
                Common Tax Resolution Situations
              </h3>
              <div className="space-y-3">
                {situations.map((situation, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{situation}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Tax Resolution Process
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              A proven 4-step process to resolve your tax issues and get you back on track.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Consultation</h3>
                <p className="text-gray-600">Initial assessment of your tax situation and available options</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy Development</h3>
                <p className="text-gray-600">Create a customized resolution plan for your specific situation</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">IRS Negotiation</h3>
                <p className="text-gray-600">Professional representation and negotiation with the IRS</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Resolution & Monitoring</h3>
                <p className="text-gray-600">Implement the solution and monitor compliance going forward</p>
              </div>
            </div>
          </motion.div>
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
              Tax Resolution Investment
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Professional tax resolution services to help you resolve IRS issues.
            </p>

            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white">
              <div className="text-6xl font-bold mb-4">$500+</div>
              <div className="text-xl mb-6">Starting Price for Tax Resolution</div>
              <div className="text-red-100 mb-8">
                Includes IRS representation, negotiation, and resolution services
              </div>
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Free Consultation
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
              Ready to Resolve Your Tax Issues?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and let our experts help you 
              resolve your IRS problems and get back on track.
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

export default TaxResolutionServices; 