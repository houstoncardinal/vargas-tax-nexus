import { Calculator, Shield, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/tax-hero-image.jpg";

const HeroSection = () => {
  const features = [
    {
      icon: Calculator,
      text: "Expert Tax Calculations"
    },
    {
      icon: Shield,
      text: "100% Secure & Confidential"
    },
    {
      icon: TrendingUp,
      text: "Maximize Your Refund"
    },
    {
      icon: Users,
      text: "Personalized Service"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional tax preparation office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Professional Tax
              <span className="text-secondary block">
                Preparation Services
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Maximize your tax refund with expert preparation services. 
              Our certified professionals ensure accuracy, compliance, 
              and personalized attention for individuals and businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4 shadow-glow"
              >
                Schedule Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
              >
                Learn More
              </Button>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2 group-hover:bg-secondary transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm text-white/80 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="lg:justify-self-end">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-elegant border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Choose Vargas Tax?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Average Refund Increase</span>
                  <span className="text-3xl font-bold text-secondary">27%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Years of Experience</span>
                  <span className="text-3xl font-bold text-secondary">15+</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Satisfied Clients</span>
                  <span className="text-3xl font-bold text-secondary">5,000+</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Success Rate</span>
                  <span className="text-3xl font-bold text-secondary">99.8%</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-secondary/20 rounded-lg border border-secondary/30">
                <p className="text-white text-center font-medium">
                  "Professional, reliable, and got me the biggest refund ever!"
                </p>
                <p className="text-white/70 text-center text-sm mt-2">
                  - Maria Rodriguez, Satisfied Client
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;