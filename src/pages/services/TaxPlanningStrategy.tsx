import { motion } from "framer-motion";
import { 
  Calculator, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  Users, 
  Star,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Award,
  Clock,
  Zap,
  FileText,
  DollarSign,
  Target,
  PieChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LuxuryContactWidget from "@/components/LuxuryContactWidget";

const TaxPlanningStrategy = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Target,
      title: "Strategic Tax Planning",
      description: "Year-round tax strategy to minimize liability and maximize savings"
    },
    {
      icon: TrendingUp,
      title: "Investment Tax Planning",
      description: "Optimize investment decisions for tax efficiency and growth"
    },
    {
      icon: Calendar,
      title: "Retirement Planning",
      description: "Tax-advantaged retirement strategies and IRA optimization"
    },
    {
      icon: PieChart,
      title: "Estate Planning",
      description: "Estate tax planning and wealth transfer strategies"
    }
  ];

  const planningAreas = [
    {
      title: "Business Tax Planning",
      description: "Strategic planning for business owners and entrepreneurs",
      strategies: [
        "Entity structure optimization",
        "Business expense timing",
        "Equipment purchase planning",
        "Employee benefit strategies"
      ]
    },
    {
      title: "Investment Tax Planning",
      description: "Tax-efficient investment strategies and portfolio management",
      strategies: [
        "Capital gains optimization",
        "Tax-loss harvesting",
        "Dividend tax planning",
        "Alternative minimum tax planning"
      ]
    },
    {
      title: "Retirement Tax Planning",
      description: "Maximize retirement savings with tax-advantaged strategies",
      strategies: [
        "401(k) and IRA optimization",
        "Roth conversion strategies",
        "Required minimum distribution planning",
        "Social Security optimization"
      ]
    },
    {
      title: "Estate Tax Planning",
      description: "Preserve wealth for future generations through smart planning",
      strategies: [
        "Gift tax planning",
        "Trust strategies",
        "Charitable giving optimization",
        "Life insurance planning"
      ]
    }
  ];

  const benefits = [
    "Reduce tax liability by 15-30% through strategic planning",
    "Year-round tax optimization, not just during tax season",
    "Proactive strategies to avoid tax surprises",
    "Investment and retirement planning integration",
    "Regular tax law updates and strategy adjustments",
    "Comprehensive financial planning coordination"
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-100 border border-green-200 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Calculator className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Tax Planning & Strategy</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Tax Planning & Strategy
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Proactive tax planning to minimize your tax liability and maximize your wealth. 
              Our strategic approach helps you make informed financial decisions year-round. 
              <span className="font-semibold text-primary">We serve clients nationwide with virtual consultations - super easy!</span>
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
                  Start Tax Planning
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
              Comprehensive Tax Planning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic tax planning services help you make informed decisions 
              throughout the year to optimize your tax position and financial future. <span className="font-semibold text-primary">Available nationwide with convenient virtual consultations!</span>
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
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Virtual Consultations Section */}
      <section className="py-20 bg-green-50">
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
                We serve clients nationwide with convenient virtual consultations. 
                No matter where you are in the United States, we can help you optimize your tax strategy.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Video consultations from anywhere in the US</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Secure financial document sharing and uploads</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Same strategic expertise, no travel required</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Flexible scheduling for ongoing planning</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nationwide Tax Planning</h3>
              <p className="text-gray-600 mb-6">
                From high-net-worth individuals in California to business owners in Florida, we serve clients across all 50 states 
                with the same strategic tax planning expertise and personalized service.
              </p>
              <Button 
                size="lg"
                className="bg-green-500 hover:bg-green-600"
                onClick={() => window.location.href = 'tel:(832) 287-9056'}
              >
                <span className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Schedule Planning Consultation
                </span>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Planning Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tax Planning Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive tax planning covers all aspects of your financial life 
              to ensure maximum tax efficiency and wealth preservation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {planningAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                
                <div className="space-y-3">
                  {area.strategies.map((strategy, strategyIndex) => (
                    <div key={strategyIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{strategy}</span>
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
                Why Tax Planning Matters
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Proactive tax planning is the key to minimizing your tax burden and 
                maximizing your wealth. Don't wait until tax season to think about taxes.
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
              className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-bold mb-6">
                Tax Planning Process
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Initial Assessment</h4>
                    <p className="text-green-100 text-sm">Comprehensive review of your current tax situation and financial goals</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Strategy Development</h4>
                    <p className="text-green-100 text-sm">Custom tax planning strategies tailored to your specific situation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Implementation</h4>
                    <p className="text-green-100 text-sm">Execute strategies and monitor progress throughout the year</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Ongoing Review</h4>
                    <p className="text-green-100 text-sm">Regular reviews and adjustments as tax laws and your situation change</p>
                  </div>
                </div>
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
              Tax Planning Investment
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Invest in your financial future with strategic tax planning services.
            </p>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white">
              <div className="text-6xl font-bold mb-4">$200+</div>
              <div className="text-xl mb-6">Starting Price for Tax Planning</div>
              <div className="text-green-100 mb-8">
                Includes comprehensive tax strategy, quarterly reviews, and ongoing support
              </div>
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Your Tax Planning Quote
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
              Ready to Optimize Your Tax Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free tax planning consultation and start 
              maximizing your wealth through strategic tax optimization.
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

export default TaxPlanningStrategy; 